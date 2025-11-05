import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center  rounded-lg transition-transform duration-300 "
            aria-label="Go to home page"
          >
            <img 
              src="./logo.png" 
              alt="Company Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 ${
                  currentPage === item.page
                    ? 'text-[#f8b400] '
                    : isScrolled
                    ? 'text-[#004445] hover:text-[#f8b400] hover:bg-[#f8b400]/5'
                    : 'text-white hover:text-[#f8b400] '
                }`}
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => handleNavigate('contact')}
            className="hidden md:flex items-center justify-center bg-[#f8b400] text-[#004445] px-5 lg:px-6 py-2 lg:py-2.5 rounded-2xl font-medium text-sm lg:text-base hover:bg-[#e0a300]  focus:outline-none focus:ring-2 focus:ring-[#f8b400] focus:ring-offset-2 whitespace-nowrap"
          >
            Get Free Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300  ${
              isScrolled ? 'text-[#004445]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 md:hidden z-40 mt-16"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu Content */}
            <div className="md:hidden absolute left-4 right-4 mt-4 py-2 bg-white rounded-xl shadow-2xl z-50 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`text-left px-6 py-3.5 transition-all duration-200 ${
                      currentPage === item.page
                        ? 'text-[#f8b400] bg-[#f8b400]/10 font-semibold'
                        : 'text-[#004445] hover:text-[#f8b400] hover:bg-gray-50'
                    } ${index === 0 ? 'rounded-t-xl' : ''} ${
                      index === navItems.length - 1 ? 'rounded-b-xl' : ''
                    }`}
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              <div className="px-4 pt-4 pb-2 border-t border-gray-100">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="w-full bg-[#f8b400] text-[#004445] px-6 py-3 rounded-2xl font-semibold hover:bg-[#e0a300] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#f8b400] focus:ring-offset-2"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
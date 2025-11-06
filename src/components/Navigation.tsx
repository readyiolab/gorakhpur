import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <NavLink
            to="/"
            className="flex items-center rounded-lg transition-transform duration-300"
            aria-label="Go to home page"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src="./logo.png" 
              alt="LB Interiors Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 ${
                    isActive
                      ? 'text-[#f8b400]'
                      : isScrolled
                      ? 'text-[#004445] hover:text-[#f8b400] hover:bg-[#f8b400]/5'
                      : 'text-white hover:text-[#f8b400]'
                  }`
                }
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <NavLink
            to="/contact"
            className="hidden md:flex items-center justify-center bg-[#f8b400] text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-2xl font-medium text-sm lg:text-base  "
          >
            Call Now
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-[#f8b400]' : 'text-white'
            }`}
            onClick={handleMobileMenuToggle}
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
              onClick={handleMobileMenuToggle}
              aria-hidden="true"
            />
            
            {/* Menu Content */}
            <div className="md:hidden absolute left-4 right-4 mt-4 py-2 bg-white rounded-xl shadow-2xl z-50 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-left px-6 py-3.5 transition-all duration-200 ${
                        isActive
                          ? 'text-[#f8b400] bg-[#f8b400]/10 font-semibold'
                          : 'text-[#004445] hover:text-[#f8b400] hover:bg-gray-50'
                      } ${index === 0 ? 'rounded-t-xl' : ''} ${
                        index === navItems.length - 1 ? 'rounded-b-xl' : ''
                      }`
                    }
                    onClick={handleMobileMenuToggle}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              
              <div className="px-4 pt-4 pb-2 border-t border-gray-100">
                <NavLink
                  to="/contact"
                  className="w-full bg-[#f8b400] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={handleMobileMenuToggle}
                >
                  Call Now
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
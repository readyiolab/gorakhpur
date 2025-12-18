import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const openWhatsApp = () => {
    const msg = "Hi LB Interiors! I'm interested in your interior design services. Can you help me with a consultation?";
    window.open(`https://wa.me/919820995913?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const callNow = () => window.location.href = 'tel:+919820995913';

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-3  flex items-center justify-between">

          {/* Logo - Bigger on Desktop, Smaller on Mobile */}
          <NavLink to="/" onClick={closeMenu}>
            <img
              src="./logo.png"
              alt="LB Interiors"
              className="h-16 md:h-36 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium text-lg transition-colors ${
                    isActive
                      ? 'text-[#f8b400]'
                      : isScrolled
                      ? 'text-[#004445] hover:text-[#f8b400]'
                      : 'text-white hover:text-[#f8b400]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Desktop Call Button */}
            <button
              onClick={callNow}
              className="bg-[#f8b400] text-[#004445] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#e5a800] transition"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-[#004445]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu - Slide from Left */}
      <div className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src="./logo.png"
            alt="LB Interiors"
            className="h-12 w-auto object-contain"
          />
          <button
            onClick={closeMenu}
            className="p-2 text-[#004445] hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-6 py-4 text-lg font-medium transition-colors border-l-4 ${
                  isActive
                    ? 'text-[#f8b400] bg-[#f8b400]/10 border-[#f8b400]'
                    : 'text-[#004445] hover:bg-gray-50 border-transparent'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Call Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <button
            onClick={() => {
              callNow();
              closeMenu();
            }}
            className="w-full bg-[#f8b400] text-[#004445] px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#e5a800] transition shadow-lg"
          >
            <Phone size={22} />
            Call Now
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Button (Mobile Only) */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-40 md:hidden"
        aria-label="Open WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </>
  );
}
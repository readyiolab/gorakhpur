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
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* BIGGER LOGO */}
          <NavLink to="/" onClick={closeMenu}>
            <img
              src="./logo.png"
              alt="LB Interiors"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
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

            {/* DESKTOP BUTTON — CHANGED TO "CALL NOW" */}
            <button
              onClick={callNow}
              className="bg-[#f8b400] text-[#004445] px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-[#e5a800] transition"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">Call Now</span>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          <div className="fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden md:hidden">
            <div className="py-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-[#f8b400] bg-[#f8b400]/10'
                        : 'text-[#004445] hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}

      {/* FIXED CALL NOW BUTTON (Mobile Only) */}
      <button
        onClick={callNow}
        className="fixed bottom-24 right-5 bg-[#f8b400] text-[#004445] p-4 rounded-full shadow-xl hover:scale-110 transition z-40 md:hidden"
      >
        <Phone size={26} />
      </button>

      {/* WhatsApp Floating Button (Mobile Only) */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-40 md:hidden"
      >
        <MessageCircle size={30} />
      </button>
    </>
  );
}

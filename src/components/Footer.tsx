import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004445] text-white relative">
     

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center mb-4">
              <img 
                src="./logo.png" 
                alt="LB Interiors Logo" 
                className="h-10 w-auto object-contain"
              />
            </NavLink>
            <p className="text-gray-300 mb-4 leading-relaxed">
              LB Interiors - Your trusted partner for premium interior design solutions in Gorakhpur and Lucknow. Transforming spaces with creativity and excellence.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/_lbinteriors_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-[#f8b400] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/lb-interiors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-[#f8b400] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583248502163"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-[#f8b400] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f8b400]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="hover:text-[#f8b400] transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f8b400]">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'Residential Interiors',
                'Office Design',
                'Modular Kitchens',
                'Restaurant & Retail',
                'Turnkey Solutions',
              ].map((service) => (
                <li key={service}>
                  <NavLink
                    to="/services"
                    className="hover:text-[#f8b400] transition-colors"
                  >
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f8b400]">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#f8b400]" />
                <a href="tel:+919820995913" className="hover:text-[#f8b400] transition-colors">
                  +91 98209 95913
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#f8b400]" />
                <a href="mailto:info@lbinteriors.com" className="hover:text-[#f8b400] transition-colors">
                  info@lbinteriors.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#f8b400] mt-1" />
                <div>
                  <p className="font-medium">Gorakhpur Branch:</p>
                  <p className="text-sm">Office No.5, House No. 806/A, Vishwakarma Sadan, Ashok Nagar, Basharatpur, Gorakhpur – 273004</p>
                  <p className="text-sm mt-2">Lucknow Office: Aligarh, Lucknow, Uttar Pradesh 226024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} LB Interiors. All rights reserved. | Designed with ❤️ in Gorakhpur</p>
        </div>
      </div>
    </footer>
  );
}
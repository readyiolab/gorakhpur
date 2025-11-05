import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#004445] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              LB <span className="text-[#f8b400]">Interiors</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming spaces into masterpieces. Gorakhpur's most trusted interior design company.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f8b400] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#f8b400] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#f8b400] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f8b400]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-gray-300 hover:text-[#f8b400] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f8b400]">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Design</li>
              <li>Office Interiors</li>
              <li>Restaurant Design</li>
              <li>Modular Kitchens</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f8b400]">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-[#f8b400]" />
                <span>Gorakhpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-[#f8b400]" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-[#f8b400]" />
                <span>info@lbinteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2c786c] pt-8 text-center text-gray-400">
          <p>&copy; 2025 LB Interiors. All rights reserved. | Best Interior Designers in Gorakhpur</p>
        </div>
      </div>
    </footer>
  );
}

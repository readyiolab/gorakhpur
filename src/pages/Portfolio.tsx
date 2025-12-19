import { useState, useRef } from 'react';
import { ArrowRight, Home, Building2, Utensils, ChefHat } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const portfolioRef = useRef<HTMLDivElement>(null);
  const portfolioVisible = useScrollAnimation(portfolioRef);

  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'residential', label: 'Homes & Apartments', icon: Home },
    { id: 'office', label: 'Offices', icon: Building2 },
    { id: 'commercial', label: 'Restaurants & Retail', icon: Utensils },
    { id: 'kitchen', label: 'Modular Kitchens', icon: ChefHat },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern 3BHK Apartment',
      category: 'residential',
      location: 'Civil Lines, Gorakhpur',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Contemporary design with warm tones and smart storage solutions',
    },
    {
      id: 2,
      title: 'Luxury Villa Interior',
      category: 'residential',
      location: 'Betiahata, Gorakhpur',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Opulent living spaces with premium finishes and elegant aesthetics',
    },
    {
      id: 3,
      title: 'Corporate Office Redesign',
      category: 'office',
      location: 'Bank Road, Gorakhpur',
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional workspace designed for productivity and collaboration',
    },
    {
      id: 4,
      title: 'Tech Startup Office',
      category: 'office',
      location: 'Rapti Nagar, Gorakhpur',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Vibrant and creative office space with modern amenities',
    },
    {
      id: 5,
      title: 'Fine Dining Restaurant',
      category: 'commercial',
      location: 'Golghar, Gorakhpur',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated ambiance with perfect lighting and seating arrangements',
    },
    {
      id: 6,
      title: 'Boutique Retail Store',
      category: 'commercial',
      location: 'Golghar Market, Gorakhpur',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eye-catching retail design optimized for customer experience',
    },
    {
      id: 7,
      title: 'Contemporary Modular Kitchen',
      category: 'kitchen',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sleek L-shaped kitchen with smart storage and premium appliances',
    },
    {
      id: 8,
      title: 'Island Kitchen Design',
      category: 'kitchen',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious kitchen with island counter and modern fixtures',
    },
    {
      id: 9,
      title: 'Cozy Living Room',
      category: 'residential',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm and inviting living space with custom furniture',
    },
    {
      id: 10,
      title: 'Minimalist Bedroom Suite',
      category: 'residential',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Peaceful bedroom design with clean lines and neutral palette',
    },
    {
      id: 11,
      title: 'Cafe Interior',
      category: 'commercial',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Trendy cafe design with Instagram-worthy aesthetics',
    },
    {
      id: 12,
      title: 'Co-working Space',
      category: 'office',
      location: 'Gorakhpur',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Flexible workspace with collaborative and private areas',
    },
  ];

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-[#004445] to-[#2c786c] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Interior Design <span className="text-[#f8b400]">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our collection of beautifully designed homes, offices, and commercial spaces
          </p>
        </div>
      </section>

      <section className="py-12 bg-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center ${
                  activeCategory === category.id
                    ? 'bg-[#f8b400] text-[#004445] shadow-lg transform scale-105'
                    : 'bg-[#faf5e4] text-[#004445] hover:bg-[#f8b400] hover:text-[#004445]'
                }`}
              >
                {category.icon && <category.icon size={20} className="mr-2" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={portfolioRef} className="py-20 bg-[#faf5e4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl overflow-hidden  ${
                  portfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover "
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-[#f8b400] text-[#004445] px-6 py-2 rounded-2xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Get Similar Design
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-sm text-black mb-3 font-medium">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-3 sm:mb-4">
        <span className="bg-[#004445] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
          Our Highlights
        </span>
      </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#004445] mb-6">Featured Project Highlights</h2>
            <p className="text-xl text-gray-600 mb-12">
              Each project showcases our expertise in space planning, color balance, and material selection
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#faf5e4] p-8 rounded-2xl">
                <div className="text-3xl font-medium text-[#f8b400] mb-2">900+</div>
                <div className="text-[#004445] font-semibold">Projects Delivered</div>
              </div>
              <div className="bg-[#faf5e4] p-8 rounded-lg">
                <div className="text-3xl font-medium text-[#f8b400] mb-2">810+</div>
                <div className="text-[#004445] font-semibold">Happy Clients</div>
              </div>
              <div className="bg-[#faf5e4] p-8 rounded-lg">
                <div className="text-3xl font-medium text-[#f8b400] mb-2">24+</div>
                <div className="text-[#004445] font-semibold">Years Experience</div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#f8b400] text-[#004445] px-10 py-4 rounded-2xl font-semibold text-md  inline-flex items-center"
            >
              Discuss Your Design Idea 
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2c786c] to-[#004445] text-white m-10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your space into something extraordinary. Book your free consultation today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#f8b400] text-[#004445] px-10 py-4 rounded-2xl font-medium text-md "
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

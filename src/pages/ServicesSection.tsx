import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Sample images (replace with your own high-quality images)
const services = [
  {
    title: 'Residential Interiors',
    description: 'Transform your home into a beautiful sanctuary with our expert residential design services.',
    gradient: 'from-blue-500 to-cyan-600',
    image: 'https://cdn.home-designing.com/wp-content/uploads/2018/01/Sophisticated-home-decor.jpg',
  },
  {
    title: 'Office Interiors',
    description: 'Create productive and inspiring workspaces that enhance business success.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/05/Contemporary-executive-office-design-by-Decorilla-1024x574.jpeg?width=900',
  },
  {
    title: 'Restaurant & Retail',
    description: 'Design captivating commercial spaces that attract and engage customers.',
    gradient: 'from-orange-500 to-red-600',
    image: 'https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/odudmi9ncfezv9rszqbu',
  },
  {
    title: 'Modular Kitchens',
    description: 'Modern, space-efficient kitchens combining beauty with functionality.',
    gradient: 'from-green-500 to-teal-600',
    image: 'https://i.ytimg.com/vi/Kqaly89f1dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOmGRCsBS1_qaN9Q5CDkqIGkQ1Uw',
  },
];

export default function ServicesSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="bg-[#004445] text-white px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004445]">
            Comprehensive Interior Design Services
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end interior solutions tailored to elevate your lifestyle
          </p>
        </div>

        {/* Alternating Grid */}
        <div ref={servicesRef} className="space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center opacity-0 translate-y-10 transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 group">
                  <div className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${service.gradient} p-1`}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-5`}>
                      <div className="w-7 h-7 bg-white rounded"></div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#004445] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button
                      onClick={() => onNavigate('services')}
                      className="inline-flex items-center text-[#2c786c] font-semibold hover:text-[#f8b400] transition-all duration-300 group text-base"
                    >
                      Learn More
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
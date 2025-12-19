import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Building2, Utensils, ChefHat, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesVisible = useScrollAnimation(servicesRef);

  const services = [
    {
      icon: Home,
      title: 'Residential Interior Design',
      description:
        'Transform your home into a beautiful, functional space that reflects your personality. Our team specializes in bedroom, living room, and apartment interiors, ensuring perfect comfort and design balance.',
      features: [
        'Complete home interior design',
        'Bedroom & living room design',
        '3BHK & apartment interiors',
        'Custom furniture design',
        'Space planning & optimization',
        'Color consultation',
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Get Free Home Design Quote',
    },
    {
      icon: Building2,
      title: 'Office Interior Design',
      description:
        'Enhance productivity and creativity with professionally designed office interiors. We provide complete design and execution services for startups, corporations, and co-working spaces.',
      features: [
        'Corporate office design',
        'Co-working space interiors',
        'Conference room design',
        'Ergonomic workspace planning',
        'Brand-aligned aesthetics',
        'Sustainable office solutions',
      ],
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Book Office Design Consultation',
    },
    {
      icon: Utensils,
      title: 'Restaurant & Retail Interior Design',
      description:
        'Create captivating and functional designs for restaurants, cafes, and retail stores. Our expert designs focus on customer experience, layout optimization, and ambiance creation.',
      features: [
        'Restaurant interior design',
        'Cafe & bar design',
        'Retail store layouts',
        'Customer flow optimization',
        'Lighting & ambiance design',
        'Brand experience creation',
      ],
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'View Our Commercial Projects',
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchen Design',
      description:
        'Experience modern and space-efficient kitchen layouts with high-quality materials and sleek finishes. We design modular kitchens that combine beauty with functionality.',
      features: [
        'L-shaped & U-shaped kitchens',
        'Island & parallel layouts',
        'Premium materials & finishes',
        'Smart storage solutions',
        'Appliance integration',
        'Easy maintenance design',
      ],
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Get Modular Kitchen Quote',
    },
    {
      icon: Package,
      title: 'Turnkey Interior Solutions',
      description:
        'We manage your entire project from start to finish, including design, procurement, and installation. LB Interiors ensures timely delivery and complete quality assurance.',
      features: [
        'End-to-end project management',
        'Design to execution',
        'Material procurement',
        'Quality control & inspection',
        'Timely project delivery',
        'Post-installation support',
      ],
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Book a Turnkey Project Call',
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Interior Design Services in Gorakhpur | LB Interiors</title>
        <meta
          name="description"
          content="LB Interiors provides residential, office, restaurant, and modular kitchen interior design services in Gorakhpur. Book your consultation today."
        />
        <meta
          name="keywords"
          content="residential interior designers, modular kitchen design, office interior design company, restaurant interior designers, turnkey interior solutions"
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage:
              'ur[](https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#004445]/95 via-[#004445]/80 to-[#2c786c]/70"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#f8b400]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-[#f8b400]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white py-20 my-10">
          <div className="max-w-4xl animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              Comprehensive Interior Design{' '}
              <span className="text-[#f8b400] relative inline-block">
                Services
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 5 150 5 198 10" stroke="#f8b400" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto lg:mx-0">
              End-to-end interior solutions tailored to elevate your lifestyle and business
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="w-full sm:w-auto bg-[#f8b400] text-[#004445] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#e0a300] transition-all flex items-center justify-center group"
              >
                Explore Services
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
              <NavLink
                to="/portfolio"
                className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-white hover:text-[#004445] transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </NavLink>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">900+</span>
                <span className="text-white text-xs sm:text-sm ml-2">Projects Delivered</span>
              </div>
              <div className="backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">24+</span>
                <span className="text-white text-xs sm:text-sm ml-2">Years Experience</span>
              </div>
              <div className="backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">100%</span>
                <span className="text-white text-xs sm:text-sm ml-2">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-medium text-[#004445] mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-[#2c786c] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <NavLink
                    to="/contact"
                    className="bg-[#f8b400] text-[#004445] px-8 py-3 rounded-2xl font-semibold inline-flex items-center"
                  >
                    {service.cta}
                  </NavLink>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf5e4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#004445] mb-8 text-center">
              Our Service Guarantee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Premium Quality Materials',
                  description: 'We source only the finest materials and finishes for lasting beauty and durability.',
                },
                {
                  title: 'Experienced Team',
                  description: '24+ years of expertise in residential and commercial interior design.',
                },
                {
                  title: 'Timely Delivery',
                  description: 'We respect your time and ensure projects are completed on schedule.',
                },
                {
                  title: 'Post-Installation Support',
                  description: 'Our commitment continues even after project completion with ongoing support.',
                },
              ].map((guarantee, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-[#004445] mb-3">{guarantee.title}</h3>
                  <p className="text-gray-700">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2c786c] to-[#004445] text-white m-10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Let's Discuss Your Project</h2>
            <p className="text-xl mb-8">
              Whether it's a home, office, or commercial space, we're ready to bring your vision to life. Get your free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink
                to="/contact"
                className="bg-[#f8b400] text-[#004445] px-10 py-4 rounded-2xl font-semibold text-md"
              >
                Get Free Consultation
              </NavLink>
              <NavLink
                to="/portfolio"
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold text-md hover:bg-white hover:text-[#004445] transition-all duration-300"
              >
                View Our Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
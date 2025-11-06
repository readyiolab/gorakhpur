import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const statsVisible = useScrollAnimation(statsRef);
  const servicesVisible = useScrollAnimation(servicesRef);
  const whyChooseVisible = useScrollAnimation(whyChooseRef);
  const testimonialsVisible = useScrollAnimation(testimonialsRef);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '450+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  const services = [
    {
      title: 'Residential Interiors',
      description: 'Transform your home into a beautiful sanctuary with our expert residential design services.',
      image: 'https://cdn.home-designing.com/wp-content/uploads/2018/01/Sophisticated-home-decor.jpg',
    },
    {
      title: 'Office Interiors',
      description: 'Create productive and inspiring workspaces that enhance business success.',
      image: 'https://cdn.decorilla.com/online-decorating/wp-content/uploads/2024/05/Contemporary-executive-office-design-by-Decorilla-1024x574.jpeg?width=900',
    },
    {
      title: 'Restaurant & Retail',
      description: 'Design captivating commercial spaces that attract and engage customers.',
      image: 'https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/odudmi9ncfezv9rszqbu',
    },
    {
      title: 'Modular Kitchens',
      description: 'Modern, space-efficient kitchens combining beauty with functionality.',
      image: 'https://i.ytimg.com/vi/Kqaly89f1dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOmGRCsBS1_qaN9Q5CDkqIGkQ1Uw',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      project: '3BHK Home Interior',
      text: 'LB Interiors transformed our house into a dream home. Their attention to detail and understanding of our needs was exceptional.',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      project: 'Office Design',
      text: 'Professional, creative, and timely. The office interior has boosted our team productivity and morale significantly.',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      project: 'Restaurant Interior',
      text: 'The ambiance they created for our restaurant is absolutely stunning. Customer feedback has been overwhelmingly positive.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Best Interior Designers in Gorakhpur | LB Interiors</title>
        <meta
          name="description"
          content="LB Interiors offers premium interior design services in Gorakhpur for homes, offices, and retail spaces. Book your free consultation today."
        />
        <meta
          name="keywords"
          content="best interior designers in gorakhpur, interior designer near me, interior decorator near me, turnkey interior solutions, gorakhpur interior"
        />
      </Helmet>

      {/* Hero Section */}
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
          <div className="max-w-4xl text-center lg:text-left animate-fadeIn">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              Transform Your Space with the{' '}
              <span className="text-[#f8b400] relative inline-block">
                Best Interior Designers
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 5 150 5 198 10" stroke="#f8b400" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              in Gorakhpur
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto lg:mx-0">
              From concept to creation, we design stunning homes, offices, and retail spaces with a perfect balance of
              luxury and functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="w-full sm:w-auto bg-[#f8b400] text-[#004445] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#e0a300] transition-all flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </NavLink>
              <NavLink
                to="/portfolio"
                className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-white hover:text-[#004445] transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </NavLink>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                  <span className="text-[#f8b400] font-medium text-lg sm:text-xl">{stat.number}</span>
                  <span className="text-white text-xs sm:text-sm ml-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#faf5e4] to-[#f5efd4] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#f8b400]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#004445]/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="text-4xl sm:text-4xl lg:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-br from-[#f8b400] to-[#e0a300] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#004445] text-sm sm:text-base lg:text-lg font-semibold text-center">{stat.label}</div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f8b400]/10 rounded-full blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#004445] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#004445] mb-3 sm:mb-4 px-4">
              Comprehensive Interior Design Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              End-to-end interior solutions tailored to elevate your lifestyle
            </p>
          </div>
          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white/15 p-5 rounded-2xl hover:shadow-2xl transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-2 h-full flex flex-col">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 rounded-2xl"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-[#004445] mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">{service.description}</p>
                  <NavLink
                    to="/services"
                    className="text-[#2c786c] font-semibold hover:text-[#f8b400] transition-colors flex items-center group text-sm sm:text-base mt-auto"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyChooseRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#004445] via-[#2c786c] to-[#004445] text-white relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#f8b400]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#f8b400]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-gradient-to-br from-[#004445] via-[#2c786c] to-[#004445] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">Why Choose LB Interiors?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light max-w-2xl mx-auto px-4">
              Your trusted partner for premium interior design in Gorakhpur
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { text: 'Expert team of designers and architects' },
              { text: 'Turnkey solutions from concept to completion' },
              { text: 'Premium quality materials and finishes' },
              { text: '15+ years of industry experience' },
              { text: 'On-time project delivery guaranteed' },
              { text: 'Personalized design consultation' },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 rounded-2xl shadow-xl ${
                  whyChooseVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#faf5e4] to-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#f8b400]/10 text-[#004445] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#004445] mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Real feedback from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f8b400]/20 ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#f8b400] fill-current" />
                  ))}
                </div>
                <div className="text-[#f8b400] text-4xl sm:text-5xl mb-3 sm:mb-4 font-serif">"</div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">{testimonial.text}</p>
                <div className="border-t-2 border-[#f8b400]/20 pt-4">
                  <p className="font-bold text-[#004445] text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2c786c] via-[#004445] to-[#2c786c] text-white relative overflow-hidden m-10 rounded-3xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f8b400] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f8b400] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
        <div className="container mx-auto px-4 testament sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200">
              Let's discuss your vision and create something extraordinary together. Get a free consultation today.
            </p>
            <NavLink
              to="/contact"
              className="bg-[#f8b400] text-[#004445] px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#e0a300] inline-flex items-center"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Target, Award, Users, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const valuesVisible = useScrollAnimation(valuesRef);
  const teamVisible = useScrollAnimation(teamRef);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To transform ordinary spaces into extraordinary environments that inspire, comfort, and reflect the unique personality of every client.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We stay ahead of design trends and incorporate cutting-edge solutions to deliver contemporary, future-ready interiors.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description:
        'We never compromise on quality. From materials to execution, every detail is meticulously crafted to perfection.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description:
        'Your vision is our priority. We listen, understand, and collaborate to bring your dream space to life.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About LB Interiors | Luxury Interior Designers in Gorakhpur</title>
        <meta
          name="description"
          content="LB Interiors is Gorakhpur’s most trusted interior design company offering luxury and turnkey interior solutions for homes and offices."
        />
        <meta
          name="keywords"
          content="best interior designers in gorakhpur, luxury interior designer, interior design company near me, interior design consultation, interior designer gorakhpur"
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
          <div className="max-w-4xl text-center lg:text-left animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
              Crafting Interiors That Reflect Your{' '}
              <span className="text-[#f8b400] relative inline-block">
                Lifestyle
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 5 150 5 198 10" stroke="#f8b400" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto lg:mx-0">
              LB Interiors - A name trusted for creative, functional, and luxury interior design in Gorakhpur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="w-full sm:w-auto bg-[#f8b400] text-[#004445] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#e0a300] transition-all flex items-center justify-center group"
              >
                Get Free Consultation
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
                View Our Work
              </NavLink>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">900+</span>
                <span className="text-white text-xs sm:text-sm ml-2">Projects</span>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">24+</span>
                <span className="text-white text-xs sm:text-sm ml-2">Years</span>
              </div>
              <div className="px-4 sm:px-6 py-2 sm:py-3">
                <span className="text-[#f8b400] font-medium text-lg sm:text-xl">100%</span>
                <span className="text-white text-xs sm:text-sm ml-2">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#004445] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  LB Interiors was founded with the vision to transform spaces into a reflection of individuality and
                  elegance. Based in Gorakhpur, we are recognized for delivering innovative and practical design
                  solutions tailored to every client's needs.
                </p>
                <p>
                  Our team of experienced residential and commercial interior designers ensures that every project is
                  completed with excellence, from concept to execution. With a focus on aesthetics, comfort, and
                  functionality, we help clients create spaces that truly inspire.
                </p>
                <p>
                  We provide full-service interior design and turnkey solutions, managing every aspect of the process so
                  you can experience a hassle-free transformation. From initial consultation to final installation, we
                  are with you every step of the way.
                </p>
              </div>
              <NavLink
                to="/portfolio"
                className="mt-8 bg-[#f8b400] text-[#004445] px-8 py-3 rounded-2xl font-semibold hover:bg-[#e0a300] transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Explore Our Work
              </NavLink>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="LB Interiors Design Studio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#f8b400] text-[#004445] p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-medium">24+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 bg-[#faf5e4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#004445] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#004445] mb-4">Our Values & Approach</h2>
            <p className="text-xl text-gray-600">What drives us to deliver excellence every single time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#f8b400] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <value.icon size={32} className="text-[#004445]" />
                </div>
                <h3 className="text-xl font-semibold text-[#004445] mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#004445] to-[#2c786c] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#004445] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  Our Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold">Our Design Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

              {/* Map items with fixed box size */}
              {[
                {
                  step: '01',
                  title: 'Consultation & Discovery',
                  description:
                    'We start by understanding your vision, lifestyle, and requirements through detailed discussions.',
                },
                {
                  step: '02',
                  title: 'Concept Development',
                  description:
                    'Our designers create initial concepts with mood boards, 3D visualizations, and material selections.',
                },
                {
                  step: '03',
                  title: 'Design Refinement',
                  description:
                    'We refine the design based on your feedback, ensuring every detail aligns with your expectations.',
                },
                {
                  step: '04',
                  title: 'Execution & Installation',
                  description:
                    'Our expert team brings the design to life with precision, quality craftsmanship, and timely delivery.',
                },
                {
                  step: '05',
                  title: 'Final Walkthrough',
                  description:
                    'We conduct a thorough inspection with you to ensure everything meets our high standards and your satisfaction.',
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="
        bg-white/10 
        backdrop-blur-sm 
        p-8 
        rounded-2xl 
        text-white 
        flex 
        flex-col 
        h-auto         
        justify-start
        shadow-xl 
        border border-white/10
      "
                >
                  <div className="text-3xl font-semibold text-[#f8b400]">{process.step}</div>
                  <h3 className="text-2xl font-semibold mt-4 mb-2">{process.title}</h3>
                  <p className="text-gray-200">{process.description}</p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8b400] m-10 rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#004445] mb-6">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-xl text-[#004445] mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Schedule your free consultation today.
          </p>
          <NavLink
            to="/contact"
            className="bg-[#004445] text-white px-10 py-4 rounded-2xl font-semibold"
          >
            Schedule a Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
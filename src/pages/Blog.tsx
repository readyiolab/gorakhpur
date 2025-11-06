import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Blog() {
  const postsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const postsVisible = useScrollAnimation(postsRef);
  const ctaVisible = useScrollAnimation(ctaRef);

  const blogPosts = [
    {
      title: 'Top 5 Modular Kitchen Designs for 2025',
      excerpt: 'Discover the latest trends in modular kitchen designs, including L-shaped layouts, smart storage, and premium finishes.',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'October 15, 2025',
      readTime: '5 min read',
    },
    {
      title: 'How to Create a Luxury Home Interior on a Budget',
      excerpt: 'Learn expert tips to achieve a luxurious look for your home without breaking the bank.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'October 10, 2025',
      readTime: '7 min read',
    },
    {
      title: 'Maximizing Small Spaces: Design Ideas for Compact Homes',
      excerpt: 'Explore creative ways to optimize space in small apartments or homes with smart design solutions.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'October 5, 2025',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <Helmet>
        <title>Interior Design Tips and Ideas | LB Interiors Gorakhpur</title>
        <meta
          name="description"
          content="Discover expert interior design tips, home décor ideas, and trends from LB Interiors’s professional designers in Gorakhpur."
        />
        <meta
          name="keywords"
          content="interior design for new homes, modular kitchen design, luxury interior designer, best interior designers in gorakhpur"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
          <div className="max-w-4xl text-center animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
              Interior Design{' '}
              <span className="text-[#f8b400] relative inline-block">
                Tips & Ideas
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 5 150 5 198 10" stroke="#f8b400" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto">
              Explore expert advice, trends, and inspiration from LB Interiors to transform your space.
            </p>
            <NavLink
              to="/contact"
              className="bg-[#f8b400] text-[#004445] px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-medium text-base sm:text-lg hover:bg-[#e0a300] inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={postsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#004445] mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest interior design trends and ideas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#004445] mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <NavLink
                    to="/contact"
                    className="text-[#2c786c] font-semibold hover:text-[#f8b400] transition-colors flex items-center"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-[#2c786c] to-[#004445] text-white m-10 rounded-2xl shadow-xl"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Inspired to Redesign Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact LB Interiors to bring these ideas to life with a personalized design consultation.
          </p>
          <NavLink
            to="/contact"
            className="bg-[#f8b400] text-[#004445] px-10 py-4 rounded-2xl font-medium text-md hover:bg-[#e0a300] transition-all duration-300"
          >
            Schedule a Free Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
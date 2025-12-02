import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    spaceType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Track conversion in Google Analytics
    if (window.gtag) {
      window.gtag('event', 'consultation_request', {
        'value': 'consultation_inquiry',
        'currency': 'INR'
      });
    }
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        spaceType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Call Handler
  const handleCall = () => {
    window.location.href = 'tel:+919820995913';
  };

  // Email Handler
  const handleEmail = () => {
    window.location.href = 'mailto:lbinteriors.in@gmail.com?subject=Interior Design Consultation - LB Interiors&body=Hi LB Interiors,%0A%0AI am interested in your interior design services. Please get back to me with more details.%0A%0AThank you!';
  };

  // WhatsApp Handler
  const handleWhatsApp = () => {
    const message = "Hi LB Interiors! I'm interested in your interior design services. Can you help me with a consultation?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919820995913?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Contact LB Interiors | Best Interior Designers in Gorakhpur</title>
        <meta
          name="description"
          content="Contact LB Interiors in Gorakhpur for residential, office, or commercial interior design. Get your free consultation today."
        />
        <meta
          name="keywords"
          content="interior designer near me, interior design consultation, best interior designers in gorakhpur, carpenter near me"
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
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight">
            Let's Design Your <span className="text-[#f8b400]">Dream Space</span> Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto lg:mx-0">
            Reach out to LB Interiors for a free consultation and personalized interior design solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-semibold text-[#004445] mb-6">Get in Touch</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                With over 24 years of experience and a 100% satisfaction rate, our design team is ready to bring your vision to life. Share your details below, and we'll connect to discuss your project.
              </p>
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Locations</h3>
                    <p className="text-gray-700 font-medium">Gorakhpur Branch:</p>
                    <p className="text-gray-700">Office No.5, House No. 806/A, Vishwakarma Sadan, Ashok Nagar, Basharatpur, Gorakhpur – 273004</p>
                    <p className="text-gray-700 font-medium mt-2">Lucknow Office:</p>
                    <p className="text-gray-700">Aligarh, Lucknow, Uttar Pradesh 226024</p>
                  </div>
                </div>

                {/* Phone - CLICKABLE */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#004445]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#004445] mb-2">Phone</h3>
                    <button
                      onClick={handleCall}
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-white  px-4 py-2 rounded-lg transition-all duration-300  font-semibold"
                    >
                      <Phone size={18} />
                      +91 98209 95913 (Tap to Call)
                    </button>
                  </div>
                </div>

                {/* Email - CLICKABLE */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#004445]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#004445] mb-2">Email</h3>
                    <button
                      onClick={handleEmail}
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-white  px-4 py-2 rounded-lg transition-all duration-300  font-semibold"
                    >
                      <Mail size={18} />
                      lbinteriors.in@gmail.com
                    </button>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Sunday: By Appointment</p>
                    <p className="text-gray-700 font-semibold text-[#f8b400] mt-1">Available 24/7 for Inquiries via WhatsApp & Email</p>
                  </div>
                </div>

                {/* Social Media & WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-[#004445]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#004445] mb-2">Connect With Us</h3>
                    <div className="flex flex-wrap gap-2">
                      
                      <a
                        href="https://www.instagram.com/_lbinteriors_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-black px-4 py-2 rounded-lg transition-all duration-300 font-semibold"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/lbinteriors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-black px-4 py-2 rounded-lg  transition-all duration-300 font-semibold"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61583248502163"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="] text-black px-4 py-2 rounded-lg  transition-all duration-300 font-semibold"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#faf5e4] p-6 rounded-lg">
                <h3 className="font-bold text-[#004445] mb-3 text-xl">Why Choose LB Interiors?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Over 24 years of experience</li>
                  <li>✓ 100% client satisfaction guaranteed</li>
                  <li>✓ Free initial consultation and site visit</li>
                  <li>✓ 3D visualization of your design</li>
                  <li>✓ Transparent pricing with no hidden costs</li>
                  <li>✓ Dedicated project manager</li>
                  <li>✓ Quality materials and timely delivery</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#faf5e4] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-[#004445] mb-6">Request a Free Consultation</h3>
              {isSubmitted ? (
                <div className="bg-[#f8b400] text-[#004445] p-8 rounded-lg text-center animate-bounce">
                  <div className="text-5xl mb-4">✓</div>
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p className="text-lg">
                    We've received your message and will get back to you within 24 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#004445] font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f8b400] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[#004445] font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f8b400] focus:outline-none transition-colors"
                      placeholder="+91 98209 95913"
                    />
                  </div>
                 
                 
                  <div>
                    <label htmlFor="message" className="block text-[#004445] font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f8b400] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f8b400] text-[#004445] py-4 rounded-2xl font-bold text-md flex items-center justify-center hover:bg-[#e0a300] transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Submit Request
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by LB Interiors regarding your project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#faf5e4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004445] mb-4">Our Service Areas</h2>
            <p className="text-xl text-gray-600">
  Our service areas: GIDA, Nanda Nagar, and nearby locations
</p>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Civil Lines',
              'Golghar',
              'Bank Road',
              'Rapti Nagar',
              'Betiahata',
              'Railway Road',
              'Medical College',
              'University Area',
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow text-center font-semibold text-[#004445] hover:bg-[#f8b400] hover:text-white transition-all duration-300 cursor-pointer"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2c786c] to-[#004445] text-white m-10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With 24+ years of experience and 100% client satisfaction, we're here to bring your vision to life. Choose your preferred way to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <button
              onClick={handleCall}
              className="bg-[#004445] text-white px-10 py-4 rounded-2xl font-medium text-md hover:bg-white hover:text-[#004445] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </button>
            
            <NavLink
              to="/portfolio"
              className="border-2 border-white text-white px-10 py-4 rounded-2xl font-medium text-md hover:bg-white hover:text-[#004445] transition-all duration-300"
            >
              View Portfolio
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
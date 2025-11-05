import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
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

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-[#004445] to-[#2c786c] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Design Your <span className="text-[#f8b400]">Dream Space</span> Together
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
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
                We're excited to bring your ideas to life. Whether it's your new home, office, or retail project, our
                design team is ready to collaborate with you. Share your details below, and we'll connect to discuss
                your vision and next steps.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Location</h3>
                    <p className="text-gray-700">Gorakhpur, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Phone</h3>
                    <p className="text-gray-700">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Email</h3>
                    <p className="text-gray-700">info@lbinteriors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f8b400] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#004445]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#004445] mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#faf5e4] p-6 rounded-lg">
                <h3 className="font-bold text-[#004445] mb-3 text-xl">Why Choose LB Interiors?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free initial consultation and site visit</li>
                  <li>✓ 3D visualization of your design</li>
                  <li>✓ Transparent pricing with no hidden costs</li>
                  <li>✓ Dedicated project manager</li>
                  <li>✓ Quality materials and timely delivery</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#faf5e4] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-[#004445] mb-6">Request a Free Consultation</h3>

              {isSubmitted ? (
                <div className="bg-[#f8b400] text-[#004445] p-8 rounded-lg text-center">
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
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#004445] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f8b400] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="spaceType" className="block text-[#004445] font-semibold mb-2">
                      Type of Space *
                    </label>
                    <select
                      id="spaceType"
                      name="spaceType"
                      value={formData.spaceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f8b400] focus:outline-none transition-colors"
                    >
                      <option value="">Select space type</option>
                      <option value="home">Home / Residential</option>
                      <option value="office">Office / Corporate</option>
                      <option value="restaurant">Restaurant / Cafe</option>
                      <option value="retail">Retail Store</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="other">Other</option>
                    </select>
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
                    className="w-full bg-[#f8b400] text-[#004445] py-4 rounded-2xl font-bold text-md  flex items-center justify-center"
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

      <section className="py-20 bg-[#faf5e4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004445] mb-4">Our Service Areas</h2>
            <p className="text-xl text-gray-600">
              Proudly serving Gorakhpur and surrounding areas with premium interior design services
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
                className="bg-white p-4 rounded-2xl shadow text-center font-semibold text-[#004445] hover:bg-[#f8b400] hover:text-[#004445] transition-all duration-300 "
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2c786c] to-[#004445] text-white m-10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our portfolio to get inspired or explore our services to see how we can help transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-[#f8b400] text-[#004445] px-10 py-4 rounded-2xl font-medium text-md hover:bg-[#e0a300] transition-all duration-300 "
            >
              View Portfolio
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white px-10 py-4 rounded-2xl font-medium text-md hover:bg-white hover:text-[#004445] transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

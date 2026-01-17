import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to partner with us? We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Shreeva Detergent</h3>
              <p className="text-gray-600 mb-8">
                Your trusted partner for premium cleaning solutions. Reach out to us
                for product inquiries, dealership opportunities, or bulk orders.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#02CF9C' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#02CF9C' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-gray-600">info@shreevadetergent.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#02CF9C' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-gray-600">Surat, Gujarat, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#d1d5db' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#02CF9C';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 207, 156, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#d1d5db' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#02CF9C';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 207, 156, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: '#d1d5db' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#02CF9C';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 207, 156, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#02CF9C' }}
                  onMouseEnter={(e) => !submitted && (e.currentTarget.style.backgroundColor = '#01b589')}
                  onMouseLeave={(e) => !submitted && (e.currentTarget.style.backgroundColor = '#02CF9C')}
                  disabled={submitted}
                >
                  {submitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
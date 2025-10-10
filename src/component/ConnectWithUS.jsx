"use client";
import { useState } from "react";
import Image from "next/image";

const ConnectWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0F1417] overflow-hidden texture-overlay">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-white rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full opacity-15"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* Left Side - iPhone Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone Image */}
              <div className="relative">
                <Image
                  width={628}
                  height={981}
                  src="/connectwithusphone.png"
                  alt="TrustKeeper iPhone App"
                  className="max-w-full h-auto filter drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Background Effect */}
              <div className="absolute -bottom-10 -left-10 w-40 h-20 bg-gray-800/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-16 bg-gray-700/40 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="text-white">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-5xl lg:text-8xl font-serif font-bold leading-tight">
                  Connect
                  <br />
                  With Us
                </h2>
                <p className="text-white text-2xl font-poppins leading-relaxed">
                  Our Mission Is To Make Finance More Accessible,
                  <br />
                  Transparent, And Secure For Everyone.
                </p>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 form-input-glow"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium"
                  >
                    Email Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 form-input-glow"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm font-medium"
                  >
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-vertical"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-400/50 disabled:cursor-not-allowed text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25 disabled:hover:transform-none disabled:hover:shadow-none"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  {isSubmitting ? (
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-cyan-400"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowSuccessModal(false);
            }
          }}
        >
          <div 
            className="bg-gradient-to-br from-[#0F1417] to-[#1a1f24] border border-cyan-400/30 rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 z-0">
              <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="absolute top-8 right-6 w-1 h-1 bg-cyan-400 rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full"></div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-4 relative z-20">
              <h3 className="text-2xl font-bold text-white mb-2">
                Request Received!
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Thank you for contacting TrustKeeper. We have received your message and will connect with you shortly.
              </p>
              <p className="text-cyan-400 text-sm">
                Our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Got it button clicked!', showSuccessModal);
                  setShowSuccessModal(false);
                }}
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25 cursor-pointer relative z-20"
                type="button"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConnectWithUs;

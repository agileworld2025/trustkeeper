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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                  className="group flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  <span>Submit</span>
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ConnectWithUs;

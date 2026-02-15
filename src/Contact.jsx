// src/Contact.jsx
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    message: "" 
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  // Generate animated stars
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 1.5 + 0.5   // tiny dots
  }));

  const socialMedia = [
    { icon: FaFacebookF, color: "from-blue-500 to-blue-700", label: "Facebook" },
    { icon: FaTwitter, color: "from-blue-400 to-cyan-500", label: "Twitter" },
    { icon: FaInstagram, color: "from-pink-500 to-purple-600", label: "Instagram" },
    { icon: FaLinkedinIn, color: "from-blue-600 to-blue-800", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      
      {/* Rotating Purple Circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Secondary rotating circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-blue-500/5 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Animated Sparkle/Stars - sprinkling effect */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)'

            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content - Starting directly with Contact Us */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Us Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            <span className="relative">
              <span className="text-white">Contact Us</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent 
                    blur-sm opacity-70"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* CENTERED Contact Form with Neon Border */}
        <div className="flex justify-center mb-20">
          {/* Outer container for the neon border effect */}
          <div className="relative w-full max-w-2xl">
            {/* Moving Neon Border Effect */}
            <div className="absolute -inset-1 rounded-2xl overflow-hidden">
              {/* Top border animation */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(to right, transparent, #a855f7, transparent)',
                    'linear-gradient(to right, transparent, #3b82f6, transparent)',
                    'linear-gradient(to right, transparent, #a855f7, transparent)',
                  ],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Right border animation */}
              <motion.div
                className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
                    'linear-gradient(to bottom, transparent, #a855f7, transparent)',
                    'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
                  ],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
              
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(to right, transparent, #3b82f6, transparent)',
                    'linear-gradient(to right, transparent, #a855f7, transparent)',
                    'linear-gradient(to right, transparent, #3b82f6, transparent)',
                  ],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
              
              {/* Left border animation */}
              <motion.div
                className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                animate={{
                  background: [
                    'linear-gradient(to bottom, transparent, #a855f7, transparent)',
                    'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
                    'linear-gradient(to bottom, transparent, #a855f7, transparent)',
                  ],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5
                }}
              />
              
              {/* Glow effect around the border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-50"></div>
            </div>

            {/* Main Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative z-10"
            >
              <h3 className="text-2xl font-bold mb-2 text-center">Send us a Message</h3>
              <p className="text-gray-300 mb-6 text-center">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 resize-none transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 relative overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <FiSend className="w-4 h-4 relative z-10" />
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  We'll never share your information with third parties.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 CONTACT BOXES - IMPROVED LAYOUT */}
        {/* Hover Cards with Minimal Border */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mb-20"
>
  <div className="grid md:grid-cols-2 gap-6">
    {/* Email */}
    <div className="p-4 hover:bg-white/5 transition-all duration-300 rounded-lg hover:border-l-2 hover:border-l-purple-500">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg">
          <FiMail className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 text-white">Email Us</h3>
          <a 
            href="mailto:info@aioon.sa" 
            className="text-gray-300 hover:text-purple-300 transition-colors block"
          >
            info@aioon.sa
          </a>
          <p className="text-sm text-purple-300 mt-1">We'll respond within 24 hours</p>
        </div>
      </div>
    </div>

    {/* Phone */}
    <div className="p-4 hover:bg-white/5 transition-all duration-300 rounded-lg hover:border-l-2 hover:border-l-blue-500">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
          <FiPhone className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 text-white">Call Us</h3>
          <a 
            href="tel:+966535141447" 
            className="text-gray-300 hover:text-blue-300 transition-colors block"
          >
            +966 53 514 1447
          </a>
          <a 
            href="tel:+966535090840" 
            className="text-gray-300 hover:text-blue-300 transition-colors block"
          >
            +966 53 509 0840
          </a>
        </div>
      </div>
    </div>

    {/* Address */}
    <div className="p-4 hover:bg-white/5 transition-all duration-300 rounded-lg hover:border-l-2 hover:border-l-purple-500">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
          <FiMapPin className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1 text-white">Address</h3>
          <p className="text-gray-300">Ar Rabwah Dist. Abi Al Fath Al Kateb</p>
          <p className="text-gray-300">Riyadh, Saudi Arabia</p>
        </div>
      </div>
    </div>

    {/* Business Hours - Simplified */}
    {/* Business Hours - Inline with Colon */}
<div className="p-4 hover:bg-white/5 transition-all duration-300 rounded-lg hover:border-l-2 hover:border-l-purple-500">
  <div className="flex items-start gap-4">
    <div className="p-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg">
      <FiClock className="w-5 h-5 text-purple-400" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold mb-2 text-white">Business Hours</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-gray-300">Sunday - Thursday</span>
        <span className="text-purple-300 font-medium">9:00 AM - 6:00 PM</span>
      </div>
    </div>
  </div>
</div>
  </div>
</motion.div>

        {/* Social Media Section with ORIGINAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/10 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Connect With Us</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest news, updates, and insights about AI automation and digital transformation.
          </p>
          
          <div className="flex justify-center flex-wrap gap-6">
            {socialMedia.map((social, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-full`}></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`relative p-4 bg-gradient-to-br ${social.color} rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.div>
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm mt-8">
            AIOON Technologies - Driving digital transformation in alignment with Saudi Vision 2030
          </p>
        </motion.div>

        {/* CLEANED FOOTER - Simple and minimal */}
        <footer className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AIOON
              </div>
              <p className="text-gray-400 text-sm">
                Automated Lead Generation & Intelligent Automation for Modern Businesses
              </p>
            </div>
            
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} AIOON Technologies. All rights reserved.
            </div>
          </div>
          
          {/* Simple contact info in footer */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Riyadh, Saudi Arabia • 
                <a href="mailto:info@aioon.sa" className="hover:text-purple-300 transition-colors"> info@aioon.sa</a> • 
                <a href="tel:+966535141447" className="hover:text-purple-300 transition-colors"> +966 53 514 1447</a>
              </p>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
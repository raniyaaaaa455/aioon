// src/pages/ERP.jsx
import React from "react";
import { 
  FiArrowRight,
  FiCheckCircle,
  FiUsers,
  FiPackage,
  FiBarChart2,
  FiFileText,
  FiPrinter,
  FiHome,
  FiTruck,
  FiDollarSign,
  FiCreditCard,
  FiHardDrive,
  FiGrid,
  FiTrendingUp,
  FiShield,
  FiAward,
  FiStar,
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";
import { 
  FaBrain,
  FaHeadset,
  FaRocket,
  FaCrown
} from "react-icons/fa";
import { motion } from "framer-motion";
import erp1Image from "./assets/erp1.png";
import { Link } from 'react-router-dom';

function ERP() {
  // Generate animated stars
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 1.5 + 0.5
  }));

  // WhatsApp configuration
  const whatsappNumber = "966535141447"; // Saudi Arabia number
  const whatsappMessage = "Hello! I'm interested in booking a demo for your ERP solution. Can you please provide more information?";

  // Service data
  const service = {
    id: 1,
    title: "Enterprise Resource Planning",
    subtitle: "ERP",
    description: "Eliminate operational silos and unlock data-driven insights. Manage your capital, people, and processes from a single, integrated command center.",
    gradient: "from-[#dc2626] to-[#ef4444]",
    imageUrl: erp1Image,
    fullDescription: "Unifying Your Business Operations for Scalable Growth. In today's fast-paced market, relying on disconnected spreadsheets and legacy software creates data silos that stifle innovation. Our Enterprise Resource Planning (ERP) solutions bridge these gaps by consolidating your critical business functions into one seamless, intelligent ecosystem. We help organizations transition from fragmented tools to a single 'source of truth.' By integrating Finance, HR, Inventory, Sales, and Manufacturing, we empower your leadership team to make data-driven decisions with absolute confidence. Our ERP systems go beyond simple record-keeping; they automate complex workflows, ensure regulatory compliance, and provide real-time visibility into every corner of your enterprise. Whether you are looking to optimize production costs, streamline payroll, or accelerate growth, our ERP solution is built for scalability.",
    longDescription: "Our ERP solution is designed for businesses of all sizes, from SMEs to large enterprises. With modular architecture, you can start with the modules you need and scale as your business grows. The system offers real-time analytics, mobile accessibility, and seamless integration with third-party applications. Our implementation team ensures smooth transition from your legacy systems with minimal disruption to your daily operations.",
    features: [
      "Real-time data synchronization across all departments",
      "Customizable dashboards for different user roles",
      "Automated workflows and approval processes",
      "Advanced reporting and business intelligence",
      "Multi-currency and multi-language support",
      "Cloud-based or on-premise deployment options",
      "Mobile app for iOS and Android",
      "24/7 technical support and regular updates"
    ],
    modules: [
      {
        title: "Finance Management",
        icon: <FiDollarSign className="w-6 h-6" />,
        features: [
          "Intelligent Accounting",
          "Cash Flow Optimization",
          "Strategic Planning",
          "Regulatory Compliance",
          "Budgeting & Forecasting",
          "Multi-currency Support"
        ]
      },
      {
        title: "Human Resource Management (HRMS)",
        icon: <FiUsers className="w-6 h-6" />,
        features: [
          "Core HR & Payroll",
          "Workforce Management",
          "Talent Lifecycle",
          "Employee Development",
          "Performance Reviews",
          "Leave & Attendance"
        ]
      },
      {
        title: "Inventory & Supply Chain",
        icon: <FiPackage className="w-6 h-6" />,
        features: [
          "Smart Stock Control",
          "Procurement Efficiency",
          "Warehouse Optimization",
          "Future-Ready Planning",
          "Supplier Management",
          "Demand Forecasting"
        ]
      },
      {
        title: "Sales & CRM",
        icon: <FiTrendingUp className="w-6 h-6" />,
        features: [
          "360° Customer View",
          "Order-to-Cash",
          "Pipeline Management",
          "Revenue Analytics",
          "Quotes & Invoicing",
          "Customer Portal"
        ]
      },
      {
        title: "Manufacturing & Operations",
        icon: <FiGrid className="w-6 h-6" />,
        features: [
          "Production Control",
          "Bill of Materials (BOM)",
          "Quality Assurance",
          "Resource Planning",
          "Shop Floor Control",
          "Maintenance Management"
        ]
      },
      {
        title: "Business Intelligence",
        icon: <FiBarChart2 className="w-6 h-6" />,
        features: [
          "Interactive Dashboards",
          "Custom Reports",
          "KPI Tracking",
          "Predictive Analytics",
          "Data Visualization",
          "Executive Insights"
        ]
      }
    ],
    stats: [
      { value: "40%", label: "Cost Reduction", icon: FiDollarSign },
      { value: "60%", label: "Efficiency Gain", icon: FiTrendingUp },
      { value: "99.9%", label: "Data Accuracy", icon: FiCheckCircle },
      { value: "500+", label: "Happy Clients", icon: FiUsers }
    ],
    benefits: [
      "Streamlined operations across all departments",
      "Real-time visibility into business performance",
      "Reduced operational costs through automation",
      "Improved decision-making with accurate data",
      "Enhanced compliance and risk management",
      "Scalable solution that grows with your business"
    ]
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/5 via-transparent to-[#dc2626]/5 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/5 via-transparent to-[#dc2626]/5 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-[#0a2472]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: '0 0 4px 1px rgba(10, 36, 114, 0.3)'
            }}
            animate={{
              opacity: [0, 0.5, 0],
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to Services Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#dc2626] transition-colors group"
          >
            <FiArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Services</span>
          </Link>
        </motion.div>

        {/* Hero Section with Image - Small ERP text REMOVED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <img 
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
            
            {/* REMOVED: Service Badge section with small "ERP" text */}

            {/* Title and Description */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-white/90 text-lg max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {service.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <stat.icon className="w-8 h-8 text-[#dc2626] mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
            Overview
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full"></div>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            {service.fullDescription}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            {service.longDescription}
          </p>
        </motion.div>

        {/* Core Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
            Core Modules We Deliver
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#dc2626]/30 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#dc2626]/10 rounded-lg text-[#dc2626] group-hover:scale-110 transition-transform">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
            Key Features
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <FiCheckCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - Updated with WhatsApp buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <FaRocket className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get started with {service.title} today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Book a Demo button - Opens WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <span>Book a Demo</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </button>
              
              {/* Contact Sales button - Also opens WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-transparent border-2 border-gray-200 hover:border-[#dc2626] text-gray-700 hover:text-[#dc2626] font-semibold rounded-xl transition-all duration-300 cursor-pointer"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-gray-900 mb-3">
                AIOON Alnajah
              </div>
              <p className="text-gray-600 text-sm max-w-md">
                Automated Lead Generation & Intelligent Automation for Modern Businesses
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-gray-400" />
                  Riyadh, Saudi Arabia
                </li>
                <li className="flex items-center gap-2">
                  <FiMail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:info@aioon.sa" className="hover:text-[#dc2626] transition-colors">
                    info@aioon.sa
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FiPhone className="w-4 h-4 text-gray-400" />
                  <a href="tel:+966535141447" className="hover:text-[#dc2626] transition-colors">
                    +966 53 514 1447
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} AIOON Technologies. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ERP;
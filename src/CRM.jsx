// src/pages/CRM.jsx
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
  FiTarget,
  FiPieChart,
  FiMessageCircle,
  FiPhone,
  FiMapPin
} from "react-icons/fi";
import { 
  FaBrain,
  FaHeadset,
  FaRocket,
  FaCrown,
  FaRegEnvelope,
  FaChartLine
} from "react-icons/fa";
import { motion } from "framer-motion";
import crmImage from "./assets/CRM.png";
import { Link } from 'react-router-dom';

function CRM() {
  // Generate animated stars
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 1.5 + 0.5
  }));

  // Service data
  const service = {
    id: 2,
    title: "Customer Relationship Management",
    subtitle: "CRM",
    tagline: "Building Stronger Relationships, One Interaction at a Time",
    description: "Turn prospects into loyal advocates. Empower your team with a 360-degree view of every customer interaction to drive sales and retention.",
    gradient: "from-[#dc2626] to-[#ef4444]",
    imageUrl: crmImage,
    fullDescription: "In an era where customer experience is the primary differentiator, generic sales tactics no longer work. Our Customer Relationship Management (CRM) solution is designed to put the customer at the heart of your business strategy. We move you beyond static spreadsheets and scattered emails into a dynamic ecosystem where every interaction is tracked, analyzed, and optimized. Our platform unifies your sales, marketing, and support teams, providing them with a single, shared view of customer data. By automating routine administrative tasks, we free your sales professionals to do what they do best: selling.",
    longDescription: "From capturing the initial lead to nurturing long-term loyalty, our CRM ensures every team member has the context they need to deliver personalized experiences that drive business growth. Whether you're a small business or enterprise, our scalable CRM solution adapts to your unique sales process. With advanced analytics, AI-powered insights, and seamless integration with your existing tools, you can focus on what matters most – building relationships that drive business growth.",
    features: [
      "360-degree customer view with complete interaction history",
      "Sales pipeline management and deal tracking",
      "Marketing automation and campaign management",
      "Customer service and support ticketing",
      "Advanced analytics and reporting dashboards",
      "Mobile CRM for on-the-go access",
      "Email integration and tracking",
      "Lead scoring and automated assignment",
      "Multi-language and multi-currency support",
      "Cloud-based or on-premise deployment options",
      "Integration with popular business tools",
      "24/7 technical support and regular updates"
    ],
    modules: [
      {
        title: "Lead & Opportunity Management",
        icon: <FiTarget className="w-6 h-6" />,
        features: [
          "Smart Capture",
          "Lead Scoring",
          "Activity Tracking",
          "Automated Assignment",
          "Lead Nurturing",
          "Conversion Analytics"
        ]
      },
      {
        title: "Sales Pipeline & Forecasting",
        icon: <FiTrendingUp className="w-6 h-6" />,
        features: [
          "Visual Pipeline",
          "Revenue Forecasting",
          "Quotation Management",
          "Goal Tracking",
          "Deal Stage Management",
          "Won/Loss Analysis"
        ]
      },
      {
        title: "Marketing Automation",
        icon: <FaRegEnvelope className="w-6 h-6" />,
        features: [
          "Email Campaigns",
          "Customer Segmentation",
          "Campaign Analytics",
          "Event Management",
          "Social Media Integration",
          "Landing Page Builder"
        ]
      },
      {
        title: "Customer Support & Service",
        icon: <FiMessageCircle className="w-6 h-6" />,
        features: [
          "Ticketing System",
          "Knowledge Base",
          "SLA Management",
          "Satisfaction Surveys",
          "Customer Portal",
          "Live Chat Integration"
        ]
      },
      {
        title: "Analytics & Reporting",
        icon: <FiPieChart className="w-6 h-6" />,
        features: [
          "Custom Dashboards",
          "Trend Analysis",
          "Team Performance",
          "Exportable Data",
          "Predictive Analytics",
          "ROI Tracking"
        ]
      },
      {
        title: "Contact Management",
        icon: <FiUsers className="w-6 h-6" />,
        features: [
          "360° Customer View",
          "Interaction History",
          "Contact Segmentation",
          "Activity Tracking",
          "Document Management",
          "Communication Log"
        ]
      }
    ],
    stats: [
      { value: "45%", label: "Increase in Sales", icon: FiTrendingUp },
      { value: "60%", label: "Productivity Gain", icon: FiUsers },
      { value: "35%", label: "Customer Retention", icon: FiAward },
      { value: "300+", label: "Happy Clients", icon: FiStar }
    ],
    benefits: [
      "Unified customer data across all teams",
      "Improved sales team productivity and efficiency",
      "Enhanced customer service and support",
      "Data-driven decision making with analytics",
      "Automated marketing campaigns and lead nurturing",
      "Scalable solution that grows with your business",
      "Better customer retention and loyalty",
      "Increased revenue through cross-selling and upselling"
    ]
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

        {/* Hero Section with Image */}
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
            
            {/* Service Badge */}
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
                <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                  {service.subtitle}
                </span>
              </div>
            </div>

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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <FaRocket className="w-12 h-12 text-[#dc2626] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get started with {service.title} today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Get a Personalized Demo</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-gray-200 hover:border-[#dc2626] text-gray-700 hover:text-[#dc2626] font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
              </a>
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

export default CRM;
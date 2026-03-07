// src/EInvoicing.jsx
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
  FiClock,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiPhone,
  FiActivity,
  FiPieChart,
  FiLock,
  FiDownload,
  FiUpload,
  FiServer
} from "react-icons/fi";
import { 
  FaBrain,
  FaHeadset,
  FaRocket,
  FaCrown,
  FaRegBuilding,
  FaHardHat,
  FaChartLine,
  FaTools,
  FaTruckLoading,
  FaRobot,
  FaCloudUploadAlt,
  FaChartPie,
  FaChartBar,
  FaProjectDiagram,
  FaServer,
  FaQrcode,
  FaPrint,
  FaCashRegister,
  FaFileInvoice,
  FaShieldAlt,
  FaDatabase
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import complianceImage from "./assets/compliance.png";

function EInvoicing() {
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
  const whatsappMessage = "Hello! I'm interested in checking my ZATCA compliance status for your E-Invoicing solution. Can you please provide more information?";

  // Service data
  const service = {
    id: 6,
    title: "E-Invoicing & Compliance",
    subtitle: "E-Invoicing",
    tagline: "Simplify Compliance. Integrate Seamlessly. Avoid Penalties.",
    description: "Simplify Compliance. Integrate Seamlessly. Avoid Penalties. Navigate ZATCA regulations with confidence through our automated, secure, and audit-ready e-invoicing solution.",
    gradient: "from-[#dc2626] to-[#ef4444]",
    imageUrl: complianceImage,
    fullDescription: "Navigating the complexities of tax regulations—specifically the ZATCA e-invoicing mandates (Phase 1 & Phase 2)—can be daunting for any business. Our solution transforms compliance from a burden into a seamless background process. We don't just generate invoices; we provide a complete ecosystem that integrates directly with your existing hardware, including thermal printers, self-service kiosks, and Point of Sale (POS) terminals. Our system ensures that every invoice generated is cryptographically secured, validated, and archived according to government standards. By automating the connection between your sales data and regulatory portals, we eliminate manual errors and ensure you remain audit-ready at all times.",
    longDescription: "Whether you operate a retail chain, a restaurant, or a B2B enterprise, our solution scales to handle high transaction volumes while maintaining 100% adherence to legal frameworks. From QR code generation to real-time validation, we handle every aspect of ZATCA compliance so you can focus on your business.",
    features: [
      "100% ZATCA Phase 1 & 2 compliant",
      "Seamless integration with existing POS systems",
      "Cryptographic signing and QR code generation",
      "Real-time invoice validation and clearance",
      "Support for thermal printers and kiosks",
      "Automated tax calculations and reporting",
      "Secure cloud and local archiving",
      "Offline mode with automatic sync",
      "Multi-branch and multi-device support",
      "Audit-ready reporting and export options"
    ],
    modules: [
      {
        title: "ZATCA (Fatoora) Compliance",
        icon: <FaFileInvoice className="w-6 h-6" />,
        features: [
          "Phase 1 & 2 Readiness",
          "Smart Validation",
          "QR Code Generation",
          "Clearance & Reporting",
          "Cryptographic Signatures",
          "XML Format Compliance"
        ]
      },
      {
        title: "Device & Hardware Integration",
        icon: <FaPrint className="w-6 h-6" />,
        features: [
          "Universal Printer Support",
          "POS Connectivity",
          "Kiosk Integration",
          "IoT Connectivity",
          "Thermal Printer Support",
          "Self-Service Terminals"
        ]
      },
      {
        title: "Tax Management & Reporting",
        icon: <FaChartLine className="w-6 h-6" />,
        features: [
          "VAT Automation",
          "Return Filing",
          "Audit Trails",
          "Multi-Format Export",
          "Tax Calculation",
          "Compliance Reports"
        ]
      },
      {
        title: "Security & Archiving",
        icon: <FaShieldAlt className="w-6 h-6" />,
        features: [
          "Tamper-Proofing",
          "Local & Cloud Archiving",
          "Data Privacy",
          "Offline Mode",
          "Automated Backup",
          "Secure Storage"
        ]
      },
      {
        title: "Invoice Management",
        icon: <FiFileText className="w-6 h-6" />,
        features: [
          "Invoice Generation",
          "Credit/Debit Notes",
          "Bulk Processing",
          "Template Customization",
          "Invoice Tracking",
          "Payment Integration"
        ]
      },
      {
        title: "Integration & API",
        icon: <FaProjectDiagram className="w-6 h-6" />,
        features: [
          "ERP Integration",
          "Accounting Software Sync",
          "RESTful API",
          "Webhook Support",
          "Legacy System Integration",
          "Real-time Data Sync"
        ]
      }
    ],
    stats: [
      { value: "100%", label: "ZATCA Compliant", icon: FiShield },
      { value: "99.9%", label: "Uptime Reliability", icon: FiServer },
      { value: "1000+", label: "Invoices Processed", icon: FiFileText },
      { value: "50ms", label: "Average Response Time", icon: FiClock }
    ],
    benefits: [
      "Eliminate manual errors in invoice generation",
      "Stay audit-ready with automated record keeping",
      "Integrate seamlessly with existing hardware",
      "Avoid penalties with real-time validation",
      "Support for high-volume transaction processing",
      "Offline mode ensures business continuity",
      "Multi-branch management from one dashboard",
      "Future-proof against regulatory changes"
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

        {/* Hero Section with Image - Small E-Invoicing text REMOVED */}
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
            
            {/* REMOVED: Service Badge section with small "E-Invoicing" text */}

            {/* Title and Description */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-white/90 text-lg max-w-3xl">
                {service.tagline}
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
            Simplify Compliance. Integrate Seamlessly. Avoid Penalties.
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
              Ready to Simplify Your Compliance?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Check your ZATCA compliance status today and avoid penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Check Your Compliance button - Opens WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                <span>Check Your Compliance</span>
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

export default EInvoicing;
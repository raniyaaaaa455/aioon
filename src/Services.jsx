// src/Services.jsx
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
  FiHardDrive
} from "react-icons/fi";
import { 
  FaServer, 
  FaRegSmile, 
  FaChartLine, 
  FaBrain,
  FaRegBuilding,
  FaRegFileAlt,
  FaRegClock
} from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  // Generate animated stars
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 1.5 + 0.5
  }));

  // Main services with detailed content
  const services = [
    {
      id: 1,
      icon: FaServer,
      title: "Enterprise Resource Planning (ERP)",
      subtitle: "Unifying Your Business Operations for Scalable Growth",
      description: "In today's fast-paced market, relying on disconnected spreadsheets and legacy software creates data silos that stifle innovation. Our Enterprise Resource Planning (ERP) solutions bridge these gaps by consolidating your critical business functions into one seamless, intelligent ecosystem.",
      extendedDescription: "We help organizations transition from fragmented tools to a single 'source of truth.' By integrating Finance, HR, Inventory, Sales, and Manufacturing, we empower your leadership team to make data-driven decisions with absolute confidence. Our ERP systems go beyond simple record-keeping; they automate complex workflows, ensure regulatory compliance, and provide real-time visibility into every corner of your enterprise. Whether you are looking to optimize production costs, streamline payroll, or accelerate inventory turnover, our solution is engineered to reduce operational friction and prepare your organization for sustainable long-term success.",
      gradient: "from-purple-400 to-blue-400",
      features: [
        "Financial Management & Accounting",
        "Inventory & Supply Chain Control",
        "Production & Manufacturing Planning",
        "Sales & Distribution Management",
        "Business Intelligence & Reporting",
        "Compliance & Risk Management"
      ]
    },
    {
      id: 2,
      icon: FaRegSmile,
      title: "Customer Relationship Management (CRM)",
      subtitle: "Turn prospects into loyal advocates. Empower your team with a 360-degree view of every customer interaction to drive sales and retention.",
      description: "Building Stronger Relationships, One Interaction at a Time. In an era where customer experience is the primary differentiator, generic sales tactics no longer work. Our Customer Relationship Management (CRM) solution is designed to put the customer at the heart of your business strategy.",
      extendedDescription: "We move you beyond static spreadsheets and scattered emails into a dynamic ecosystem where every interaction is tracked, analyzed, and optimized. Our platform unifies your sales, marketing, and support teams, providing them with a single, shared view of customer data. By automating routine administrative tasks, we free your sales professionals to do what they do best: selling. From capturing the initial lead to nurturing long-term loyalty, our CRM provides the actionable insights needed to shorten sales cycles, personalize communication, and predict future revenue with precision.",
      gradient: "from-blue-400 to-cyan-400",
      features: [
        "Lead & Opportunity Management",
        "Sales Pipeline Automation",
        "Customer Service & Support",
        "Marketing Campaign Automation",
        "Analytics & Forecasting",
        "Mobile CRM Access"
      ]
    },
    {
      id: 3,
      icon: FiUsers,
      title: "HR & Payroll Automation",
      subtitle: "Empower your workforce with seamless automation. From smart attendance to error-free payroll, manage your people with precision and care.",
      description: "Modernizing Workforce Management with Intelligent Automation. Managing your most valuable asset—your people—should not be bogged down by paperwork and manual errors. Our HR & Payroll Automation suite digitizes the entire employee lifecycle, replacing spreadsheet chaos with streamlined efficiency.",
      extendedDescription: "We combine cutting-edge technology with rigorous compliance standards. By integrating AI-driven face recognition, we eliminate time theft and ensure 100% accurate attendance data, which flows directly into our payroll engine. Whether you are managing a small team or a distributed enterprise, our solution guarantees that salaries, taxes, and benefits are calculated accurately and on time, every time. This allows your HR department to shift focus from administrative burdens to strategic talent development and company culture.",
      gradient: "from-green-400 to-emerald-400",
      features: [
        "AI-Powered Face Recognition Attendance",
        "Automated Payroll Processing",
        "Employee Self-Service Portal",
        "Leave & Overtime Management",
        "Saudi Labor Law Compliance",
        "Performance & Talent Management"
      ]
    },
    {
      id: 4,
      icon: FaRegBuilding,
      title: "Project & Construction ERP",
      subtitle: "Build with control and profitability. Master your schedules, costs, and field operations from tender to handover on a single platform.",
      description: "Engineering Efficiency: From Groundbreaking to Handover. Construction projects are notorious for complex logistics, tight margins, and moving targets. Our Project & Construction ERP is engineered specifically for general contractors, real estate developers, and EPC firms to bring order to this chaos.",
      extendedDescription: "We bridge the gap between the head office and the job site, ensuring that data flows seamlessly in real-time. By centralizing estimation, resource allocation, and site progress tracking, our solution helps you eliminate cost overruns and prevent schedule slippage. Whether you are managing a single high-rise or multiple infrastructure sites, our platform provides the 'Project-wise Profit & Loss' visibility you need to protect your bottom line and deliver quality projects on time.",
      gradient: "from-orange-400 to-red-400",
      features: [
        "Project Estimation & Tendering",
        "Resource & Equipment Allocation",
        "Site Progress Tracking",
        "Subcontractor Management",
        "Project-wise P&L Reporting",
        "Budget vs Actual Analysis"
      ]
    },
    {
      id: 5,
      icon: FaBrain,
      title: "AI & Business Analytics",
      subtitle: "Stop guessing and start knowing. Transform raw data into strategic foresight with AI-powered intelligence and real-time visualization.",
      description: "Turning Complex Data into Clear, Actionable Strategy. In the digital age, businesses are flooded with data, but data without context is just noise. Our AI & Business Analytics service bridges the gap between raw information and strategic action.",
      extendedDescription: "We integrate disparate data streams from your ERP, CRM, and legacy systems to build a 'Single Source of Truth' for your organization. By leveraging advanced Machine Learning algorithms and intuitive Business Intelligence (BI) tools, we help you move beyond reactive reporting to proactive planning. Whether it is predicting market trends, identifying operational bottlenecks, or personalizing customer experiences, our solutions provide the clarity leadership teams need to navigate uncertainty and drive confident growth.",
      gradient: "from-pink-400 to-rose-400",
      features: [
        "Predictive Analytics & Forecasting",
        "Interactive Executive Dashboards",
        "Real-time KPI Monitoring",
        "Machine Learning Integration",
        "Legacy System Integration",
        "Custom Report Generation"
      ]
    },
    {
      id: 6,
      icon: FaRegFileAlt,
      title: "E-Invoicing & Compliance",
      subtitle: "Navigate regulations effortlessly. Fully integrated, tamper-proof electronic invoicing that connects directly to your printers and POS hardware.",
      description: "Simplify Compliance. Integrate Seamlessly. Avoid Penalties. Navigating the complexities of tax regulations—specifically the ZATCA e-invoicing mandates (Phase 1 & Phase 2)—can be daunting for any business. Our solution transforms compliance from a burden into a seamless background process.",
      extendedDescription: "We don't just generate invoices; we provide a complete ecosystem that integrates directly with your existing hardware, including thermal printers, self-service kiosks, and Point of Sale (POS) terminals. Our system ensures that every invoice generated is cryptographically secured, validated, and archived according to government standards. By automating the connection between your sales data and regulatory portals, we eliminate manual errors and ensure you remain audit-ready at all times. Whether you operate a retail chain, a restaurant, or a B2B enterprise, our solution scales to handle high transaction volumes while maintaining 100% adherence to legal frameworks.",
      gradient: "from-indigo-400 to-purple-400",
      features: [
        "ZATCA Phase 1 & 2 Compliance",
        "POS & Printer Integration",
        "Cryptographic Invoice Generation",
        "Real-time Validation",
        "Automated Regulatory Submission",
        "Audit-Ready Archiving"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Effects - Same as Contact page */}
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

      {/* Animated Sparkle/Stars */}
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Simple Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive digital transformation solutions for modern Saudi businesses
          </p>
        </motion.div>

        {/* Services - Clean Editorial Layout */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.section
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Minimal separator between services */}
              {index > 0 && (
                <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              )}
              
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left column - Icon and Title */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-24">
                    <div className={`text-5xl bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent mb-4`}>
                      <service.icon />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-400 italic">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Right column - Content */}
                <div className="md:col-span-7 md:col-start-6">
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {service.extendedDescription}
                    </p>
                    
                    {/* Features list - Clean grid */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Subtle CTA link */}
                    <div className="pt-2">
                      <a 
                        href="/contact" 
                        className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200 transition-colors group"
                      >
                        Discuss this solution
                        <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-gray-300 mb-8">
              Schedule a consultation with our solutions team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+966535141447"
                className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors"
              >
                Call +966 53 514 1447
              </a>
            </div>
          </div>
        </motion.div>

        {/* Simple Footer - Matching Contact page exactly */}
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
          <div className="mt-6 pt-6 border-t border-white/10 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Riyadh, Saudi Arabia • 
                <a href="mailto:info@aioon.sa" className="hover:text-purple-300 transition-colors"> info@aioon.sa</a> • 
                <a href="tel:+966535141447" className="hover:text-purple-300 transition-colors"> +966 53 514 1447</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Services;
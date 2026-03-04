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
  FiHardDrive,
  FiGrid,
  FiTrendingUp,
  FiShield
} from "react-icons/fi";
import { 
  FaServer, 
  FaRegSmile, 
  FaChartLine, 
  FaBrain,
  FaRegBuilding,
  FaRegFileAlt,
  FaRegClock,
  FaRobot,
  FaCloudUploadAlt,
  FaHeadset
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import erpImage from "./assets/ERP.png"; 
import customerImage from "./assets/customer.png"; 
import payrollImage from "./assets/payroll.png"
import projectImage from "./assets/project.png";
import aiAnalyticsImage from "./assets/ai&analytics.png";
import einvoiceImage from "./assets/einvoice.png";

function Services() {
  // Generate animated stars - kept for visual interest
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
    size: Math.random() * 1.5 + 0.5
  }));

  // ==========================================
  // ALL SERVICES DATA - EDIT THIS PART
  // ==========================================
  const services = [
    // SERVICE 1: ERP - Using local ERP.png image
    {
      id: 1,
      title: "Enterprise Resource Planning",
      subtitle: "ERP",
      description: "Eliminate operational silos and unlock data-driven insights. Manage your capital, people, and processes from a single, integrated command center.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: erpImage, // Using imported local image
      fullDescription: "Unifying Your Business Operations for Scalable Growth. In today's fast-paced market, relying on disconnected spreadsheets and legacy software creates data silos that stifle innovation. Our Enterprise Resource Planning (ERP) solutions bridge these gaps by consolidating your critical business functions into one seamless, intelligent ecosystem. We help organizations transition from fragmented tools to a single 'source of truth.' By integrating Finance, HR, Inventory, Sales, and Manufacturing, we empower your leadership team to make data-driven decisions with absolute confidence. Our ERP systems go beyond simple record-keeping; they automate complex workflows, ensure regulatory compliance, and provide real-time visibility into every corner of your enterprise. Whether you are looking to optimize production costs, streamline payroll, or accelerate growth, our ERP solution is built for scalability.",
      modules: [
        {
          title: "Finance Management",
          features: [
            "Intelligent Accounting",
            "Cash Flow Optimization",
            "Strategic Planning",
            "Regulatory Compliance"
          ]
        },
        {
          title: "Human Resource Management (HRMS)",
          features: [
            "Core HR & Payroll",
            "Workforce Management",
            "Talent Lifecycle",
            "Employee Development"
          ]
        },
        {
          title: "Inventory & Supply Chain",
          features: [
            "Smart Stock Control",
            "Procurement Efficiency",
            "Warehouse Optimization",
            "Future-Ready Planning"
          ]
        },
        {
          title: "Sales & CRM",
          features: [
            "360° Customer View",
            "Order-to-Cash",
            "Pipeline Management",
            "Revenue Analytics"
          ]
        },
        {
          title: "Manufacturing & Operations",
          features: [
            "Production Control",
            "Bill of Materials (BOM)",
            "Quality Assurance",
            "Resource Planning"
          ]
        }
      ]
    },

    // SERVICE 2: CRM - Customer/Sales image
    {
      id: 2,
      title: "Customer Relationship Management",
      subtitle: "CRM",
      description: "Build stronger relationships and drive sales with a complete 360-degree view of every customer interaction.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: customerImage,
      fullDescription: "Transform your customer relationships with our comprehensive CRM solution. Track every interaction, manage leads through the sales pipeline, and automate marketing campaigns. Our AI-powered analytics provide actionable insights to increase conversion rates and customer lifetime value. Whether you're a small business or enterprise, our CRM adapts to your unique sales process.",
      modules: [
        {
          title: "Sales Management",
          features: [
            "Lead & Opportunity Tracking",
            "Sales Pipeline Management",
            "Quotes & Proposals",
            "Forecasting"
          ]
        },
        {
          title: "Customer Service",
          features: [
            "Ticket Management",
            "Customer Portal",
            "SLA Monitoring",
            "Feedback Collection"
          ]
        },
        {
          title: "Marketing Automation",
          features: [
            "Email Campaigns",
            "Lead Nurturing",
            "Campaign Analytics",
            "Social Media Integration"
          ]
        },
        {
          title: "Analytics",
          features: [
            "Sales Reports",
            "Customer Insights",
            "Performance Dashboards",
            "Revenue Forecasting"
          ]
        }
      ]
    },

    // SERVICE 3: HR & Payroll
    {
      id: 3,
      title: "HR & Payroll Automation",
      subtitle: "HR",
      description: "Streamline your workforce management with AI-powered attendance, automated payroll, and complete HR operations.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: payrollImage,
      fullDescription: "Revolutionize your HR operations with our comprehensive automation platform. From biometric attendance tracking to automated payroll processing with ZATCA compliance, we handle it all. Manage employee records, leave requests, performance reviews, and training in one place. Reduce manual work by 80% and ensure 100% accuracy in payroll calculations with our intelligent system.",
      modules: [
        {
          title: "Payroll Management",
          features: [
            "Automated Salary Processing",
            "Tax Calculations",
            "Bank Integration",
            "Payslip Generation"
          ]
        },
        {
          title: "Attendance System",
          features: [
            "Face Recognition",
            "Biometric Integration",
            "Mobile Check-in",
            "Overtime Tracking"
          ]
        },
        {
          title: "HR Operations",
          features: [
            "Employee Database",
            "Leave Management",
            "Performance Reviews",
            "Training Tracking"
          ]
        },
        {
          title: "Compliance",
          features: [
            "Saudi Labor Law",
            "GOSI Integration",
            "Contract Management",
            "Legal Compliance"
          ]
        }
      ]
    },

    // SERVICE 4: Project & Construction ERP
    {
      id: 4,
      title: "Project & Construction ERP",
      subtitle: "construction",
      description: "Master your construction projects with real-time tracking, cost control, and seamless collaboration from tender to handover.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: projectImage,
      fullDescription: "Take control of your construction projects from start to finish. Our specialized Construction ERP provides real-time tracking of project progress, costs, and resources. Manage subcontractors, track equipment usage, monitor labor attendance, and control budgets all in one platform. With mobile accessibility and cloud-based collaboration, your team stays connected whether on-site or in the office.",
      modules: [
        {
          title: "Project Planning",
          features: [
            "Project Scheduling",
            "Resource Allocation",
            "Budget Planning",
            "Risk Management"
          ]
        },
        {
          title: "Cost Control",
          features: [
            "Budget vs Actual",
            "Expense Tracking",
            "Invoice Management",
            "Profitability Analysis"
          ]
        },
        {
          title: "Site Management",
          features: [
            "Site Progress Tracking",
            "Equipment Management",
            "Labor Attendance",
            "Material Tracking"
          ]
        },
        {
          title: "Subcontractor Management",
          features: [
            "Vendor Contracts",
            "Work Orders",
            "Payment Tracking",
            "Performance Rating"
          ]
        }
      ]
    },

    // SERVICE 5: AI & Business Analytics - Using local ai&analytics.png image
    {
      id: 5,
      title: "AI & Business Analytics",
      subtitle: "AI & Analytics",
      description: "Transform your data into actionable insights with AI-powered analytics and predictive intelligence.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: aiAnalyticsImage, // Using imported local image
      fullDescription: "Unlock the power of your data with advanced AI and analytics. Our platform transforms raw data into actionable insights, helping you predict trends, identify opportunities, and mitigate risks. From sales forecasting to customer behavior analysis, our machine learning algorithms continuously improve to deliver increasingly accurate predictions. Make data-driven decisions with confidence and stay ahead of the competition.",
      modules: [
        {
          title: "Predictive Analytics",
          features: [
            "Sales Forecasting",
            "Demand Prediction",
            "Risk Assessment",
            "Market Trends"
          ]
        },
        {
          title: "Business Intelligence",
          features: [
            "Interactive Dashboards",
            "KPI Tracking",
            "Custom Reports",
            "Data Visualization"
          ]
        },
        {
          title: "Machine Learning",
          features: [
            "Pattern Recognition",
            "Anomaly Detection",
            "Recommendation Engine",
            "Process Automation"
          ]
        },
        {
          title: "Data Integration",
          features: [
            "Legacy System Integration",
            "Real-time Sync",
            "Data Cleansing",
            "API Management"
          ]
        }
      ]
    },

    // SERVICE 6: E-Invoicing & Compliance
    {
      id: 6,
      title: "E-Invoicing & Compliance",
      subtitle: "E-Invoicing",
      description: "Stay compliant with ZATCA regulations through automated, secure, and audit-ready e-invoicing solutions.",
      gradient: "from-[#dc2626] to-[#ef4444]",
      imageUrl: einvoiceImage,
      fullDescription: "Ensure full compliance with ZATCA e-invoicing regulations through our automated solution. Generate, validate, and submit invoices with cryptographic signatures and QR codes as required by law. Our system integrates seamlessly with your existing POS and accounting software, supporting both Phase 1 and Phase 2 requirements. With real-time validation and secure cloud storage, you can focus on your business while we handle compliance.",
      modules: [
        {
          title: "ZATCA Compliance",
          features: [
            "Phase 1 & 2 Ready",
            "Cryptographic Signatures",
            "QR Code Generation",
            "XML Formatting"
          ]
        },
        {
          title: "POS Integration",
          features: [
            "Thermal Printer Support",
            "Real-time Validation",
            "Offline Mode",
            "Multiple Branches"
          ]
        },
        {
          title: "Invoice Management",
          features: [
            "Invoice Generation",
            "Credit/Debit Notes",
            "Bulk Processing",
            "Template Customization"
          ]
        },
        {
          title: "Reporting & Archive",
          features: [
            "Audit Trail",
            "Secure Storage",
            "Search & Retrieve",
            "Export Options"
          ]
        }
      ]
    }
  ];

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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Core Software Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Integrated Services for Digital Transformation
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Aioon Technologies offers a complete suite of integrated platforms designed to boost efficiency, improve visibility, and streamline your entire business operation.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="space-y-8 mx-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image Section with Curved Edge - Same size for all images */}
                  <div className="lg:w-2/5 relative overflow-hidden min-h-[280px]">
                    {/* Curved edge on the side that meets the text */}
                    <div className={`absolute inset-0 ${
                      index % 2 === 0 
                        ? 'lg:rounded-r-[50px]' 
                        : 'lg:rounded-l-[50px]'
                    } overflow-hidden`}>
                      <img 
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 relative">
                      {service.title}
                      {/* Underline */}
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full"></div>
                    </h2>
                    
                    <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                      {service.description}
                    </p>

                    {/* Full Description Paragraph - Justified text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 border-l-2 border-[#dc2626]/30 pl-4 italic text-justify">
                      {service.fullDescription}
                    </p>

                    {/* Button Style - Outlined with hover effect */}
                    <Link 
                      to={`/services/${service.subtitle
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace("&", "and")}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#dc2626] text-[#dc2626] font-medium rounded-lg hover:bg-[#dc2626] hover:text-white transition-all duration-300 group/btn"
                    >
                      <span>Learn More About {service.subtitle}</span>
                      <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-16 mx-4"
        >
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Ready to transform your business?
            </h2>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with our solutions team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
              >
                <span>Contact Us</span>
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform w-5 h-5" />
              </a>
              <a
                href="tel:+966535141447"
                className="px-6 py-3 bg-transparent border-2 border-gray-200 hover:border-[#dc2626] text-gray-700 hover:text-[#dc2626] font-semibold rounded-xl transition-all duration-300"
              >
                Call +966 53 514 1447
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 mx-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Riyadh, Saudi Arabia</li>
                <li>
                  <a href="mailto:info@aioon.sa" className="hover:text-[#dc2626] transition-colors">
                    info@aioon.sa
                  </a>
                </li>
                <li>
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

export default Services;
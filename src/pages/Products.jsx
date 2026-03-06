import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Camera, Shield, Lock, Car, Home, Network,
  ArrowRight, CheckCircle, Users, Briefcase, Calendar 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import cablingImg from "../assets/cabling.jpg"
import meetingImg from "../assets/meeting.jpg"
import audioImg from "../assets/audio.jpg"
import cctvImg from "../assets/cctv.jpg"
import solutionsImg from "../assets/solutions.jpg"
import parkingImg from "../assets/parking.jpg"
import accessImg from "../assets/access.jpg"
import smarthomeImg from "../assets/smarthome.jpg"
import heroImage from "../assets/elv.jpg";
import ctaBg from "../assets/ctaBg.jpg";
function Products() {
const products = [
  {
    id: 1,
    number: "01",
    category: "Networking",
    title: "Passive Networking & Structured Cabling",
    description: "Reliable structured cabling solutions for enterprise infrastructure.",
    image: cablingImg,
    features: ["Fiber Optics", "Data Cabinets", "Cat6 Cabling"]
  },
  {
    id: 2,
    number: "02",
    category: "AV Solutions",
    title: "Conferencing & Meeting Hall Solutions",
    description: "Smart meeting rooms with video conferencing and presentation systems.",
    image: meetingImg,
    features: ["Video Conferencing", "Smart Screens", "Audio Systems"]
  },
{
  id: 3,
  number: "03",
  category: "Audio Visual",
  title: "Audio & Visual Systems",
  description: "Professional sound and display systems for businesses.",
  image: audioImg,
  features: ["Sound Systems", "LED Screens", "Control Panels"]
},

{
  id: 4,
  number: "04",
  category: "Security",
  title: "Closed Circuit Television [CCTV] & VMS",
  description: "Advanced surveillance with AI analytics and monitoring.",
   image: cctvImg,
  features: ["4K Cameras", "Remote Access", "AI Analytics"]
},
  {
    id: 5,
    number: "05",
    category: "Security",
    title: "Integrated Security Solutions",
    description: "Unified platform combining access control and intrusion detection.",
    image: solutionsImg,
    features: ["Biometrics", "Central Monitoring", "Alerts"]
  },
  {
    id: 6,
    number: "06",
    category: "Parking",
    title: "Parking Control & Parking Guidance",
    description: "Smart parking with ANPR and mobile payment integration.",
    image: parkingImg,
    features: ["ANPR", "Space Detection", "Mobile Payment"]
  },
  {
    id: 7,
    number: "07",
    category: "Access Control",
    title: "Access Control & E-Gates",
    description: "Biometric and RFID based secure access systems.",
    image: accessImg,
    features: ["Biometric", "RFID", "Gate Automation"]
  },
  {
    id: 8,
    number: "08",
    category: "Smart Home",
    title: "Smart Home & Automation Systems",
    description: "Complete home automation for lighting, climate and security.",
   image: smarthomeImg,
    features: ["Smart Lighting", "Climate Control", "Voice Control"]
  }
];
  return (
    <div className="min-h-screen bg-white pt-24">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 rounded-full border border-red-200 mb-5">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-red-600 font-medium text-sm">ELV Systems</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
  Extra Low Voltage
  <span className="block text-red-600">Solutions</span>
</h1>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
At Aioon Technologies, we provide end-to-end design, supply, and implementation of ELV (Extra Low Voltage) systems that meet the diverse requirements of our clients. Our expertise spans both pre-sales consultation and post-sales support, ensuring smooth deployment and dependable service throughout the project lifecycle.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
                {[
                  { value: "08", label: "Systems" },
                  { value: "12", label: "Projects" },
                  { value: "45+", label: "Clients" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-red-100 text-center shadow-lg shadow-red-200/50 transition">
                    <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="ELV Control Room"
                  className="w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-red-200">
                  <span className="text-sm font-medium text-gray-900">Enterprise Grade</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              ELV Systems & Solutions
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Comprehensive low voltage systems designed for modern infrastructure needs
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{products.map((product, index) => (
  <Link to={`/product/${product.id}`} key={product.id}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg 
hover:shadow-[0_15px_40px_rgba(239,68,68,0.25)] 
hover:-translate-y-2
hover:border-red-300
transition-all duration-500 cursor-pointer"
    >

                {/* Image Container */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                    {product.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
<h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
  {product.title}
</h3> 
                  {/* Learn More */}
                  <a href="#" className="inline-flex items-center gap-2 text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
</Link>
))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-red-900/95"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact our ELV systems experts for a free consultation and customized solution for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all hover:scale-105">
              Request Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">Aioon</span>
                <span className="text-xs bg-red-600 px-2 py-1 rounded-full">Alnajah</span>
              </div>
              <p className="text-gray-400 text-sm">
                Leading ELV systems and digital transformation partner in Saudi Arabia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>CCTV & VMS</li>
                <li>Security Systems</li>
                <li>Access Control</li>
                <li>Smart Home</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@aioon.sa</li>
                <li>+966 123 456 789</li>
                <li>Riyadh, KSA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 Aioon Alnajah. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/966535141447"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
>
  <FaWhatsapp size={22} />
</a>
    </div>
  );
}

export default Products;
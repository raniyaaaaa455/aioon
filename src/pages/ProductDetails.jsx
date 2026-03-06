import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle, Shield, Wifi, Zap, Clock, ArrowRight, 
  Download, Phone, Mail, MapPin, ChevronRight 
} from "lucide-react";
import products from "../data/productsData";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}, [id]);

  if (!product) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-2xl font-bold text-[#0a2472]">Product Not Found</h1>
    </div>
  );

  // Features specific to each product type
  const features = [
    "24/7 Technical Support",
    "5 Year Warranty",
    "On-site Installation",
    "Free Consultation",
    "Scalable Architecture",
    "Future-ready Technology"
  ];

  const specifications = [
    { label: "Bandwidth", value: "10 Gbps" },
    { label: "Compliance", value: "ISO 27001" },
    { label: "Warranty", value: "5 Years" },
    { label: "Support", value: "24/7" },
    { label: "Certification", value: "CE, RoHS" },
    { label: "Integration", value: "API Ready" }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for maximum efficiency and speed"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and alerts"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Works with your existing infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-[500px] overflow-hidden pt-24">
       <img
  src={product.image}
  alt={product.title}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#dc2626]/20 rounded-full border border-[#dc2626]/30 mb-6">
                <div className="w-2 h-2 bg-[#dc2626] rounded-full animate-pulse"></div>
                <span className="text-[#dc2626] font-medium text-sm">ELV System • {product.category || "Networking"}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {product.title}
              </h1>
              
              {/* Description */}
              <p className="text-gray-200 text-sm md:text-base mb-6 max-w-lg">
  {product.heroText}
</p>
              
              {/* CTA Button */}
            <a
  href="https://wa.me/966535141447"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg shadow-[#dc2626]/25 transition-all duration-300 hover:scale-105"
>
  {product.buttonText}
</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            
            {/* Left Image with Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
                <img
  src={product.image}
  alt={product.title}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
>  
             <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
  <span className="text-black">
    {product.sectionTitle?.split("|")[0]}
  </span>{" "}
  <span className="text-red-600">
    {product.sectionTitle?.split("|")[1]}
  </span>
</h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                {product.description || "In a connected world, your network is only as strong as its physical infrastructure. We provide structured cabling and ELV solutions that ensure seamless data transfer, minimal downtime, and future scalability for modern businesses."}
              </p>
              
              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#dc2626]" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FOOTER SECTION - With Larger Icons */}
<footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Main Footer Content */}
    <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
      
      {/* Left Side - CTA */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your <span className="text-red-500">Infrastructure?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl">
          Speak with our ELV experts and get a customized solution tailored for your business needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/25">
            Request Quote
          </button>
          <button className="border-2 border-gray-700 hover:border-red-600 text-white hover:text-red-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Right Side - Contact Info Grid */}
      <div className="grid sm:grid-cols-3 gap-8">
        
        {/* Call Us */}
        <div className="group">
          <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
            <Phone className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Call Us</h3>
          <p className="text-white font-medium">+966 535 141 447</p>
        </div>

        {/* Email */}
        <div className="group">
          <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
            <Mail className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</h3>
          <p className="text-white font-medium">info@aioon.sa</p>
        </div>

        {/* Location */}
        <div className="group">
          <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
            <MapPin className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Location</h3>
          <p className="text-white font-medium">Riyadh, KSA</p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Contact Support Link */}
      <a 
        href="#" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors group"
      >
        <span className="font-medium">Contact Support</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Aioon Alnajah. All rights reserved.
      </p>
    </div>
  </div>
</footer>
<a
  href="https://wa.me/966535141447"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
>
  <FaWhatsapp size={24} />
</a>
    </div>
  );
}

export default ProductDetails;
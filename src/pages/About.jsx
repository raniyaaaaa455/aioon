import { Users, Calendar, UserCheck, CheckCircle, Building } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "../assets/about.jpg";
import missionImage from "../assets/mission.jpg";
import visionImage from "../assets/vision.jpg";
import valuesImage from "../assets/values.jpg";
import integrationImg from "../assets/integration.jpg";
import customisationImg from "../assets/customisation.jpg";
import automationImg from "../assets/automation.jpg";
import securityImg from "../assets/security.jpg";
import scalableImg from "../assets/scalable.jpg";
import partnershipImg from "../assets/partnership.jpg";
import ctaImage from "../assets/cta.jpg";
import { FaWhatsapp } from "react-icons/fa"
 
function About() {
  return (
    <div className="pt-20 bg-white text-gray-900 relative overflow-hidden">
      {/* 🔮 FLOATING BACKGROUND ORBS - Changed to red/navy */}
      <div className="hidden md:block absolute w-[500px] h-[500px] bg-red-600 rounded-full blur-[80px] opacity-10 top-[-100px] left-[-100px]" />
      <div className="hidden md:block absolute w-[400px] h-[400px] bg-red-500 rounded-full blur-[70px] opacity-10 bottom-[-100px] right-[-100px]" />
      <div className="hidden md:block absolute w-[300px] h-[300px] bg-gray-900 rounded-full blur-[60px] opacity-5 top-1/2 left-1/3" />

    {/* HERO SECTION */}
<section className="min-h-[60vh] md:min-h-[65vh] flex items-center px-6 md:px-16 lg:px-24 py-8">
  {/* Network Background */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu transition-transform duration-500 group-hover:scale-105"
  style={{ backgroundImage: "url('/network.jpg')" }}
></div>

{/* Light overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/90 -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
              <p className="text-red-600 tracking-widest uppercase text-sm font-semibold">
                Trusted Technology Partner in Saudi Arabia
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold leading-tight text-gray-900">
              Digital Transformation<br />
              <span className="text-red-600">Redefined</span>
            </h1>

            {/* Paragraphs */}
<div className="space-y-3 text-gray-700 text-sm md:text-base leading-6 md:leading-7 max-w-xl">
  {/* Paragraph 1 */}
  <div className="relative pl-6">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-red-700 rounded-full"></div>
    <p>
      For over <span className="text-red-600 font-semibold">13 years</span>, Aioon Technologies has been at the forefront of digital innovation in Saudi Arabia, 
      empowering enterprises with intelligent software solutions and comprehensive digital transformation services.
    </p>
  </div>
  
  {/* Paragraph 2 */}
  <div className="relative pl-6">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></div>
    <p>
      We specialize in both <span className="text-red-600 font-medium">software and hardware integration</span>, delivering customized solutions that transform complex business needs into seamless, scalable systems. Our partnership with leading platforms like ENZAPPS Software Solutions ensures we provide cutting-edge technology with reliable, dedicated support.
    </p>
  </div>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
  <button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
    Explore Our Solutions
  </button>

  <button className="border-2 border-red-600 text-red-600 w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
    Contact Our Team
  </button>

</div>
          </motion.div>

{/* RIGHT SIDE - Image with Two Horizontal Badges */}
<motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex justify-center md:justify-end"
>
  <div className="relative w-full max-w-lg mx-auto">
    {/* Main Image */}
    <img
  src={teamImage}
  alt="Aioon Technologies Team"
  loading="lazy"
  className="w-full max-h-[260px] sm:max-h-[320px] md:max-h-[420px] object-cover rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white/20"
  onError={(e) => {
    console.log("Image failed to load");
    console.log("Path tried:", teamImage);
    console.log("Error:", e);
  }}
  onLoad={() => console.log("Image loaded successfully")}
/>
    
    {/* Decorative background blurs */}
    <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gray-900/10 rounded-full blur-2xl"></div>
    
    {/* First Badge - Bottom Left (13+ Years) */}
    <div className="absolute bottom-2 left-2 md:-bottom-3 md:-left-6 bg-white rounded-xl p-4 shadow-xl border border-red-200">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">13+</span>
        </div>
        <div>
          <p className="text-xs text-gray-500">Years of</p>
          <p className="text-sm font-bold text-gray-900">Experience</p>
        </div>
      </div>
    </div>

    {/* Second Badge - Bottom Right (12k+ Clients) */}
    <div className="absolute bottom-2 right-2 md:-bottom-6 md:-right-6 bg-white rounded-xl p-4 shadow-xl border border-red-200">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Happy</p>
          <p className="text-sm font-bold text-gray-900">12k+ Clients</p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </section>

{/* MISSION / VISION / VALUES */}
<section className="py-10 px-6 bg-gradient-to-b from-white to-red-50/30">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
        Our <span className="text-red-600">Guiding Principles</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        The foundation of our success lies in our commitment to excellence, innovation, and partnership
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Mission */}
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}


className="group relative h-[220px] sm:h-[260px] md:h-[340px] rounded-2xl overflow-hidden cursor-pointer
border border-red-200
shadow-[0_0_12px_rgba(220,38,38,0.05)]
hover:shadow-[0_0_18px_rgba(220,38,38,0.12)]
hover:border-red-400
transition-all duration-500"
>
<img
  src={missionImage}
  alt="Mission"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover"
/>

  {/* Content */}
  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition duration-300">
    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition duration-300">
      Our Mission
    </h3>

    <p className="text-sm text-white/90">
      To revolutionize business operations through intelligent automation,
      seamless integration, and customized solutions that drive efficiency.
    </p>
  </div>

</motion.div>

      {/* Vision */}
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.1 }}
className="group relative h-[220px] sm:h-[260px] md:h-[340px] rounded-2xl overflow-hidden cursor-pointer
border border-red-200
shadow-[0_0_12px_rgba(220,38,38,0.05)]
hover:shadow-[0_0_18px_rgba(220,38,38,0.12)]
hover:border-red-400
transition-all duration-500"
>

  <img
  src={visionImage}
  alt="Vision"
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover"
/>

  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition duration-300">
    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition duration-300">
      Our Vision
    </h3>

    <p className="text-sm text-white/90">
      To be the leading digital transformation partner in Saudi Arabia,
      empowering businesses with future-ready technology solutions.
    </p>
  </div>

</motion.div>

      {/* Values */}
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
viewport={{ once: true }}
className="group relative h-[220px] sm:h-[260px] md:h-[340px] rounded-2xl overflow-hidden cursor-pointer
border border-red-200
shadow-[0_0_12px_rgba(220,38,38,0.05)]
hover:shadow-[0_0_18px_rgba(220,38,38,0.12)]
hover:border-red-400
transition-all duration-500"
>

  <img
    src={valuesImage} 
    alt="Values"
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transition duration-300">
    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition duration-300">
      Core Values
    </h3>

    <p className="text-sm text-white/90">
      Integrity, innovation, long-term client success, and reliable support
      define how we work with our partners.
    </p>
  </div>

</motion.div>
    </div>
  </div>
</section>     
 {/* STATS SECTION */}
      <section className="py-14 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              By The <span className="text-red-600">Numbers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our journey of growth and impact in numbers
            </p>
          </motion.div>

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
  {[
    { number: "13+", label: "Years of Excellence", icon: <Calendar className="w-4 h-4" /> },
    { number: "12K+", label: "Satisfied Clients", icon: <UserCheck className="w-4 h-4" /> },
    { number: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-4 h-4" /> },
    { number: "50+", label: "Industries Served", icon: <Building className="w-4 h-4" /> },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      viewport={{ once: true }}
      className="group p-4 rounded-xl bg-white border border-red-200
      hover:border-red-500 shadow-sm hover:shadow-md
      transition-all duration-300 text-center"
    >
      <div className="flex justify-center mb-2">
        <div className="p-2 rounded-full bg-red-50 text-red-600">
          {item.icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {item.number}
      </h3>

      <p className="text-sm text-gray-600">
        {item.label}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* WHY CHOOSE US - Full Background Images */}
<section className="py-8 md:py-12 bg-gradient-to-b from-white to-red-50/30">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4 block">
        Our Capabilities
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
        Enterprise Solutions, <br className="hidden md:block" />
        <span className="text-red-600">Engineered for Excellence</span>
      </h2>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Total Integration",
          desc: "Seamless software and hardware integration for unified business systems",
          image: integrationImg,
          color: "from-red-600/10"
        },
        {
          title: "Deep Customization",
          desc: "Tailored solutions that align perfectly with your unique business needs",
          image: customisationImg,
          color: "from-red-600/10"
        },
        {
          title: "AI-Powered Automation",
          desc: "Intelligent automation that streamlines operations and boosts efficiency",
          image: automationImg,
          color: "from-red-600/10"
        },
        {
          title: "Enterprise Security",
          desc: "Robust security frameworks protecting your critical business data",
          image: securityImg,
          color: "from-red-600/10"
        },
        {
          title: "Scalable Architecture",
          desc: "Future-ready systems that grow with your business needs",
          image: scalableImg,
          color: "from-red-600/10"
        },
        {
          title: "Strategic Partnerships",
          desc: "Alliances with industry leaders like ENZAPPS Solutions",
          image: partnershipImg,
          color: "from-red-600/10"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden cursor-pointer transform-gpu"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white group-hover:text-red-600 mb-2 transform group-hover:-translate-y-1 transition-all duration-300">
              {item.title}
            </h3>
        <p className="text-sm text-white/90 leading-relaxed transform group-hover:-translate-y-1 transition-all duration-300 delay-75">
  {item.desc}
</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* CTA SECTION - Abstract Digital Background */}
<section className="py-8 md:py-12 relative overflow-hidden">
  {/* Unsplash Abstract Technology Background */}
  <div className="absolute inset-0 z-0">
    <img
      src={ctaImage}
      alt="Digital Technology Abstract"
      className="w-full h-full object-cover"
    />
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-red-900/80 to-gray-900/90"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>
  </div>

  <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
        Ready to Transform Your<br />
        <span className="text-red-400">Business?</span>
      </h2>
      <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
        Join thousands of successful businesses across Saudi Arabia who trust Aioon Technologies 
        for their digital transformation journey.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
<button className="bg-white hover:bg-red-600 text-gray-900 hover:text-white px-8 py-3 rounded-full font-semibold text-lg shadow-2xl shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-red-600/30">
  Explore Our Services
</button>

<button className="border-2 border-white text-white hover:bg-red-600 hover:border-red-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
  Contact Us
</button>
      </div>
      <p className="text-gray-300 text-sm pt-4">
        Get in touch with our experts today
      </p>
    </motion.div>
  </div>
</section>
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

export default About;
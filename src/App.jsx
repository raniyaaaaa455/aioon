import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Navbar */}
      <nav className="bg-purple-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">AIOON</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li className="cursor-pointer hover:text-purple-200 transition">Home</li>
            <li className="cursor-pointer hover:text-purple-200 transition">About</li>
            <li className="cursor-pointer hover:text-purple-200 transition">Services</li>
            <li className="cursor-pointer hover:text-purple-200 transition">Contact</li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-800 py-4">
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li className="cursor-pointer hover:text-purple-200 transition" onClick={() => setIsMenuOpen(false)}>Home</li>
              <li className="cursor-pointer hover:text-purple-200 transition" onClick={() => setIsMenuOpen(false)}>About</li>
              <li className="cursor-pointer hover:text-purple-200 transition" onClick={() => setIsMenuOpen(false)}>Services</li>
              <li className="cursor-pointer hover:text-purple-200 transition" onClick={() => setIsMenuOpen(false)}>Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Where Technology Meets Business Vision
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-90">
            Aioon Technologies delivers smart, scalable, and fully customized digital ecosystems. As Saudi Arabia’s exclusive ENZAPPS support partner, we ensure seamless integration and reliable, future-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Aioon Technologies</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-16">
            Aioon Technologies, a dedicated technology partner for enterprises in the Kingdom of Saudi Arabia, specializing in advanced business software and digital transformation. At Aioon Technologies, we specialize in delivering cutting-edge solutions across both software and hardware domains, with a core focus on total integration and deep customization. Our strength lies in transforming complex business needs into seamless, scalable, and intelligent systems tailored to each client’s unique vision. We proudly serve as an exclusive support partner in the Kingdom of Saudi Arabia for leading digital transformation platforms, such as ENZAPPS Software Solutions. With over 13 years of legacy and a vast customer base across diverse industries, Aioon Technologies remains at the forefront of support wherever and whenever our customers need us most.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-purple-700 mb-4">Our Mission</h4>
              <p className="text-gray-700">
                To revolutionize business operations through AI-powered ERP, CRM, and automation solutions. We dive deep into your unique challenges to deliver smart, scalable technologies that simplify complexity, accelerate growth, and drive lasting impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-purple-700 mb-4">Our Vision</h4>
              <p className="text-gray-700">
                To list among Saudi Arabia's most trusted technology partners, driving performance and sustainable growth through intelligent digital solutions, fully aligned with Saudi Vision 2030.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-2xl font-bold text-purple-700 mb-4">Core Values</h4>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Integrity:</strong> Building trust through transparent partnership.</li>
                <li><strong>Innovation:</strong> Future-ready solutions powered by AI.</li>
                <li><strong>Commitment:</strong> Dedicated to your long-term success.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">Core Software Solutions</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Integrated Services for Digital Transformation — A complete suite of platforms designed to boost efficiency, improve visibility, and streamline your entire business operation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Enterprise Resource Planning (ERP)", desc: "Comprehensive management of Finance, HR, Inventory, Sales, and Manufacturing." },
              { num: "02", title: "Customer Relationship Management (CRM)", desc: "Intelligent tools for lead management, pipeline tracking, and customer engagement." },
              { num: "03", title: "HR & Payroll Automation", desc: "Automated workforce management, including AI-driven face-recognition attendance and precise payroll processing." },
              { num: "04", title: "Project & Construction ERP", desc: "Tailored modules for contractors to manage budgets, resources, timelines, and progress tracking." },
              { num: "05", title: "AI & Business Analytics", desc: "Data-driven dashboards and predictive insights across all business functions." },
              { num: "06", title: "E-Invoicing & Compliance", desc: "Seamless ZATCA-compliant e-invoicing integration with external devices (printers, kiosks, etc.)." },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
              >
                <div className="text-5xl font-bold text-purple-200 group-hover:text-purple-500 transition mb-4">{item.num}</div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                <a href="#" className="mt-4 inline-block text-purple-600 font-medium hover:text-purple-800 transition">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELV Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-6">ELV (Extra Low Voltage) Systems</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            At Aioon Technologies, we provide end-to-end design, supply, and implementation of ELV systems that meet the diverse requirements of our clients. Our expertise spans both pre-sales consultation and post-sales support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Passive Networking & structured cabling",
              "Conferencing & Meeting Hall Solutions",
              "Audio & Visual Systems",
              "Closed Circuit Television [CCTV] & VMS",
              "Integrated Security Solutions",
              "Parking Control & Parking Guidance",
              "Access Control & E-Gates",
              "Smart Home & Automation Systems",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-purple-50 p-6 rounded-xl shadow-md hover:bg-purple-100 hover:shadow-lg transition duration-300 text-center font-medium text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Enquiry */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Connect With Us</h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Start Your Digital Journey — Let’s shape the future together. We’re ready to tackle your challenges and deliver intelligent solutions that lead the way.
          </p>

          <form className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <input type="text" placeholder="First Name" className="p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/70" />
            <input type="text" placeholder="Last Name" className="p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/70" />
            <input type="email" placeholder="Email Address" className="p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/70 md:col-span-2" />
            <input type="tel" placeholder="Phone Number" className="p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/70" />
            <textarea placeholder="Message" rows="4" className="p-4 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:border-white placeholder-white/70 md:col-span-2"></textarea>
            <button type="submit" className="md:col-span-2 bg-white text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Send Enquiry
            </button>
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h4 className="text-2xl font-bold mb-3">Address</h4>
              <p className="text-lg opacity-90">Ar Rabwah Dist. Abi Al Fath Al Kateb, Riyadh - KSA</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3">Write us</h4>
              <p className="text-lg opacity-90">info@aioon.sa</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3">Talk to Us</h4>
              <p className="text-lg opacity-90">+966 53 514 1447<br />+966 53 509 0840</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>© {new Date().getFullYear()} AIOON Technologies. All rights reserved.</p>
        <p className="mt-2">Proudly supporting Saudi Vision 2030 through innovation and excellence.</p>
      </footer>
    </div>
  );
}

export default App;
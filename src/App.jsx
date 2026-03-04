import React from "react";
import { Routes, Route } from "react-router-dom";

import Services from "./Services";
import ERP from "./ERP";
import CRM from "./CRM";
import HR from "./HR";
import Construction from "./Construction";
import AIAnalytics from "./AIAnalytics";
import EInvoicing from "./EInvoicing";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      {/* Main Services Page */}
      <Route path="/" element={<Services />} />

      {/* Individual Service Pages */}
      <Route path="/services/erp" element={<ERP />} />
      <Route path="/services/crm" element={<CRM />} />
      <Route path="/services/hr" element={<HR />} />
      <Route path="/services/construction" element={<Construction />} />
      <Route path="/services/ai-and-analytics" element={<AIAnalytics />} />
      <Route path="/services/e-invoicing" element={<EInvoicing />} />

      {/* Contact Page */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
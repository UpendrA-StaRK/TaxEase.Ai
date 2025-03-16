
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Paytax from "../Pages/payment";
import { CalculatorPage } from "../Pages/CalculatorPage";
import { SalarytaxPage } from "../Pages/SalarytaxPage";
import LogTool from "../Pages/LogTool";
import TaxRefundPage from "../Pages/TaxRefundPage";
import { Company } from "../Pages/Company";
import IncomeTax from "../Pages/IncomeTax";
import LeasePremium from "../Pages/LeasePremium";
import WearTear from "../Pages/WearTear";
import { Signup } from "../Pages/Signup";
import Blog from "../Pages/Blogs";
import Faq from "../Pages/Faqs";
import { Privateroute } from "../Private/privateroute";
import UploadPDF from "../Component/UploadPDF"; // Import the UploadPDF component

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/paytax"
          element={
            <Privateroute>
              <Paytax />
            </Privateroute>
          }
        />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/salarytaxpage" element={<SalarytaxPage />} />
        <Route path="/taxrefundpage" element={<TaxRefundPage />} />
        <Route path="/tools" element={<LogTool />} />
        <Route path="/logbook" element={<LogTool />} />
        <Route path="/company" element={<Company />} />
        <Route path="/incomeTax" element={<IncomeTax />} />
        <Route path="/lease-premium" element={<LeasePremium />} />
        <Route path="/wear-tear" element={<WearTear />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/upload-pdf" element={<UploadPDF />} /> {/* Add the new route */}
      </Routes>
    </div>
  );
}

export default Allroutes;
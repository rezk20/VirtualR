import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div className="text-white  z-[-4] min-h-screen max-w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <>
        <Navbar />
        <div className="container mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <PricingSection />
          <Testimonials />
          <Footer />
        </div>
        <SpeedInsights />
      </>
    </div>
  );
};

export default App;

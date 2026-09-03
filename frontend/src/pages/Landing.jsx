import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AIDemo from "../components/AIDemo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AIDemo />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
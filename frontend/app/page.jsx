import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function LandingPage() {
  return (
    <div className="bg-[#1c1b29] text-white">
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

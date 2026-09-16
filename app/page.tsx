import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Payments from "@/components/Payments";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function Home() {
  return (
    <>
      <BackgroundPattern />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Payments />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

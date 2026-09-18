import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import Media from "@/components/Media";
import Partners from "@/components/Partners";
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
        <Programs />
        <Events />
        <Services />
        <Highlights />
        <Impact />
        <Testimonials />
        <Media />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

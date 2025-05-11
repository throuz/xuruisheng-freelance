import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Pricing from "./sections/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

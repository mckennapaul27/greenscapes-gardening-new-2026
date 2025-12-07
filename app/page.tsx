import Hero from "./components/Hero";
import ServiceAreas from "./components/ServiceAreas";
import About from "./components/About";
import Services from "./components/Services";
import LatestNews from "./components/LatestNews";
import Contact from "./components/Contact";
import CustomerFeedback from "./components/CustomerFeedback";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceAreas />
      <About />
      <Services />
      <LatestNews />
      <Contact />
      <CustomerFeedback />
      <Footer />
    </main>
  );
}

import { useEffect } from "react";
import Navbar from "./nav/Navbar";
import { styles, css } from "../components/style/Style";
import HeroPage from "./heroPage/HeroPage";
import AboutPage from "./about/AboutPage";
import Services from "./services/Services";
import Achievements from "./achievements/Achievements";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default function App() {
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <HeroPage />

      {/* ABOUT */}
      <AboutPage />

      {/* SERVICES */}
      <Services />

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

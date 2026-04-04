import Navbar from "./nav/Navbar";
import { styles, css } from "../components/style/Style";
import HeroPage from "./heroPage/HeroPage";
import AboutPage from "./about/AboutPage";
import Services from "./services/Services";
import Achievements from "./achievements/Achievements";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ✅ All sections on one page with matching ids
const Home = () => (
  <div>
    <section id="hero">
      <HeroPage />
    </section>
    <section id="about">
      <AboutPage />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="achievements">
      <Achievements />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.root}>
        <style>{css}</style>
        <Navbar />
        <Routes>
          {/* ✅ Single route — Navbar scrolls to sections by id */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

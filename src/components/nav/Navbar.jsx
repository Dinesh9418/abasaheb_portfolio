import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../style/Style";

const NAV_LINKS = ["About", "Services", "Achievements", "Testimonials", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Fires after navigation completes and Home has rendered
  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const el = document.getElementById(pendingScroll);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }
    }
  }, [location, pendingScroll]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      // On a different route — navigate first, scroll after
      setPendingScroll(id);
      navigate("/");
    } else {
      // Already on home — just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={styles.logo}>
              <span style={styles.logoAccent}>T</span>&P
            </div>
          </Link>

          <div style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                style={styles.navLink}
                onClick={() => handleNavClick(l.toLowerCase())}
                className="nav-link"
              >
                {l}
              </button>
            ))}
            <button
              style={styles.navCta}
              onClick={() => handleNavClick("contact")}
              className="cta-btn"
            >
              Get in Touch
            </button>
          </div>

          <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={{ ...styles.bar, ...(menuOpen ? styles.bar1Open : {}) }} />
            <div style={{ ...styles.bar, ...(menuOpen ? styles.bar2Open : {}) }} />
            <div style={{ ...styles.bar, ...(menuOpen ? styles.bar3Open : {}) }} />
          </button>
        </div>

        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                style={styles.mobileLink}
                onClick={() => handleNavClick(l.toLowerCase())}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

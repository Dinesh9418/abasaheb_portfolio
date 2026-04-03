import React, { useState } from "react";
import { styles } from "../style/Style";

const NAV_LINKS = [
  "About",
  "Services",
  "Achievements",
  "Testimonials",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  return (
    <div>
      {" "}
      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoAccent}>T</span>&P
          </div>
          <div style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                style={styles.navLink}
                onClick={() => scrollTo(l.toLowerCase())}
                className="nav-link"
              >
                {l}
              </button>
            ))}
            <button
              style={styles.navCta}
              onClick={() => scrollTo("contact")}
              className="cta-btn"
            >
              Get in Touch
            </button>
          </div>
          <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <div
              style={{ ...styles.bar, ...(menuOpen ? styles.bar1Open : {}) }}
            />
            <div
              style={{ ...styles.bar, ...(menuOpen ? styles.bar2Open : {}) }}
            />
            <div
              style={{ ...styles.bar, ...(menuOpen ? styles.bar3Open : {}) }}
            />
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                style={styles.mobileLink}
                onClick={() => scrollTo(l.toLowerCase())}
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

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../style/Style";

const NAV_LINKS = ["About", "Services", "Achievements", "Testimonials", "Contact"];

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      const el = document.getElementById(pendingScroll);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setPendingScroll(null);
      }
    }
  }, [location, pendingScroll]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      setPendingScroll(id);
      navigate("/");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navBg = scrolled
    ? "rgba(255,255,255,0.97)"
    : "rgba(13,27,42,0.85)";

  const barColor = scrolled && !isMobile ? "#0d1b2a" : "#fff";

  return (
    <nav style={{
      ...styles.nav,
      background: navBg,
      backdropFilter: "blur(8px)",
      borderBottom: scrolled ? "1px solid #e2e8f0" : "none",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
    }}>
      <div style={styles.navInner}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{
            ...styles.logo,
            color: scrolled && !isMobile ? "#64748b" : "#fff"
          }}>
            <span style={styles.logoAccent}>T</span>&P
          </div>
        </Link>

        {/* Desktop links — only rendered on desktop */}
        {!isMobile && (
          <div style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                style={{
                  ...styles.navLink,
                  color: scrolled ? "#5073b4" : "#cbd5e1",
                }}
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
        )}

        {/* Hamburger — only rendered on mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <div style={{
              width: 24, height: 2, background: barColor, borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <div style={{
              width: 24, height: 2, background: barColor, borderRadius: 2,
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <div style={{
              width: 24, height: 2, background: barColor, borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>
        )}
      </div>

      {/* Mobile dropdown — only when open */}
      {isMobile && menuOpen && (
        <div style={{
          background: "#0d1b2a",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 72,
          left: 0,
          right: 0,
          zIndex: 99,
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNavClick(l.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                fontSize: 15,
                color: "#fff",
                padding: "16px 2rem",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              {l}
            </button>
          ))}
          <div style={{ padding: "12px 1.5rem 16px" }}>
            <button
              onClick={() => handleNavClick("contact")}
              style={{
                background: "#1a56db",
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 600,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 8,
                fontFamily: "inherit",
                width: "100%",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

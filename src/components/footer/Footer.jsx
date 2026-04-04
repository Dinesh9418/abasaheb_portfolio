import React from "react";
import { styles } from "../style/Style";

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLogo}>
            <span style={styles.logoAccent}>T</span>&P — Abasaheb Shelar
          </div>
          <div style={styles.footerText}>
            © 2026 · Training & Placement Officer · Pune
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

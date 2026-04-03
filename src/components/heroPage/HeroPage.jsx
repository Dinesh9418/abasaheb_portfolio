import React from "react";
import { styles } from "../style/Style";

const HeroPage = () => {
  return (
    <div>
      <section style={styles.hero} id="hero">
        <div style={styles.heroBg} />
        <div style={styles.heroGrid} />
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>Training & Placement Officer</div>
          <h1 style={styles.heroName}>
            Abasaheb <span style={styles.heroNameAccent}>Shelar</span>
          </h1>
          <p style={styles.heroTagline}>
            Bridging the gap between academic excellence
            <br />
            and industry-ready careers.
          </p>
          <div style={styles.heroActions}>
            <button
              style={styles.heroPrimary}
              onClick={() => scrollTo("contact")}
              className="cta-btn"
            >
              Connect With Me
            </button>
            <button
              style={styles.heroSecondary}
              onClick={() => scrollTo("services")}
              className="outline-btn"
            >
              What I Do →
            </button>
          </div>
          <div style={styles.heroStats}>
            {[
              ["500+", "Students Placed"],
              ["120+", "Companies"],
              ["92%", "Placement Rate"],
            ].map(([n, l]) => (
              <div key={l} style={styles.heroStat}>
                <span style={styles.heroStatNum}>{n}</span>
                <span style={styles.heroStatLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroImageWrap}>
          <div style={styles.heroImageRing} />
          <div style={styles.heroImagePlaceholder}>
            <span style={styles.heroInitials}>AS</span>
          </div>
          <div style={styles.heroImageBadge}>
            <span style={{ fontSize: 20 }}>🏆</span>
            <span style={styles.heroBadgeText}>
              Top T&P Officer
              <br />
              2023–24
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;

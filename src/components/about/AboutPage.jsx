import React, { useRef, useState, useEffect } from "react";
import { styles } from "../style/Style";

const AboutPage = () => {
  function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold },
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
  }

  function FadeIn({ children, delay = 0, className = "" }) {
    const [ref, visible] = useInView();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <div>
      {" "}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <FadeIn>
            <div style={styles.sectionTag}>About Me</div>
            <h2 style={styles.sectionTitle}>
              Building careers, one student at a time.
            </h2>
          </FadeIn>
          <div style={styles.aboutGrid}>
            <FadeIn delay={0.1}>
              <div style={styles.aboutCard}>
                <p style={styles.aboutText}>
                  With over <strong>8 years of dedicated experience</strong> as
                  a Training & Placement Officer, I have built a reputation for
                  transforming raw academic talent into industry-ready
                  professionals.
                </p>
                <p style={styles.aboutText}>
                  My approach goes beyond coordinating recruitment drives. I
                  work personally with students to identify their strengths,
                  sharpen their communication, and position them confidently in
                  front of the best companies in the country.
                </p>
                <p style={styles.aboutText}>
                  I have forged partnerships with over{" "}
                  <strong>120 companies</strong> — from Fortune 500 MNCs to
                  high-growth startups — creating a robust placement ecosystem
                  that consistently delivers results above the national average.
                </p>
                <div style={styles.aboutTags}>
                  {[
                    "Career Counselling",
                    "Corporate Relations",
                    "Soft Skills Training",
                    "Aptitude Coaching",
                    "HR Networking",
                    "Placement Strategy",
                  ].map((t) => (
                    <span key={t} style={styles.aboutTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={styles.aboutSide}>
                {[
                  ["🎓", "M.B.A – HR & Marketing", "Pune University, 2015"],
                  ["🏛️", "Currently at", "ABC Institute of Technology, Pune"],
                  ["📍", "Location", "Pune, Maharashtra"],
                  ["📧", "Email", "abasaheb.shelar@aitpune.edu.in"],
                ].map(([icon, label, val]) => (
                  <div key={label} style={styles.aboutInfoRow}>
                    <span style={styles.aboutInfoIcon}>{icon}</span>
                    <div>
                      <div style={styles.aboutInfoLabel}>{label}</div>
                      <div style={styles.aboutInfoVal}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

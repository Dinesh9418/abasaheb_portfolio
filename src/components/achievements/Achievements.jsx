import React, { useState, useEffect, useRef } from "react";
import { styles } from "../style/Style";

const ACHIEVEMENTS = [
  { number: "500+", label: "Students Placed", sub: "across 3 academic years" },
  {
    number: "120+",
    label: "Companies Onboarded",
    sub: "MNCs, mid-size & startups",
  },
  { number: "₹12 LPA", label: "Highest Package", sub: "secured for a student" },
  { number: "92%", label: "Placement Rate", sub: "2023–24 batch" },
  {
    number: "300+",
    label: "Internships Facilitated",
    sub: "paid & stipend-based",
  },
  { number: "8+", label: "Years Experience", sub: "in T&P operations" },
];

const Achievements = () => {
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
      <section
        id="achievements"
        style={{ ...styles.section, background: "#0d1b2a" }}
      >
        <div style={styles.container}>
          <FadeIn>
            <div
              style={{
                ...styles.sectionTag,
                background: "rgba(255,255,255,0.1)",
                color: "#a8c6e8",
              }}
            >
              By the Numbers
            </div>
            <h2 style={{ ...styles.sectionTitle, color: "#fff" }}>
              Results that speak for themselves
            </h2>
          </FadeIn>
          <div style={styles.achievementsGrid}>
            {ACHIEVEMENTS.map((a, i) => (
              <FadeIn key={a.label} delay={i * 0.08}>
                <div style={styles.achieveCard} className="achieve-card">
                  <div style={styles.achieveNum}>{a.number}</div>
                  <div style={styles.achieveLabel}>{a.label}</div>
                  <div style={styles.achieveSub}>{a.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;

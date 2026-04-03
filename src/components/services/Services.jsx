import React, { useState, useEffect, useRef } from "react";
import { styles } from "../style/Style";

const SERVICES = [
  {
    icon: "🎯",
    title: "Campus Placement Drives",
    desc: "End-to-end coordination of on-campus and off-campus recruitment drives with top-tier companies across IT, core, and management sectors.",
  },
  {
    icon: "🧠",
    title: "Interview & Aptitude Training",
    desc: "Structured training programs covering aptitude, logical reasoning, verbal ability, and technical interview preparation.",
  },
  {
    icon: "🤝",
    title: "Industry–Academia Connect",
    desc: "Building long-term partnerships with corporates, facilitating MoUs, guest lectures, and internship pipelines.",
  },
  {
    icon: "📄",
    title: "Resume & Profile Building",
    desc: "One-on-one mentoring to craft impactful resumes, LinkedIn profiles, and personal branding strategies for students.",
  },
  {
    icon: "🏢",
    title: "Corporate Relations",
    desc: "Proactively engaging HR heads and recruiters to expand the company portfolio and secure pre-placement offers.",
  },
  {
    icon: "📊",
    title: "Placement Analytics",
    desc: "Tracking and reporting placement metrics, salary trends, and sector-wise data to guide institutional strategy.",
  },
];

const Services = () => {
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
        id="services"
        style={{ ...styles.section, background: "#f8f9fc" }}
      >
        <div style={styles.container}>
          <FadeIn>
            <div style={styles.sectionTag}>Services</div>
            <h2 style={styles.sectionTitle}>How I drive placement success</h2>
            <p style={styles.sectionSub}>
              A comprehensive suite of services that covers every stage of the
              student-to-professional journey.
            </p>
          </FadeIn>
          <div style={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div style={styles.serviceCard} className="service-card">
                  <div style={styles.serviceIcon}>{s.icon}</div>
                  <h3 style={styles.serviceTitle}>{s.title}</h3>
                  <p style={styles.serviceDesc}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

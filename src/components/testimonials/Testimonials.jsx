import React, { useState, useEffect, useRef } from "react";
import { styles } from "../style/Style";

const TESTIMONIALS = [
  {
    name: "Shubham Jangle",
    role: "Senior Software Engineer, Volkswagen India",
    batch: "Batch of 2021",
    text: "The mock interview sessions and resume workshops completely changed how I approached placements. I got my dream offer because of the preparation support.",
    initials: "SJ",
  },
  {
    name: "Dinesh Jadhav",
    role: "Software Engineer, LTM",
    batch: "Batch of 2021",
    text: "He didn't just coordinate placements — he mentored us individually. That personal attention made all the difference when I was struggling with aptitude rounds.",
    initials: "DJ",
  },
  {
    name: "Ananya Kulkarni",
    role: "HR Manager, Wipro",
    batch: "Batch of 2021",
    text: "The students from this college come exceptionally well-prepared. The T&P team's work in building industry-ready graduates is clearly visible the moment they walk in.",
    initials: "AK",
  },
  {
    name: "Vikram Patil",
    role: "Product Manager, Persistent Systems",
    batch: "Batch of 2024",
    text: "From LinkedIn profile building to salary negotiation tips — the guidance was incredibly practical. I walked into every interview with real confidence.",
    initials: "VP",
  },
];

const Testimonials = () => {
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
      <section id="testimonials" style={styles.section}>
        <div style={styles.container}>
          <FadeIn>
            <div style={styles.sectionTag}>Testimonials</div>
            <h2 style={styles.sectionTitle}>What students & recruiters say</h2>
          </FadeIn>
          <div style={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div style={styles.testimonialCard} className="service-card">
                  <div style={styles.quoteIcon}>"</div>
                  <p style={styles.testimonialText}>{t.text}</p>
                  <div style={styles.testimonialAuthor}>
                    <div style={styles.authorAvatar}>{t.initials}</div>
                    <div>
                      <div style={styles.authorName}>{t.name}</div>
                      <div style={styles.authorRole}>{t.role}</div>
                      <div style={styles.authorBatch}>{t.batch}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

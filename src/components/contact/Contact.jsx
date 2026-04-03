import React, { useEffect, useRef, useState } from "react";
import { styles } from "../style/Style";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div>
      <section
        id="contact"
        style={{ ...styles.section, background: "#f8f9fc" }}
      >
        <div style={styles.container}>
          <FadeIn>
            <div style={styles.sectionTag}>Contact</div>
            <h2 style={styles.sectionTitle}>Let's build something together</h2>
            <p style={styles.sectionSub}>
              Whether you're a company looking to hire or a student seeking
              guidance — reach out.
            </p>
          </FadeIn>
          <div style={styles.contactGrid}>
            <FadeIn delay={0.1}>
              <div style={styles.contactInfo}>
                {[
                  ["📧", "Email", "rajesh.kumar@aitpune.edu.in"],
                  ["📞", "Phone", "+91 98765 43210"],
                  [
                    "📍",
                    "Office",
                    "T&P Cell, ABC Institute of Technology, Pune – 411041",
                  ],
                  ["🕐", "Office Hours", "Mon–Sat, 9:00 AM – 6:00 PM"],
                ].map(([icon, label, val]) => (
                  <div key={label} style={styles.contactRow}>
                    <div style={styles.contactIcon}>{icon}</div>
                    <div>
                      <div style={styles.contactLabel}>{label}</div>
                      <div style={styles.contactVal}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  style={styles.input}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="form-input"
                />
                <input
                  style={styles.input}
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="form-input"
                />
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="form-input"
                />
                <button
                  type="submit"
                  style={styles.submitBtn}
                  className="cta-btn"
                >
                  {sent ? "✓ Message Sent!" : "Send Message →"}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

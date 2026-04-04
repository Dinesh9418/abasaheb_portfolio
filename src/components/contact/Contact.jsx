import React, { useEffect, useRef, useState } from "react";
import { styles } from "../style/Style";

const PHONE = "917770097580";
const PHONE_DISPLAY = "+91 77700 97580";

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

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a WhatsApp message from the form data
    const text = `Hello, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const whatsappSubmitUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappSubmitUrl, "_blank");

    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setFormData({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hello, I found your contact on the website and would like to connect.",
  )}`;

  const smsUrl = `sms:${PHONE_DISPLAY}`;

  return (
    <div>
      <style>{`
        .quick-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          cursor: pointer;
          border: none;
        }
        .quick-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .quick-btn:active { transform: translateY(0); }
        .btn-whatsapp { background: #25D366; color: #fff; }
        .btn-sms { background: #007AFF; color: #fff; }
        .quick-actions-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .quick-actions-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888;
          margin-top: 24px;
          margin-bottom: 4px;
        }
        .form-note {
          font-size: 12px;
          color: #888;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
      `}</style>

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
                  ["📧", "Email", "abasaheb.shelar@aitpune.edu.in"],
                  ["📞", "Phone", PHONE_DISPLAY],
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

                {/* <div className="quick-actions-label">Message directly</div>
                <div className="quick-actions-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-btn btn-whatsapp"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.813A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-4.93-1.301l-.352-.21-4.572 1.078 1.11-4.461-.228-.363A9.96 9.96 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.293 5.5c-.22 0-.576.082-.879.408-.303.327-1.156 1.129-1.156 2.754 0 1.625 1.182 3.195 1.348 3.416.165.22 2.318 3.738 5.707 5.094 2.834 1.118 3.41.896 4.024.84.614-.057 1.979-.809 2.258-1.588.279-.78.279-1.447.195-1.588-.082-.14-.303-.222-.635-.388-.332-.166-1.96-.967-2.264-1.078-.303-.11-.525-.166-.745.166-.22.333-.855 1.078-1.047 1.299-.193.22-.386.248-.718.082-.332-.166-1.402-.516-2.67-1.648-1.266-1.13-2.061-2.394-2.183-2.727-.122-.333-.013-.513.092-.678.094-.148.332-.387.498-.58.166-.193.22-.333.332-.555.11-.22.055-.414-.028-.58-.083-.166-.74-1.793-1.019-2.455-.268-.644-.543-.553-.745-.563l-.635-.01z" />
                    </svg>
                    WhatsApp
                  </a>

                  <a href={smsUrl} className="quick-btn btn-sms">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Send SMS
                  </a>
                </div> */}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  style={styles.input}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
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
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="form-input"
                />
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  className="form-input"
                />
                <button
                  type="submit"
                  style={styles.submitBtn}
                  className="cta-btn"
                >
                  {sent ? "✓ Opening WhatsApp…" : "Send via WhatsApp →"}
                </button>
                <p className="form-note">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 32 32"
                    fill="#25D366"
                  >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.813A12.94 12.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-4.93-1.301l-.352-.21-4.572 1.078 1.11-4.461-.228-.363A9.96 9.96 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.293 5.5c-.22 0-.576.082-.879.408-.303.327-1.156 1.129-1.156 2.754 0 1.625 1.182 3.195 1.348 3.416.165.22 2.318 3.738 5.707 5.094 2.834 1.118 3.41.896 4.024.84.614-.057 1.979-.809 2.258-1.588.279-.78.279-1.447.195-1.588-.082-.14-.303-.222-.635-.388-.332-.166-1.96-.967-2.264-1.078-.303-.11-.525-.166-.745.166-.22.333-.855 1.078-1.047 1.299-.193.22-.386.248-.718.082-.332-.166-1.402-.516-2.67-1.648-1.266-1.13-2.061-2.394-2.183-2.727-.122-.333-.013-.513.092-.678.094-.148.332-.387.498-.58.166-.193.22-.333.332-.555.11-.22.055-.414-.028-.58-.083-.166-.74-1.793-1.019-2.455-.268-.644-.543-.553-.745-.563l-.635-.01z" />
                  </svg>
                  Clicking will open WhatsApp with your message pre-filled
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

const BLUE = "#1a56db";
const DARK = "#0d1b2a";
const TEXT = "#1c2e4c";
const HeaderTEXT = "#5073b4";
const MUTED = "#64748b";

export const styles = {
  root: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: TEXT,
    background: "#fff",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "0 2rem",
    transition: "all 0.3s ease",
  },
  navScrolled: {
    background: "rgba(255,255,255,0.97)",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
  },
  logo: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    color: MUTED,
  },
  logoAccent: { color: BLUE },
  navLinks: { display: "flex", alignItems: "center", gap: 8 },
  navLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    color: HeaderTEXT,
    padding: "6px 12px",
    borderRadius: 6,
    fontFamily: "inherit",
  },
  navCta: {
    background: BLUE,
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: 14,
    padding: "8px 20px",
    borderRadius: 8,
    fontFamily: "inherit",
    fontWeight: 600,
    marginLeft: 8,
  },
  menuBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
    flexDirection: "column",
    gap: 5,
    display: "none", // hidden by default, shown via CSS class below
  },
  bar: {
    width: 24,
    height: 2,
    background: DARK,
    borderRadius: 2,
    transition: "all 0.3s",
    display: "block",
  },
  bar1Open: { transform: "rotate(45deg) translate(5px, 5px)" },
  bar2Open: { opacity: 0 },
  bar3Open: { transform: "rotate(-45deg) translate(5px, -5px)" },
  mobileMenu: {
    background: "#fff",
    borderTop: "1px solid #e2e8f0",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
  },
  mobileLink: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    color: TEXT,
    padding: "12px 2rem",
    textAlign: "left",
    fontFamily: "inherit",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    background: DARK,
    padding: "120px 2rem 80px",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(ellipse at 70% 50%, rgba(26,86,219,0.18) 0%, transparent 60%)`,
  },
  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  },
  heroContent: { flex: 1, maxWidth: 600, position: "relative", zIndex: 2 },
  heroBadge: {
    display: "inline-block",
    background: "rgba(26,86,219,0.2)",
    color: "#93c5fd",
    fontSize: 13,
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: 20,
    marginBottom: 24,
    border: "1px solid rgba(26,86,219,0.3)",
    letterSpacing: "0.05em",
  },
  heroName: {
    fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.1,
    marginBottom: 20,
    letterSpacing: "-1px",
  },
  heroNameAccent: { color: "#60a5fa" },
  heroTagline: {
    fontSize: 18,
    color: "#94a3b8",
    lineHeight: 1.7,
    marginBottom: 36,
  },
  heroActions: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 },
  heroPrimary: {
    background: BLUE,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
    padding: "14px 28px",
    borderRadius: 10,
    fontFamily: "inherit",
  },
  heroSecondary: {
    background: "transparent",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.25)",
    cursor: "pointer",
    fontSize: 15,
    padding: "14px 28px",
    borderRadius: 10,
    fontFamily: "inherit",
  },
  heroStats: { display: "flex", gap: 32 },
  heroStat: { display: "flex", flexDirection: "column" },
  heroStatNum: { fontSize: 28, fontWeight: 700, color: "#fff" },
  heroStatLabel: { fontSize: 13, color: "#64748b", marginTop: 2 },
  heroImageWrap: { position: "relative", marginLeft: 60, flexShrink: 0 },
  heroImageRing: {
    position: "absolute",
    inset: -16,
    border: "2px solid rgba(26,86,219,0.3)",
    borderRadius: "50%",
  },
  heroImagePlaceholder: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1e3a5f 0%, #1a56db 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid rgba(255,255,255,0.1)",
  },
  heroInitials: {
    fontSize: 72,
    fontWeight: 700,
    color: "rgba(255,255,255,0.8)",
  },
  heroImageBadge: {
    position: "absolute",
    bottom: 10,
    right: -20,
    background: "#fff",
    borderRadius: 12,
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
  },
  heroBadgeText: {
    fontSize: 12,
    fontWeight: 600,
    color: DARK,
    lineHeight: 1.4,
  },

  section: { padding: "80px 2rem" },
  container: { maxWidth: 1200, margin: "0 auto" },
  sectionTag: {
    display: "inline-block",
    background: "#eff6ff",
    color: BLUE,
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 14px",
    borderRadius: 20,
    marginBottom: 14,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    fontWeight: 700,
    color: DARK,
    marginBottom: 16,
    letterSpacing: "-0.5px",
    lineHeight: 1.2,
  },
  sectionSub: {
    fontSize: 16,
    color: MUTED,
    maxWidth: 560,
    lineHeight: 1.7,
    marginBottom: 48,
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: 48,
    marginTop: 48,
    alignItems: "start",
  },
  aboutCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "2rem",
  },
  aboutText: { fontSize: 16, color: TEXT, lineHeight: 1.8, marginBottom: 16 },
  aboutTags: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 },
  aboutTag: {
    background: "#eff6ff",
    color: BLUE,
    fontSize: 13,
    padding: "4px 12px",
    borderRadius: 20,
    fontWeight: 500,
  },
  aboutSide: { display: "flex", flexDirection: "column", gap: 0 },
  aboutInfoRow: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    padding: "16px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  aboutInfoIcon: { fontSize: 20, minWidth: 28 },
  aboutInfoLabel: {
    fontSize: 12,
    color: MUTED,
    marginBottom: 3,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 600,
  },
  aboutInfoVal: { fontSize: 14, color: TEXT, fontWeight: 500 },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24,
    marginTop: 48,
  },
  serviceCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "1.75rem",
    cursor: "default",
  },
  serviceIcon: { fontSize: 32, marginBottom: 14 },
  serviceTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: DARK,
    marginBottom: 10,
  },
  serviceDesc: { fontSize: 14, color: MUTED, lineHeight: 1.7 },

  achievementsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: 24,
    marginTop: 48,
  },
  achieveCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: "2rem 1.5rem",
    textAlign: "center",
  },
  achieveNum: {
    fontSize: 40,
    fontWeight: 700,
    color: "#60a5fa",
    marginBottom: 8,
  },
  achieveLabel: {
    fontSize: 15,
    fontWeight: 600,
    color: "#fff",
    marginBottom: 6,
  },
  achieveSub: { fontSize: 12, color: "#64748b" },

  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24,
    marginTop: 48,
  },
  testimonialCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "1.75rem",
  },
  quoteIcon: {
    fontSize: 48,
    color: "#bfdbfe",
    lineHeight: 1,
    marginBottom: 8,
    fontFamily: "Georgia, serif",
  },
  testimonialText: {
    fontSize: 14,
    color: TEXT,
    lineHeight: 1.8,
    marginBottom: 20,
    fontStyle: "italic",
  },
  testimonialAuthor: { display: "flex", alignItems: "center", gap: 12 },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: BLUE,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0,
  },
  authorName: { fontSize: 14, fontWeight: 700, color: DARK },
  authorRole: { fontSize: 12, color: MUTED },
  authorBatch: { fontSize: 11, color: "#94a3b8", marginTop: 2 },

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    marginTop: 48,
    alignItems: "start",
  },
  contactInfo: { display: "flex", flexDirection: "column", gap: 0 },
  contactRow: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    padding: "20px 0",
    borderBottom: "1px solid #f1f5f9",
  },
  contactIcon: { fontSize: 22, minWidth: 32 },
  contactLabel: {
    fontSize: 12,
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontWeight: 600,
    marginBottom: 4,
  },
  contactVal: { fontSize: 15, color: TEXT },
  form: { display: "flex", flexDirection: "column", gap: 14 },
  input: {
    padding: "14px 16px",
    border: "1.5px solid #e2e8f0",
    borderRadius: 10,
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    background: "#fff",
    color: TEXT,
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: { minHeight: 120, resize: "vertical" },
  submitBtn: {
    background: BLUE,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
    padding: "14px",
    borderRadius: 10,
    fontFamily: "inherit",
    marginTop: 4,
  },

  footer: { background: DARK, padding: "24px 2rem" },
  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  footerLogo: { fontSize: 16, fontWeight: 700, color: "#fff" },
  footerText: { fontSize: 13, color: "#475569" },
};

export const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .nav-link:hover { background: #f1f5f9 !important; }
  .cta-btn:hover { opacity: 0.88; transform: translateY(-1px); transition: all 0.2s; }
  .outline-btn:hover { background: rgba(255,255,255,0.08) !important; }
  .service-card:hover { border-color: #bfdbfe !important; transform: translateY(-3px); transition: all 0.25s; }
  .achieve-card:hover { background: rgba(255,255,255,0.08) !important; transition: all 0.25s; }
  .form-input:focus { border-color: #1a56db !important; box-shadow: 0 0 0 3px rgba(26,86,219,0.1); }

  /* ── Hamburger: hidden on desktop, shown on mobile ── */
  .menu-btn { display: none !important; }

  @media (max-width: 900px) {
    /* Show hamburger, hide desktop nav */
    .menu-btn { display: flex !important; }
    .nav-links-wrap { display: none !important; }

    /* Hero: stack vertically, hide image */
    .hero-image-wrap { display: none !important; }
    .hero-inner { flex-direction: column !important; }
    .hero-content { max-width: 100% !important; text-align: center; }
    .hero-actions { justify-content: center !important; }
    .hero-stats { justify-content: center !important; }
  }

  @media (max-width: 768px) {
    /* Stack all 2-col grids */
    .about-grid   { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }

    /* Reduce section padding */
    .section-pad { padding: 48px 1.25rem !important; }

    /* Footer stack */
    .footer-inner { flex-direction: column !important; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-stats { flex-direction: column !important; gap: 16px !important; align-items: center; }
    .hero-actions { flex-direction: column !important; width: 100%; }
    .hero-actions button { width: 100% !important; }
  }
`;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ExternalLink, GitFork } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "#"; // ← Replace with your actual resume URL

const SiteHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Glassmorphism on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isDark = theme === "dark";

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    background: scrolled
      ? isDark
        ? "rgba(7, 10, 18, 0.85)"
        : "rgba(248, 250, 252, 0.85)"
      : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
    boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.15)" : "none",
  };

  return (
    <>
      <header style={headerStyle}>
        <div
          className="container-max"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
          }}
        >
          {/* ── Logo ─────────────────────────────── */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "1.75rem",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #6366F1, #8B5CF6, #22D3EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              cursor: "pointer",
            }}
          >
            K.
          </motion.a>

          {/* ── Desktop Nav ──────────────────────── */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  style={{
                    padding: "0.45rem 0.85rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease, background 0.2s ease",
                    background: isActive
                      ? "rgba(99, 102, 241, 0.1)"
                      : "transparent",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.background =
                        "rgba(99, 102, 241, 0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "2px",
                        borderRadius: "1px",
                        background: "var(--color-primary)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </motion.nav>

          {/* ── Right Actions ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid var(--border-color)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.background =
                  "rgba(99, 102, 241, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun size={18} style={{ color: "#f59e0b" }} />
                  ) : (
                    <Moon size={18} style={{ color: "#6366f1" }} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Resume Button (desktop) */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary resume-btn"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              Resume
              <ExternalLink size={14} />
            </a>

            {/* Hamburger (mobile) */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle Menu"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid var(--border-color)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>

        {/* ── Mobile Menu ──────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                background: isDark
                  ? "rgba(7, 10, 18, 0.97)"
                  : "rgba(248, 250, 252, 0.97)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid var(--border-color)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "1rem 1.5rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {NAV_LINKS.map(({ label, href }, i) => {
                  const sectionId = href.slice(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        fontSize: "1rem",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--text-primary)",
                        textDecoration: "none",
                        background: isActive
                          ? "rgba(99, 102, 241, 0.1)"
                          : "transparent",
                        borderLeft: isActive
                          ? "3px solid var(--color-primary)"
                          : "3px solid transparent",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {label}
                    </motion.a>
                  );
                })}

                {/* Mobile: Theme + Resume */}
                <div
                  style={{
                    marginTop: "0.75rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-color)",
                    display: "flex",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    onClick={toggleTheme}
                    style={{
                      flex: 1,
                      padding: "0.75rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border-color)",
                      background: "var(--bg-card)",
                      color: "var(--text-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {isDark ? (
                      <><Sun size={16} style={{ color: "#f59e0b" }} /> Light Mode</>
                    ) : (
                      <><Moon size={16} style={{ color: "#6366f1" }} /> Dark Mode</>
                    )}
                  </button>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: "center", fontSize: "0.9rem" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive Nav CSS */}
      <style>{`
        .desktop-nav { display: flex; }
        .resume-btn { display: inline-flex; }
        .hamburger-btn { display: none; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .resume-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default SiteHeader;

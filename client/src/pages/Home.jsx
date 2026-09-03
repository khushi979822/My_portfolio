import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GitFork,
  Link2,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Layers,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  ChevronRight,
  Send,
  CheckCircle,
  AlertCircle,
  Trophy,
  Star,
  Users,
  Terminal,
  Cpu,
} from "lucide-react";

// Icon aliases for clarity
const Github = GitFork;
const Linkedin = Link2;
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import profileImg from "../assets/hero.png";

/* ─────────────────────────────────────────────────────────────
   REPLACE THESE WITH YOUR ACTUAL LINKS
───────────────────────────────────────────────────────────── */
const LINKS = {
  github: "https://github.com/khushi979822",        // ← Replace
  linkedin: "YOUR_LINKEDIN_URL",                     // ← Replace
  leetcode: "YOUR_LEETCODE_URL",                     // ← Replace
  hackerrank: "YOUR_HACKERRANK_URL",                 // ← Replace
  project1Github: "YOUR_CRAVINGS_GITHUB_URL",        // ← Replace
  project1Live: "#",
  project2Github: "YOUR_AUTH_GITHUB_URL",            // ← Replace
  project2Live: "#",
  project3Github: "YOUR_TRADEQUEST_GITHUB_URL",      // ← Replace
  project3Live: "#",
};

/* ─────────────────────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionWrapper({ children, id, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={`section-padding ${className}`}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-max">{children}</div>
    </motion.section>
  );
}

function SectionHead({ label, title, subtitle, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ marginBottom: "3.5rem", textAlign: center ? "center" : "left" }}
    >
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{ margin: center ? "0 auto" : "0" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const STATS = [
    { value: "3+", label: "Projects", icon: <Code2 size={20} /> },
    { value: "90%", label: "NPTEL Score", icon: <Award size={20} /> },
    { value: "2+", label: "Certifications", icon: <Star size={20} /> },
    { value: "IEEE", label: "Web Master", icon: <Users size={20} /> },
  ];

  const SOCIALS = [
    { href: LINKS.github, icon: <Github size={20} />, label: "GitHub" },
    { href: LINKS.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: `mailto:khushi@example.com`, icon: <Mail size={20} />, label: "Email" },
  ];

  const TECH_ICONS = [
    { label: "Java", emoji: "☕", top: "10%", left: "5%", delay: 0 },
    { label: "React", emoji: "⚛️", top: "20%", right: "8%", delay: 0.5 },
    { label: "Node", emoji: "🟢", bottom: "30%", left: "2%", delay: 1 },
    { label: "MongoDB", emoji: "🍃", bottom: "15%", right: "5%", delay: 1.5 },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-max"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          padding: "0 1.5rem",
        }}
      >
        {/* ── Left: Text ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="badge"
            style={{ marginBottom: "1.5rem", display: "inline-flex" }}
          >
            <span>👋</span> Hello, I'm
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              fontSize: "clamp(2.75rem, 6vw, 4.25rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
              color: "var(--text-primary)",
            }}
          >
            Khushi{" "}
            <span className="gradient-text">Kumari</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              marginBottom: "1.25rem",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            Java Developer &amp; Full-Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            I build secure, scalable and efficient web applications using Java
            and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}>
              View Projects <ChevronRight size={16} />
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}>
              Contact Me <Mail size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: "0.75rem" }}
          >
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-card)",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-primary)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--glow-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ─────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ position: "relative", display: "flex", justifyContent: "center" }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: "relative",
              width: "340px",
              height: "340px",
            }}
          >
            {/* Rotating gradient ring */}
            <div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, #6366F1, #8B5CF6, #22D3EE, #6366F1)",
                animation: "spin-slow 6s linear infinite",
              }}
            />

            {/* Profile image */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: "4px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid var(--bg-secondary)",
              }}
              className="animate-pulse-glow"
            >
              <img
                src={profileImg}
                alt="Khushi Kumari — Java & Full-Stack Developer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </motion.div>

            {/* Badge: Java + MERN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
              }}
            >
              ☕ Java + ⚛️ MERN
            </motion.div>
          </div>

          {/* Floating tech icons */}
          {TECH_ICONS.map(({ label, emoji, top, left, right, bottom, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + delay, type: "spring" }}
              style={{
                position: "absolute",
                top,
                left,
                right,
                bottom,
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                boxShadow: "var(--shadow-card)",
                animation: `float ${3 + delay}s ease-in-out infinite`,
              }}
              title={label}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Stats Row ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: 0,
          right: 0,
          padding: "0 1.5rem",
        }}
      >
        <div
          className="container-max"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {STATS.map(({ value, label, icon }) => (
            <div
              key={label}
              className="glass-card"
              style={{
                padding: "1.25rem 1rem",
                textAlign: "center",
                background: "var(--bg-glass)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "0.35rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "0.25rem",
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hero responsive styles */}
      <style>{`
        #hero > div:first-of-type > div.container-max {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          #hero > div:first-of-type > div.container-max,
          #hero .container-max {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero .container-max > div:first-child {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          #hero .container-max > div:last-child {
            justify-content: center;
          }
          #hero > div:last-of-type .container-max {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          #hero > div:last-of-type .container-max {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────────────────── */
function AboutSection() {
  const INFO = [
    { label: "Name", value: "Khushi Kumari" },
    { label: "Education", value: "B.Tech CSE" },
    { label: "College", value: "Jai Narain College of Technology (LNCT Group), Bhopal" },
    { label: "CGPA", value: "8.38" },
    { label: "Graduation", value: "2027" },
  ];

  return (
    <SectionWrapper id="about" style={{ background: "var(--bg-secondary)" }}>
      <style>{`#about { background: var(--bg-secondary) !important; }`}</style>
      <SectionHead
        label="About Me"
        title="Building with purpose."
        subtitle="A passionate developer focused on Java and full-stack development."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left: Bio */}
        <motion.div variants={fadeUp}>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}
          >
            I'm <strong style={{ color: "var(--text-primary)" }}>Khushi Kumari</strong>, a B.Tech Computer Science and Engineering student at{" "}
            <strong style={{ color: "var(--color-primary)" }}>
              Jai Narain College of Technology (LNCT Group)
            </strong>
            , Bhopal.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}
          >
            I focus on Java, full-stack development, Data Structures & Algorithms,
            Object-Oriented Programming and database systems.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.85,
            }}
          >
            I enjoy building secure, responsive and practical applications that
            solve real-world problems.
          </p>

          {/* Quick highlights */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {["Java", "MERN Stack", "DSA", "OOP", "DBMS"].map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Right: Info Card */}
        <motion.div variants={fadeUp}>
          <div
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Personal Info
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Quick overview</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {INFO.map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container-max > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   SKILLS SECTION
───────────────────────────────────────────────────────────── */
function SkillsSection() {
  const SKILL_CATEGORIES = [
    {
      title: "Programming",
      icon: <Terminal size={22} />,
      color: "#6366F1",
      skills: ["Java"],
    },
    {
      title: "Web Development",
      icon: <Globe size={22} />,
      color: "#8B5CF6",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
    },
    {
      title: "Database",
      icon: <Database size={22} />,
      color: "#22D3EE",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Core CS",
      icon: <Cpu size={22} />,
      color: "#10b981",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS"],
    },
    {
      title: "Tools & IDE",
      icon: <Code2 size={22} />,
      color: "#f59e0b",
      skills: ["Git", "GitHub", "VS Code", "Eclipse"],
    },
    {
      title: "Full-Stack",
      icon: <Layers size={22} />,
      color: "#ef4444",
      skills: ["REST API", "JWT Authentication", "CRUD Operations", "MVC Architecture"],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHead
        label="Skills"
        title="Technical Skills"
        subtitle="Technologies and tools I work with daily."
        center
      />

      <motion.div
        variants={stagger}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {SKILL_CATEGORIES.map(({ title, icon, color, skills }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="glass-card"
            style={{ padding: "1.75rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: `${color}20`,
                  border: `1px solid ${color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color,
                }}
              >
                {icon}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                {title}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROJECTS SECTION
───────────────────────────────────────────────────────────── */
function ProjectsSection() {
  const PROJECTS = [
    {
      title: "Cravings_1108",
      category: "Full-Stack MERN Application",
      description:
        "Developed a full-stack MERN application with secure JWT authentication and responsive user interfaces. Built RESTful APIs using Node.js, Express.js and MongoDB for efficient data management. Designed reusable React components and optimized CRUD operations for better performance and scalability.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      github: LINKS.project1Github,
      live: LINKS.project1Live,
      gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
      icon: "🍔",
    },
    {
      title: "User Authentication System",
      category: "Security-Focused MERN Project",
      description:
        "Developed a secure user authentication system with login, registration and JWT-based authorization. Implemented password encryption, protected routes and role-based access control. Built RESTful APIs and integrated MongoDB for efficient user management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RBAC"],
      github: LINKS.project2Github,
      live: LINKS.project2Live,
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)",
      icon: "🔐",
    },
    {
      title: "TradeQuest",
      category: "Stock Trading & Portfolio Management Platform",
      description:
        "Developed a full-stack trading platform with secure user authentication and portfolio management features. Built RESTful APIs for stock tracking, transaction management and portfolio updates. Designed a responsive React dashboard for enhanced user experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      github: LINKS.project3Github,
      live: LINKS.project3Live,
      gradient: "linear-gradient(135deg, #22D3EE 0%, #6366F1 100%)",
      icon: "📈",
    },
  ];

  return (
    <SectionWrapper id="projects" style={{ background: "var(--bg-secondary)" }}>
      <style>{`#projects { background: var(--bg-secondary) !important; }`}</style>
      <SectionHead
        label="Projects"
        title="My Projects"
        subtitle="Projects that showcase my skills and passion for development."
        center
      />

      <motion.div
        variants={stagger}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}
      >
        {PROJECTS.map(({ title, category, description, tech, github, live, gradient, icon }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="glass-card"
            style={{ overflow: "hidden" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card header */}
            <div
              style={{
                height: "160px",
                background: gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.15)",
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>{icon}</span>
            </div>

            {/* Card body */}
            <div style={{ padding: "1.75rem" }}>
              <div className="badge" style={{ marginBottom: "0.75rem", fontSize: "0.72rem" }}>
                {category}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {description}
              </p>

              {/* Tech badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: "center", padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   EXPERIENCE SECTION  (Timeline)
───────────────────────────────────────────────────────────── */
function ExperienceSection() {
  const TIMELINE = [
    {
      type: "Certification",
      icon: <Award size={20} />,
      title: "Programming in Java — NPTEL",
      org: "IIT Kharagpur",
      period: "Jan 2026 – May 2026",
      highlight: "Score: 90%",
      description:
        "Java programming, OOP, exception handling, collections and file handling. Achieved 90% score in the nationally recognized NPTEL certification.",
      color: "#6366F1",
    },
    {
      type: "Internship",
      icon: <Briefcase size={20} />,
      title: "Java Full Stack Developer Virtual Internship",
      org: "AICTE & EduSkills Foundation",
      period: "Apr 2025 – Jun 2025",
      highlight: "10-Week Program",
      description:
        "Built scalable web applications using Java/MVC during a 10-week virtual internship under AICTE's skill development initiative.",
      color: "#8B5CF6",
    },
    {
      type: "Certification",
      icon: <Award size={20} />,
      title: "Introduction to Cybersecurity",
      org: "Cisco Networking Academy",
      period: "Dec 2024",
      highlight: "Cisco Certified",
      description:
        "Network security fundamentals, cyber threat mitigation and enterprise infrastructure protection.",
      color: "#22D3EE",
    },
  ];

  return (
    <SectionWrapper id="experience">
      <SectionHead
        label="Experience & Certifications"
        title="My Journey"
        subtitle="Internships, certifications and continuous learning."
      />

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical line */}
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "7px",
            top: 0,
            bottom: 0,
            width: "2px",
            borderRadius: "1px",
          }}
        />

        {TIMELINE.map(({ type, icon, title, org, period, highlight, description, color }, i) => (
          <motion.div
            key={title}
            variants={fadeUp}
            custom={i}
            style={{
              position: "relative",
              paddingLeft: "2.5rem",
              paddingBottom: "2.5rem",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "-25px",
                top: "4px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "0.9rem",
                boxShadow: `0 0 15px ${color}60`,
                zIndex: 1,
              }}
            >
              {icon}
            </div>

            {/* Card */}
            <div className="glass-card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: `${color}20`,
                      color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {type}
                  </span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: 500 }}>
                    {org}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{period}</p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "0.25rem",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "6px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      background: `${color}20`,
                      color,
                    }}
                  >
                    {highlight}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   LEADERSHIP SECTION
───────────────────────────────────────────────────────────── */
function LeadershipSection() {
  const RESPONSIBILITIES = [
    "Developed and maintained the IEEE Student Branch website",
    "Managed the IEEE Student Branch Instagram page",
    "Coordinated Rapid Solve technical event",
    "Coordinated IEEE technical events and workshops",
  ];

  return (
    <SectionWrapper id="leadership" style={{ background: "var(--bg-secondary)" }}>
      <style>{`#leadership { background: var(--bg-secondary) !important; }`}</style>
      <SectionHead
        label="Leadership"
        title="Leadership & Responsibility"
        subtitle="Taking initiative and making an impact."
      />

      <motion.div variants={fadeUp}>
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Accent gradient decoration */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #6366F1, #8B5CF6, #22D3EE)",
            }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                flexShrink: 0,
                boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
              }}
            >
              ⚡
            </div>

            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                Web Master &amp; Event Coordinator
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: "1.5rem" }}>
                IEEE Student Branch
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {RESPONSIBILITIES.map((resp, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <ChevronRight size={12} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   ACHIEVEMENTS SECTION
───────────────────────────────────────────────────────────── */
function AchievementsSection() {
  const ACHIEVEMENTS = [
    {
      icon: "🏆",
      value: "90%",
      label: "NPTEL Certification Score",
      desc: "Programming in Java — IIT Kharagpur",
      color: "#6366F1",
    },
    {
      icon: "🥈",
      value: "2nd Rank",
      label: "Class Topper",
      desc: "Diploma Program",
      color: "#8B5CF6",
    },
    {
      icon: "🥉",
      value: "3rd Rank",
      label: "Board Examination",
      desc: "10th Standard",
      color: "#22D3EE",
    },
  ];

  return (
    <SectionWrapper id="achievements">
      <SectionHead
        label="Achievements"
        title="Milestones"
        subtitle="Recognition and accomplishments I'm proud of."
        center
      />

      <motion.div
        variants={stagger}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {ACHIEVEMENTS.map(({ icon, value, label, desc, color }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="glass-card"
            style={{ padding: "2rem", textAlign: "center" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
            <div
              style={{
                fontSize: "2.25rem",
                fontWeight: 900,
                color,
                marginBottom: "0.35rem",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {value}
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.35rem",
              }}
            >
              {label}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const CONTACT_INFO = [
    { icon: <Mail size={20} />, label: "Email", value: "khushikumari@example.com", href: "mailto:khushikumari@example.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/khushi", href: LINKS.linkedin },
    { icon: <Github size={20} />, label: "GitHub", value: "github.com/khushi979822", href: LINKS.github },
  ];

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const { data } = await axios.post("/api/contact", form);
      if (data.success) {
        setStatus("success");
        toast.success("Message sent! I'll get back to you soon. 🎉");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setStatus("error");
      toast.error(err?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <SectionWrapper id="contact" style={{ background: "var(--bg-secondary)" }}>
      <style>{`#contact { background: var(--bg-secondary) !important; }`}</style>
      <SectionHead
        label="Contact"
        title={<>Have an idea?<br />Let's build it.</>}
        subtitle="I'm open to internships, software development opportunities, collaborations and interesting projects."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left: Contact Info */}
        <motion.div variants={fadeUp}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
            Get in Touch
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-card)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(99,102,241,0.1)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>{label}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div variants={fadeUp}>
          <form onSubmit={handleSubmit}>
            <div
              className="glass-card"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="form-input"
                  style={{ resize: "vertical", minHeight: "120px" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle size={16} /> Sent!</>
                ) : status === "error" ? (
                  <><AlertCircle size={16} /> Try Again</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container-max > div { grid-template-columns: 1fr !important; }
          form > div.glass-card > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div className="container-max">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 900,
              background: "linear-gradient(135deg, #6366F1, #8B5CF6, #22D3EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            K.
          </span>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Khushi Kumari. Built with ❤️ using React & Node.js
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {[
              { href: LINKS.github, icon: <Github size={18} /> },
              { href: LINKS.linkedin, icon: <Linkedin size={18} /> },
              { href: "mailto:khushikumari@example.com", icon: <Mail size={18} /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   HOME  (Main Export)
───────────────────────────────────────────────────────────── */
const Home = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
            borderRadius: "12px",
            fontSize: "0.9rem",
          },
        }}
      />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;

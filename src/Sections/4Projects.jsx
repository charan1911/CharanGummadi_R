import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects({ dark }) {
  const projects = [
    {
      title: "Local Services App",
      desc: "A real-time mobile platform connecting users with nearby service providers using location intelligence and live updates.",
      tech: "React Native • Node.js • Socket.IO • MongoDB",
      links: { live: "#", code: "#" },
    },
    {
      title: "Car Rental Web App",
      desc: "Full-stack booking system with authentication, car listings, and seamless API-driven workflows for end-to-end rental management.",
      tech: "React • Flask • REST APIs • Redux",
      links: { live: "#", code: "#" },
    },
  ];

  const styles = {
container: {
  padding: "40px 20px",
  fontFamily: "Inter, sans-serif",
  color: dark ? "#e5e7eb" : "#111827",

  background: dark
    ? "linear-gradient(135deg, #020617, #0f172a)"
    : "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
},

    title: {
      fontSize: "28px",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "35px",
    },

    grid: {
      display: "grid",
      gap: "20px",
      //maxWidth: "900px",
      margin: "0 auto",
    },

card: {
  padding: "22px",
  borderRadius: "14px",

  // 🌫️ glass base
  background: dark
    ? "rgba(15, 23, 42, 0.5)"
    : "rgba(255, 255, 255, 0.6)",

  backdropFilter: "blur(12px)",   // 🔥 stronger blur
  WebkitBackdropFilter: "blur(12px)",

  // ✨ edge highlight (important for glass feel)
  border: dark
    ? "1px solid rgba(255,255,255,0.12)"
    : "1px solid rgba(255,255,255,0.6)",

  // 🌗 layered shadow (depth)
  boxShadow: dark
    ? "0 8px 30px rgba(0,0,0,0.5)"
    : "0 8px 25px rgba(0,0,0,0.08)",

  transition: "all 0.25s ease",
},

    titleCard: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
    },

    desc: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: dark ? "#cbd5f5" : "#374151",
      marginBottom: "10px",
    },

    tech: {
      fontSize: "13px",
      color: dark ? "#94a3b8" : "#6b7280",
      marginBottom: "14px",
    },

    actions: {
      display: "flex",
      gap: "10px",
    },

    button: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 12px",
      borderRadius: "999px",

      border: dark
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid rgba(0,0,0,0.1)",

      background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)",

      color: dark ? "#e5e7eb" : "#111827",
      textDecoration: "none",
      fontSize: "13px",

      transition: "all 0.2s ease",
    },
  };

  return (
    <div id="projects" style={styles.container}>
      <div style={styles.title}>Projects</div>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div style={styles.card}>
              <div style={styles.titleCard}>{project.title}</div>
              <div style={styles.desc}>{project.desc}</div>
              <div style={styles.tech}>{project.tech}</div>

              <div style={styles.actions}>
                <a href={project.links.live} style={styles.button}>
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.links.code} style={styles.button}>
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

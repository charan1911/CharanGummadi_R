import {
  Code,
  Storage,
  Security,
  Terminal,
  Build,
  Api,
} from "@mui/icons-material";

import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import GitHubIcon from "@mui/icons-material/GitHub";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

function Skills({ dark }) {
  const skillData = [
    {
      title: "Front-End & UI",
      items: [
        { name: "React.js", icon: <Code />, color: "#61dafb" },
        { name: "React Native", icon: <Code />, color: "#61dafb" },
        { name: "React Native Paper", icon: <Code />, color: "#818cf8" },
        { name: "HTML", icon: <HtmlIcon />, color: "#f97316" },
        { name: "CSS", icon: <CssIcon />, color: "#3b82f6" },
      ],
    },
    {
      title: "Databases & Real-Time",
      items: [
        { name: "MongoDB", icon: <Storage />, color: "#10b981" },
        { name: "Mongoose", icon: <Storage />, color: "#22c55e" },
        { name: "Socket.IO", icon: <Api />, color: "#94a3b8" },
        { name: "Express.js", icon: <Api />, color: "#9ca3af" },
        { name: "REST API", icon: <Api />, color: "#06b6d4" },
      ],
    },
    {
      title: "Authentication & State Management",
      items: [
        { name: "JWT", icon: <Security />, color: "#f59e0b" },
        { name: "Redux", icon: <IntegrationInstructionsIcon />, color: "#a855f7" },
      ],
    },
    {
      title: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <JavascriptIcon />, color: "#facc15" },
        { name: "Python", icon: <Code />, color: "#3b82f6" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: <Build />, color: "#f97316" },
        { name: "GitHub", icon: <GitHubIcon />, color: dark ? "#fff" : "#111" },
        { name: "Postman", icon: <Api />, color: "#fb923c" },
      ],
    },
    {
      title: "Operating System & Scripting",
      items: [
        { name: "Linux (CLI)", icon: <Terminal />, color: "#84cc16" },
        { name: "Shell Scripting", icon: <Terminal />, color: "#22c55e" },
      ],
    },
  ];

  const styles = {
    container: {
      padding: "40px 20px",
      fontFamily: "Inter, sans-serif",
      color: dark ? "#e5e7eb" : "#111827",
    },

    title: {
      textAlign: "center",
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "30px",
    },

    grid: {
      //maxWidth: "900px",
      margin: "0 auto",
      display: "grid",
      gap: "18px",
    },

    card: {
      padding: "16px 0",
      borderBottom: dark
        ? "1px solid #374151"
        : "1px solid #e5e7eb",
    },

    category: {
      fontSize: "15px",
      fontWeight: "600",
      marginBottom: "10px",
      color: dark ? "#9ca3af" : "#6b7280",
    },

    skillsWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
    },

    skill: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "13px",
    },

    icon: (color) => ({
      fontSize: "18px",
      color: color,
    }),
  };

  return (
    <div id="skills" style={styles.container}>
      <div style={styles.title}>Skills</div>

      <div style={styles.grid}>
        {skillData.map((section, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.category}>{section.title}</div>

            <div style={styles.skillsWrap}>
              {section.items.map((item, i) => (
                <div key={i} style={styles.skill}>
                  <span style={styles.icon(item.color)}>
                    {item.icon}
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
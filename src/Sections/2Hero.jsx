import { useEffect, useState } from "react";
import profilePic from "../assets/ProfilePicture.jpg";

function Hero({ dark, setDark }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const styles = {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",
      padding: isMobile ? "20px 15px" : "40px 60px",

      boxSizing: "border-box",

      background: dark
        ? "rgba(0, 0, 0, 0)"
        : "rgba(255, 255, 255, 0)",

      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",

      borderBottom: dark
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.06)",

      color: dark ? "#e5e7eb" : "#111827",
    },

    left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      marginBottom: isMobile ? "20px" : "0",
    },

    image: {
      width: isMobile ? "160px" : "220px",
      height: isMobile ? "160px" : "220px",
      borderRadius: "20px",
      objectFit: "cover",

      border: dark
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.05)",

      boxShadow: dark
        ? "0 10px 30px rgba(0,0,0,0.5)"
        : "0 8px 25px rgba(0,0,0,0.08)",
    },

    toggle: {
      width: "52px",
      height: "26px",
      borderRadius: "999px",
      background: dark ? "#1e293b" : "#e5e7eb",
      display: "flex",
      alignItems: "center",
      padding: "3px",
      cursor: "pointer",
    },

    circle: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: dark ? "#facc15" : "#111827",
      transform: dark ? "translateX(26px)" : "translateX(0px)",
      transition: "0.25s",
    },

    right: {
      maxWidth: "600px",
      textAlign: isMobile ? "center" : "left",
    },

    name: {
      fontSize: isMobile ? "22px" : "32px",
      fontWeight: "700",
      marginBottom: "6px",
    },

    role: {
      fontSize: "15px",
      color: dark ? "#94a3b8" : "#6b7280",
      marginBottom: "15px",
    },

    text: {
      fontSize: "15px",
      lineHeight: "1.7",
      color: dark ? "#cbd5f5" : "#374151",
    },
  };

  return (
    <div style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <img src={profilePic} alt="Profile" style={styles.image} />

        <div style={styles.toggle} onClick={() => setDark(!dark)}>
          <div style={styles.circle}></div>
        </div>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <div style={styles.name}>Charan Gummadi</div>
        <div style={styles.role}>Full Stack Developer</div>

        <div style={styles.text}>
          Full Stack Developer building scalable web and mobile apps using
          React, React Native, and Node.js. Experienced in real-time systems,
          API design, and performance optimization, with a focus on clean UI/UX
          and secure backend architecture.
        </div>
      </div>
    </div>
  );
}

export default Hero;
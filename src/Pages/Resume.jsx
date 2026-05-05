import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

import Hero from "../Sections/2Hero";
import Experience from "../Sections/3Experience";
import Projects from "../Sections/4Projects";
import Skills from "../Sections/5Skills";
import Education from "../Sections/6Education";
import Interests from "../Sections/7Interests";
import Contact from "../Sections/8Contact";

function Resume() {
  const [dark, setDark] = useState(false);

  const styles = {
    page: {
      position: "relative",
      minHeight: "100vh",
      background: dark
        ? "linear-gradient(135deg, #020617, #0f172a)"
        : "linear-gradient(135deg, #f8fafc, #eef2ff)",
      transition: "0.4s",
      overflow: "hidden",
    },

    floating: {
      position: "fixed", // 🔥 important (not absolute)
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 1,
    },

    icon: {
      position: "absolute",
      opacity: dark ? 0.08 : 0.05,
      color: dark ? "#38bdf8" : "#6366f1",
    },

    content: {
      position: "relative",
      zIndex: 2,
    },
  };

  return (
    <div style={styles.page}>

      {/* 🌫️ Floating Icons */}
      <div style={styles.floating}>

        {/* 🔥 TEST ICON (big + visible for blur check) */}
        <motion.div
          style={{
            ...styles.icon,
            top: "20%",
            left: "40%",
            opacity: 0.50, // 👈 high for testing
          }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaReact size={200} />
        </motion.div>

        {/* existing icons */}
        <motion.div
          style={{ ...styles.icon, top: "10%", left: "10%" }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <FaReact size={80} />
        </motion.div>

        <motion.div
          style={{ ...styles.icon, top: "50%", left: "80%" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <FaNodeJs size={70} />
        </motion.div>

        <motion.div
          style={{ ...styles.icon, top: "80%", left: "30%" }}
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <FaDatabase size={60} />
        </motion.div>

      </div>

      {/* 📄 CONTENT */}
      <div style={styles.content}>
        <Hero dark={dark} setDark={setDark} />
        <Experience dark={dark} />
        <Projects dark={dark} />
        <Skills dark={dark} />
        <Education dark={dark} />
        <Interests dark={dark} />
        <Contact dark={dark} />
      </div>
    </div>
  );
}

export default Resume;
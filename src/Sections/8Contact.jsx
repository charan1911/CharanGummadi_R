import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact({ dark }) {
  const styles = {
    container: {
      padding: "50px 20px",
      //fontFamily: "Inter, sans-serif",
      color: dark ? "#e5e7eb" : "#111827",
    },

    title: {
      textAlign: "center",
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "30px",
    },

    card: {
      //maxWidth: "700px",
      margin: "0 auto",
      padding: "22px",
      borderRadius: "12px",

      background: dark ? "#1e293b" : "#ffffff",

      border: dark
        ? "1px solid #374151"
        : "1px solid #e5e7eb",

      boxShadow: dark
        ? "0 6px 20px rgba(0,0,0,0.4)"
        : "0 6px 15px rgba(0,0,0,0.06)",

      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },

    item: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "14px",
    },

    icon: {
      fontSize: "16px",
      color: dark ? "#38bdf8" : "#2563eb",
      minWidth: "20px",
    },

    link: {
      color: dark ? "#e5e7eb" : "#111827",
      textDecoration: "none",
      transition: "0.2s",
    },

    linkHover: {
      color: dark ? "#38bdf8" : "#2563eb",
    },
  };

  return (
    <div id="contact" style={styles.container}>
      <div style={styles.title}>Contact</div>

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div style={styles.item}>
          <FaPhoneAlt style={styles.icon} />
          <a href="tel:+919550591701" style={styles.link}>
            +91 9550591701
          </a>
        </div>

        <div style={styles.item}>
          <FaEnvelope style={styles.icon} />
          <a href="mailto:gummadicharan37@gmail.com" style={styles.link}>
            gummadicharan37@gmail.com
          </a>
        </div>

        <div style={styles.item}>
          <FaMapMarkerAlt style={styles.icon} />
          Hyderabad, Telangana – 500072
        </div>

        <div style={styles.item}>
          <FaLinkedin style={styles.icon} />
          <a
            href="https://www.linkedin.com/in/charan-gummadii/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            LinkedIn Profile
          </a>
        </div>

        <div style={styles.item}>
          <FaGithub style={styles.icon} />
          <a
            href="https://github.com/charan1911"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            GitHub Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
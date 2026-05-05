import { motion } from "framer-motion";

function Education({ dark }) {
  const data = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Institute of Aeronautical Engineering",
      location: "Hyderabad, Telangana",
      duration: "2020 - 2024",
      score: "CGPA: 7.13",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sree Chaitanya Jr Kalasala",
      location: "Hyderabad, Telangana",
      duration: "2018 - 2020",
      score: "Percentage: 84.8%",
    },
    {
      degree: "SSC",
      institution: "Geetanjali Model High School",
      location: "Hyderabad, Telangana",
      duration: "2018",
      score: "GPA: 7.8",
    },
  ];

  const styles = {
    container: {
      padding: "50px 20px",
      fontFamily: "Inter, sans-serif",
      color: dark ? "#e5e7eb" : "#111827",
    },

    title: {
      textAlign: "center",
      fontSize: "26px",
      fontWeight: "600",
      marginBottom: "30px",
    },

    timeline: {
      //maxWidth: "900px",
      margin: "0 auto",
      display: "grid",
      gap: "18px",
    },

    card: {
      padding: "18px",
      borderRadius: "10px",

      background: dark ? "#1e293b" : "#ffffff",

      border: dark
        ? "1px solid #374151"
        : "1px solid #e5e7eb",

      boxShadow: dark
        ? "0 4px 15px rgba(0,0,0,0.4)"
        : "0 4px 10px rgba(0,0,0,0.05)",

      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "10px",
    },

    left: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },

    degree: {
      fontSize: "16px",
      fontWeight: "600",
    },

    institution: {
      fontSize: "14px",
      color: dark ? "#9ca3af" : "#6b7280",
    },

    location: {
      fontSize: "13px",
      color: dark ? "#6b7280" : "#9ca3af",
    },

    right: {
      textAlign: "right",
      fontSize: "13px",
      color: dark ? "#9ca3af" : "#6b7280",
    },

    score: {
      fontWeight: "500",
      marginTop: "4px",
    },
  };

  return (
    <div id="education" style={styles.container}>
      <div style={styles.title}>Education</div>

      <div style={styles.timeline}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div style={styles.card}>
              <div style={styles.left}>
                <div style={styles.degree}>{item.degree}</div>
                <div style={styles.institution}>{item.institution}</div>
                <div style={styles.location}>{item.location}</div>
              </div>

              <div style={styles.right}>
                <div>{item.duration}</div>
                <div style={styles.score}>{item.score}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
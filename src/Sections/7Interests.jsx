import {
  SportsVolleyball,
  PhotoCamera,
  MenuBook,
  RocketLaunch,
} from "@mui/icons-material";

function Interests({ dark }) {
  const data = [
    { name: "Volleyball", icon: <SportsVolleyball /> },
    { name: "Photography", icon: <PhotoCamera /> },
    { name: "Reading Books", icon: <MenuBook /> },
    { name: "Tech & Startups", icon: <RocketLaunch /> },
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
      //maxWidth: "700px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "15px",
    },

    card: {
      padding: "16px",
      borderRadius: "10px",

      background: dark ? "#1e293b" : "#ffffff",

      border: dark
        ? "1px solid #374151"
        : "1px solid #e5e7eb",

      display: "flex",
      alignItems: "center",
      gap: "10px",

      transition: "all 0.2s ease",
    },

    icon: {
      fontSize: "22px",
      color: dark ? "#38bdf8" : "#2563eb", // subtle accent
    },

    text: {
      fontSize: "14px",
      fontWeight: "500",
    },
  };

  return (
    <div id="interests" style={styles.container}>
      <div style={styles.title}>Interests</div>

      <div style={styles.grid}>
        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.icon}>{item.icon}</span>
            <span style={styles.text}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
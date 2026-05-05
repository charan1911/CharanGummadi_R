import { useState, useEffect } from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

function Experience({ dark }) {
  const [filter, setFilter] = useState("All");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const data = [
    {
      year: "2026",
      company: "Nav Tech Electronics",
      role: "Full Stack Intern",
      location: "Hyderabad, Telangana",
      date: "Feb 2026 - May 2026",
      points: [
        "Enhanced the irrigation management mobile application using React Native by redesigning UI components and optimizing navigation flows, resulting in a ~30% reduction in user interaction time and improved usability.",

        "Implemented an advanced map clustering system for real-time device tracking, grouping nearby irrigation units based on pixel density, which reduced visual clutter by ~40% and significantly improved map readability and performance.",

        "Optimized backend API performance by restructuring request handling and database queries, successfully supporting 5,000+ daily API calls with improved response time and reduced latency under load.",

        "Developed and integrated a secure role-based authentication and authorization system using JWT, ensuring controlled access for different user roles and improving overall application security.",
      ],
    },
    {
      year: "2025",
      company: "Syoft",
      role: "Application Developer Intern",
      location: "Hyderabad, Telangana",
      date: "March 2025 - August 2025",
      points: [
        "Built a scalable location-based mobile application using React Native, enabling users to discover and interact with nearby services through real-time geolocation features.",

        "Designed and developed RESTful APIs using Node.js and Express.js to handle user management, service requests, and data flow between frontend and backend systems efficiently.",

        "Integrated real-time communication features using Socket.IO, allowing users to receive instant updates and interact dynamically within group-based service environments.",

        "Architected a group-based service interaction system that enabled multiple users to collaborate, request, and manage services collectively, improving user engagement and application usability.",
      ],
    },
  ];

  const filters = ["All", "2026", "2025"];
  const filtered =
    filter === "All" ? data : data.filter((item) => item.year === filter);

  const styles = {
    container: {
      margin: "2.5%",
      padding: "25px 0px",
      width: "95%", // full width
      //maxWidth: "100%", // prevent shrink
      boxSizing: "border-box", // avoid overflow issues
      fontFamily: "Inter, sans-serif",
      color: dark ? "#e5e7eb" : "#111827",

      // border: dark
      //   ? "1px solid rgba(255,255,255,0.50)" // 🌙 soft light border
      //   : "1.2px solid rgba(0,0,0,0.50)", // ☀️ soft dark border

      borderRadius: "12px",
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "25px",
    },

    filterBar: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "25px",
      flexWrap: "wrap",
    },

    button: (active) => ({
      padding: "8px 16px",
      borderRadius: "6px",
      border: dark ? "1px solid #374151" : "1px solid #d1d5db",
      background: active ? (dark ? "#2563eb" : "#111827") : "transparent",
      color: active ? "#fff" : dark ? "#e5e7eb" : "#111827",
      cursor: "pointer",
      fontSize: "14px",
    }),

    grid: {
      display: "grid",
      gap: "20px",
      //maxWidth: "98%",
      margin: "0 auto",
    },

    card: {
      padding: "22px",
      borderRadius: "14px",

      // ✅ controlled glass effect (not overkill)
      background: dark ? "rgba(15, 23, 42, 0.6)" : "rgba(255, 255, 255, 0.7)",

      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",

      border: dark
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.06)",

      boxShadow: dark
        ? "0 4px 20px rgba(0,0,0,0.4)"
        : "0 4px 20px rgba(0,0,0,0.08)",

      transition: "all 0.25s ease",
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "10px",
    },

    role: {
      fontSize: "17px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    company: {
      fontSize: "14px",
      color: dark ? "#9ca3af" : "#6b7280",
    },

    meta: {
      fontSize: "13px",
      color: dark ? "#9ca3af" : "#6b7280",
    },

    list: {
      paddingLeft: "18px",
      lineHeight: "1.6",
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Experience</div>

      <div style={styles.filterBar}>
        {filters.map((f) => (
          <button
            key={f}
            style={styles.button(filter === f)}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filtered.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.header}>
              <div>
                <div style={styles.role}>
                  <FaBriefcase /> {item.role}
                </div>
                <div style={styles.company}>{item.company}</div>
              </div>

              <div style={styles.meta}>
                {item.date} <br />
                <FaMapMarkerAlt /> {item.location}
              </div>
            </div>

            <ul style={styles.list}>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

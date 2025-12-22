// src/Pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>404</h1>
        <h2 style={styles.subheading}>Page Not Found</h2>
        <p style={styles.text}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "600px",
  },
  heading: {
    fontSize: "120px",
    fontWeight: "bold",
    margin: "0",
    color: "#333",
  },
  subheading: {
    fontSize: "32px",
    margin: "20px 0",
    color: "#555",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  },
  button: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default NotFound;

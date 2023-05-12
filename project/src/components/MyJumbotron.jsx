import React from "react";

const MyJumbotron = () => {
  return (
    <div style={styles.jumbotron}>
      <div style={styles.container}>
        <h1 style={styles.title}>CampusConncet'e Hoş Geldiniz!</h1>
        <p style={styles.description}>
          Üniversite Öğrencileri İçin Eşya Alışverişi, Bağış ve Etkinlikler
        </p>
      </div>
    </div>
  );
};

const styles = {
  jumbotron: {
    backgroundColor: "#002DB0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "white",
  },
  description: {
    fontSize: "40px",
    color: "white",
  },
};

export default MyJumbotron;

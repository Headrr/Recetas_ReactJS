import React from "react";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return (
    <footer style={{ textAlign: "center", marginTop: 50 }}>
      <p style={{ paddingTop: 12 }}>&copy; {fecha} - CookApp</p>
    </footer>
  );
};

export default Footer;

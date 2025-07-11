import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f6f0f5",
        padding: "60px 20px",
        color: "#cf5ca2",
        fontFamily: "Arial, sans-serif",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Logo + Tagline */}
        <div style={{ flex: "1 1 250px" }}>
          <h2 style={{ color: "#C71585", marginBottom: "10px" }}>GlossEra</h2>
          <p style={{ lineHeight: "1.6" }}>
            Where beauty meets confidence. Explore our exclusive collection of
            skincare, makeup, and wellness essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0 , color:"#cf5ca2"}}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/products" style={linkStyle}>Products</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h4 style={{ marginBottom: "10px" }}>Get in Touch</h4>
          <p>Email: <a href="mailto:support@glossera.com" style={linkStyle}>support@glossera.com</a></p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Links */}
        <div style={{ flex: "1 1 200px" }}>
          <h4 style={{ marginBottom: "10px" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#" style={iconStyle}>🌸</a>
            <a href="#" style={iconStyle}>💄</a>
            <a href="#" style={iconStyle}>📷</a>
            <a href="#" style={iconStyle}>📌</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "14px",
          color: "#999",
        }}
      >
        © {new Date().getFullYear()} GlossEra. All rights reserved.
      </div>
    </footer>
  );
};

const linkStyle = {
  color: "#cf5ca2",
  textDecoration: "none",
  marginBottom: "6px",
  display: "inline-block",
};

const iconStyle = {
  fontSize: "20px",
  textDecoration: "none",
  color: "#C71585",
};

export default Footer;

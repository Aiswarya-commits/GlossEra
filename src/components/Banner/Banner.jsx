import { Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        height: "100vh",
        backgroundImage: `url('https://img.freepik.com/photos-premium/arriere-plan-cosmetique-style-realiste_10541-12024.jpg?semt=ais_hybrid&w=740')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "150px",
      }}
    >
      <div style={{ color: "#cf5ca2", textAlign: "right" }}>
        <h2 style={{ fontSize: "38px", margin: 0 }}>Let Your Real</h2>
        <h1 style={{ fontSize: "68px", margin: "10px 0" }}>Beauty Glow...</h1>
        <p style={{ fontSize: "20px", marginBottom: "40px" }}>
          With Our Collection of Skin and Face Products
        </p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#cf5ca2",
            fontWeight: "bold",
            padding: "10px 24px",
          }}
        >
          Shop Now
        </Button>
      </div>
    </motion.div>
  );
};

export default Banner;

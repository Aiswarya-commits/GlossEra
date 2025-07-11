import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import womenImg from "../../assets/women.png";

const Mask = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, 
    margin: "-100px", 
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        margin: "100px auto",
        maxWidth: "1300px",
        padding: "0 40px",
      }}
    >
      {/* Text Section (Left) */}
      <div style={{ maxWidth: "600px" }}>
        <h2
          style={{ color: "#C71585", fontSize: "36px", marginBottom: "20px" }}
        >
          Refresh. Rejuvenate. Radiate.
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444" }}>
          At <strong>GlossEra</strong>, we bring you the ultimate skincare
          experience with our premium facial masks. Infused with nature’s finest
          ingredients, these masks are designed to cleanse, hydrate, and
          illuminate your skin, leaving it soft, supple, and radiant. Embrace
          the glow — your skin deserves it.
        </p>
      </div>

      {/* Image Section (Right) */}
      <div>
        <img
          src={womenImg}
          alt="Woman with face mask"
          style={{ width: "420px", height: "auto" }}
        />
      </div>
    </motion.div>
  );
};

export default Mask;

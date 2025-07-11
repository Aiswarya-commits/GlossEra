import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Body = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  

  const styles = {
    page: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: "100vh",
      background: "#fff",
      fontFamily: "Arial, sans-serif",
      color: "white",
      gap: "200px",
      marginTop: "230px",
      marginLeft: "100px",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
      marginBottom: "100px",
      marginRight: "100px",
    },
    imgCommon: {
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div style={styles.page}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-10deg)",
              top: "100px",
              left: "0px",
              right: "100px",
            }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/collection-pink-beauty-products-including-makeup-brushes-lipsticks-blushes-concept-glamour-sophistication-as-371965070.jpg"
              alt="img1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(5deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://canvasbeautybrand.com/cdn/shop/products/D2E0E897-E779-455B-9657-C853999ADCC4.jpg?v=1642221778"
              alt="img2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-3deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://www.abouther.com/sites/default/files/2017/10/06/aerin_garden_rose_eau_de_cologne.jpg"
              alt="img3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "rotate(3deg)",
                right: "100px",
              }}
            />
          </div>
        </div>
        <div>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "18px",
              color: "#333",
              lineHeight: "1.6",
              textAlign: "center",
              marginTop: "150px",
              marginLeft: "100px",
            }}
          >
            <h2 style={{color:"#C71585"}}>Hey Beautys...</h2>
            At <strong>Glossera Beauty</strong>, we celebrate confidence and
            self-care through our luxurious range of skincare, makeup, and
            wellness products. Every item is carefully selected to enhance your
            natural beauty and nourish your skin with gentle, effective
            ingredients. Discover your glow with Glossera.
          </p>
        </div>
      </div>
      </motion.div>
  );
};

export default Body;

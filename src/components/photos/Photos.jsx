import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Photos = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "150px",
      marginTop: "230px",
      marginLeft: "-280px",
      padding: "0 60px",
      flexWrap: "wrap",
    },
    imageStackWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    imageStack: {
      position: "relative",
      width: "280px",
      height: "500px",
      marginBottom: "20px",
    },
    imgCommon: {
      position: "absolute",
      width: "250px",
      height: "450px",
      borderRadius: "30px",
      overflow: "hidden",
      //   boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#C71585",
      marginTop: "10px",
      textAlign: "center",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={styles.page}
    >
      {/* First Stack */}
      <div style={styles.imageStackWrapper}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-1deg)",
              top: "100px",
              left: "0px",
            }}
          ></div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(1deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://www.pinkrootproducts.com/cdn/shop/files/CopyofWebsiteProductPhotos_24.png?v=1715011533&width=1445"
              alt="Hair"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-2deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://lovebeautyandplanet.in/cdn/shop/files/1_439616e5-d3b1-457e-9dbc-71be8988f82f_303x.jpg?v=1750753544"
              alt="Hair"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Hair Care</p>
      </div>

      {/* Second Stack */}
      <div style={styles.imageStackWrapper}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-1deg)",
              top: "100px",
              left: "0px",
            }}
          ></div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(1deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://imgmediagumlet.lbb.in/media/2019/03/5c99d24ab07bd44601422e88_1553584714615.jpg"
              alt="Skin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-2deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1317847978/photo/facial-creme-on-wooden-round-pedestal-beige-background-modern-natural-isometric-advertising.jpg?s=612x612&w=0&k=20&c=elzUzKRA46LMPrAEoxH7nd5b5SD-VBPcD9efNecNvUU="
              alt="Skin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Skin Care</p>
      </div>

      {/* Third Stack */}
      <div style={styles.imageStackWrapper}>
        <div style={styles.imageStack}>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 1,
              transform: "rotate(-1deg)",
              top: "100px",
              left: "0px",
            }}
          ></div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 2,
              transform: "rotate(1deg)",
              top: "100px",
              left: "200px",
            }}
          >
            <img
              src="https://bellavitaorganic.com/cdn/shop/files/Blush-06.jpg?v=1729588537&width=1000"
              alt="Perfume"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              ...styles.imgCommon,
              zIndex: 3,
              transform: "rotate(-2deg)",
              top: "10px",
              left: "100px",
            }}
          >
            <img
              src="https://en.pimg.jp/106/203/430/1/106203430.jpg"
              alt="Perfume"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Fragrances</p>
      </div>
    </motion.div>
  );
};

export default Photos;

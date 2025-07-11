import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Photos2 = () => {
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
              src="https://cdn.shopify.com/s/files/1/1554/0067/files/Screenshot_-_2022-09-28T213303.469_480x480.png?v=1664380998"
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
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-517742444-1541782237.jpg?crop=0.668xw:1.00xh;0,0&resize=640:*"
              alt="Hair"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Makeup Tools</p>
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
              src="https://cdn.shopify.com/s/files/1/1749/1879/products/daily-face-care-kit-for-mature-or-dry-skin-ajara-187992.jpg?v=1616614108"
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
              src="https://cf.cjdropshipping.com/17030304/1737443036570456064.jpg"
              alt="Skin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Eye Care </p>
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
              src="https://media.allure.com/photos/67ab8192b4cb4691757d9307/4:3/w_2664,h_1998,c_limit/Best%20Body%20Washes%20for%20Sensitive%20Skin%20022025%20Product%20Lede.jpg"
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
              src="https://www.unilever.com/content-images/92ui5egz/production/a8c1735d86f5aa89a2a410add692757bf417a3a1-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&fm=jpg"
              alt="Perfume"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Body Washes</p>
      </div>
    </motion.div>
  );
};

export default Photos2;

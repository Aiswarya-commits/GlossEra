import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Photos1 = () => {
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
              src="https://imgmediagumlet.lbb.in/media/2024/07/669e2e6d5b38bb58d30bd6b1_1721642605705.jpg"
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
              src="https://wp.missmalini.com/wp-content/uploads/2021/01/Makeup-Flatlay-N-By-New-Africa-Shutterstock.jpg"
              alt="Hair"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Makeup</p>
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
              src="https://www.cloudninehair.com/cdn/shop/files/Feature_4_Lifestyle_-_Attachments_included.jpg?v=1695379186"
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
              src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/platform/extensions/widget-manager/free/original/AiEIblrMy-Hplp-Spotlight-Mobile.jpg"
              alt="Skin"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Hair Styling </p>
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
              src="https://media.istockphoto.com/id/1276580434/photo/3d-render-collection-of-black-cosmetic-bottles-with-gold-caps-isolated-on-dark-background.jpg?s=612x612&w=0&k=20&c=YvSdPM4fLBx1aFXE_U9YVmn4Xv_2lnrq643U9mwJacc="
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
              src="https://www.vilvahstore.com/cdn/shop/files/5_46f17092-4684-40b8-ba05-29c0c9f9fcf2.jpg?v=1691843623&width=1080"
              alt="Perfume"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <p style={styles.heading}>Hair Serums</p>
      </div>
    </motion.div>
  );
};

export default Photos1;

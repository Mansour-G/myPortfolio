import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap } from "../../wrapper";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__header app__flex ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header__info"
      >
        <div className="app__header-badge ">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello , I am </p>
              <h1 className="head-text">Mansour G</h1>
            </div>
          </div>

          <div className="badge-cmp app__flex tag-cmp">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.5 }}
        className="app__header__img"
      >
        <img src={images.profile} className="profile_bg" alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_bg"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.mongo].map((circle, idx) => (
          <div className="circle-cmp app_flex" key={`circle-${idx}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

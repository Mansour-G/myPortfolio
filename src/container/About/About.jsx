import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  const about = [
    {
      title: "web Development",
      description: "I am a good web developer .",
      imgUrl: images.about01,
    },
    {
      title: "web Design",
      description: "I am a good web developer .",
      imgUrl: images.about02,
    },
    {
      title: "UI/UX",
      description: "I am a good web developer .",
      imgUrl: images.about03,
    },
    {
      title: "web anitmations",
      description: "Nice animation , good feeling ! .",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Dev</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-itmes"
            key={idx}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>

          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../assets/images/profile.png";
import "./Home.scss";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <Image src={profile} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, i'm <span>Iago Abner</span>{" "}
        </h3>
        <span className="job">Software Developer </span>
        <span className="text">
          I code beautifully things <br />
          (or try to) for the web
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="fullstack">Full-Stack</div>
      </div>
    </motion.div>
  );
};

export default Home;

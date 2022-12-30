"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import profile from "../../assets/images/profile.png";
import "./Home.scss";

export default function Home() {
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
        <Image priority src={profile} alt="portfolio" />
      </div>
      <div className="profile_text">
        <div className="test">
          <div className="name">
            Hi, i'm{" "}
            <Typewriter
              options={{
                strings: ["Iago Abner", "proficient", "constant", "developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <span className="job">Software Developer </span>
        <div className="text">
          I code beautifully things <br />
          (or try) for the web
          <div className="web">Web Developer</div>
          <div className="fullstack">Full-Stack</div>
        </div>
        <motion.a
          href="https://www.linkedin.com/in/iago-abner/"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>
      </div>
    </motion.div>
  );
}

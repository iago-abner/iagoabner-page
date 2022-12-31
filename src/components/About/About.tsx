"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portfolio from "../../assets/images/undrawproud.png";
import { bios } from "../../utils/data";
import "./About.scss";

export default function About() {
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="about_left"
        >
          <Image src={portfolio} alt="illustration" />
        </motion.div>

        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1.2 }}
          transition={{ duration: 1 }}
        >
          <p>
            I am a graduating student in Science and Technology with a focus on
            Applied Computing from Federal University of Rio Grande do Norte. I
            enjoy studying and am interested in building scalable applications
            always following concepts such as Clean Architecture.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="IagoAbner-FullstackJR.pdf"
            download
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="download_cv"
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiEye, FiGithub } from "react-icons/fi";
import { IWork } from "../../types";
import { navProjects } from "../../utils/navLinks";
import { projectsImages } from "../../utils/projects";
import "./Projects.scss";

export default function Projects() {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState<IWork[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(projectsImages);
    } else {
      const newWork = projectsImages.filter((projectImage) => {
        return projectImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {navProjects.map((projectNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}
            >
              {projectNav}
            </button>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage" key={work.id}>
              <Image priority src={work.img} alt="workImg" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hoverLayer"
              >
                <motion.a
                  href={work.gh}
                  target="_blank"
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <FiGithub />
                </motion.a>

                {work.host && (
                  <motion.a
                    href={work.host}
                    target="_blank"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiEye />
                  </motion.a>
                )}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

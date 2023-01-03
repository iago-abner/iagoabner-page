"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { socialIcons } from "../../utils/icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="followMe">
        <h4>Follow me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon) => {
            return (
              <Link key={socialIcon.id} href={socialIcon.link} target="_blank">
                <div>{socialIcon.icon}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

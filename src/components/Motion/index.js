import React from "react";
import { motion } from "framer-motion";

export const MotionDiv = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export const MotionButton = ({ style, href, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn-xl js-scroll-trigger text-lowercase shadow-sm"
      style={style}
      href={href}
    >
      {children}
    </motion.button>
  );
};

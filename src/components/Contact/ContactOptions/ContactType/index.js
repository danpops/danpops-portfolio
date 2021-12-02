import React from "react";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

const ContactType = ({ icon, link, label, className }) => {
  return (
    <Zoom>
      <div className={className}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div>
            {icon}
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href={link}
            >
              {label}
            </a>
          </div>
        </motion.div>
      </div>
    </Zoom>
  );
};

export default ContactType;

import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  {/* This state tracks if the mobile menu is open. */}
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{ cursor: "pointer", zIndex: 1100 }}
      >
        {/* Hamburger Icon Clickable, This toggles the menu open/closed when clicked. */}
        <i className="fas fa-bars"></i>
      </div>

      <motion.ul
        className={`nav-links${menuOpen ? " mobile-open" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* This makes the nav links appear as a vertical dropdown when the menu is open on mobile */}
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}> Home</a> {/*This closes the menu when a link is clicked.*/}
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects" onClick={() => setMenuOpen(false)}> Projects</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact" onClick={() => setMenuOpen(false)}> Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

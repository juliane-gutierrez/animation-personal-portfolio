import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { ResumeForm } from "./ResumeForm";

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

export const Hero = () => {
  const [showResumeForm, setShowResumeForm] = useState(false);

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ position: "relative" }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Juliane Gutierrez
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Software Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
          She Codes Plus 2025 Alumni currently completing a Diploma of Information Technology (Web Development).
          With over 10 years of experience in client relations, digital operations, and systems administration, 
          I effectively manage technical workflows and deliver high-quality support.
          <br></br>
          I am continuously expanding my skill set across multiple programming languages, frameworks, and tools, 
          with strengths in problem-solving, documentation, and process improvement in fast-paced environments.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a href="#projects" className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.button
              onClick={() => setShowResumeForm(true)}
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as="button"
            >
              Resume
            </motion.button>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/juliane-gutierrez" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/juliane-gutierrez-41718252/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            {/* <motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>*/}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "JulianeGutierrez",
  origin: "🌍 Brasil with an S",
  role: "Early-career Software Developer",
  stack: {
    languages: ["HTML", "CSS", "JavaScript", "Python"],
    frameworks: ["React", "Next.js", "Express.js", "TailwindCSS", 
    "Django", "Bootstrap"],
    tools: ["Git & GitHub", "VSCode", "Insomnia", 
    "Heroku", "Netlify"],
  },
  traits: [
    "super detail oriented",
    "bug detector",
    "dark mode advocate",
    "terminal aesthetic enthusiast"
  ],
  missionStatement:
    "Turning ideas into programs"
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showResumeForm && (
          <ResumeForm onClose={() => setShowResumeForm(false)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ResumeForm.css";

export const ResumeForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS 
      emailjs.init("LqQsbUw4qgG5XwNBv");

      // Send email
      await emailjs.send(
        "service_0it31wq", 
        "template_jhyhrsx", 
        {
          to_email: "gutierrezjuliane@gmail.com", // Your email
          user_name: name,
          user_email: email,
          message: `Resume download request from ${name} (${email})`,
        }
      );

      setMessage("Thank you! Check your email for the resume.");
      setEmail("");
      setName("");
      setTimeout(() => onClose(), 2000);
    } catch (error) {
      setMessage("Error sending request. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="resume-form-wrapper"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="resume-form-container floating-card"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h3 className="glitch">Download My Resume</h3>
        <p>Enter your email to receive my resume</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send Resume"}
          </motion.button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </motion.div>
    </motion.div>
  );
};

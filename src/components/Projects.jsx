import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
{/* save point app */}

        <a
          href="https://save-point.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/save-point-logo-purple.png')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> Save Point</h3>
            <p>
              A collaborative group project built for She Codes Plus Australia 2025. 
              Save Point is a real-time retrospective board developed using Agile methodology 
              and MVP principles for a VP at an online gaming company. It supports live voting, 
              feedback capture, and action tracking, with real-time updates powered by WebSockets. 
              Licensed under the MIT License.

            </p>
            <div className="project-tech">
              <span>Django DRF</span>
              <span>React.JS</span>
              <span>HTML & CSS</span>
              <span>SQLite</span>
              <span>Heroku</span>
              <span>Netlify</span>
            </div>
          </motion.div>
        </a>


{/* Portfolio Website */} 

        <a
          href="https://github.com/juliane-gutierrez/animation-personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/portfolio-img.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Personal Portfolio</h3>
            <p>
              This personal portfolio website showcases my projects and skills, with 
              smooth UI animations built using Framer Motion and a functional contact 
              form powered by EmailJS.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Vite</span>
              <span>Framer Motion</span>
              <span>EmailJS</span>
              <span>Tailwind CSS</span>
            </div>
          </motion.div>
        </a> 
        
{/* Weather App JS */}
        <a 
        href="https://weather-app-js-juliane.onrender.com"
        target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/weather-app.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Weather App</h3>
          <p>
            I built a weather app with vanilla JavaScript, HTML, and CSS for 
            the frontend. For security, I added an Express.js backend server 
            that handles API calls. This way, my OpenWeatherMap API key is 
            protected on the server using environment variables and never 
            exposed to users. The app communicates with the backend via a 
            simple /api/weather endpoint instead of calling the API directly 
            from the browser.
          </p>
          <div className="project-tech">
            <span>Express.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>API</span>
            <span>Dotenv</span>
            <span>CORS</span>
            <span>Node.js</span>
            <span>Render</span>
          </div>
        </motion.div>
        </a>
        

{/* Multiple JS Projects */}

        <a
          href="https://github.com/juliane-gutierrez/equinim-college-javascript"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/img_javascript.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Multiple JavaScript Projects</h3>
            <p>
              A collection of small JavaScript projects hosted on GitHub, 
              including a calculator, traffic light simulation, BMI calculator, 
              and more. These projects focus on core JavaScript concepts and 
              practical problem-solving.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>
        </a>

{/* TO ADD SKYWINGS WEBSITE  

        <a
          href="https://github.com/juliane-gutierrez/equinim-college-javascript"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/img_javascript.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Multiple JavaScript Projects</h3>
            <p>
              This clickable card takes you to my GitHub page with multiple 
              small apps and projects made using JavaScript. Calculator, Traffic Light,
              BMI Script and more to come.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>
        </a> 
        */}

{/* TO ADD django/react she codes once fixed 

        <a
          href="https://github.com/juliane-gutierrez/equinim-college-javascript"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/img_javascript.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Multiple JavaScript Projects</h3>
            <p>
              This clickable card takes you to my GitHub page with multiple 
              small apps and projects made using JavaScript. Calculator, Traffic Light,
              BMI Script and more to come.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>
        </a> 
        */}

{/* TO ADD haru's creche

        <a
          href="https://github.com/juliane-gutierrez/equinim-college-javascript"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "contents" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/img_javascript.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Multiple JavaScript Projects</h3>
            <p>
              This clickable card takes you to my GitHub page with multiple 
              small apps and projects made using JavaScript. Calculator, Traffic Light,
              BMI Script and more to come.
            </p>
            <div className="project-tech">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </motion.div>
        </a> 
        */}

      </motion.div>
    </motion.section>
  );
};

import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      <div className="info-container">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.5, delayChildren: true }}
        >
          About me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.6, delayChildren: true }}
        >
          As a <strong>Bachelor of Arts in Media Design in Education</strong>{" "}
          and a self-taught
          <strong> Front-end Developer</strong>, I have honed my skills over the
          past few years through online courses, personal projects, and several
          freelance jobs, all of which I completed to the utmost satisfaction of
          my clients.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.7 }}
        >
          In addition to my foundational skills in{" "}
          <strong>HTML, CSS, JavaScript</strong> and
          <strong> React</strong>, I've been immersing myself in learning
          <strong> Angular</strong> and <strong>Flutter</strong>, further
          expanding my tech stack. What's more, I've made an active transition
          from <strong>JavaScript</strong> to <strong>TypeScript</strong>,
          ensuring a more robust and scalable approach in my projects. My
          experience extends to <strong>React-Native, MongoDB, MySQL</strong>{" "}
          and <strong>Node.js</strong>. This diversified skill set equips me
          with a comprehensive perspective on both mobile and back-end
          development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.8 }}
        >
          My commitment to growth goes beyond just learning new frameworks. I
          regularly participate in coding challenges on platforms like
          <strong>
            {" "}
            <a
              href="https://www.codewars.com/users/KelicLazar/completed"
              target="_blank"
              rel="noreferrer"
            >
              CodeWars
            </a>
          </strong>
          , constantly improving my problem-solving skills and expanding my
          programming knowledge. Additionally, I enjoy helping other developers
          on forums by sharing my knowledge and providing solutions to help them
          overcome coding challenges.
          <br />
          Being part of these communities brings me joy and provides me with the
          opportunity to continuously learn and support others in their coding
          journey.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.8 }}
        >
          I believe that every project is an opportunity to learn and improve,
          and I strive to bring that mindset to every collaboration. Please feel
          free to explore my work and contact me if you have any questions or
          project inquiries. <br></br>
          <strong className="thank-you">
            <em>Thank you for visiting!</em>
          </strong>
        </motion.p>
      </div>
    </div>
  );
};

export default About;

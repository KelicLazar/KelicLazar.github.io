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
          Hello! My name is Lazar, and I am a{" "}
          <strong>Front-end Developer</strong> currently studying media design
          in education. I have gained my skills through online courses and
          personal projects, and I have been practicing front-end development
          for more then two years.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.7 }}
        >
          As a front-end developer, my high level of proficiency in{" "}
          <strong>HTML, CSS, JavaScript</strong> and <strong>React </strong>
          enables me to design engaging and user-friendly interfaces for
          websites that are visually appealing and intuitive to navigate.
          <br /> Additionally, I have experience working with{" "}
          <strong>React-Native, MongoDB </strong> and <strong> Node.js</strong>,
          which has given me insights into mobile and back-end development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "keyframes", duration: 0.8 }}
        >
          I actively participate in coding challenges on platforms like{" "}
          <strong>
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
          <strong>
            <em>Thank you for visiting!</em>
          </strong>
        </motion.p>
      </div>
    </div>
  );
};

export default About;

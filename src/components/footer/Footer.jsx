import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-flex">
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: "keyframes",
            duration: 0.4,
            delayChildren: true,
          }}
          href="lazar-kelic-cv.pdf"
          target="_blank"
          className="contact-item"
        >
          <div className="contact-item-icon">
            <img src="resume.png" alt="Resume" />
          </div>
          <h6>Download CV</h6>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: "keyframes",
            duration: 0.4,
            delayChildren: true,
          }}
          href="mailto:keliclazar@gmail.com"
          className="contact-item"
        >
          <div className="contact-item-icon">
            <img src="mail.png" alt="Email" />
          </div>

          <h6>
            Send E-mail
            <br />
            <p>keliclazar@gmail.com</p>
          </h6>
        </motion.a>
      </div>
      <div className="footer-gradient">
        <div className="footer-container">
          <p className="copyright">© Kelic Lazar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { motion } from "framer-motion";

const CourseItem = ({ title, subtitle, description, img, author }) => {
  return (
    <motion.li
      className={"course-item"}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "keyframes", duration: 0.5, delayChildren: true }}
    >
      <div className="front">
        <div>
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
        </div>
        <div className="image-container">
          <img src={img} alt="course" />
        </div>
        <p className="author">
          <em>{author}</em>
        </p>
      </div>
      <div className="back">
        <h6>Learned:</h6>
        <hr />
        <ul>
          {description.map((item) => {
            return <li className="description">{item}</li>;
          })}
        </ul>
      </div>
    </motion.li>
  );
};

export default CourseItem;

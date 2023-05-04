import { GraduationCap } from "@phosphor-icons/react";
import CourseItem from "./CourseItem";
import "./Courses.scss";
import { courses } from "./courseData";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <div className="courses-container">
      <motion.h3
        className="section-heading"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "keyframes", duration: 0.5, delayChildren: true }}
      >
        Courses <GraduationCap size={48} style={{ verticalAlign: "middle" }} />
      </motion.h3>
      <ul className="courses-list">
        {courses.map((item) => {
          return (
            <CourseItem
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              progress={item.progress}
              author={item.author}
              img={item.img}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Courses;

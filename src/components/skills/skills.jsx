import "./skills.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const skills = [
    { src: "atom.png", label: "ReactJs" },
    { src: "nodejs.png", label: "Node.js" },
    { src: "express.png", label: "Express.js" },
    { src: "js.png", label: "JavaScript" },
    { src: "html-5.png", label: "HTML5" },
    { src: "css-3.png", label: "CSS3" },
    { src: "java1.png", label: "Java" },
    { src: "salesforce.png", label: "Salesforce" },
    { src: "mongo.png", label: "MongoDB" },
    { src: "typescript.png", label: "TypeScript" },
    { src: "spring.png", label: "Spring Boot" },
    { src: "mysql.png", label: "MySQL" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Variants for staggered grid animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="skills-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h4
        className="skill-title"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        `Skills`
      </motion.h4>

      {/* Skills Grid */}
      <motion.div className="skills-grid" variants={containerVariants}>
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            variants={itemVariants}
          >
            <img src={skill.src} alt={skill.label} />
            <p className="skill-label">{skill.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

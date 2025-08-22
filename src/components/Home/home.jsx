import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import "./home.css";

export function Home() {
  const roles = [
    "Salesforce Developer.",
    "Full Stack Developer.",
    "ReactJs Developer.",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="intro d-flex justify-content-center align-items-center"
      style={{ height: "95vh" }}
    >
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* HELLO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hello me-3">──HELLO </span>
        </motion.div>

        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="iam me-3">I'M</span>
          <span className="name">
            SATISH <span className="surname">KOLLU</span>
          </span>
        </motion.div>

        {/* ROLE */}
        <motion.div
          className="iam1 mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I'm a{" "}
          <motion.span
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="role"
          >
            {roles[currentRoleIndex]}
          </motion.span>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4"
        >
          <Link
            to="About"
            className="border border-danger px-3 py-2 rounded d-inline-block text-decoration-none boxshadow"
            style={{ cursor: "pointer", color: "rgb(255, 59, 59)" }}
          >
            Interested in knowing more <span className="ms-2">&rarr;</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

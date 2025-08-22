import { Link } from "react-scroll";
import "./about.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section id="About" ref={ref} style={{ height: "100vh" }}>
      {/* Container with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about text-end">About</div>
        </motion.div>

        {/* Content */}
        <div className="about-content">
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Satish Kollu
          </motion.h1>

          <motion.p
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a{" "}
            <strong style={{ color: "rgb(255, 59, 59)" }}>
              Software Engineer
            </strong>{" "}
            who has worked on many cool products.
          </motion.p>

          <motion.p
            className="about-highlight"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I am into{" "}
            <code style={{ color: "rgb(255, 59, 59)" }}>
              &lt; WEB DEVELOPMENT /&gt;
            </code>{" "}
            &&{" "}
            <code style={{ color: "rgb(255, 59, 59)" }}>
              SOFTWARE TECHNOLOGIES
            </code>
            .
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            I am a passionate and dedicated web developer with a strong
            foundation in full-stack development. I possess
            <br />
            <span>
              a solid understanding of software development. I can build
            </span>
            <strong> web applications ❤️</strong>.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="d-flex justify-content-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="mailto:satishkollu954@gmail.com"
            className="text-white logo1"
          >
            <span className="bi bi-envelope-fill"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/satish-kollu-66a512233"
            className="text-white ms-3"
          >
            <span className="bi bi-linkedin"></span>
          </a>
          <a
            href="https://github.com/satishkollu954"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <i className="bi bi-github" style={{ color: "white" }}></i>
          </a>
        </motion.div>

        {/* Skills Link */}
        <motion.div
          className="d-flex justify-content-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Link
            to="skills"
            className="border border-danger px-3 py-2 rounded text-decoration-none skills"
            style={{ color: "rgb(255, 59, 59)" }}
          >
            About my Skills <span className="ms-2">&rarr;</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

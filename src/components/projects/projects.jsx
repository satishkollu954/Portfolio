import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./projects.css";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce App",
      description:
        "A scalable e-commerce application with authentication, cart, and payment integration. It provides a seamless shopping experience with secure checkout and real-time order tracking. The system is designed with MVC Pattern, ensuring high performance and easy scalability.",
      tech: "MERN, and a lot 😅",
      image: "e-commerce.png",
      link: "https://",
    },
    {
      id: 2,
      title: "Hospital App",
      description:
        "A hospital management system with appointment booking, patient records, and online consultations. Built for scalability and real-time data synchronization.",
      tech: "MERN Stack, Stripe, Redux",
      image: "RT.png",
      link: "https://raagvicare.vercel.app",
    },
  ];

  // intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 re-trigger every time
    threshold: 0.3, // 30% visibility
  });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
      </div>

      <motion.div
        className="projects-list"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-item ${index % 2 === 0 ? "normal" : "reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Big Number */}
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Left Side Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </a>

            {/* Right Side Info */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

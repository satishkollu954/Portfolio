import { Link } from "react-scroll";
import "./about.css";

export function About() {
  return (
    <section id="About" style={{ height: "100vh" }}>
      <div>
        <div className="about text-end">`About`</div>
      </div>

      <div className="about-content">
        <h1 className="about-heading">Satish Kollu</h1>
        <p className="about-title">
          I am a <strong className="text-danger">Software Engineer</strong> who
          has worked on many cool products.
        </p>
        <p className="about-highlight">
          I am into{" "}
          <code className="text-danger">&lt; WEB DEVELOPMENT /&gt;</code> &&{" "}
          <code className="text-danger">SOFTWARE TECHNOLOGIES</code>.
        </p>
        <p className="about-description">
          I am a passionate and dedicated web developer with a strong foundation
          in full-stack development. I possess
          <br />
          <span>
            {" "}
            a solid understanding of software development. I can build
          </span>
          <strong> web applications ❤️</strong>.
        </p>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <a href="mailto:satishkollu954@gmail.com" className="text-white logo1">
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
      </div>

      <div className="d-flex justify-content-center">
        <Link
          to="skills"
          className="border border-danger text-danger fw-bold px-3 py-2 rounded text-decoration-none skills"
        >
          About my Skills <span className="ms-2">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

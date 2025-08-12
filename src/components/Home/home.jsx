import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-scroll";

export function Home() {
  const roles = [
    "ReactJs Developer.",
    "Full Stack Developer.",
    "Salesforce Developer.",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id="home"
      className="intro d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <div>
          <span className="hello me-3">HELLO </span>
        </div>

        <span>
          <span className="iam me-3">I'M</span>
          <span className="name text-danger">
            SATISH <span className="surname">KOLLU</span>
          </span>
        </span>
        <br />

        <span className="iam1 ">
          I'm a{" "}
          <span className="role text-danger">{roles[currentRoleIndex]}</span>
        </span>
        <br />

        <Link
          to="About"
          className="border border-danger text-danger fw-bold px-3 py-2 rounded mt-3 d-inline-block text-decoration-none boxshadow"
          style={{ cursor: "pointer" }}
        >
          Interested in knowing more <span className="ms-2">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}

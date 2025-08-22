import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav mt-4">
      <h2 className="logo">Portfolio</h2>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <i className="bi bi-list"></i>
      </div>
      <div className={`menu ${isOpen ? "menu-open" : ""}`}>
        <Link to="home" className="menuItem" onClick={closeMenu}>
          Home
        </Link>
        <Link to="About" className="menuItem" onClick={closeMenu}>
          About
        </Link>
        <Link to="skills" className="menuItem" onClick={closeMenu}>
          Skills
        </Link>
        <Link to="projects" className="menuItem" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="contact" className="menuItem" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

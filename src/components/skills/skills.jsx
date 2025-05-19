import "./skills.css";

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

  return (
    <section id="skills" className="skills-section">
      <h4 className="skill-title">`Skills`</h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.src} alt={skill.label} />
            <p className="skill-label">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

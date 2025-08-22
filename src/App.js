import "./App.css";
import { About } from "./components/About/about";
import { Contact } from "./components/contact/contact";
import { Home } from "./components/Home/home";

import { Navbar } from "./components/Navbar/navbar";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <div className="App-header">
      <div className="hero-section">
        <Navbar />
        <Home />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

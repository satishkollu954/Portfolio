import "./App.css";
import { About } from "./components/About/about";
import { Contact } from "./components/contact/contact";
import { Home } from "./components/Home/home";

import { Navbar } from "./components/Navbar/navbar";
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
      <Contact />
    </div>
  );
}

export default App;

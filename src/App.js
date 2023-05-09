import "./App.css";
import "./components/About.css";
import "./components/Footer.css";
import "./components/Projects.css";
import "./components/Profile.css";
import "./components/Skills.css";
import "./components/Header.css";
import "./components/ModeSwitch.css";

import Header from "./components/Header";
import About from "./components/About";
import ModeSwitch from "./components/ModeSwitch";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ModeSwitch />
      <Header />
      <About />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

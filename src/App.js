import "./styles/app.css";
import Header from "./components/header";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Formations from "./components/formations";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <div className="App dark:bg-dark-background">
        <Header />
        <Skills />
        <Projects />
        <Formations />
        <Contact />
      </div>
    </>
  );
}

export default App;

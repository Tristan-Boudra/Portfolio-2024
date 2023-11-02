import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/app.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App flex justify-end">
      <div className="flex flex-col justify-center h-screen w-1/2">
        <h1 className="text-6xl font-bold text-secondary">Hello.</h1>
        <p className="text-secondary font-medium mt-10 w-1/2 leading-loose">Salut à tous ! Je suis Tristan, un passionné du développement Full-Stack, du sport et des voyages, et je vous invite à explorer mon univers où la créativité, la technologie et l'aventure se rejoignent pour donner vie à des projets exceptionnels.</p>
        <p className="text-primary font-medium mt-5">Découvrir
          <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
        </p>
      </div>
    </div>
  );
}

export default App;

import "../styles/app.css";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowRightIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import blobAnimation from "../images/animations/blobanimation.svg";
import { useState } from "react";

export default function Header() {
  const [isDay, setIsDay] = useState(true);

  function toggleTheme() {
    setIsDay(!isDay);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <header className="flex flex-col md:flex-row justify-end">
        {isDay ? (
          <SunIcon onClick={toggleTheme} className="absolute top-5 right-10" />
        ) : (
          <MoonIcon onClick={toggleTheme} className="absolute text-dark-secondary top-5 right-10" />
        )}
        <div className="md:w-1/2 w-full">
          <img src={blobAnimation} alt="Blob animation" className="" />
        </div>
        <div className="flex flex-col mx-auto items-center md:justify-center md:items-start md:w-1/2 w-full">
          <h1 className="text-6xl font-bold text-primary dark:text-dark-primary">Hello.</h1>
          <p className="text-secondary dark:text-dark-secondary font-medium mt-10 w-1/2 text-center md:text-left leading-loose">
            Salut à tous ! Je suis Tristan, un passionné du développement
            Full-Stack, du sport et des voyages, et je vous invite à explorer
            mon univers où la créativité, la technologie et l'aventure se
            rejoignent pour donner vie à des projets exceptionnels.
          </p>
          <p className="flex items-center text-primary dark:text-dark-primary font-medium mt-5">
            Découvrir
            <ArrowRightIcon className="ml-2 hover:ml-5 transition-all" />
          </p>
        </div>
        <ul className="flex flex-row gap-10 absolute bottom-10 right-10">
          <li>
            <GitHubLogoIcon className="text-primary dark:text-dark-primary text-2xl" />
          </li>
          <li>
            <TwitterLogoIcon className="text-primary dark:text-dark-primary text-2xl" />
          </li>
          <li>
            <LinkedInLogoIcon className="text-primary dark:text-dark-primary text-2xl" />
          </li>
        </ul>
      </header>
    </>
  );
}
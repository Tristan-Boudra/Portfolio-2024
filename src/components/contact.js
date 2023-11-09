import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <div className="py-5 md:py-20">
      <h1 className="text-4xl lg:text-6xl font-bold pt-20 text-primary dark:text-dark-primary text-center">
        Contact
      </h1>
      <p className="text-center text-secondary dark:text-dark-secondary mt-10">
        Je reste à votre disposition pour toute question
      </p>
      <ul className="flex gap-3 md:gap-10 justify-center flex-col lg:flex-row items-center lg:items-start">
        <li className="md:text-xl mt-5 bg-background-tertiary w-max rounded-lg px-3 py-2 dark:bg-dark-background-tertiary text-primary dark:text-dark-secondary">
          <a
            href="mailto:boudratristan@gmail"
            className="flex justify-center items-center"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            boudratristan@gmail.com
          </a>
        </li>
        <li className="md:text-xl mt-5 bg-background-tertiary w-max rounded-lg px-3 py-2 dark:bg-dark-background-tertiary text-primary dark:text-dark-secondary">
          <a
            href="https://www.linkedin.com/in/tristan-boudra/"
            className="flex justify-center items-center"
          >
            <LinkedInLogoIcon className="mr-2 w-5 h-5" />
            Linkedin
          </a>
        </li>
        <li className="md:text-xl mt-5 bg-background-tertiary w-max rounded-lg px-3 py-2 dark:bg-dark-background-tertiary text-primary dark:text-dark-secondary">
          <a
            href="https://github.com/Tristan-Boudra"
            className="flex justify-center items-center"
          >
            <GitHubLogoIcon className="mr-2 w-5 h-5" />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

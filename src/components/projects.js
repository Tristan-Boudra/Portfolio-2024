import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="py-5 md:py-20">
      <h1 className="text-4xl lg:text-6xl font-bold pt-20 text-primary dark:text-dark-primary text-center">
        Projets
      </h1>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center lg:items-start items-center gap-20 mt-10">
        {projects.map((project) => (
          <a href={project.link} key={project.id} className="flex flex-col w-[300px] md:w-[400px] items-left border-2 border-border hover:border-border-hover bg-background-secondary dark:bg-dark-background-secondary dark:border-dark-border dark:hover:border-dark-border-hover rounded p-5">
            {project.icon}
            <h2 className="text-3xl mt-3 text-primary dark:text-dark-primary">
              {project.title}
            </h2>
            <p className="text-secondary dark:text-dark-secondary mt-5">
              {project.description}
            </p>
            <ul className="flex flex-row flex-wrap gap-2 mt-5">
              {project.technologies.map((technology) => (
                <li className="py-1 px-2 rounded-lg bg-background-tertiary dark:bg-dark-background-tertiary text-secondary dark:text-dark-secondary" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
}

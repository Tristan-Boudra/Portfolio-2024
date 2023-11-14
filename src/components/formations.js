import formations from "../data/formations";

export default function Projects() {
  return (
    <div className="py-5 md:py-20">
      <h1 className="text-4xl lg:text-6xl font-bold pt-20 text-primary dark:text-dark-primary text-center">
        Formations
      </h1>
      <div className="flex flex-col flex-wrap lg:flex-row items-center lg:items-start justify-center gap-20 mt-10">
        {formations.map((formation) => (
          <div key={formation.id} className="flex flex-col w-[300px] md:w-[400px] items-left border-2 border-border hover:border-border-hover bg-background-secondary dark:bg-dark-background-secondary dark:border-dark-border dark:hover:border-dark-border-hover rounded p-5">
            {formation.icon}
            <h2 className="text-3xl mt-3 text-primary dark:text-dark-primary">
              {formation.title}
            </h2>
            <p className="text-secondary dark:text-dark-secondary mt-5">
              {formation.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ProjectCard } from "./ProjectCard";
export default function Projects() {
  return (
    <div
      className={`relative min-h-screen flex flex-col py-[28px] px-[20px] md:px-[65px] bg-black`}
    >
      <div className="flex-grow">
        <div className="h-full flex flex-col border-white justify-center">
          <h3 className="pl-2 py-2 font-inter font-bold text-base sm:text-medium md:text-[30px] lg:text-large leading-none text-white border">
            PROJECTS
          </h3>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

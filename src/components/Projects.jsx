import { ProjectCard } from "./ProjectCard";
import wikiExplorerThumbnail from "/wiki-explorer-thumbnail.png";
export default function Projects() {
  return (
    <div
      id="projects"
      className={`relative flex flex-col py-[28px] px-[20px] md:px-[50px] bg-black`}
    >
      <div className="h-full flex flex-col border-white justify-center">
        <h3 className="pl-2 py-2 font-inter font-bold text-base sm:text-medium md:text-[30px] lg:text-large leading-none text-white border">
          PROJECTS
        </h3>
        <ProjectCard thumbnail={wikiExplorerThumbnail} />
      </div>
    </div>
  );
}

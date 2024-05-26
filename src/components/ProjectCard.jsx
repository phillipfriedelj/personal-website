import { IconPointFilled } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export function ProjectCard({ thumbnail }) {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(clone);
    }
  }, []);
  return (
    <div className="content-center border flex flex-col">
      <img
        src={thumbnail}
        className="w-full h-auto cursor-pointer hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0 active:scale-[0.99]"
        onClick={() =>
          window.open("https://wiki-explorer.phillipfriedel.com/", "_blank")
        }
      />
      <div className="p-2 space-y-3 flex flex-col">
        <a
          href="https://wiki-explorer.phillipfriedel.com/"
          className="w-fit uppercase hover-underline-animation items-start text-white font-bold flex-grow text-sm md:text-medium hover-underline-animation cursor-pointer"
          target="_blank"
        >
          Wiki-Explorer
        </a>
        <div className="bg-white rounded-full w-1/4 h-5 text-xs inline-flex flex-nowrap overflow-hidden">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none [&_svg]:max-w-none animate-infinite-scroll"
          >
            <li>
              <p className="text-black font-extralight text-xs">Javascript</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
            <li>
              <p className="text-black font-extralight text-xs">Prisma.io</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
            <li>
              <p className="text-black font-extralight text-xs">React.js</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
            <li>
              <p className="text-black font-extralight text-xs">Next.js</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
            <li>
              <p className="text-black font-extralight text-xs">PostgreSQL</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
            <li>
              <p className="text-black font-extralight text-xs">Docker</p>
            </li>
            <li>
              <IconPointFilled size={5} stroke={1.5} color="#181818" />
            </li>
          </ul>
        </div>
        <p className="text-white text-xs md:text-sm ">
          Wiki-Explorer is a user-friendly tool designed to help you navigate
          Wikipedia's categories and their related pages in an organized manner.
          By extracting data directly from Wikipedia dumps, it identifies and
          processes the relevant connections between categories and pages. The
          application displays categories in a list format, allows you to view
          Wikipedia pages directly within the app, and features a search
          function to find specific categories. Built with Next.js,
          Wiki-Explorer stores its data in a PostgreSQL RDS on AWS, ensuring
          robust and reliable performance.
        </p>
      </div>
    </div>
  );
}

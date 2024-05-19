import { IconPointFilled } from "@tabler/icons-react";
import placeholder from "../assets/placeholder.png";
import { useEffect, useRef } from "react";
export function ProjectCard() {
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
      <img src={placeholder} className="w-full h-auto" />
      <div className="p-2 space-y-2 flex flex-col">
        <a
          href="https://wiki-explorer.phillipfriedel.com/"
          className="w-fit text-white text-sm md:text-medium font-medium uppercase hover-underline-animation items-start"
          target="_blank"
        >
          Wiki-Explorer
        </a>
        <div class="bg-white rounded-full w-1/4 h-5 text-xs inline-flex flex-nowrap overflow-hidden">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
          tristique ipsum. Maecenas elementum orci nec ipsum scelerisque, id
          imperdiet velit congue. Maecenas varius blandit dapibus. Nunc volutpat
          placerat odio, eu ornare ligula suscipit vestibulum. Cras vitae
          consectetur nisl. Integer in ante at turpis ultrices iaculis.
          Suspendisse convallis, nulla vel vulputate suscipit, tortor enim
          gravida elit, vel ullamcorper sem lacus at orci.
        </p>
      </div>
    </div>
  );
}

import "../../styles/animations.css";
import { IconMail } from "@tabler/icons-react";

export default function EmailButton({ text }) {
  return (
    <div className="p-1 md:px-2 md:py-0 rounded-full md:rounded-[33px] bg-orange text-white border border-black text-center inline-block hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0">
      <a
        href="mailto:hello@phillipfriedel.com"
        className={`font-inter text-xs font-ligt m-0 hidden md:inline align-[2px]`}
      >
        {text}
      </a>
      <IconMail size={"18px"} color="white" className="md:hidden" />
    </div>
  );
}

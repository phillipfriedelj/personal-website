import "../../styles/animations.css";
import { IconMail } from "@tabler/icons-react";

export default function EmailButton({ text }) {
  return (
    <a
      href="mailto:hello@phillipfriedel.com"
      className="font-inter text-xs font-ligt m-0 align-[2px] p-1 md:p-2 md:py-[2px] rounded-full md:rounded-[33px] bg-orange cursor-pointer text-white border border-black text-center inline-block hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0 active:scale-[0.99]"
    >
      <span className="hidden md:inline">{text}</span>
      <IconMail size={"18px"} color="white" className="md:hidden" />
    </a>
  );
}

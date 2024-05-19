import circularText from "../assets/circular_text.png";
export default function Footer() {
  return (
    <div className="bg-orange w-full flex py-5 px-5 md:px-[50px] h-16 justify-between items-center">
      <div className="flex items-center animate-spin-slow">
        <img src={circularText} className="h-12" />
      </div>
      <div className="text-center">
        <p className="text-white font-inter text-xs leading-none pb-1">
          PHILLIP FRIEDEL
        </p>
        <p className="text-white font-inter text-xs leading-none">DEVELOPER</p>
      </div>
      <div className="flex space-x-2">
        <a
          href="https://github.com/phillipfriedelj"
          className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation"
          target="_blank"
        >
          Github
        </a>
        <p className="text-white font-inter text-xs font-light">-</p>
        <a
          href="https://www.linkedin.com/in/phillip-friedel/"
          className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation"
          target="_blank"
        >
          LinkedIn
        </a>
        <p className="text-white font-inter text-xs font-light">-</p>
        <a
          href="mailto:hello@phillipfriedel.com"
          className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation"
          target="_blank"
        >
          Email
        </a>
      </div>
    </div>
  );
}

import userLogo from "../assets/logo_big.png";
import EmailButton from "../components/buttons/EmailButton";
import "../styles/animations.css";

export default function Navbar() {
  return (
    <nav className="w-full flex py-2 px-5 md:px-[50px] h-10 bg-dark-gray border-b border-white">
      <div className="flex-1 items-center flex">
        <img src={userLogo} className="h-4 md:h-5" />
      </div>
      <div className="flex space-x-4 md:space-x-[25px] items-center">
        <a
          href="#key-facts"
          className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation"
        >
          About
        </a>
        <a
          href="#projects"
          className=" text-white font-inter text-xs font-light cursor-pointer hover-underline-animation"
        >
          Projects
        </a>
        <EmailButton text="hello@phillipfriedel.com" />
      </div>
    </nav>
  );
}

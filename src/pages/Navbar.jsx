import userLogo from "../assets/logo_big.png";
import EmailButton from "../components/ctas/EmailButton";
import '../styles/animations.css';

export default function Navbar() {
	return (
		<nav className="w-full flex py-5 px-5 md:px-[50px] h-20">
			<div className="flex-1 items-center flex">
				<img src={userLogo} className="h-5"/>
			</div>
			<div className="flex space-x-2 md:space-x-[50px] items-center">
				<a href='#' className="font-inter text-xs md:text-base font-light cursor-pointer hover-underline-animation">About</a>
				<a href='#' className="font-inter text-xs md:text-base font-light cursor-pointer hover-underline-animation">Projects</a>
				<div className="hidden sm:inline">
					<EmailButton text="hello@phillipfriedel.com" />
				</div>
			</div>
		</nav>
	);
}
import EmailButton from "../components/Buttons/EmailButton";
// import asterisk from "../assets/logo_clipped.png";
import DividerDecoration from "../components/Dividers/DividerDecoration";

export default function Banner() {
	return(
		<div className="leading-normal pt-2 flex flex-col flex-grow">
			<div className="px-[20px] md:px-[50px]">
				<h1 className="font-inter font-bold text-large md:bg-blue-600 lg:bg-red-500 sm:bg-green-600 md:text-extra-large leading-none pb-1">
					PHILLIP FRIEDEL 
				</h1>
				<h2 className="font-inter font-bold text-large md:text-extra-large leading-none">
					DEVELOPER
				</h2>
				<p className="font-inter font-medium text-medium md:text-medium leading-tight pt-[15px] md:pt-[30px] pb-[20px] md:pb-[40px] sm:w-4/5 md:w-3/5">
					Hey, I’m a passionate software developer who enjoys learning new things and is not afraid of a challenge.
				</p> 
				{/* TODO Add Discover text */}
				<EmailButton 
					text="hello@phillipfriedel.com"
				/>
			</div>
		</div>
	);
}
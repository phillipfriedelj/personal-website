import EmailButton from "../components/Buttons/EmailButton";
// import asterisk from "../assets/logo_clipped.png";
import DividerDecoration from "../components/Dividers/DividerDecoration";

export default function Banner() {
	return(
		<div className=" leading-normal pt-2 flex flex-col flex-grow ">
			<div className="px-[50px]">
				<h1 className="font-inter font-bold text-very-large md:text-extra-large leading-none">
					PHILLIP FRIEDEL 
				</h1>
				<h2 className="font-inter font-bold text-very-large md:text-extra-large leading-none">
					SOFTWARE DEVELOPER
				</h2>
				<p className="font-inter font-medium text-large leading-tight pt-[30px] pb-[40px] w-3/5">
					Hey, I’m a passionate software developer who enjoys learning new things and is not afraid of a challenge.
				</p> 
				{/* TODO Add Discover text */}
				<EmailButton 
					text="hello@phillipfriedel.com"
				/>

			</div>

			<DividerDecoration />
			{/* <div className="px-[50px] relative py-5 mt-[45px]">
				<div className="flex-grow border-t-2 border-black"></div>
				<img src={asterisk} className="absolute h-80 right-0 -top-32"/>
			</div> */}
		</div>
	);
}
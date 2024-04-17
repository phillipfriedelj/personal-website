import "../../styles/animations.css";

export default function EmailButton({ text }) {
	return(
		<a className={`font-inter text-xs md:text-base font-light m-0 py-2 px-2 md:px-4 rounded-[33px] bg-mint-dark border border-black z-50  text-center hover-button`}>
			{text}
		</a>
	);
}
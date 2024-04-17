import "../../styles/animations.css";

export default function EmailButton({ text, extraStyling }) {
    return(
        <a className={`font-inter font-light m-0 py-2 px-2 rounded-[33px] bg-mint-dark border border-black z-50 w-[210px] text-center hover-button`}>
                {text}
        </a>
    )
}
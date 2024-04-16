export default function EmailButton({ text, extraStyling }) {
    return(
        <a className={`font-inter font-light text-cream m-0 py-2 px-2 rounded-[33px] bg-black z-50 w-[210px] text-center`}>
                {text}
        </a>
    )
}
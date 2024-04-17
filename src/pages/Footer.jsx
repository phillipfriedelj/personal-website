import circularText from "../assets/circular_text.png"
export default function Footer() {
    return(
        <div className="bg-orange w-full flex py-5 px-5 md:px-[50px] h-16 justify-between items-center">
            <div className="flex items-center animate-spin-slow">
                <img src={circularText} className="h-12"/>
            </div>
            <div className="text-center">
                <p className="text-white font-inter text-xs leading-none pb-1">
                    PHILLIP FRIEDEL 
                </p>
                <p className="text-white font-inter text-xs leading-none">
                    DEVELOPER
                </p>
            </div>
            <div className="flex space-x-2">
                <a href='#' className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation">Github</a>
                <p className="text-white font-inter text-xs font-light">-</p>
                <a href='#' className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation">LinkedIn</a>
                <p className="text-white font-inter text-xs font-light">-</p>
                <a href='#' className="text-white font-inter text-xs font-light cursor-pointer hover-underline-animation">Email</a>
            </div>
        </div>
    )
}
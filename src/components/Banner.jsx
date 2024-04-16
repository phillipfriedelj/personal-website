import EmailButton from "./Buttons/EmailButton";
import asterisk from "../assets/logo_clipped.png"
export default function Banner() {
    return(
        <div className="px-[50px] leading-normal mt-[35px]">
            <div className="flex flex-col h-3/4 w-full">
                <h1 className="font-inter font-bold text-extra-large leading-none">
                    PHILLIP FRIEDEL 
                </h1>
                <h2 className="font-inter font-bold text-extra-large leading-none">
                    SOFTWARE DEVELOPER
                </h2>
                <p className="font-inter font-medium text-large leading-tight my-[25px]">
                    Hey, I’m a passionate software developer who enjoys learning new things and is not afraid of a challenge.
                </p> 
                {/* TODO Add Discover text */}
                <EmailButton 
                    extraStyling="w-[90px]"
                    text="hello@phillipfriedel.com"
                />

                <div class="relative py-5 my-[45px]">
                    <div class="flex-grow border-t-2 border-black"></div>
                    <img src={asterisk} className="absolute h-80 right-0 -top-32"/>
                </div>
            </div> 
        </div>
    )
}
import userLogo from "../assets/logo_big.png"
import EmailButton from "./Buttons/EmailButton"

export default function Navbar() {
    return (
        <nav className="w-full flex py-5 px-[50px]">
            <div className="flex-1 items-center flex">
                <img src={userLogo} className="h-5"/>
            </div>
            <div className="flex space-x-[50px] items-center">
                <a className="font-inter font-light">Projects</a>
                <a className="font-inter font-light">About</a>
                <EmailButton text="hello@phillipfriedel.com" />
            </div>
        </nav>
    )
}
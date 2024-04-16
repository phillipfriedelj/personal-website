import userLogo from "../assets/logo_big.png"

export default function Navbar() {
    return (
        <nav className="w-full flex py-5 px-[50px]">
            <div className="flex-1">
                <img src={userLogo} className="h-5"/>
            </div>
            <div className="space-x-[50px]">
                <a className="font-inter font-light text-[18px]">Projects</a>
                <a className="font-inter font-light text-[18px]">About</a>
                <a className="font-inter font-light text-[18px] text-[#FBF8F2] py-3 px-5 rounded-[33px] bg-black" >hello@phillipfriedel.com</a>
            </div>
        </nav>
    )
}
import asterisk from "../../assets/logo_clipped.png"
export default function DividerDecoration() {
    return (
        <div className="relative mt-[45px]">
            <div className="flex-grow border-t border-black"></div>
            <img src={asterisk} className="absolute h-32 md:h-60 lg:h-80 right-0 -top-20 md:-top-32 lg:-top-48"/>
        </div>
    )
}
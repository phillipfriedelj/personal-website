import asterisk from "../../assets/logo_clipped.png"
export default function DividerDecoration() {
    return (
        <div className="relative py-5 mt-[45px]">
            <div className="flex-grow border-t border-black"></div>
            <img src={asterisk} className="absolute h-80 right-0 -top-32"/>
        </div>
    )
}
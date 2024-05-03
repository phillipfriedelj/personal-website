export default function TableCard({ title, children, bgColor }) {
    // HOVER EFFECT hover:shadow-deep hover:transform hover:translate-x-[4px] hover:translate-y-[4px] duration-[50ms] transition-all ease-in delay-0
    return (
        <div className={`flex-1 rounded-[10px] border border-black ${bgColor ? bgColor : "bg-mint-dark"} md:px-4 md:py-2 hover:shadow-deep hover:transform hover:translate-x-[4px] hover:translate-y-[4px] duration-[50ms] transition-all ease-in delay-0`}>
            <p className="font-inter font-semibold text-[30px]">{title}</p>
            {children}
        </div>
    )
}
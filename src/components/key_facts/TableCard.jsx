export default function TableCard({ title, children, bgColor }) {
    // HOVER EFFECT hover:shadow-deep hover:transform hover:translate-x-[4px] hover:translate-y-[4px] duration-[50ms] transition-all ease-in delay-0
    return (
        <div className={`flex-1 rounded-[10px] border border-black px-4 py-2 ${bgColor ? bgColor : "bg-mint-light"}`}>
            <p className="font-inter font-semibold text-[30px]">{title}</p>
            {children}
        </div>
    )
}
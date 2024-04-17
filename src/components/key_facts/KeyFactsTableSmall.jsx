export default function KeyFactsTableSmall() {
    return(
        <div className="md:hidden flex flex-col md:flex-row md:space-x-[10px] w-full md:w-[947px] space-y-1 flex-grow">
            <div className="flex flex-col space-y-1 md:space-y-[10px] flex-1">
                <div className="flex w-full space-x-[10px] md:h-[184px] flex-1">
                    <div className="w-full md:w-[250px] rounded-[10px] bg-mint-light border border-black">CELL 1</div>
                    <div className="w-full md:w-[250px] rounded-[10px] bg-mint-light border border-black">CELL 2</div>
                </div>
                <div className="flex w-full space-x-[10px] flex-1">
                    <div className="w-full md:w-[515px] md:h-[184px] rounded-[10px] bg-mint-dark border border-black">CELL 3</div>
                    <div className="w-full md:w-[515px] md:h-[140px] rounded-[10px] bg-mint-light border border-black">CELL 4</div>
                </div>
                <div className="hidden md:inline md:w-[515px] h-[50px] rounded-[10px] bg-orange border border-black">CELL 5</div>
            </div>
            <div className="flex-1 w-full md:w-[510px] md:h-[588px] rounded-[10px] bg-mint-light border border-black">
                CELL 6
            </div>
        </div>	
    )
}
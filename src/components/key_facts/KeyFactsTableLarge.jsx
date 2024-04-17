export default function KeyFactsTableLarge() {
    return(
        <div className="hidden md:flex flex-row flex-grow space-x-2 w-full self-center">
            <div className="flex flex-col w-1/2 space-y-2">
                <div className="flex w-full h-1/3 space-x-2">
                    <div className=" flex-1 rounded-[10px] bg-mint-light border border-black">CELL 1</div>
                    <div className="flex-1 rounded-[10px] bg-mint-light border border-black">CELL 2</div>
                </div>
                <div className="h-1/3 rounded-[10px] bg-mint-dark border border-black">CELL 3</div>
                <div className="flex flex-col h-1/3 space-y-2">
                    <div className="h-3/4 rounded-[10px] bg-mint-light border border-black">CELL 4</div>
                    <div className="h-1/4 rounded-[10px] bg-orange border border-black">CELL 5</div>
                </div>
            </div>
            <div className="flex-1 w-1/2 rounded-[10px] bg-mint-light border border-black">
                CELL 6
            </div>
        </div>	
    )
}
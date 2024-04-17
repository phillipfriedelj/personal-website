export default function KeyFacts() {
	return(
		<div className="py-[25px] px-[50px] leading-normal h-screen bg-green-500 flex flex-col">
			<p className="leading-none font-inter font-medium text-large mb-3 md:mb-[45px] bg-red-400">Key Facts</p>

			<div className="md:hidden flex flex-col md:flex-row md:space-x-[10px] w-full md:w-[947px] space-y-1 bg-blue-400 flex-grow">
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

			<div className="hidden md:flex flex-row bg-blue-400 flex-grow space-x-2 w-full self-center">
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

			{/* <div className="hidden md:flex items-center justify-center">
                <div className="flex space-x-[10px] h-[600px] w-[947px]">
                    <div className="flex flex-col space-y-[10px]">
                        <div className="flex w-full space-x-[10px]">
                            <div className="w-[250px] h-[184px] rounded-[10px] bg-mint-light border border-black">LANGUAGES</div>
                            <div className="w-[250px] h-[184px] rounded-[10px] bg-mint-light border border-black">LANGUAGES</div>
                        </div>
                        <div className="w-[515px] h-[184px] rounded-[10px] bg-mint-dark border border-black">LANGUAGES</div>
                        <div className="w-[515px] h-[140px] rounded-[10px] bg-mint-light border border-black">LANGUAGES</div>
                        <div className="w-[515px] h-[50px] rounded-[10px] bg-orange border border-black">LANGUAGES</div>
                    </div>
                    <div className="w-[510px] h-[588px] rounded-[10px] bg-mint-light border border-black">

                    </div>
                </div>
            </div> */}

		</div>
	);
}
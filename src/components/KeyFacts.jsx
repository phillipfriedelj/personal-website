export default function KeyFacts() {
	return(
		<div className="px-[50px] leading-normal">
			<p className="font-inter font-medium text-large mb-[45px]">Key Facts</p>

			{/* <div className="flex items-center justify-center">
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

			<div className="grid place-items-center min-h-screen">
				<div className="grid grid-cols-[515px_510px] grid-rows-[184px_184px_140px_50px_30px] gap-2.5 h-[600px] w-[947px]">
					{/* First row: Two small boxes */}
					<div className="grid grid-cols-2 gap-2.5 col-span-1 row-span-1">
						<div className="w-[250px] h-[184px] rounded-[10px] bg-mint-light border border-black">LANGUAGES</div>
						<div className="w-[250px] h-[184px] rounded-[10px] bg-mint-light border border-black">LANGUAGES</div>
					</div>

					{/* Second row: Single large box spanning the first column width */}
					<div className="w-[515px] h-[184px] rounded-[10px] bg-mint-dark border border-black col-start-1 row-start-2">LANGUAGES</div>

					{/* Third row: Shorter box */}
					<div className="w-[515px] h-[140px] rounded-[10px] bg-mint-light border border-black col-start-1 row-start-3">LANGUAGES</div>

					{/* Fourth row: Shortest box */}
					<div className="w-[515px] h-[50px] rounded-[10px] bg-orange border border-black col-start-1 row-start-4">LANGUAGES</div>

					{/* Tall column that spans all four rows */}
					<div className="w-[510px] h-[588px] rounded-[10px] bg-mint-light border border-black col-start-2 row-span-4"> </div>
				</div>
			</div>

		</div>
	);
}
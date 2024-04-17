export default function KeyFactsTableSmall() {
    return(
        <div className="md:hidden flex flex-col md:flex-row md:space-x-[10px] w-full md:w-[947px] space-y-1 flex-grow">
            <div className="flex flex-col space-y-1 md:space-y-[10px] flex-1">
                <div className="flex w-full space-x-[10px] md:h-[184px] flex-1">
                    <div className="w-full md:w-[515px] md:h-[184px] rounded-[10px] bg-mint-dark border border-black p-2">
                        <p className="font-inter font-semibold text-medium">SKILLS</p>
                        <div className="flex flex-grow space-x-5">
                            <ul className="list-disc list-inside pl-3">   
                                <li className="list-item text-xs"><span className="relative -left-2">Javascript</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">React.js</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">Golang</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">TailwindCSS</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">SQL</span></li>
                            </ul>
                            <ul className="list-disc list-inside pl-3">
                                <li className="list-item text-xs"><span className="relative -left-2">Python</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">C#</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">HTML/CSS</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">Unity</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-[250px] rounded-[10px] bg-mint-light border border-black p-2 flex-1">
                        <p className="font-inter font-semibold text-medium">LANGUAGES</p>
                        <ul className="list-disc list-inside pl-3">
                            <li className="list-item text-xs"><span className="relative -left-2">German - <span className="font-inter italic font-thin">Native</span></span></li>
                            <li className="list-item text-xs"><span className="relative -left-2">Spanish - <span className="font-inter italic font-thin">Native</span></span></li>
                            <li className="list-item text-xs"><span className="relative -left-2">English - <span className="font-inter italic font-thin">Fluent</span></span></li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full space-x-[10px] flex-1">
                    <div className="w-full md:w-[250px] rounded-[10px] bg-mint-light border border-black p-2 flex-1">
                            <p className="font-inter font-semibold text-medium">CERTIFICATIONS</p>
                            <ul className="list-disc list-inside pl-3">
                                <li className="list-item text-xs"><span className="relative -left-2">Scrum Master 1</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">Product Owner 1</span></li>
                                <li className="list-item text-xs"><span className="relative -left-2">Telekom Cloud Architect</span></li>
                            </ul>
                    </div>
                    <div className="w-full md:w-[515px] md:h-[140px] rounded-[10px] bg-mint-light border border-black p-2">
                        <p className="font-inter font-semibold text-medium">EDUCATION</p>
                        <div className="flex flex-col pl-2">
                            <div>
                                <p className="font-inter text-xs">M.Sc. Applied Computer Science - <span className="font-inter font-thin italic">HTW Berlin</span></p>
                                <p className="font-inter font-extralight text-[6px]">2019-2023</p>
                            </div>
                            <div>
                                <p className="font-inter text-xs">B.Sc. Applied Computer Science - <span className="font-inter font-thin italic">HTW Berlin</span></p>
                                <p className="font-inter font-extralight text-[6px]">2016-2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full md:w-[510px] md:h-[588px] rounded-[10px] bg-mint-light border border-black p-2">
                <p className="font-inter font-semibold text-medium">CAREER</p>
            </div>
        </div>	
    )
}
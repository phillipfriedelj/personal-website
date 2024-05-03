import TableCard from "./TableCard"

export default function KeyFactsTableLarge() {
    return(
        <div className="hidden md:flex flex-row flex-grow space-x-2 w-full self-center ">
            <div className="flex flex-col space-y-2 justify-between">
                <div className="flex space-x-2">
                    <TableCard title="LANGUAGES" >
                        <ul className="list-disc list-inside pl-3">
                            <li className="list-item"><span className="relative -left-3">German - <span className="font-inter italic font-thin">Native</span></span></li>
                            <li className="list-item"><span className="relative -left-3">Spanish - <span className="font-inter italic font-thin">Native</span></span></li>
                            <li className="list-item"><span className="relative -left-3">English - <span className="font-inter italic font-thin">Fluent</span></span></li>
                        </ul>
                    </TableCard>
                    <TableCard title="CERTIFICATIONS" >
                        <ul className="list-disc list-inside pl-3">
                            <li className="list-item"><span className="relative -left-3">Scrum Master 1</span></li>
                            <li className="list-item"><span className="relative -left-3">Product Owner 1</span></li>
                            <li className="list-item"><span className="relative -left-3">Telekom Cloud Architect</span></li>
                        </ul>
                    </TableCard>
                </div>
                <TableCard title="SKILLS" bgColor="bg-mint-dark">
                    <div className="flex flex-grow space-x-10">
                        <ul className="list-disc list-inside pl-3">   
                            <li className="list-item"><span className="relative -left-3">Javascript</span></li>
                            <li className="list-item"><span className="relative -left-3">React.js</span></li>
                            <li className="list-item"><span className="relative -left-3">Golang</span></li>
                        </ul>
                        <ul className="list-disc list-inside pl-3">
                            <li className="list-item"><span className="relative -left-3">TailwindCSS</span></li>
                            <li className="list-item"><span className="relative -left-3">SQL</span></li>
                            <li className="list-item"><span className="relative -left-3">Python</span></li>
                        </ul>
                        <ul className="list-disc list-inside pl-3">
                            <li className="list-item"><span className="relative -left-3">C#</span></li>
                            <li className="list-item"><span className="relative -left-3">HTML/CSS</span></li>
                            <li className="list-item"><span className="relative -left-3">Unity</span></li>
                        </ul>
                    </div>
                </TableCard>
                <div className="flex flex-col space-y-2 justify-between">
                    <TableCard title="EDUCATION" >
                        <div className="flex flex-col">
                            <div>
                                <p>M.Sc. Applied Computer Science - <span>HTW Berlin</span></p>
                                <p className="font-inter font-extralight text-[8px]">2019-2023</p>
                            </div>
                            <div>
                                <p>B.Sc. Applied Computer Science - <span>HTW Berlin</span></p>
                                <p className="font-inter font-extralight text-[8px]">2016-2019</p>
                            </div>
                        </div>
                    </TableCard>
                    <div className="rounded-[10px] bg-orange border border-black text-center flex justify-center items-center hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0 cursor-pointer">
                        <p className="font-inter font-semibold text-cream text-medium self-center">DOWNLOAD MY CV</p>
                    </div>
                </div>
            </div>
            <TableCard title="CAREER" />
        </div>	
    )
}
import TableCardTitle from "../components/TableCardTitle";
import CareerPath from "../components/CareerPath";

import {
  IconArrowDown,
  IconWorld,
  IconCertificate,
  IconTools,
  IconBooks,
  IconTool,
  IconRoute,
} from "@tabler/icons-react";
import FactListComponent from "../components/FactListComponent";

export default function KeyFacts() {
  return (
    <div
      id="key-facts"
      className="relative min-h-screen flex flex-col py-[28px] px-[20px] md:px-[65px] bg-black"
    >
      <div className="flex-grow flex items-stretch">
        <div className="flex flex-col flex-grow border-white justify-center">
          <h3 className="flex-grow-0 pl-2 py-2 font-inter font-bold text-base sm:text-medium md:text-[30px] lg:text-large leading-none text-white border">
            KEY FACTS
          </h3>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-10 border-white border h-full">
            <div className="md:col-span-2 md:row-span-10 md:col-start-3 md:row-start-1 row-start-5 row-end-9 md:border-l border-t md:border-t-0 flex flex-col">
              <TableCardTitle title={"CAREER"}>
                <IconRoute
                  color="white"
                  className="self-center h-7 w-auto"
                  stroke={1.5}
                />
              </TableCardTitle>
              <CareerPath />
            </div>
            <div className="md:row-span-3 md:col-start-1 md:row-start-4 row-start-3 border-r flex flex-col">
              <TableCardTitle title={"LANGUAGES"}>
                <IconWorld
                  color="white"
                  className="self-center h-7 w-auto"
                  stroke={1.5}
                />
              </TableCardTitle>
              <div className="flex-grow flex flex-col justify-evenly py-2 pl-2">
                <FactListComponent listText={"GERMAN - FLUENT"} />
                <FactListComponent listText={"SPANISH - NATIVE"} />
                <FactListComponent listText={"ENGLISH - FLUENT"} />
              </div>
            </div>
            <div className="md:row-span-3 md:col-start-2 row-start-4 md:row-start-4 flex flex-col border-t md:border-t-0">
              <TableCardTitle title={"CERTIFICATIONS"}>
                <IconCertificate
                  color="white"
                  className="self-center h-7 w-auto"
                  stroke={1.5}
                />
              </TableCardTitle>
              <div className="flex-grow flex flex-col justify-evenly py-2 pl-2">
                <FactListComponent listText={"SCRUM MASTER 1"} />
                <FactListComponent listText={"PRODUCT OWNER 1"} />
                <FactListComponent listText={"TELEKOM CLOUD ARCHITECT"} />
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-3 col-start-1 row-start-1 border-b h-full flex flex-col">
              <TableCardTitle title={"SKILLS"}>
                <IconTools
                  color="white"
                  className="self-center h-7 w-auto"
                  stroke={1.5}
                />
              </TableCardTitle>
              <div className="flex-grow">
                <div className="flex justify-evenly h-full py-2 pl-2">
                  <div className="flex flex-col justify-evenly">
                    <FactListComponent listText={"Javascript"} />
                    <FactListComponent listText={"React.js"} />
                    <FactListComponent listText={"Golang"} />
                    <FactListComponent listText={"SQL"} />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <FactListComponent listText={"C#"} />
                    <FactListComponent listText={"HTML/CSS"} />
                    <FactListComponent listText={"Python"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-3 md:row-start-7 row-start-2 border-y flex flex-col">
              <TableCardTitle title={"EDUCATION"}>
                <IconBooks
                  color="white"
                  className="self-center h-7 w-auto"
                  stroke={1.5}
                />
              </TableCardTitle>
              <div className="flex-grow flex flex-col justify-evenly pl-2 py-2">
                <FactListComponent
                  listText={
                    <>
                      M.Sc. Applied Computer Science -{" "}
                      <span className="font-thin"> Berlin</span>
                    </>
                  }
                  subtitle={"2019-2023"}
                />
                <FactListComponent
                  listText={
                    <>
                      M.Sc. Applied Computer Science -{" "}
                      <span className="font-thin">HTW Berlin</span>
                    </>
                  }
                  subtitle={"2016-2019"}
                />
              </div>
            </div>
            <div className="hidden md:block md:col-span-2 md:row-start-10 hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0 cursor-pointer active:scale-[0.99]">
              <a
                href="/PhillipFriedel_CV.pdf"
                download={"PhillipFriedel_CV.pdf"}
                className="flex justify-center w-full h-full space-x-2 bg-orange"
              >
                <IconArrowDown
                  color="white"
                  stroke={2}
                  className="self-center h-5 md:h-8 w-auto"
                />
                <p className="text-white text-medium font-bold self-center">
                  DOWNLOAD MY CV
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

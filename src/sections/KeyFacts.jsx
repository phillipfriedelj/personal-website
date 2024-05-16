import KeyFactsTableSmall from "../components/key_facts/KeyFactsTableSmall";
import KeyFactsTableLarge from "../components/key_facts/KeyFactsTableLarge";
import SectionContainer from "../layout/SectionContainer";
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
    <SectionContainer>
      <div className="py-[28px] px-[20px] md:px-[65px] h-full">
        <div className="grid grid-cols-4 grid-rows-11 border-white border h-full">
          <div className="col-span-4 content-center border-b">
            <h3 className="pl-2 font-inter font-bold text-sm sm:text-medium md:text-[30px] lg:text-large leading-none text-white">
              KEY FACTS
            </h3>
          </div>
          <div className="col-span-2 row-span-10 col-start-3 row-start-2 border-l flex flex-col">
            <TableCardTitle title={"CAREER"}>
              <IconRoute
                color="white"
                className="self-center h-7 w-auto"
                stroke={1.5}
              />
            </TableCardTitle>
            <CareerPath />
          </div>
          <div className="row-span-3 col-start-1 row-start-5 border-r flex flex-col">
            <TableCardTitle title={"LANGUAGES"}>
              <IconWorld
                color="white"
                className="self-center h-7 w-auto"
                stroke={1.5}
              />
            </TableCardTitle>
            <div className="flex-grow flex flex-col justify-evenly ">
              <FactListComponent listText={"GERMAN - FLUENT"} />
              <FactListComponent listText={"SPANISH - NATIVE"} />
              <FactListComponent listText={"ENGLISH - FLUENT"} />
            </div>
          </div>
          <div className="row-span-3 col-start-2 row-start-5 flex flex-col">
            <TableCardTitle title={"CERTIFICATIONS"}>
              <IconCertificate
                color="white"
                className="self-center h-7 w-auto"
                stroke={1.5}
              />
            </TableCardTitle>
            <div className="flex-grow flex flex-col justify-evenly">
              <FactListComponent listText={"SCRUM MASTER 1"} />
              <FactListComponent listText={"PRODUCT OWNER 1"} />
              <FactListComponent listText={"TELEKOM CLOUD ARCHITECT"} />
            </div>
          </div>
          <div className="col-span-2 row-span-3 col-start-1 row-start-2 border-b h-full flex flex-col">
            <TableCardTitle title={"SKILLS"}>
              <IconTools
                color="white"
                className="self-center h-7 w-auto"
                stroke={1.5}
              />
            </TableCardTitle>
            <div className="flex-grow">
              <div className="flex justify-evenly h-full">
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
          <div className="col-span-2 row-span-3 row-start-8 border-y flex flex-col">
            <TableCardTitle title={"EDUCATION"}>
              <IconBooks
                color="white"
                className="self-center h-7 w-auto"
                stroke={1.5}
              />
            </TableCardTitle>
            <div className="flex-grow flex flex-col justify-evenly">
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
          <div className="col-span-2 row-start-11">
            <div className="flex justify-center w-full h-full space-x-2 bg-orange">
              <IconArrowDown
                color="white"
                stroke={2}
                className="self-center h-5 md:h-8 w-auto"
              />
              <p className="text-white text-medium font-bold self-center">
                DOWNLOAD MY CV
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

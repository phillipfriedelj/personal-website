import CareerStep from "./CareerStep";

export default function CareerPath() {
  return (
    <div className="flex flex-col space-y-3 justify-evenly flex-grow align-middle p-2">
      <CareerStep
        position={"Senior Associate (CIO Advisory)"}
        company={"KPMG"}
        dates={"Aug. 2023 - Now"}
      >
        <p className="text-[10px] text-white">
          Developed a fleet management application for a defense company,
          contributing to the successful contract acquisition following its
          presentation at an international fair. Subsequently, participated in
          workshops with the client to define requirements and the technology
          stack.
        </p>
        <p className="text-[10px] text-white">
          Designed and implemented architecture and application for a
          documentation visualizer and technician assist tool for a defense
          company, which led to contract acquisition.
        </p>
        <p className="text-[10px] text-white">
          Assisted a public sector client in their cloud transformation program
          by mediating between product management, architecture management, and
          developers to prioritize and evaluate requirements.
        </p>
        <p className="font-bold text-[10px] text-white">
          Tech Stack: React.js, Javascript, Node.js
        </p>
      </CareerStep>
      <CareerStep
        position={"Junior Full-Stack Engineer"}
        company={"Coboworx"}
        dates={"Jan. 2023 - Jul. 2023"}
      >
        <p className="text-[10px] text-white">
          Developed frontend components for a robotic system UI Worked on the
          backend of a robotic system’s UI to improve reliability and test
          coverage.
        </p>
      </CareerStep>
      <CareerStep
        position={"Working Student"}
        company={"Coboworx"}
        dates={"Nov. 2021 - Dec. 2023"}
      >
        <p className="text-[10px] text-white">
          Worked on a customer-facing IoT platform within the Coboworx Cloud
          Platform team, leveraging data from robot fleets to enhance user
          experience.
        </p>
        <p className="font-bold text-[10px] text-white">
          Tech Stack: Terraform, Azure (App Services, Functions, IoT hub, MySQL
          database, Storage Accounts), Javascript, Python{" "}
        </p>
        <p className="text-[10px] text-white">
          Developed key components for the company’s website, ensuring a
          seamless and user-friendly interface.
        </p>
        <p className="font-bold text-[10px] text-white">
          Tech Stack: React.js, Javascript, TailwindCSS
        </p>
      </CareerStep>
      <CareerStep
        position={"Working Student"}
        company={"inpro"}
        dates={"Jun. 2019 - Nov. 2021"}
      >
        <p className="text-[10px] text-white">
          Worked on developing innovative AR & VR products and solutions for
          different clients in the automotive industry.
        </p>
        <p className="font-bold text-[10px] text-white">
          Tech Stack: C#, Unity, Java, Python
        </p>
      </CareerStep>
    </div>
  );
}

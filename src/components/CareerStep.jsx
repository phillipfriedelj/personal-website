import pathCircle from "../assets/path-circle.svg";

export default function CareerStep({ position, company, dates, children }) {
  return (
    <div className="flex space-x-2">
      <img
        src={pathCircle}
        alt="Timeline Step"
        className="h-auto w-[20px] self-start"
      />
      <div className="flex-grow space-y-1">
        <p className="text-sm font-medium text-white">{position}</p>
        <div className="flex justify-between">
          <p className="text-xs font-thin text-white">{company}</p>
          <p className="text-xs font-thin text-white">{dates}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

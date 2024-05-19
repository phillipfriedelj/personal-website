export default function FactListComponent({ listText, subtitle }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center space-x-1">
        <p className="text-white text-[10px] md:text-sm whitespace-nowrap pl-2 uppercase">
          {listText}
        </p>
        <svg className="flex-grow h-1" viewBox="0 0 200 1">
          <path
            d="M 0 0 L 200 0"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
      {subtitle && (
        <p className="text-white font-thin pl-2 text-[10px]">{subtitle}</p>
      )}
    </div>
  );
}

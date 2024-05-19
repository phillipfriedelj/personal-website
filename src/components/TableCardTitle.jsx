export default function TableCardTitle({ title, children }) {
  return (
    <div className="border-white w-full border-b flex items-center justify-between px-2 md:py-1">
      <p className="text-white font-bold flex-grow text-sm md:text-medium ">
        {title}
      </p>
      <div className="flex justify-end align-middle space-x-2">
        <svg className="h-3 w-3 self-center" viewBox="0 0 10 10">
          <path
            d="M 10 0 L 0 10"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        {children}
      </div>
    </div>
  );
}

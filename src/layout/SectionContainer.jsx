export default function SectionContainer({ bg, children }) {
  return (
    <div
      className={`relative md:h-screen md:min-h-screen flex flex-col py-[28px] px-[20px] md:px-[65px] ${
        bg ? bg : "bg-black"
      }`}
    >
      <div className="flex-grow">{children}</div>
    </div>
  );
}

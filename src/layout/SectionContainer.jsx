export default function SectionContainer({ bg, children }) {
  return (
    <div
      className={`relative md:min-h-screen flex flex-col ${
        bg ? bg : "bg-black"
      }`}
    >
      <div className="flex-grow">{children}</div>
    </div>
  );
}

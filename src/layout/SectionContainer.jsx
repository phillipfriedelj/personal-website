export default function SectionContainer({ bg, children }) {
  return (
    <div className={`relative md:min-h-screen flex flex-col ${bg}`}>
      <div className="flex-grow">{children}</div>
    </div>
  );
}

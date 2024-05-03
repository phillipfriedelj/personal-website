import "../../styles/animations.css";

export default function EmailButton({ text }) {
  return (
    <div className="py-1 md:py-2 px-2 md:px-4 rounded-[33px] bg-orange text-white border border-black text-center inline-block hover:shadow-deep hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0">
      <a
        href="mailto:hello@phillipfriedel.com"
        className={`font-inter text-xs md:text-base font-ligt m-0`}
      >
        {text}
      </a>
    </div>
  );
}

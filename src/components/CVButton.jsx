import { IconArrowDown } from "@tabler/icons-react";

export default function CVButton() {
  return (
    <a
      href="/PhillipFriedel_CV.pdf"
      download={"PhillipFriedel_CV.pdf"}
      className="bg-orange fixed md:hidden bottom-10 right-10 z-10 p-3 rounded-lg flex justify-center items-center space-x-1 hover:transform hover:translate-x-[2px] hover:translate-y-[2px] duration-[50ms] transition-all ease-in delay-0 active:scale-[0.99]"
    >
      <IconArrowDown stroke={3} />
      <p className="text-white text-medium font-bold">CV</p>
    </a>
  );
}

import SectionContainer from "../layout/SectionContainer";
import placeholder from "../assets/placeholder.png";
export default function Projects() {
  return (
    <SectionContainer>
      <div className="py-[28px] px-[20px] md:px-[65px] h-full flex flex-col border-white">
        <h3 className="pl-2 py-2 font-inter font-bold text-sm sm:text-medium md:text-[30px] lg:text-large leading-none text-white border">
          PROJECTS
        </h3>
        <div className="content-center border flex flex-col space-y-2">
          <img src={placeholder} className="w-full h-auto" />
          <p className="text-white text-medium font-medium uppercase pl-2">
            Wiki-Explorer
          </p>
          <div className="bg-white rounded-full w-1/4 text-xs">a</div>
          <p className="text-white text-xs pl-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            tristique ipsum. Maecenas elementum orci nec ipsum scelerisque, id
            imperdiet velit congue. Maecenas varius blandit dapibus. Nunc
            volutpat placerat odio, eu ornare ligula suscipit vestibulum. Cras
            vitae consectetur nisl. Integer in ante at turpis ultrices iaculis.
            Suspendisse convallis, nulla vel vulputate suscipit, tortor enim
            gravida elit, vel ullamcorper sem lacus at orci.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

import pathCircle from "../assets/path-circle.svg";

export default function CareerPath() {
  return (
    <div className="flex flex-col space-y-3 justify-evenly flex-grow align-middle px-8">
      <div className="flex space-x-4">
        <img src={pathCircle} alt="Your SVG" className="self-start" />
        <div>
          <p className="text-sm font-medium text-white">inpro GmbH</p>
          <p className="text-[8px] font-thin text-white">2019 - 2021</p>
          <p className="text-[10px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet
            malesuada ipsum. Nam nunc arcu, ultricies non eros maximus,
            condimentum dapibus ex. Ut vestibulum venenatis imperdiet. Quisque
            dapibus suscipit augue sit amet tincidunt. Donec nec leo purus.
            Nulla maximus metus eget lacus vestibulum commodo.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img src={pathCircle} alt="Your SVG" className="self-start" />
        <div>
          <p className="text-sm font-medium text-white">inpro GmbH</p>
          <p className="text-[8px] font-thin text-white">2019 - 2021</p>
          <p className="text-[10px] font-thin text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet
            malesuada ipsum. Nam nunc arcu, ultricies non eros maximus,
            condimentum dapibus ex. Ut vestibulum venenatis imperdiet. Quisque
            dapibus suscipit augue sit amet tincidunt. Donec nec leo purus.
            Nulla maximus metus eget lacus vestibulum commodo.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img src={pathCircle} alt="Your SVG" className="self-start" />
        <div>
          <p className="text-sm font-medium text-white">inpro GmbH</p>
          <p className="text-[8px] font-thin text-white">2019 - 2021</p>
          <p className="text-[10px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet
            malesuada ipsum. Nam nunc arcu, ultricies non eros maximus,
            condimentum dapibus ex. Ut vestibulum venenatis imperdiet. Quisque
            dapibus suscipit augue sit amet tincidunt. Donec nec leo purus.
            Nulla maximus metus eget lacus vestibulum commodo.
          </p>
        </div>
      </div>
    </div>
  );
}

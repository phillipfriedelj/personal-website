import { IconMapPinFilled, IconArrowDown } from "@tabler/icons-react";
import bigAsterisk from "../assets/asterisk_big.png";
export default function Banner() {
  return (
    <div className="leading-normal flex flex-col flex-grow bg-dark-gray border-b border-white">
      <div className="grid grid-cols-2 grid-rows-12 sm:h-full">
        <div className="  row-span-3 content-center justify-items-center px-2 border-b">
          <h1 className="font-inter font-bold text-base md:text-[40px] leading-none text-white">
            PHILLIP FRIEDEL
          </h1>
          <h2 className="font-inter font-bold text-base md:text-[40px] leading-none text-white">
            SOFTWARE DEVELOPER
          </h2>
        </div>
        <div className=" row-span-12  sm:row-span-11 content-center justify-items-center  border-l border-b">
          <div className="flex flex-col px-4 py-6 sm:p-8 justify-between h-full sm:h-4/5">
            <p className="font-inter font-medium text-xs sm:text-medium leading-tight text-white">
              Hey, I’m a passionate software developer who enjoys learning new
              things and is not afraid of a challenge.
            </p>
            <div className="flex w-full text-white items-center justify-between">
              <p className="font-inter font-medium text-xs md:text-medium leading-tight text-white">
                Get to know me
              </p>
              <IconArrowDown
                // size={30}
                color="white"
                stroke={2}
                className="self-center col-start-1 animate-bounce w-5 h-5 md:w-8 md:h-8"
              />
            </div>
          </div>
        </div>
        <div className=" row-span-9 bg-banner-image bg-cover"></div>
        <div className="hidden sm:grid row-start-12  row-span-1 col-start-2 items-center grid-cols-12 grid-rows-1 border-l">
          <div className="flex col-start-1 col-span-10">
            <IconMapPinFilled
              size={30}
              color="white"
              stroke={1}
              className="self-center  mx-2"
            />
            <div className="flex flex-col col-start-2 col-span-6">
              <p className="text-white font-inter font-light text-xs">
                Berlin, Germany
              </p>
              <p className="text-white font-inter font-thin text-xs">
                52.5200° N, 13.4050° E
              </p>
            </div>
          </div>

          <div className="h-full p-1 col-start-12 col-span-1 border-l ">
            <div className="h-full w-auto bg-no-repeat bg-asterisk-image bg-contain bg-center"></div>
            {/* <img
              className="object-cover max-w-full max-h-full"
              src={bigAsterisk}
              alt="Asterisk image"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

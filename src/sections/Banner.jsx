import { IconMapPinFilled, IconArrowDown } from "@tabler/icons-react";
export default function Banner() {
  return (
    <div className="leading-normal flex flex-col flex-grow bg-dark-gray border-white ">
      <div className="grid grid-cols-2 grid-rows-12 md:h-full border-b">
        <div className=" row-span-2 content-center justify-items-center px-2 border-b">
          <h1 className="font-inter font-bold text-sm sm:text-medium md:text-[30px] lg:text-large leading-none text-white">
            PHILLIP FRIEDEL
          </h1>
          <h2 className="font-inter font-bold text-sm sm:text-medium md:text-[30px] lg:text-large leading-none text-white">
            SOFTWARE DEVELOPER
          </h2>
        </div>
        <div className="row-span-11 content-center justify-items-center  border-l border-b">
          <div className="flex flex-col px-4 py-6 sm:px-16 sm:py-10 justify-between h-full sm:h-4/5">
            <p className="font-inter font-medium text-sm sm:text-base leading-tight text-white">
              Hey, I’m a passionate software developer who enjoys learning new
              things and is not afraid of a challenge.
            </p>
            <div className="flex w-full text-white items-center justify-between">
              <p className="font-inter font-thin text-sm sm:text-base leading-tight text-white">
                Get to know me
              </p>
              <IconArrowDown
                color="white"
                stroke={2}
                className="self-center col-start-1 animate-bounce h-5 md:h-8 w-auto"
              />
            </div>
          </div>
        </div>
        <div className=" row-span-10 bg-banner-image bg-cover bg-center"></div>
        <div className="grid row-start-12 row-span-1 col-start-2 items-center grid-cols-12 grid-rows-1 border-l">
          <div className="flex col-start-1 col-span-10 py-1">
            <IconMapPinFilled
              //   size={30}
              color="white"
              stroke={1}
              className="self-center mx-2 h-4 md:h-8 w-auto"
            />
            <div className="flex flex-col col-start-2 col-span-6">
              <p className="text-white font-inter font-light text-[6px] md:text-xs">
                Berlin, Germany
              </p>
              <p className="text-white font-inter font-thin text-[6px] md:text-xs">
                52.5200° N, 13.4050° E
              </p>
            </div>
          </div>

          <div className="h-full p-1 col-start-12 col-span-1 border-l ">
            <div className="h-full w-auto bg-no-repeat bg-asterisk-image bg-contain bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

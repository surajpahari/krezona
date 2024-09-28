import Work from "@/public/how-we-work.png"
import Image from "next/image";
import { ResearchCard } from "./cards/researchCard";
import { Index } from ".";
export const ProcessSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="tracking-[3px] text-base opacity-50 mb-4">
          CREATION PROCESS
        </div>
        <div className="text-center mb-8 text-barlow-condensed text-[56px] leading-[64px]">
          How We Work
        </div>
        <div className="font-normal leading-8 opacity-50 text-center">
          Video game developers take a designer's concepts and build them into a playable <br /> game for users developers, also known as games developers.
        </div>
        <div className="relative mt-[70px] mb-[304px] sm:mb-0">
          <div className="absolute top-0  -translate-x-1/2 translate-y-1/4 sm:block hidden">
            <ResearchCard />
          </div>
          <div className="absolute top-full  left-1/2 -translate-x-1/2 -translate-y-[48px]  sm:hidden">
            <ResearchCard />
          </div>
          <Image
            src={Work}
            alt="Work"
          />
        </div>
        <div className="mt-12">
          <Index />
        </div>
      </div>
    </>
  );

}

import { Button } from "../ui/button"
import Image from "next/image"
import Service from "@/public/service.png"
import About from "@/public/about.png"
export const ServiceSection = () => {
  return (
    <div className="flex flex-wrap sm:gap-[115px] items-center justify-center">
      <div>
        <Image src={About} alt="About" />
      </div>
      <div className="flex flex-col  justify-center">
        <div className=" mb-[17px] leading-8 tracking-[3px] opacity-50">
          <span className="leading-8 tracking-[3px] opacity-50">
            OUR SERVICE
          </span>
        </div>
        <div className="mb-[29px] text-barlow-condensed  text-7xl text-[56px]  leading-[64px] font-extralight">
          The Most Important
          <br />
          Factors When Applying
        </div>
        <div className="mb-[27px] text-xl font-normal leading-8">
          Video game developers take a designer's concepts and
          <br />
          build them into a playable game for users.
        </div>
        <div className="flex gap-2 items-center mt-[30px]">
          <div>
            <Image
              src={Service}
              alt="service"
            />
          </div>
          <div>
            <div className="font-light text-barlow-condensed text-2xl leading-8">
              Video game
            </div>
            <div className="opacity-50">
              Designer's concepts
            </div>
          </div>
        </div>

      </div>
    </div>)

}

import { Button } from "../ui/button"
import Image from "next/image"
import About from "@/public/about.png"
export const AboutSection = () => {
  return (
    <div className="flex flex-wrap sm:gap-[115px] items-center justify-center">
      <div>
        <Image src={About} alt="About" />
      </div>
      <div className="flex flex-col  justify-center">
        <div className=" mb-[17px] leading-8 tracking-[3px] opacity-50">
          <span className="leading-8 tracking-[3px] opacity-50">
            ABOUT US
          </span>
        </div>
        <div className="mb-[29px] text-barlow-condensed  text-7xl text-[56px]  leading-[64px]">
          Design, Development
          <br />
          and Release of a Game
        </div>
        <div className="mb-[27px] text-xl font-normal leading-8">
          Video game developers take a designer's concepts and
          <br />
          build them into a playable game for users.
        </div>
        <div className="opacity-50">
          Also known as games developers or video game programmers, write
          <br />
          code for games for a variety of formats, such as PCs, consoles, web
          <br />browsers and mobile phones.
        </div>
        <div className="flex gap-2 items-center mt-[30px]">
          <div>
            <Button variant={'outline'} className="px-[37px]">
              <span className="font-bold text-sm leading-[16.8px] tracking-[1px]">
                Our Principle
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>)

}

import { Button } from "../ui/button"
import Image from "next/image"
import Intro from "@/public/intro.png"
export const IntroSection = () => {
  return (
    <div className="flex flex-wrap-reverse sm:gap-[100px] items-center justify-center">
      <div className="flex flex-col  justify-center">
        <div className=" mb-[17px] leading-8 tracking-[3px] opacity-50">
          <span className="leading-8 tracking-[3px] opacity-50">
            GAME DEVELOPMENT
          </span>
        </div>
        <div className="mb-[29px] text-barlow-condensed  text-7xl leading-[80px]">
          The Art of
          <br />
          Creating Games
        </div>
        <div className="mb-[27px] text-xl font-normal leading-8">
          Game Development is the art of creating games and
          <br />
          describes the design, development and release.
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Button className="bg-regal-blue text-sm font-bold leading-[16.8px] tracking[1px] px-[37.5px]">
              Portfolio
            </Button>
          </div>
          <div className="flex items-center">
            <div>
            </div>
            <div className="opacity-50">
              Play Video
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={Intro} alt="introduction" />
      </div>
    </div>)

}

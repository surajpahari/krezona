import { Button } from "../ui/button"
import Explore1 from "@/public/explore1.png"
import Explore2 from "@/public/explore2.png"
import Explore3 from "@/public/explore3.png"

import { ExploreCard } from "./cards/exploreCard"

export const ExporeSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className=" mb-4 leading-8 tracking-[3px] opacity-50">
          <span className="text-center leading-8 tracking-[3px] opacity-50">
            GAME PROTFOLIO
          </span>
        </div>
        <div className="text-center mb-8 text-barlow-condensed text-[56px] leading-[64px]">
          Explore Our Games
        </div>
        <div className="font-normal leading-8 opacity-50 text-center">
          Game Development is the art of creating games and describes the design,
          <br />
          development and release.
        </div>
        <div className="mt-[70px] flex gap-[42px] flex-wrap items-center justify-center">
          <ExploreCard image={Explore1} alt="explore1" title="Funny Video Adventure" description="Action,RPG" size="lg" />
          <div className="flex flex-col gap-12">
            <ExploreCard image={Explore2} alt="explore1" title="Super Cosmo 3D" description="Online MMO" size="sm" />
            <ExploreCard image={Explore3} alt="explore1" title="Space Ship Star" description="Racing Simulator" size="sm" />
          </div>
        </div>
        <div className="mt-[64px]">
          <Button variant={'outline'} className="pr-10 pl-[41px] pt-[15px] pb-4 font-bold text-sm leading-[16.8px]">
            WATCH ALL
          </Button>
        </div>
      </div>
    </div>)

}

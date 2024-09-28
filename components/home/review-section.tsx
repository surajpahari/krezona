import { ReviewCard } from "./cards/reviewCard"
import ColorHex from "@/public/colorhex.png"
import Image from "next/image"
import PlainHex from "@/public/plainhex.png"

export const ReviewSection = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[130px]">
        <div >
          <div className=" mb-4 leading-8 tracking-[3px] opacity-50">
            <span className="leading-8 tracking-[3px] opacity-50">
              REVIEWS
            </span>
          </div>
          <div className="mb-8 text-barlow-condensed text-[56px] leading-[64px]">
            People Reviews
            <br />
            Of Our Games
          </div>
          <div className="font-normal leading-8 opacity-50 text-center">
            Game Development is the art of creating games and
            <br />
            and describes the design, development and release.
          </div>
          {/* <div className="flex flex-wrap"> */}
          {/*   <Image */}
          {/*     src={ColorHex} */}
          {/*     alt="colorhex" */}
          {/*   /> */}
          {/*   <Image */}
          {/*     src={PlainHex} */}
          {/*     alt="plainhex" */}
          {/*   /> */}
          {/* </div> */}
        </div>
        {/*Review Card*/}
        <div>
          <ReviewCard />
        </div>
      </div>

    </>
  )

}

import Image from "next/image"
import Star from "@/public/stars.png"
import Shape from "@/public/reviewshape.png"
export const ReviewCard = () => {
  return (
    <div className="bg-gradient-to-t from-lightblue to-darkblue px-12 rounded-lg">
      <div className="relative">
        <div className="absolute  -translate-y-1/4 right-0">
          <Image
            src={Shape}
            alt="shape"
          />
        </div>
      </div>

      <div className=" pt-[96px] pb-[54px]">
        <div className="mb-4">
          <Image src={Star} alt="star" />
        </div>
        <div className="text-[20px] leading-8 text-base">
          "Graphics are naturally important because games are,<br /> to an extent, a work of art. The actual technical quality<br />
          of graphics is important, but even more important is
          <br />
          the art design aspect of game design. Games should
          <br />
          have a consistent look and feel that reflects the
          <br />themes and moods of the game itself."
        </div>
        <div className="mt-4 text-2xl text-barlow-condensed">
          Meg Rigden
        </div>
      </div>
    </div>

  )

}

import Image from "next/image"
import Download from "@/public/download.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
type ExploreInfo = {
  image: StaticImport,
  alt: string,
  title: string,
  description: string
  size: "lg" | "sm"
}

export const ExploreCard = (exploreInfo: ExploreInfo) => {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <Image
            src={exploreInfo.image}
            alt={exploreInfo.alt}
          />
        </div>
        <div className="border-2 border-t-0 rounded-b-md border-[rgba(255,255,255,0.07)]">
          {
            exploreInfo.size === "lg" ?
              <div className="mx-12 pt-10 mb-[56px]">
                <div className="text-normal  opacity-50 leading-8">
                  {exploreInfo.description}
                </div>
                <div className="flex items-center justify-center mt-3.5">
                  <div className=" flex-grow font-light text-[40px] leading-[48px] text-barlow-condensed">
                    {exploreInfo.title}
                  </div>
                  <div>
                    <Image
                      src={Download}
                      alt="Download"
                    />
                  </div>
                </div>

              </div>
              :
              <div className="mx-8 pt-[26px] mb-[42px]">
                <div className="text-normal  opacity-50 leading-8">
                  {exploreInfo.description}
                </div>
                <div className="flex mt-3">
                  <div className="font-light text-2xl leading-8 text-barlow-condensed flex-grow">
                    {exploreInfo.title}
                  </div>
                  <div>
                    <Image
                      src={Download}
                      alt="Download"
                    />
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import Download from "@/public/download.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
type FeatureInfo = {
  image: StaticImport,
  alt: string,
  title: string,
  description: JSX.Element
}

export const FeatureCard = (featureInfo: FeatureInfo) => {
  return (
    <>
      <div className="mt-[102px] flex flex-col justify-center">
        <div className="w-full">
          <div className=" relative w-full">
            <div className="absolute -translate-y-[64px]  translate-x-1/2">
              <Image
                width={144}
                height={144}
                src={featureInfo.image}
                alt={featureInfo.alt}
              />
            </div>
          </div>
        </div>
        <div className="pt-[76px] pb-[26px] flex flex-col items-center justify-center border-2 rounded-xl px-10 border-[rgba(255,255,255,0.07)]">
          <div className="text-barlow-condensed font-light leading-12 text-[40px]">
            {featureInfo.title}
          </div>
          <div className="text-center text-[14px] leading-[24px] opacity-50">
            {featureInfo.description}
          </div>
        </div>

      </div>
    </>
  )
}

import { FeatureCard } from "./cards/featureCard"
import Feature1 from "@/public/feature1.svg"
import Feature2 from "@/public/feature2.svg"
import Feature3 from "@/public/feature3.svg"
import Feature4 from "@/public/feature4.svg"

export const FeatureSection = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-[130px] flex-wrap">
        <div>
          <div className="tracking-[3px] text-base opacity-50 mb-4">
            FEATURES
          </div>
          <div className="font-light  text-barlow-condensed text-[56px] leading[64px] mb-[30px]">
            Most Rewarding
            <br />
            Games on Market
          </div>
          <div className="text-xl font-normal leading-8 mb-[28px]">
            Video game developers take a designer's concepts and
            <br />
            build them into a playable game for users.
          </div>
          <div className="opacity-50">
            Also known as games developers or video game programmers, write
            <br />
            code for games for a variety of formats, such as PCs, consoles, web
            <br />
            browsers and mobile phones.
          </div>
        </div>
        <div className="flex gap-[30px] flex-wrap items-center justify-center">
          <div>
            <FeatureCard
              image={Feature1}
              alt="feature1"
              title="Quality"
              description=<p>The sky was cloudless and of a
                <br />deep dark blue spectacle.</p>
            />
            <FeatureCard
              image={Feature2}
              alt="feature1"
              title="Easy"
              description=<p>
                Deep dark blue spectacle before <br /> us was indeed sublime.
              </p>

            />
          </div>
          <div className="sm:-translate-y-[48px]">
            <FeatureCard
              image={Feature3}
              alt="feature1"
              title="Fast"
              description=<p>
                Cloudless and of a deep dark blue
                <br />spectacle before us was.
              </p>
            />
            <FeatureCard
              image={Feature4}
              alt="feature1"
              title="Reliability"
              description=<p>
                Blue spectacle before us was<br /> indeed sublime.
              </p>
            />
          </div>
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import Award1 from "@/public/award1.png"
import Award2 from "@/public/award2.png"
import Award3 from "@/public/award3.png"
import Award4 from "@/public/award4.png"
import Award5 from "@/public/award5.png"

export const AwardSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <span className=" leading-8 tracking-[3px] opacity-50">
          OUR AWARDS
        </span>
        <div className="mb-10 text-barlow-condensed text-[40px] leading-[64px]">
          Most Famous Awards We Got
        </div>
        <div className="flex gap-20 flex-wrap items-center justify-center">
          <Image src={Award1} alt="award1" />
          <Image src={Award2} alt="award2" />
          <Image src={Award3} alt="award3" />
          <Image src={Award4} alt="award4" />
          <Image src={Award5} alt="award5" />
        </div>
      </div>
    </div>
  );
}

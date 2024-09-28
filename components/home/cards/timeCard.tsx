import Clock from "@/public/clock.svg"
import Image from "next/image"
export const TimeCard = ({ time }: { time: string }) => {
  return (
    <div className="flex bg-gradient-to-l from-pink to-blue rounded-lg p-1 gap-1">
      <Image
        src={Clock}
        alt="clock"
      />
      <div>
        3d 12h:35m:42s
      </div>
    </div>
  )

}

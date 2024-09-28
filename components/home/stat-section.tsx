import { StatCard } from "./cards/statCard"

export const StatSection = () => {
  return (
    <>
      <div>
        <div className=" text-center tracking-[3px] text-base opacity-50 mb-4">
          SOME NUMBERS
        </div>
        <div className="text-center mb-12 text-barlow-condensed text-[56px] leading-[64px] font-light">
          Games Have a Consistent Look
        </div>
        <div className="flex justify-center gap-[30px] flex-wrap">
          <StatCard stat="7.3000+" description="The sky was cloudless" type="normal" />
          <StatCard stat="420<" description="Deep dark blue" type="normal" />
          <StatCard stat="95%" description="Creating games" type="gradient" />
          <StatCard stat="0.002" description="Describes the design" type="normal" />
        </div>
      </div>
    </>
  )
}

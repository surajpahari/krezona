type StatInfo = {
  description: string,
  stat: string,
  type: 'normal' | 'gradient'
}

export const StatCard = (statInfo: StatInfo) => {
  return (
    <>
      <div className={`flex flex-col justify-center border-2 rounded-xl px-8 py-6 min-w-[220px] border-[rgba(255,255,255,0.01)] 
${statInfo.type == 'gradient' ? 'bg-gradient-to-l from-pink to-blue' : 'bg-gradient-to-l from-lightblue to-darkblue p-1'}`}>
        <div className="font-light text-[40px] leading-[48px] mb-2 text-barlow-condensed">
          {statInfo.stat}
        </div>
        <div className="font-light opacity-50 text-base">
          {statInfo.description}
        </div>
      </div>
    </>
  )
}

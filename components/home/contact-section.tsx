import { Button } from "../ui/button"

export const ContactSection = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-l from-pink to-blue  px-16 rounded-lg pt-[58px]">
        <div className="flex flex-grow flex-col">
          <div className=" tracking-[3px] text-base opacity-50 mb-4">
            CONTACT
          </div>
          <div className="mb-12 text-barlow-condensed text-[56px] leading-[64px] font-light">
            Contact Us
          </div>
          <div className="font-normal leading-8 opacity-60 mb-[70px]">
            Game Development is the art of creating games and describes
          </div>
        </div>
        <div className="flex justify">
          <Button variant={'default'} className="bg-red-500 pr-10 pl-[41px] pt-[15px] pb-4 font-bold text-sm leading-[16.8px]">CONTACT US</Button>
        </div>
      </div>
    </>

  )
}

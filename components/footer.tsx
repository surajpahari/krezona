import Image from "next/image"
import Fb from "@/public/fb-icon.svg"
import Twitter from "@/public/twitter-icon.svg"
import Insta from "@/public/insta-icon.svg"
export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around pt-[88px] flex-wrap gap-8">
        <div className="text-barlow-condesed font-light text-[40px] leading-[48px]">
          GM
        </div>
        <div className="font-normal leading-8">
          <div className=" leading-8 tracking-[3px] opacity-50 mb-4">
            Menu
          </div>
          <div>
            <div>About</div>
            <div>Games</div>
            <div>Service</div>
            <div>Event</div>
            <div>Blog</div>
          </div>
        </div>
        <div className="font-normal leading-8">
          <div className=" leading-8 tracking-[3px] opacity-50 mb-4">
            Service
          </div>
          <div>About</div>
          <div>Games</div>
          <div>Service</div>
          <div>Event</div>
          <div>Blog</div>
        </div>
        <div>
          <div className='flex gap-2'>
            <Image src={Fb} alt='Fb-icon' />
            <Image src={Twitter} alt='Fb-icon' />
            <Image src={Insta} alt='Fb-icon' />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-[70px] flex-wrap">
        <div className='font-normal leading-8 opacity-50 flex-grow'>
          Copyright © 2020 Laaqiq. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  )
};

export default Footer;


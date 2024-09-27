'use client'
import { Button } from "../ui/button"
import { NavSheet } from "./sheetnavbar"
export const Navbar = () => {
  return (
    <>
      <div className="flex gap-2 pt-4 snb:px-[135px] px-2 font-barlow items-center justify-center">
        <div className="flex-grow font-light text-[40px] leading-[48px]">
          <div>
            <span>
              GAM
            </span>
          </div>
        </div>
        <div className="snb:flex hidden items-center justify-center flex-grow">
          <div className="flex gap-10 ">
            <div className="text-base leading-8 font-normal hover:cursor-pointer">
              <span>
                About
              </span>
            </div>
            <div className="text-base leading-8 font-normal hover:cursor-pointer">
              <span>
                Games
              </span>
            </div>
            <div className="text-base leading-8 font-normal hover:cursor-pointer">
              <span>
                Serivces
              </span>
            </div>
            <div className="text-base leading-8 font-normal hover:cursor-pointer">
              <span>
                Event
              </span>
            </div>
            <div className="text-base leading-8 font-normal hover:cursor-pointer">
              <span>
                Blog
              </span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-end">
              <div className="font-bold text-sm">
                <Button variant={'outline'} className="outline-1 border">
                  <span className="font-bold text-sm leading-[16.8px]">
                    CONTACT US
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="snb:hidden block">
          <NavSheet />
        </div>
      </div >
    </>
  )
}

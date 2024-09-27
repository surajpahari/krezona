'use client'
import { SheetContent, Sheet, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { MenuIcon } from "lucide-react"
export function NavSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="max-w-96">
          <div className="flex flex-col w-full gap-2 justify-center items-center">
            <div className="text-lg leading-8 font-normal">
              <span>
                About
              </span>
            </div>
            <div className="text-lg leading-8 font-normal">
              <span>
                Games
              </span>
            </div>
            <div className="text-lg leading-8 font-normal">
              <span>
                Serivces
              </span>
            </div>
            <div className="text-lg leading-8 font-normal">
              <span>
                Event
              </span>
            </div>
            <div className="text-lg leading-8 font-normal">
              <span>
                Blog
              </span>
            </div>
          </div>
        </SheetContent>
      </Sheet >
    </>
  )
}

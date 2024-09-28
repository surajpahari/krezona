import { BlogCard } from "./cards/blogCard"
import Event1 from "@/public/event1.png"
import { Button } from "../ui/button"
import Event2 from "@/public/event2.png"
import Event3 from "@/public/event3.png"

export const BlogSection = () => {
  return (
    <>
      <div>
        <div className=" text-center tracking-[3px] text-base opacity-50 mb-4">
          GAME EVENTS
        </div>
        <div className="text-center mb-12 text-barlow-condensed text-[56px] leading-[64px] font-light">
          Welcome to Game Events
        </div>
        <div className="font-normal leading-8 opacity-50 text-center mb-[70px]">
          Video game developers take a designer's concepts and build them into a playable<br /> game for users.
        </div>
        <div className="flex gap-[30px] items-center justify-center flex-wrap">
          <BlogCard
            image={Event1}
            alt="image1"
            description="20 Nov Award"
            title=<p>"The Complete Guide Average Video
              <br />
              Game Designer Salary"</p>
          />

          <BlogCard
            image={Event2}
            alt="image2"
            description="25 Nov Award"

            title=<p>
              The 5 Decisive Components
              <br />
              of Outstanding Learning Games
            </p>
          />

          <BlogCard
            image={Event3}
            alt="image3"
            description="21 Nov Award"
            title=<p>"The Complete Guide Average Video
              <br />
              Game Designer Salary"</p>
          />
        </div>
        <div className="flex items-center justify-center mt-16">
          <Button variant={"outline"} className="font-bold tracking-1px">
            SHOW MORE
          </Button>
        </div>
      </div>
    </>
  )
}

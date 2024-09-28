import { EventCard } from "./cards/eventCard"
import Event1 from "@/public/event1.png"
import { Button } from "../ui/button"
import Event2 from "@/public/event2.png"
import Event3 from "@/public/event3.png"

export const EventSection = () => {
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
          <EventCard
            image={Event1}
            alt="image1"
            description="20 Nov Award"
            title="Best Game Award"
          />
          <EventCard
            image={Event2}
            alt="image1"
            description="20 Nov Award"
            title="Best Game Award"
          />
          <EventCard
            image={Event3}
            alt="image1"
            description="20 Nov Award"
            title="Best Game Award"
          />
        </div>
        <div className="flex items-center justify-center mt-16">
          <Button variant={"outline"} className="font-bold tracking-1px">
            ALL EVENTS
          </Button>
        </div>
      </div>
    </>
  )
}

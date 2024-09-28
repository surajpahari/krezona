import { IntroSection } from "@/components/home/intro-section";
import { AboutSection } from "../components/home/about-section";
import { Navbar } from "@/components/navbar/navbar";
import { ExporeSection } from "@/components/home/explore-section";
import { FeatureSection } from "@/components/home/feature-section";
import { ProcessSection } from "@/components/home/process-section";
import { StatSection } from "@/components/home/stat-section";
import { ServiceSection } from "@/components/home/service-section";
import { EventSection } from "@/components/home/event-section";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[100px] sm:mx-[135px] mx-[23px]">
        <IntroSection />
      </div>
      <div className="mt-64 ">
        <AboutSection />
      </div>
      <div className="mt-44">
        <ExporeSection />
      </div>
      <div className="mt-[270px] mx-2 sm:mx-0">
        <FeatureSection />
      </div>
      <div className="mt-[210px]">
        <ProcessSection />
      </div>
      <div className="mt-[154px]">
        <StatSection />
      </div>
      <div className="mt-[239px] mx-2 sm:mx-0">
        <ServiceSection />
      </div>
      <div className="mt-[239px] mx-2 sm:mx-0">
        <EventSection />
      </div>
    </div>

  );
}

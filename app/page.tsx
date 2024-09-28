import { IntroSection } from "@/components/home/intro-section";
import { AboutSection } from "../components/home/about-section";
import { Navbar } from "@/components/navbar/navbar";
import { ExporeSection } from "@/components/home/explore-section";
import { FeatureSection } from "@/components/home/feature-section";

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
    </div>

  );
}

import { IntroSection } from "@/components/home/intro-section";
import { AboutSection } from "../components/home/about-section";
import { Navbar } from "@/components/navbar/navbar";
import { ExporeSection } from "@/components/home/explore-section";
import { FeatureSection } from "@/components/home/feature-section";
import { ProcessSection } from "@/components/home/process-section";
import { StatSection } from "@/components/home/stat-section";
import { ServiceSection } from "@/components/home/service-section";
import { EventSection } from "@/components/home/event-section";
import { ReviewSection } from "@/components/home/review-section";
import { AwardSection } from "@/components/home/award-section";
import { BlogSection } from "@/components/home/blog-section";
import { ContactSection } from "@/components/home/contact-section";

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
      <div className="mt-[230px]">
        <ReviewSection />
      </div>
      <div className="mt-[218px]">
        <AwardSection />
      </div>
      <div className="mt-[218px]">
        <BlogSection />
      </div>
      <div className="mx-[23px] mt-[144px]">
        <ContactSection />
      </div>

    </div>

  );
}

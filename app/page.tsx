import { IntroSection } from "@/components/home/intro-section";
import { AboutSection } from "../components/home/about-section";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer";
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
      <div className="pt-[100px] sm:px-[100px] px-[2px] gradient-background">
        <IntroSection />
      </div>
      <div className="pt-64 gradient-background-l">
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
      <div className=" sm:mx-[135px] mx-[2px]">
        <Footer />
      </div>
    </div>

  );
}

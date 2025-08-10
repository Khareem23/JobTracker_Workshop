import type { FC, JSX } from "react";
import SectionHeader from "../common/section-header";
import MaxWidth from "../layout/max-width";

const Hero: FC = (): JSX.Element => {
  return (
    <div className="relative w-full h-[600px] md:h-[866px] pt-[40px] md:pt-[152px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero_background.png"
          alt="hero image"
          width={"100%"}
          height={"100%"}
          className="w-full h-full object-cover"
        />
      </div>
      <MaxWidth className="relative pt-[96px]">
        <div className="z-10 flex flex-col gap-4 md:gap-8 items-center md:item-start h-full w-full max-w-[648px]">
          <SectionHeader
            header="Organize Your Job Search Journey"
            subTitle="Track applications, schedule interviews, and never miss follow-ups with our all-in-one job application tracker"
            headerSize="4xl"
            headerSizeMobile="xl"
            subTitleSize="lg"
            subTitleSizeMobile="sm"
            alignment="left"
            alignmentMobile="center"
            gap="md"
            gapMobile="sm"
            containerClassName="text-center md:text-left"
            headerColor="#111827"
            subTitleColor="#374151"
          />

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <button className="px-5 py-[10px] bg-[#149DFF] text-white border border-[#149DFF] rounded-[6px] text-xs md:text-base">
              Get Started - It's Free
            </button>
            <button className="px-5 py-[10px] bg-white md:bg-transparent border border-[#149DFF] text-[#149DFF] rounded-[6px] text-xs md:text-base">
              See How It Works
            </button>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Hero;

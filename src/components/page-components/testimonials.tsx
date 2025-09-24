import type { FC, JSX } from "react";
import MaxWidth from "../layout/max-width";
import SectionHeader from "../common/section-header";
import QuoteIcon from "../icons/quote";

const testimonials = [
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    testimonial:
      "This job tracker has transformed my job search process. I can easily keep track of all my applications and never miss an interview!",
  },
  {
    name: "John Smith",
    profession: "Product Manager",
    testimonial:
      "The features offered by this job tracker are exactly what I needed to stay organized and focused during my job search.",
  },
  {
    name: "Emily Johnson",
    profession: "UX Designer",
    testimonial:
      "I love how user-friendly this job tracker is. It has made my job search so much easier and more efficient!",
  },
];

const Testimonials: FC = (): JSX.Element => {
  return (
    <MaxWidth className="relative flex gap-8 py-10 md:py-24 bg-[#CFEBFF]">
      <div className="absolute top-2 left-4 lg:top-24 lg:left-20">
        <QuoteIcon className="text-[#1DB5BE]/30" />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8 py-4 md:p-12 lg:px-[74px]">
        <div className="flex flex-col gap-9 items-center md:items-end">
          <div className="w-full max-w-[448px] py-2">
            <SectionHeader
              header="Stories from Real Users"
              subTitle="Join thousands of job seekers who have streamlined their job search process"
              headerSize="3xl"
              headerSizeMobile="xl"
              subTitleSize="lg"
              subTitleSizeMobile="sm"
              alignment="left"
              gap="md"
              gapMobile="sm"
              alignmentMobile="center"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[384px] h-fit lg:h-[428px] bg-white gap-8 p-8 rounded-[8px]">
            <div className="flex w-[64px] aspect-square rounded-full border-2 border-[#149DFF] items-center justify-center text-[#149DFF] font-bold text-2xl">
              {testimonials[0].name.charAt(0)}
            </div>
            <div className="flex gap-4 h-full">
              <QuoteIcon width={52} height={38} className="text-[#1DB5BE]" />
              <div className="flex flex-col justify-between gap-6">
                <p className="text-[18px] leading-[28px] text-[#111827]">
                  {testimonials[0].testimonial}
                </p>
                <div className="flex flex-col">
                  <span className="text-[18px] leading-[28px] text-[#111827] font-bold">
                    {testimonials[0].name}
                  </span>
                  <span className="text-[14px] leading-5 text-[#6B7280]">
                    {testimonials[0].profession}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col gap-8 md:gap-6 lg:gap-8 px-2">
          {testimonials.slice(1).map((testimonial) => (
            <div className="flex flex-col w-full lg:w-[488px] h-fit lg:h-[344px] bg-white gap-8 p-8 rounded-[8px]">
              <div className="flex w-[64px] aspect-square rounded-full border-2 border-[#149DFF] items-center justify-center text-[#149DFF] font-bold text-2xl">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex gap-4 h-full">
                <QuoteIcon width={52} height={38} className="text-[#1DB5BE]" />
                <div className="flex flex-col justify-between gap-6">
                  <p className="text-[18px] leading-[28px] text-[#111827]">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex flex-col">
                    <span className="text-[18px] leading-[28px] text-[#111827] font-bold">
                      {testimonial.name}
                    </span>
                    <span className="text-[14px] leading-5 text-[#6B7280]">
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Testimonials;

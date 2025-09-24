import type { FC, JSX } from "react";
import SectionHeader from "../common/section-header";
import MaxWidth from "../layout/max-width";
import FolderIcon from "../icons/folder";
import FileSearchIcon from "../icons/file-search";
import CalenderIcon from "../icons/calender";
import BellIcon from "../icons/bell";
import SignalIcon from "../icons/signal";
import StorageIcon from "../icons/storage";

const features = [
  {
    title: "Session Management",
    description:
      "Group your job applications into sessions to better organize different job search periods or target industries.",
    icon: <FolderIcon size={32} color="#149DFF" />,
  },
  {
    title: "Application Tracking",
    description:
      "Keep track of all your job applications with detailed status updates, company information, and important dates.",
    icon: <FileSearchIcon size={32} color="#1DB5BE" />,
  },
  {
    title: "Interview Management",
    description:
      "Schedule and manage multiple interview stages, add notes, and track your progress through each company's process.",
    icon: (
      <CalenderIcon size={32} primaryColor="#149DFF" secondaryColor="#1DB5BE" />
    ),
  },
  {
    title: "Smart Notifications",
    description:
      "Get timely reminders via email, SMS, or app notifications so you never miss an interview or follow-up.",
    icon: (
      <BellIcon size={32} primaryColor="#149DFF" secondaryColor="#1DB5BE" />
    ),
  },
  {
    title: "Application Analytics",
    description:
      "Gain insights with detailed statistics on your job search progress, response rates, and success patterns.",
    icon: <SignalIcon size={32} color="#149DFF" />,
  },
  {
    title: "Document Storage",
    description:
      "Store and organize your resumes, cover letters, and other job-related documents for each application.",
    icon: (
      <StorageIcon size={32} primaryColor="#149DFF" secondaryColor="#1DB5BE" />
    ),
  },
];

const Features: FC = (): JSX.Element => {
  return (
    <MaxWidth className="flex flex-col gap-8 py-10 md:py-24 items-center">
      <div className="w-full max-w-[800px]">
        <SectionHeader
          header="Powerful Features to Streamline Your Job Search"
          subTitle="Everything you need to stay organized and confident during your job hunt."
          headerSize="3xl"
          headerSizeMobile="xl"
          subTitleSize="lg"
          subTitleSizeMobile="sm"
          alignment="center"
          gap="md"
          gapMobile="sm"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature items will go here */}
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-6 items-center text-center"
          >
            {feature.icon}
            <div className="flex flex-col gap-2">
              <h3 className="text-[30px] text-[#111827] leading-10 font-bold">
                {feature.title}
              </h3>
              <p className="text-base text-[#374151] leading-6">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidth>
  );
};

export default Features;

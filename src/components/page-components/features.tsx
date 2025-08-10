import type { FC, JSX } from "react";
import SectionHeader from "../common/section-header";
import MaxWidth from "../layout/max-width";

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
    </MaxWidth>
  );
};

export default Features;

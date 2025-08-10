import classNames from "classnames";
import type { FC } from "react";

type HeaderSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type SubTitleSize = "sm" | "md" | "lg" | "xl" | "2xl";
type GapSize = "sm" | "md" | "lg" | "xl";
type Alignment = "left" | "center" | "right";

interface Props {
  header: string;
  subTitle?: string;

  headerSize?: HeaderSize;
  headerSizeMobile?: HeaderSize;

  subTitleSize?: SubTitleSize;
  subTitleSizeMobile?: SubTitleSize;

  alignment?: Alignment;
  alignmentMobile?: Alignment;
  gap?: GapSize;
  gapMobile?: GapSize;

  headerClassName?: string;
  subTitleClassName?: string;
  containerClassName?: string;

  headerColor?: string;
  subTitleColor?: string;
}

const SectionHeader: FC<Props> = ({
  header,
  subTitle,
  headerSize = "xl",
  headerSizeMobile,
  subTitleSize = "md",
  subTitleSizeMobile,
  alignment = "center",
  alignmentMobile,
  gap = "md",
  gapMobile,
  headerClassName,
  subTitleClassName,
  containerClassName,
  headerColor,
  subTitleColor,
}) => {
  const headerSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
    "3xl": "text-5xl",
    "4xl": "text-6xl",
  };

  const subTitleSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  // Helper function to create responsive header classes
  const getResponsiveHeaderClasses = () => {
    const mobileSize = headerSizeMobile || headerSize;
    const desktopSize = headerSize;

    const responsiveClasses = {
      sm: "md:text-lg",
      md: "md:text-xl",
      lg: "md:text-2xl",
      xl: "md:text-3xl",
      "2xl": "md:text-4xl",
      "3xl": "md:text-5xl",
      "4xl": "md:text-6xl",
    };

    return classNames(
      headerSizeClasses[mobileSize],
      responsiveClasses[desktopSize]
    );
  };

  // Helper function to create responsive subtitle classes
  const getResponsiveSubTitleClasses = () => {
    const mobileSize = subTitleSizeMobile || subTitleSize;
    const desktopSize = subTitleSize;

    const responsiveClasses = {
      sm: "md:text-sm",
      md: "md:text-base",
      lg: "md:text-lg",
      xl: "md:text-xl",
      "2xl": "md:text-2xl",
    };

    return classNames(
      subTitleSizeClasses[mobileSize],
      responsiveClasses[desktopSize]
    );
  };

  // Helper function to create responsive gap classes
  const getResponsiveGapClasses = () => {
    const mobileGap = gapMobile || gap;
    const desktopGap = gap;

    const responsiveClasses = {
      sm: "md:gap-2",
      md: "md:gap-4",
      lg: "md:gap-6",
      xl: "md:gap-8",
    };

    return classNames(gapClasses[mobileGap], responsiveClasses[desktopGap]);
  };

  // Helper function to create responsive alignment classes
  const getResponsiveAlignmentClasses = () => {
    const mobileAlignment = alignmentMobile || alignment;
    const desktopAlignment = alignment;

    const responsiveClasses = {
      left: "md:text-left",
      center: "md:text-center",
      right: "md:text-right",
    };

    return classNames(
      alignmentClasses[mobileAlignment],
      responsiveClasses[desktopAlignment]
    );
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  console.log(getResponsiveHeaderClasses());

  return (
    <div
      className={classNames(
        "flex flex-col",
        getResponsiveGapClasses(),
        getResponsiveAlignmentClasses(),
        containerClassName
      )}
    >
      {/*Header*/}
      <h1
        className={`font-bold ${getResponsiveHeaderClasses()} ${
          headerClassName || ""
        }`}
        style={headerColor ? { color: headerColor } : undefined}
      >
        {header}
      </h1>

      {/*SubTitle*/}
      {subTitle && (
        <p
          className={classNames(
            getResponsiveSubTitleClasses(),
            subTitleClassName
          )}
          style={subTitleColor ? { color: subTitleColor } : undefined}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

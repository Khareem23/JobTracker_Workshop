import type { FC } from "react";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MaxWidth: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[112px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidth;

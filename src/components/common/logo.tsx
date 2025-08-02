import type { FC, JSX } from "react";

interface Props {
  width?: number;
  height?: number;
}

const Logo: FC<Props> = ({ width, height }): JSX.Element => {
  return (
    <div>
      <img
        src="/logo.svg"
        alt="Logo"
        width={width || 151}
        height={height || 36}
      />
    </div>
  );
};

export default Logo;

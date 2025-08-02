import type { FC, JSX } from "react";

const Hero: FC = (): JSX.Element => {
  return (
    <div className="relative w-full h-[866px] overflow-hidden border-2 border-red-700">
      <img
        src="/hero_background.png"
        alt="hero image"
        width={"100%"}
        height={"100%"}
        className="object-cover"
      />
    </div>
  );
};

export default Hero;

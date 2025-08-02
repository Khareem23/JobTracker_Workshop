import type { FC, JSX } from "react";
import Logo from "../common/logo";
import MaxWidth from "./max-width";

interface navItem {
  title?: string;
  href?: string;
}

const navItems: navItem[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "How it works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

const Nav: FC = (): JSX.Element => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <MaxWidth className="flex items-center justify-between py-[30px]">
        <Logo />
        {/* Links */}
        <div className="flex gap-[50px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-base text-[#111827]"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex gap-[14px]">
          <button className="px-5 py-[10px] bg-transparent text-[#149DFF] border border-[#149DFF] rounded-[6px] text-base">
            Login
          </button>
          <button className="px-5 py-[10px] bg-[#149DFF] text-white border border-[#149DFF] rounded-[6px] text-base">
            Sign up Free
          </button>
        </div>
      </MaxWidth>
    </nav>
  );
};

export default Nav;

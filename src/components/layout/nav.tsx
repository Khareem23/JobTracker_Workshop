import { useEffect, useState, type FC, type JSX } from "react";
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
  // State for visibility (show/hide) of the navigation bar
  const [isVisible, setIsVisible] = useState(true);

  // Track position of the navigation bar to determine scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track if user is at the top of the page
  const [isAtTop, setIsAtTop] = useState(true);

  // Flag to prevent autoShow after nav click
  const [isNavigating, setIsNavigating] = useState(false);

  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the page is at the top
      const atTop = currentScrollY < 10;
      setIsAtTop(atTop);

      if (isNavigating) {
        setIsNavigating(false);
      }

      if (atTop) {
        setIsVisible(true);
      } else if (!isNavigating) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating, lastScrollY]);

  const handleNavClick = () => {
    setIsVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      <MaxWidth className="flex items-center justify-between py-[30px] ">
        {/*Logo*/}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-[50px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleNavClick}
              className="text-base text-[#111827]"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-[14px]">
          <button className="px-5 py-[10px] bg-transparent text-[#149DFF] border border-[#149DFF] rounded-[6px] text-base">
            Login
          </button>
          <button className="px-5 py-[10px] bg-[#149DFF] text-white border border-[#149DFF] rounded-[6px] text-base">
            Sign up Free
          </button>
        </div>

        {/*Mobile menu button*/}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-full h-0.5 bg-[#111827] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "opacity-100"
            }`}
          ></span>
        </button>
      </MaxWidth>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <MaxWidth>
            <div className="py-6 space-y-4">
              {/*Mobile Nav links*/}
              <div className="flex flex-wrap gap-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block text-lg text-[#111827] hover:text-[#149DFF] transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              {/*Mobile Action Buttons*/}
              <div className="flex flex-col gap-3">
                <button
                  onClick={closeMobileMenu}
                  className="px-5 py-[10px] bg-transparent text-[#149DFF] border border-[#149DFF] rounded-[6px] text-base"
                >
                  Login
                </button>
                <button
                  onClick={closeMobileMenu}
                  className="px-5 py-[10px] bg-[#149DFF] text-white border border-[#149DFF] rounded-[6px] text-base"
                >
                  Sign up Free
                </button>
              </div>
            </div>
          </MaxWidth>
        </div>
      )}
    </nav>
  );
};

export default Nav;

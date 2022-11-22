import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import LandingPageCallToAction from "../../reusables/landing-page-call-to-action";
import logoFull from "../../assets/logos/logo-full.png";

const navItems = [
  {
    name: "Home Initial",
    route: "/",
  },

  {
    name: "Home Current",
    route: "/home-current",
  },

  {
    name: "Log In",
    route: "/login",
  },

  // {
  //   name: "Free Investor Webinar",
  //   route: "/",
  // },
];

function HeaderView() {
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-primary-theme-color py-4">
      <div className="_container">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logoFull} alt="logo" />
          </Link>

          {/* MD SCREEN(768px) AND ABOVE NAV-MENU */}
          <nav className="ml-auto hidden md:flex ">
            {navItems.map((navItem) => {
              return (
                <div key={navItem.name} className="px-2">
                  <Link
                    href={navItem.route}
                    className="relative block py-3 px-4 text-center font-bold text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-highlight-color after:opacity-0 after:transition-opacity after:duration-100 after:ease-linear after:content-[''] hover:after:opacity-100 "
                  >
                    {navItem.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* UPTO MD SCREEN(767px) NAV-MENU */}
          <nav
            className={`absolute right-[15px] top-full block w-[200px] bg-sec-theme-color shadow-md transition-opacity duration-100 ease-linear md:hidden ${
              isNavMenuShown ? "opacity-100" : "opacity-0"
            }`}
          >
            {navItems.map((navItem) => {
              return (
                <div key={navItem.name}>
                  <Link
                    href={navItem.route}
                    className="bg-landing-page-hdr-bg-color hover:bg-landing-page-hdr-bg-color/90 block py-3 px-4 font-bold text-white transition-colors duration-100 ease-linear"
                  >
                    {navItem.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          <LandingPageCallToAction className="ml-4 hidden md:block" />

          <div className="relative ml-auto block md:hidden">
            <button
              onClick={() => setIsNavMenuShown(true)}
              className={
                isNavMenuShown ? "invisible opacity-0" : "visible opacity-100"
              }
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={() => setIsNavMenuShown(false)}
              className={`absolute top-0 left-0 ${
                isNavMenuShown ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <FontAwesomeIcon icon={faX} className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderView;

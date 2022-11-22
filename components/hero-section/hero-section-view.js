import Link from "next/link";
import LandingPageCallToAction from "../../reusables/landing-page-call-to-action";
import { useRouter } from "next/router";

function HeroSectionView() {
  const { pathname } = useRouter();

  return (
    <section
      className={`
    hero-section relative bg-cover bg-center bg-no-repeat  text-center text-white after:absolute after:top-0 after:left-0 after:h-full after:w-full after:content-['']  ${
      pathname === "/"
        ? "pb-[96px] pt-[72px] sm:pt-[96px] xl:pb-[104px] xl:pt-[180px]"
        : "pt-[36px] pb-[36px] sm:pt-[36px] xl:pb-[48px] xl:pt-[48px]"
    }
    `}
    >
      <div className="_container">
        <div className="relative z-10 flex flex-col items-center">
          <h1
            className={`text-[36px] font-extrabold uppercase leading-normal tracking-[2px] md:text-[40px] lg:text-[52px] lg:leading-[76px]  ${
              pathname === "/"
                ? "mb-4 xl:text-[72px]"
                : "mb-6 xl:mb-6 xl:text-[56px] xl:leading-[64px]"
            }`}
          >
            <span className="block text-highlight-color-sec">
              {pathname === "/" ? "Better engineering" : "Better Traders"}
            </span>
            <span className="block">
              {pathname === "/" ? "better patient outcomes" : "Better Profits"}
            </span>
          </h1>

          {pathname === "/" && (
            <p className="mb-[52px] text-[20px] text-white/90 md:text-[24px] lg:text-[28px]">
              Invest In Medical Progress
            </p>
          )}

          <LandingPageCallToAction
            className={`${pathname === "/" && "mb-[52px] xl:mb-[104px]"}`}
          />

          {pathname === "/" && (
            <>
              <Link
                href="#"
                className="text-highlight-color-sec md:text-[24px] lg:text-[28px]"
              >
                Invest $5K or More to Get Bonus Shares
              </Link>

              <p className="md:text-[24px] lg:text-[28px]">
                $5.25 Per Share | $100 Minimum
              </p>

              <Link href="#">Offering Circular</Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSectionView;

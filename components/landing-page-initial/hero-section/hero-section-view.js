import Link from "next/link";
import LandingPageCallToAction from "../../../reusables/landing-page-call-to-action";

function HeroSectionView() {
  return (
    <section className="hero-section bg-img relative pb-[96px] pt-[72px] text-center text-white after:absolute after:top-0 after:left-0 after:h-full after:w-full after:content-[''] sm:pt-[96px] xl:pb-[104px] xl:pt-[180px]">
      <div className="_container">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="mb-4 text-[36px] font-extrabold uppercase leading-normal tracking-[2px] md:text-[40px] lg:text-[52px] lg:leading-[76px] xl:text-[72px]">
            <span className="block text-highlight-color-sec">
              Better engineering
            </span>

            <span className="block">better patient outcomes</span>
          </h1>

          <p className="mb-[52px] text-[20px] text-white/90 md:text-[24px] lg:text-[28px]">
            Invest In Medical Progress
          </p>

          <LandingPageCallToAction className="mb-[52px] xl:mb-[104px]" />

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
        </div>
      </div>
    </section>
  );
}

export default HeroSectionView;

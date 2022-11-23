import Link from "next/link";
import LandingPageCallToAction from "../../reusables/landing-page-call-to-action";
import { useRouter } from "next/router";

function HeroSectionView() {
  const { pathname } = useRouter();

  return (
    <section className="hero-section bg-img relative py-[36px] text-center text-white after:absolute after:top-0 after:left-0 after:h-full after:w-full after:content-[''] xl:py-[48px]">
      <div className="_container">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="mb-6 text-[36px] font-extrabold uppercase leading-normal tracking-[2px] md:text-[40px] lg:text-[52px] lg:leading-[76px] xl:mb-8 xl:text-[56px] xl:leading-[64px]">
            <span className="block text-highlight-color-sec">
              {pathname === "/" ? "Better engineering" : "Better Traders"}
            </span>

            <span className="block">Better Profits</span>
          </h1>

          <LandingPageCallToAction className="mb-8" />

          <div className="w-full">
            <div className="relative pt-[60.5%] sm:pt-[50.5%] md:pt-[35.5%]">
              <iframe
                src="https://player.vimeo.com/video/762085273?h=e01caaa8c6"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                className="absolute top-0 left-0 h-full w-full"
              ></iframe>
            </div>

            {/* bg-sec-theme-color */}
            <div className="rounded-b-[4px]  p-2 pb-4 text-center md:p-4 md:pb-6">
              <h2 className="mb-2 text-[20px] text-highlight-color-sec md:text-[24px] lg:text-[28px]">
                Philip Anthony Anglade
              </h2>

              <p className="mb-4 font-bold uppercase text-white md:text-[20px]">
                Omnipool brief
              </p>

              <LandingPageCallToAction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionView;

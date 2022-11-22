import Link from "next/link";
import CtaBtnLink from "../../reusables/cta-link-btn";
import LandingPageCallToAction from "../../reusables/landing-page-call-to-action";

function InnovationOpportunitesSectionView() {
  return (
    <section className="space-y text-white">
      <div className="_container">
        <div className="row items-center">
          <div className="col basis-full md:basis-6/12">
            <h4 className="relative mb-7 inline-block pb-4 text-[20px] uppercase tracking-[2px] after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-[80%] after:bg-white after:content-['']">
              Market opportunity
            </h4>

            <span className="mb-7 block text-[48px] font-extrabold leading-[52px] text-highlight-color-sec lg:text-[104px] lg:leading-[112px]">
              $7.4B
            </span>

            <h1 className="section-title mb-7">Opportunity in innovation</h1>

            <p className="mb-4 text-white/80">
              It is becoming increasingly rare to find industries untouched by
              advancement and ripe for the explosive growth that often comes
              from the introduction of a game-changing technology. Yet, somehow
              in this era of groundbreaking medical progress, orthopedic tools
              and plates have remained the same for decades.
            </p>

            <p className="mb-7 text-white/80">
              With five FDA-cleared products on market and six additional
              products in active development, McGinley Orthopedics aims to
              disrupt the orthopedics industry while changing the standard of
              care and offering returns to their investors.
            </p>

            <LandingPageCallToAction className="mb-[32px] md:mb-[56px]" />

            <p className="mb-12 md:mb-0">
              $5.25 per share | $100 minimum investment
            </p>
          </div>

          <div className="col basis-full md:basis-6/12">
            {[1, 2, 3].map((item) => {
              return (
                <div
                  key={item}
                  className="innovation-opportunity-bg-img mb-6 rounded-[4px] bg-cover bg-center bg-no-repeat p-6 pt-[144px]"
                >
                  <h1 className="text-[32px] leading-[36px]">Intellisense</h1>

                  <span className="mb-6 block">Handled Robotics</span>

                  <span className="block text-[32px] font-bold leading-[36px] text-highlight-color-sec">
                    $2.5B
                  </span>

                  <span className="block font-bold uppercase">
                    Market opportunity
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnovationOpportunitesSectionView;

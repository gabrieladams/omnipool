import CtaBtnLink from "../../reusables/cta-link-btn";

function InvestSectionView() {
  return (
    <section className="space-y invest-section-bg-img bg-img overlay relative text-center text-white  after:bg-gradient-to-tr after:from-primary-theme-color after:to-primary-theme-color/80">
      <div className="_container relative z-10 flex flex-col items-center">
        <span className="mb-2 block text-[20px] capitalize md:text-[28px] lg:text-[32px]">
          Invest in medical progress
        </span>

        <h1 className="mb-4 text-[28px] uppercase leading-[40px] md:text-[36px] md:leading-[48px] lg:text-[52px] lg:leading-[60px]">
          <span className="text-highlight-color">Guesswork has no place</span>
          <br />
          in the operating room
        </h1>

        <p className="mb-4 text-white/80">
          The standard of care being used in the operating room hasn’t been
          updated in decades.&nbsp; Surgeons rely on unsophisticated power tools
          and plates and a sense of “feel” when performing orthopedic
          surgeries.&nbsp;
        </p>

        <p className="mb-12 text-white/80">
          This can result in errors that can be dangerous, lead to long-term
          patient suffering, and are costly for hospitals and surgeons alike.
          McGinley Orthopedics is on a mission to change that.
        </p>

        <CtaBtnLink />
      </div>
    </section>
  );
}

export default InvestSectionView;

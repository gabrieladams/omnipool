import Image from "next/image";
import img from "../../assets/images/about-section/img.png";

function AboutSectionView() {
  return (
    <section className="space-b text-white">
      <div className="_container">
        <div className="row items-center">
          <div className="col basis-full md:basis-6/12">
            <h1 className="section-title mb-6">Engineering is in our bones</h1>

            <p className="mb-4 text-white/80">
              McGinley Orthopedics strives to elevate the standard of care in
              orthopedics through better engineering.&nbsp;
              <span className="text-white">
                Our mission is to improve patient safety through medical
                technology while simultaneously reducing costs.
              </span>
            </p>

            <p className="mb-12 text-white/80">
              McGinley Orthopedics has a proven record of success in the
              operating room. We’re currently partnered with hospitals and
              universities across the country. Our technologies have been used
              in over 1,000 successful surgeries. The FDA Cleared
              IntelliSense®&nbsp;Drill is one of five orthopedics devices we
              have brought to market.
            </p>

            <div className="flex flex-wrap">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div key={item} className="mb-12 basis-full md:basis-1/2">
                    <span className="block text-[32px] font-bold leading-[36px] lg:text-[48px] lg:leading-[52px]">
                      126
                    </span>

                    <span className="block text-[16px] font-bold uppercase text-highlight-color-sec lg:text-[20px]">
                      Issued & pending patents
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mb-12 text-white/80 md:mb-0">
              *McGinley Engineered Solutions, a fully owned subsidiary of
              McGinley Orthopaedic Innovations, Inc., has 71 patent families
              including 104 issued patents and 22 pending patent applications.
            </p>
          </div>

          <div className="basis-full px-[15px] md:basis-6/12">
            <Image src={img} alt="bone" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionView;

import Link from "next/link";
import Image from "next/image";
import img from "../../../assets/images/investment-guide-section/img.png";

function InvestmentGuideSectionView() {
  return (
    <section className="space-b">
      <div className="_container">
        <div className="flex flex-wrap items-center rounded-[4px] bg-sec-theme-color p-12 sm:p-[72px] md:p-12 lg:p-[72px]">
          <div className="basis-full md:basis-4/12">
            <Image
              src={img}
              alt="guide cover"
              className="mb-6 border-[8px] border-white md:mb-0"
            />
          </div>

          <div className="basis-full md:basis-8/12 md:pl-12">
            <h1 className="mb-6 text-[32px] uppercase leading-[36px] text-highlight-color-sec sm:text-[36px] sm:leading-[40px] lg:text-[52px] lg:leading-[56px]">
              Download our investment guide
            </h1>

            <Link href="#" className="btn btn-md btn-tertiary">
              Get the guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentGuideSectionView;

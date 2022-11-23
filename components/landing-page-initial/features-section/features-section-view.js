import Image from "next/image";
import img from "../../../assets/logos/logo-full.png";

const items = [
  {
    id: 1,
    img: img,
  },

  {
    id: 2,
    img: img,
  },

  {
    id: 3,
    img: img,
  },

  {
    id: 4,
    img: img,
  },

  {
    id: 5,
    img: img,
  },
];

function FeaturesSectionView() {
  return (
    <section className="space-y overlay features-section-bg-img bg-img relative text-center after:bg-gradient-to-tr after:from-primary-theme-color after:to-primary-theme-color/80">
      <div className="_container relative z-10">
        <h3 className="mb-12 text-[24px] uppercase text-white">Featured on</h3>

        <div className="row flex-col justify-center sm:flex-row sm:px-[15px] lg:px-0">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="col mb-6 basis-1/5 sm:mb-[30px] sm:basis-1/2 lg:mb-0 lg:basis-1/5"
              >
                <div className="section-three-item flex cursor-pointer items-center justify-center rounded-[4px] bg-sec-theme-color px-6 py-[52px]">
                  <Image src={item.img} alt="logo" className="opacity-80" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSectionView;

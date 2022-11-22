import Image from "next/image";
import img from "../../assets/images/shout-out-section/img.png";

function ShoutOutSectionView() {
  return (
    <section className="space-b">
      <div className="_container">
        <div className="flex flex-col items-center rounded-[4px] bg-sec-theme-color p-6 md:flex-row lg:px-[72px] lg:py-[72px]">
          <Image
            src={img}
            alt="person"
            className="mb-6 h-[300px] w-[300px] rounded-full border-[8px] border-white md:mb-0 md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
          />

          <div className="md:pl-12">
            <h2 className="mb-4 text-[28px] text-highlight-color-sec">
              Redefines the technique of depth sensing...
            </h2>

            <p className="mb-4 text-white/80">
              The IntelliSense®&nbsp;Drill represents a quantum leap in drill
              and depth measurement. The IntelliSense®&nbsp;Drill redefines the
              technique of depth sensing with unparalleled accuracy that will
              lessen radiation, minimize screw wastage, and improve patient
              safety.
            </p>

            <p className=" font-bold text-white">
              Scott Kozin, MD | Shriners Hospitals for Children - Philadelphia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoutOutSectionView;

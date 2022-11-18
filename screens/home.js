import LayoutSite from "../layouts/layouts-site";
import HomeSectionOne from "../components/home/section-one";
import HomeSectionTwo from "../components/home/section-two";
import HomeSectionThree from "../components/home/section-three";
import HomeSectionFour from "../components/home/section-four";
import HomeSectionFive from "../components/home/section-five";
import HomeSectionSix from "../components/home/section-six";
import HomeSectionSeven from "../components/home/section-seven";
import HomeSectionEight from "../components/home/section-eight";
import HomeSectionNine from "../components/home/section-nine";
import HomeSectionTen from "../components/home/section-ten";

function ScreensHome() {
  return (
    <LayoutSite>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeSectionNine />
      <HomeSectionTen />
    </LayoutSite>
  );
}

export default ScreensHome;

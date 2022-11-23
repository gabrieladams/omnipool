import LayoutSite from "../layouts/layouts-site";
import HeroSectionView from "../components/hero-section/hero-section-view";
import FeaturesSectionView from "../components/features-section/features-section-view";
import InnovationOpportunitesSectionView from "../components/innovation-opportunities-section/innovation-opportunities-view";
import ShoutOutSectionView from "../components/shout-out-section/shout-out-section-view";
import AboutSectionView from "../components/about-section/about-section-view";
import InvestSectionView from "../components/invest-section/invest-section-view";
import TeamSectionView from "../components/team-section/team-section-view";
import InvestmentGuideSectionView from "../components/investment-guide-section/investment-guide-section-view";
import FaqsSectionView from "../components/faqs-section/faqs-section-view";

function ScreensHomeCurrent() {
  return (
    <LayoutSite>
      <HeroSectionView />
      <FeaturesSectionView />
      <InnovationOpportunitesSectionView />
      <ShoutOutSectionView />
      <AboutSectionView />
      <InvestSectionView />
      <TeamSectionView />
      <InvestmentGuideSectionView />
      <FaqsSectionView />
    </LayoutSite>
  );
}

export default ScreensHomeCurrent;

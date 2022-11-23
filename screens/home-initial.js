import LayoutSite from "../layouts/layouts-site";
import HeroSectionView from "../components/landing-page-initial/hero-section/hero-section-view";
import VideoSectionView from "../components/landing-page-initial/video-section/video-section-view";
import FeaturesSectionView from "../components/landing-page-initial/features-section/features-section-view";
import InnovationOpportunitesSectionView from "../components/landing-page-initial/innovation-opportunities-section/innovation-opportunities-view";
import ShoutOutSectionView from "../components/landing-page-initial/shout-out-section/shout-out-section-view";
import AboutSectionView from "../components/landing-page-initial/about-section/about-section-view";
import InvestSectionView from "../components/landing-page-initial/invest-section/invest-section-view";
import TeamSectionView from "../components/landing-page-initial/team-section/team-section-view";
import InvestmentGuideSectionView from "../components/landing-page-initial/investment-guide-section/investment-guide-section-view";
import FaqsSectionView from "../components/landing-page-initial/faqs-section/faqs-section-view";

function ScreensHomeInitial() {
  return (
    <LayoutSite>
      <HeroSectionView />
      <VideoSectionView />
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

export default ScreensHomeInitial;

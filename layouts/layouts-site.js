import HeaderView from "../components/header/header-view";
import FooterView from "../components/footer/footer-view";

function LayoutSite({ children }) {
  return (
    <div>
      <HeaderView />
      {children}
      <FooterView />
    </div>
  );
}

export default LayoutSite;

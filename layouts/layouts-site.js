import Header from "../components/header";
import Footer from "../components/footer";

function LayoutSite({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutSite;

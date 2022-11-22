import BackdropView from "../components/backdrop/backdrop-view";

function LayoutsAuth({ children }) {
  return (
    <>
      <div className="_container relative z-10 h-screen">
        <div className="flex h-full items-center">{children}</div>
      </div>

      <BackdropView />
    </>
  );
}

export default LayoutsAuth;

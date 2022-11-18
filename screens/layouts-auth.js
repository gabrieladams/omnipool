import AppBackdrop from "../components/app-backdrop";

function LayoutsAuth({ children }) {
  return (
    <>
      <div className="_container relative z-10 h-screen">
        <div className="flex h-full items-center">{children}</div>
      </div>

      <AppBackdrop />
    </>
  );
}

export default LayoutsAuth;

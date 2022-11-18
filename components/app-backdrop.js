import React from "react";

function AppBackdrop() {
  return (
    <div className="fixed top-0 left-0  -z-10 h-screen w-full overflow-hidden after:absolute after:-top-1/2 after:-left-1/2 after:h-[200%] after:w-[200%] after:bg-gradient-to-br after:from-[#202d60] after:to-[#1a0b46] after:bg-no-repeat after:content-['']"></div>
  );
}

export default AppBackdrop;

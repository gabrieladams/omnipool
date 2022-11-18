import React from "react";
import AuthCardView from "./auth-card-view";

function AuthCardContainer({ children }) {
  return <AuthCardView formContent={children} />;
}

export default AuthCardContainer;

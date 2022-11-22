import { useState } from "react";
import AuthCardView from "./auth-card-view";

function AuthCardContainer() {
  const [authDetails, setAuthDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isInputInFocus, setIsInputInFocus] = useState(false);

  const handleInputChange = (e) => {
    setAuthDetails({
      ...authDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthCardView
      authDetails={authDetails}
      setAuthDetails={setAuthDetails}
      handleInputChange={handleInputChange}
    />
  );
}

export default AuthCardContainer;

import { useState } from "react";
import LayoutsAuth from "../layouts/layouts-auth";
import AuthCardContainer from "../components/auth-card/auth-card-container";
import AuthCardFormTitleView from "../components/auth-card/form-title/auth-card-form-title-view";
import AuthCardFormFieldView from "../components/auth-card/form-field/auth-card-form-field-view";
import emailIcon from "../assets/icons/email.png";
import lockIcon from "../assets/icons/lock.png";
import userIcon from "../assets/icons/user.png";

function ScreensSignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormFieldChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LayoutsAuth>
      <AuthCardContainer>
        <AuthCardFormTitleView>Sign Up</AuthCardFormTitleView>

        <AuthCardFormFieldView
          type="text"
          name="firstName"
          value={signUpDetails.email}
          label="First Name"
          icon={userIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <AuthCardFormFieldView
          type="text"
          name="lastName"
          value={signUpDetails.email}
          label="Last Name"
          icon={userIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <AuthCardFormFieldView
          type="email"
          name="email"
          value={signUpDetails.email}
          label="Email"
          icon={emailIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <AuthCardFormFieldView
          type="password"
          name="password"
          value={signUpDetails.password}
          label="Password"
          icon={lockIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <AuthCardFormFieldView
          type="password"
          name="confirmPassword"
          value={signUpDetails.confirmPassword}
          label="Confirm Password"
          icon={lockIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <div className="text-center">
          <button type="submit" className="app-btn app-btn-lg app-btn-outline">
            Sign Up
          </button>
        </div>
      </AuthCardContainer>
    </LayoutsAuth>
  );
}

export default ScreensSignUp;

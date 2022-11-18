import { useState } from "react";
import LayoutsAuth from "../layouts/layouts-auth";
import AuthCardContainer from "../components/auth-card/auth-card-container";
import AuthCardFormTitleView from "../components/auth-card/form-title/auth-card-form-title-view";
import AuthCardFormFieldView from "../components/auth-card/form-field/auth-card-form-field-view";
import emailIcon from "../assets/icons/email.png";

function ScreensForgotPassword() {
  const [email, setEmail] = useState("");

  const handleFormFieldChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <LayoutsAuth>
      <AuthCardContainer>
        <AuthCardFormTitleView>Forgot Password?</AuthCardFormTitleView>

        <p className="mb-6 text-center">
          Enter your registered email below to receive password reset
          instructions
        </p>

        <AuthCardFormFieldView
          type="email"
          name="email"
          value={email}
          label="Email"
          icon={emailIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <div className="text-center">
          <button type="submit" className="app-btn app-btn-lg app-btn-outline">
            Submit
          </button>
        </div>
      </AuthCardContainer>
    </LayoutsAuth>
  );
}

export default ScreensForgotPassword;

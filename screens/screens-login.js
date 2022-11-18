import { useState } from "react";
import LayoutsAuth from "../layouts/layouts-auth";
import AuthCardContainer from "../components/auth-card/auth-card-container";
import AuthCardFormTitleView from "../components/auth-card/form-title/auth-card-form-title-view";
import AuthCardFormFieldView from "../components/auth-card/form-field/auth-card-form-field-view";
import emailIcon from "../assets/icons/email.png";
import lockIcon from "../assets/icons/lock.png";
import Link from "next/link";

function ScreensLogin() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleFormFieldChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LayoutsAuth>
      <AuthCardContainer>
        <AuthCardFormTitleView>Login</AuthCardFormTitleView>

        <AuthCardFormFieldView
          type="email"
          name="email"
          value={loginDetails.email}
          label="Email"
          icon={emailIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <AuthCardFormFieldView
          type="password"
          name="password"
          value={loginDetails.password}
          label="Password"
          icon={lockIcon}
          onChangeHandler={handleFormFieldChange}
        />

        <div className="mb-12 flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id=""
              className="h-5 w-5 rounded-[4px]"
            />

            <span className="ml-3">Remember me</span>
          </div>

          <Link href="/forgot-password" className="text-highlight-color">
            Forgot Password
          </Link>
        </div>

        <div className="text-center">
          <button type="submit" className="app-btn app-btn-lg app-btn-outline">
            Login
          </button>
        </div>
      </AuthCardContainer>
    </LayoutsAuth>
  );
}

export default ScreensLogin;

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Input from "../../reusables/input";
import logo from "../../assets/logos/logo.png";
import userIcon from "../../assets/icons/user.png";
import emailIcon from "../../assets/icons/email.png";
import lockIcon from "../../assets/icons/lock.png";

function AuthCardView({ authDetails, setAuthDetails, handleInputChange }) {
  const { pathname } = useRouter();

  return (
    <div className="flex min-h-[560px] w-full flex-wrap rounded-[4px] bg-auth-card-bg-color">
      <div className="flex basis-full flex-col flex-wrap items-center  justify-center bg-gradient-to-b from-[#161943] to-[#0d0d25] py-[52px] px-12 lg:basis-4/12">
        <Image src={logo} alt="logo" className="mb-2 w-[35px]" />

        <h1 className="mb-4 text-[48px]">OmniPool</h1>

        <span className="mb-8 text-[20px]">
          {pathname === "/login"
            ? "Don't have an account"
            : "Already have an account"}
        </span>

        <Link
          href={pathname === "/login" ? "/sign-up" : "/login"}
          className="app-btn app-btn-fill app-btn-lg"
        >
          {pathname === "/login" ? "sign up" : "login"}
        </Link>
      </div>

      <div className="flex basis-full items-center justify-center px-4 py-12 lg:basis-8/12">
        <form className="w-full max-w-[450px]">
          {pathname === "/sign-up" && (
            <Input
              type="text"
              name="firstName"
              value={authDetails.firstName}
              label="First Name"
              icon={userIcon}
              onChange={handleInputChange}
            />
          )}

          {pathname === "/sign-up" && (
            <Input
              type="text"
              name="lastName"
              value={authDetails.lastName}
              label="Last Name"
              icon={userIcon}
              onChange={handleInputChange}
            />
          )}

          <Input
            type="email"
            name="email"
            value={authDetails.email}
            label="Email"
            icon={emailIcon}
            onChange={handleInputChange}
          />

          <Input
            type="password"
            name="password"
            value={authDetails.password}
            label="Password"
            icon={lockIcon}
            onChange={handleInputChange}
          />

          {pathname === "/sign-up" && (
            <Input
              type="password"
              name="confirmPassword"
              value={authDetails.confirmPassword}
              label="Confirm Password"
              icon={lockIcon}
              onChange={handleInputChange}
            />
          )}
        </form>

        {pathname === "/login" && (
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
        )}

        <div className="text-center">
          <button type="submit" className="app-btn app-btn-lg app-btn-outline">
            {pathname === "/login"
              ? "Login"
              : pathname === "/sign-up"
              ? "Sign Up"
              : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthCardView;

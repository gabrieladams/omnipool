import logo from "../../assets/app-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function AuthCardView({ formContent }) {
  const router = useRouter();
  const route = router.pathname;

  return (
    <div className="mt-[120px] flex w-full flex-wrap rounded-[4px] bg-[#0c0a1d]  ">
      <div className="flex min-h-[560px] basis-full flex-col flex-wrap items-center  justify-center bg-gradient-to-b from-[#161943] to-[#0d0d25] py-[52px] px-12 lg:basis-4/12">
        <Image src={logo} alt="logo" className="mb-2 w-[35px]" />

        <h1 className="mb-4 text-[48px]">OmniPool</h1>

        <span className="mb-8 text-[20px]">
          {route === "/login"
            ? "Don't have an account"
            : "Already have an account"}
        </span>

        <Link
          href={route === "/login" ? "/sign-up" : "/login"}
          className="app-btn app-btn-fill app-btn-lg"
        >
          {route === "/login" ? "sign up" : "login"}
        </Link>
      </div>

      <div className="flex basis-full items-center justify-center px-4 py-12 lg:basis-8/12">
        <form className="w-full max-w-[450px]">{formContent}</form>
      </div>
    </div>
  );
}

export default AuthCardView;

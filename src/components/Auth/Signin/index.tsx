import Link from "next/link";
import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Optional: Google Sign-in (uncomment if used) */}
      {/* <GoogleSigninButton text="Sign in" /> */}

  

      {/* Divider */}
      <div className="relative my-8 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#C7AE87]"></div>
        </div>
        <div className="relative bg-white px-4 text-[#A28367] font-semibold text-sm uppercase tracking-wide">
          Sign in with email
        </div>
      </div>

      {/* Email Sign-in Form */}
      <SigninWithPassword />

      {/* Sign Up Link */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-700">
          Don’t have any account?{" "}
          <Link
            href="/signup-criteria"
            className="font-medium text-[#A28367] hover:underline hover:text-[#C7AE87]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

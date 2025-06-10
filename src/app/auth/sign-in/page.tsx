import { Webheader } from "@/components/Layouts/web-header";
import Signin from "@/components/Auth/Signin";
//import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <>
     {/* Global Header */}
      <Webheader />

      {/* Breadcrumb – optional  <Breadcrumb pageName="Sign In" />*/}

      <div className="rounded-xl bg-white shadow-lg max-w-6xl mx-auto my-12 overflow-hidden flex flex-col md:flex-row">
        {/* Left: Sign-In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <Signin />
        </div>

        {/* Right: Welcome Panel */}
        <div className="hidden md:flex w-full md:w-1/2 bg-[#A28367] text-white items-center justify-center p-12 relative">
          <div className="text-center max-w-md">
            {/* Optional Logo Placeholder */}
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/home/2_Logo-01.png"
                alt="Logo"
                width={150}
                height={50}
                className="mx-auto"
              />
            </Link>

            <p className="text-lg font-medium mb-2">Sign in to your account</p>
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-sm text-[#f9f6f3] leading-relaxed">
              Please sign in to your account by completing the necessary fields
              below. Access your dashboard, track progress, and much more.
            </p>

            {/* Optional Illustration */}
            <div className="mt-10">
              <Image
                src="/images/home/2_Logo-01.png"
                alt="Illustration"
                width={320}
                height={240}
                className="mx-auto opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

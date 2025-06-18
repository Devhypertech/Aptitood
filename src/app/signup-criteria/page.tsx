import React from "react";
import Button from "../../components/Button";
import Image from "next/image";
import { Webheader } from "@/components/Layouts/web-header";

export default function SignupCriteriaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-white">
        <Webheader />
      </div>

      {/* Centered Content */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#2563EB]">Join Us!</h2>
            <div className="flex gap-4 mb-4">
              <Button href="/auth/sign-up" className="bg-[#1B3173] hover:bg-[#2563EB] text-white min-w-[160px]">
                As Company
              </Button>
              <Button href="/auth/sign-up" className="bg-[#1B3173] hover:bg-[#2563EB] text-white min-w-[160px]">
                As Candidate
              </Button>
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

             <div className="w-full h-96 md:h-[600px] relative">
                 <Image
                   src="/images/criteria/1.png"
                   alt="Signup Criteria Illustration"
                   fill
                   className="object-cover rounded-md border border-gray-300"
                   priority
                     />
              </div>

        </div>
      </div>
    </main>
  );
}
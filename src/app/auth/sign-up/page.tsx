"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Webheader } from "@/components/Layouts/web-header";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Submit logic here (e.g. API call)
  };

  return (
    <>
      <Webheader />

      <main className="bg-white min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-8 bg-[#f8f6f3] rounded-xl shadow">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#A28367]">Create an Account</h2>
            <p className="mt-6 text-sm text-gray-600">Start your journey with us today.</p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C7AE87]"
            />

            <button
              type="submit"
              className="w-full bg-[#A28367] text-white py-3 rounded hover:bg-[#C7AE87] transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-[#A28367] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import DashboardLayout from "@/components/Layouts/dashboardLayout";

export default function JobsPage() {
  const jobs = Array(8).fill({
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Sed do eiusmod tempor incididunt ut labore.",
  });

  return (
      <DashboardLayout>
        <main className="bg-white min-h-screen flex items-center justify-center px-4 py-5">
        <div className="w-full max-w-6xl">
        {/* Profile Section */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/images/avatar.png"
              alt="User"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-gray-500">Designer</p>
            <h2 className="text-3xl font-bold">Name</h2>
            <p className="text-gray-600 text-sm mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Jobs List */}
        <h3 className="text-2xl font-semibold mb-4">Jobs</h3>
        <div className="bg-gray-100 p-6 rounded-lg space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-4 rounded shadow-sm hover:shadow transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Image
                    src="/images/avatar.png"
                    alt="Company"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.desc}</p>
                </div>
              </div>
              <button className="bg-[#C7AE87] text-white px-5 py-2 rounded hover:bg-[#A28367] transition text-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
    </DashboardLayout>
  );
}

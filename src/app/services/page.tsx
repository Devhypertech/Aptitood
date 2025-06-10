import React from "react";
import Link from 'next/link';
import Image from "next/image";

export default function JobListingsPage() {
  return (
      <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-[#A28367] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-xl">
           <h1 className="text-4xl font-bold leading-tight">
             Tech jobs you want <span className="block">at companies you admire</span>
           </h1>

            <p className="text-lg">
              Build the tech career that&rsquo;s right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your job search"
                className="px-4 py-2 rounded text-black w-full"
              />
              <button className="bg-[#C7AE87] text-white px-6 py-2 rounded hover:bg-[#b6976e]">
                Search Jobs
              </button>
            </div>
            <Link href="#">
              <span className="inline-block text-sm underline text-white mt-2 cursor-pointer">
                Looking to hire tech talent?
              </span>
            </Link>
          </div>
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/listing/sid.jpg"
              alt="Hero Banner"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[#A28367] text-xl mb-6">Explore thousands of top tech employers hiring on our platform</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["OPEN AI", "MICROSOFT", "META", "GOOGLE", "NVDIA", "MORE  "].map((name, idx) => (
              <div
                key={idx}
                className="bg-[#f3eee7] h-20 flex items-center justify-center rounded-md"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#A28367] text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">5k+</h3>
            <p>Companies Hiring</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200k+</h3>
            <p>Jobs Posted Monthly</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">7M+</h3>
            <p>Active Candidates</p>
          </div>
        </div>
      </section>

      {/* Dual Columns Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Find the right tech job, on your terms</h3>
            <p className="text-gray-600 mb-6">
              Dice gives you tools to instantly find and filter through jobs that match your skills, experience, and career goals — so you can choose your next role with confidence.
            </p>
            <button className="bg-[#C7AE87] text-white px-5 py-2 rounded hover:bg-[#b6976e]">Create Your Profile</button>
          </div>
          <div className="bg-gray-100 aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/listing/sidd.jpg"
              alt="Profile Help"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Resource Grid Section */}
      <section className="py-16 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#A28367] mb-6">Tech Career Resources: Advice, tips and more</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["hr.jpg", "job.png", "op.jpg"].map((img, i) => (
              <div key={i} className="bg-white p-5 rounded shadow hover:shadow-md transition">
                <Image
                  src={`/images/listing/${img}`}
                  alt={`Resource ${i + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h4 className="font-semibold text-lg mb-2">Resource Title {i + 1}</h4>
                <p className="text-gray-600 text-sm">
                  A short description about the resource content that helps with tech career growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-100 rounded-lg aspect-video overflow-hidden">
            <Image
              src="/images/listing/siddd.jpg"
              alt="Tech Talent"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#A28367]">Find and hire top tech talent today</h3>
            <p className="text-gray-600 mb-6">
              With access to millions of tech professionals and the AI matching tools to connect the best ones, our hiring partners save time and hire smarter.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#C7AE87] text-white px-6 py-2 rounded hover:bg-[#b6976e]">Learn More</button>
              <button className="bg-white border border-[#C7AE87] text-[#A28367] px-6 py-2 rounded hover:bg-[#f3ede6]">Post a Job</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
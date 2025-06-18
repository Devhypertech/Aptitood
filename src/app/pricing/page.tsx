import React from "react";
import Button from "../../components/Button";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0B1A38] text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1B3173] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing</h1>
          <p className="text-lg md:text-xl">
            Choose the plan that fits your hiring needs. Upgrade anytime as your team grows.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 px-6 md:px-16 bg-[#0B1A38]">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic HR Plan */}
          <div className="bg-[#101f3a] rounded-xl p-8 shadow-lg border border-[#2563EB]/40">
            <span className="inline-block bg-[#1B3173] text-white text-xs px-3 py-1 rounded-full mb-4">Basic</span>
            <h3 className="text-2xl font-bold mb-2">Basic HR Plan</h3>
            <p className="text-gray-400 mb-4 text-sm">Parturient elementum in, rutrum tristique inceptos sit suspendisse faucibus velit.</p>
            <p className="text-4xl font-extrabold mb-6">$69.99 <span className="text-base font-medium">/mo</span></p>

            <div className="bg-[#0B1A38] border border-[#2563EB] text-white p-4 rounded-xl flex justify-between items-center mb-6">
              <div>
                <p className="font-semibold">Boost your Profit</p>
                <p className="text-sm text-gray-300">Vestibulum dignissim.</p>
              </div>
              <div className="bg-[#2563EB] p-2 rounded text-white">
                ↗
              </div>
            </div>

            <ul className="text-sm space-y-3 text-gray-300">
              <li>✔️ 24/7 Customer support</li>
              <li>✔️ On-site training and workshops</li>
              <li>✔️ Complete recruiting and talent acquisition</li>
              <li>✔️ Customized benefits Programs</li>
            </ul>
          </div>

          {/* Pro HR Plan */}
          <div className="bg-black rounded-xl p-8 shadow-xl border border-[#2563EB] relative">
            <span className="absolute top-0 right-0 bg-[#2563EB] text-xs text-white px-2 py-1 rounded-bl-lg">Popular</span>
            <span className="inline-block bg-[#1B3173] text-white text-xs px-3 py-1 rounded-full mb-4">Pro</span>
            <h3 className="text-2xl font-bold mb-2">Pro HR Plan</h3>
            <p className="text-gray-400 mb-4 text-sm">Parturient elementum in, rutrum tristique inceptos sit suspendisse faucibus velit.</p>
            <p className="text-4xl font-extrabold mb-6 text-[#2563EB]">$89.99 <span className="text-base font-medium text-white">/mo</span></p>

            <div className="bg-[#2563EB] text-white p-4 rounded-xl flex justify-between items-center mb-6">
              <div>
                <p className="font-semibold">Elevate your Growth</p>
                <p className="text-sm">Vestibulum nisi em ultrices.</p>
              </div>
              <div className="bg-[#1B3173] p-2 rounded text-white">
                ↗
              </div>
            </div>

            <ul className="text-sm space-y-3 text-gray-300">
              <li>✔️ 24/7 Customer support</li>
              <li>✔️ On-site training and workshops</li>
              <li>✔️ Complete recruiting and talent acquisition</li>
              <li>✔️ Customized benefits Programs</li>
              <li>✔️ Access to advanced HRIS</li>
              <li>✔️ Legal support for conflicts</li>
              <li>✔️ Leadership training programs</li>
            </ul>
          </div>

          {/* Enterprise HR Plan */}
          <div className="bg-[#101f3a] rounded-xl p-8 shadow-lg border border-[#2563EB]/40">
            <span className="inline-block bg-[#1B3173] text-white text-xs px-3 py-1 rounded-full mb-4">Recommended</span>
            <h3 className="text-2xl font-bold mb-2">Enterprise HR Plan</h3>
            <p className="text-gray-400 mb-4 text-sm">Parturient elementum in, rutrum tristique inceptos sit suspendisse faucibus velit.</p>
            <p className="text-4xl font-extrabold mb-6">$129.99 <span className="text-base font-medium">/mo</span></p>

            <div className="bg-[#0B1A38] border border-[#2563EB] text-white p-4 rounded-xl flex justify-between items-center mb-6">
              <div>
                <p className="font-semibold">Improve progression</p>
                <p className="text-sm text-gray-300">Vestibulum digniss ultrices.</p>
              </div>
              <div className="bg-[#2563EB] p-2 rounded text-white">
                ↗
              </div>
            </div>

            <ul className="text-sm space-y-3 text-gray-300">
              <li>✔️ Leadership training programs</li>
              <li>✔️ Legal support for conflicts</li>
              <li>✔️ Customized benefits Programs</li>
              <li>✔️ Complete recruiting and talent acquisition</li>
            </ul>
          </div>
        </div>
      </section>

{/* Marquee Section */}
<section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-4 overflow-hidden">
  <div className="flex whitespace-nowrap animate-marquee gap-12 text-white font-semibold text-lg">
    {[
      "🚀 Empower Organizations",
      "👉 Innovate, Inspire, Impact",
      "👍 Leading Change, Insight & Growth",
    ]//.flatMap((t) => [t, t]) // repeats the array twice
      .map((text, i) => (
        <span key={i} className="inline-block px-4">{text}</span>
      ))}
  </div>
</section>

    {/* FAQ Section */}
<section className="bg-[#F3F9FF] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Section Badge */}
    <p className="inline-block text-sm text-blue-600 bg-blue-100 font-medium px-4 py-1 rounded-full mb-4">
      🚀 Your FAQ Hub
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-16">
      Explore Our HR Service FAQs
    </h2>

    {/* FAQ Grid */}
    <div className="grid md:grid-cols-2 gap-6 text-left">
      {[
        {
          q: "What Types Of HR Services Do You Offer?",
          a: "Felis massa cubilia cursus euismod est pellentesque conubia. Nostra curabitur pulvinar dictum libero lobortis elit finibus ridiculus.",
        },
        {
          q: "How Do You Ensure Compliance With Labor Laws?",
          a: "Mauris per parturient dapibus molestie ornare primis iaculis. At fames tellus class dolor aliquam nunc pretium imperdiet erat.",
        },
        {
          q: "How Can HR Services Benefit My Organization?",
        },
        {
          q: "What Strategies Do You Use For Employee Engagement?",
        },
        {
          q: "How Can HR Services Benefit My Organization?",
        },
        {
          q: "How Can You Help With Performance Management?",
        },
        {
          q: "What Is The Process For Recruitment And Staffing?",
        },
        {
          q: "How Do You Handle Employee Relations Issues?",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
        >
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            {i % 2 === 0 ? `1. ` : `2. `}{item.q}
          </h3>
          {item.a && (
            <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
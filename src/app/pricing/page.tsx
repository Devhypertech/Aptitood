import React from "react";
import Button from "../../components/Button";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#A28367] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pricing</h1>
          <p className="text-lg md:text-xl">
            Choose the plan that fits your hiring needs. Upgrade anytime as your team grows.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Standard Package */}
          <div className="border border-[#C7AE87] rounded-lg shadow hover:shadow-md transition p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Standard</h3>
            <p className="text-gray-600 mb-4">Perfect for small teams just getting started</p>
            <p className="text-4xl font-bold mb-6">
              $49<span className="text-lg font-medium">/mo</span>
            </p>
            <ul className="text-gray-800 mb-6 space-y-2 text-left justify-items-center">
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
            </ul>
            <div>
      <Button>Get Started</Button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="border-2 border-[#A28367] rounded-lg shadow-lg p-8 text-center bg-[#C7AE87]/20">
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="text-gray-700 mb-4">For growing teams that need more features</p>
            <p className="text-4xl font-bold text-[#A28367] mb-6">
              $129<span className="text-lg font-medium">/mo</span>
            </p>
            <ul className="text-gray-800 mb-6 space-y-2 text-left justify-items-center">
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
            </ul>
            <div>
      <Button>Choose Premium</Button>
            </div>
          </div>

          {/* Custom Package */}
          <div className="border border-[#C7AE87] rounded-lg shadow hover:shadow-md transition p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Custom</h3>
            <p className="text-gray-600 mb-4">Tailored for enterprises with complex needs</p>
            <p className="text-3xl font-bold mb-6">Let’s Talk</p>
             <ul className="text-gray-800 mb-6 space-y-2 text-left justify-items-center">
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
              <li>✔️ lorem ipsum</li>
            </ul>
         <div>
      <Button>Contact Sales</Button>
         </div>
          </div>
        </div>
      </section>
    </main>
  );
}
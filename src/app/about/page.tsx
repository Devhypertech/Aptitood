import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#C7AE87] to-[#A28367] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#f8f6f3] px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/about/abt.png"
              alt="About Image"
              width={600}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed nulla lorem. Cras elementum pretium, dignissim velit, luctus lorem facilisis ex. Integer scelerisque, sapien sed gravida sagittis, quam libero rutrum erat, a pharetra orci nibh et odio.
            </p>
            <button className="bg-[#A28367] text-white px-6 py-2 rounded hover:bg-[#C7AE87]">Contact Now</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white px-4 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Revolutionising Industries <br className="block md:hidden" /> with <span className="text-[#A28367]">Top AI Projects</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our AI-powered innovations uniquely designed to meet your business needs and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"].map((img, idx) => (
            <div key={idx} className="rounded overflow-hidden">
              <Image
                src={`/images/about/${img}`}
                alt={`AI Project ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#A28367] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold">$8M+</h3>
            <p className="text-sm">Investment Raised</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">400+</h3>
            <p className="text-sm">Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">12+</h3>
            <p className="text-sm">Launched Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-sm">Project Submissions</p>
          </div>
        </div>
      </section>
{/* Testimonial Section */}
<section className="py-20 px-4 md:px-20 bg-white grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h2 className="text-2xl font-bold text-[#A28367] mb-4">Why customers love us</h2>
    <p className="text-gray-600">Grow your business and get feedback from satisfied clients.</p>
  </div>
  <div className="bg-gray-100 p-6 rounded shadow">
    <p className="italic">
      &ldquo;Experience the power of comprehensive automation and AI integration. With stunning results and fast implementation, it makes scaling into incredible territories within reach.&rdquo;
    </p>
    <p className="mt-4 font-semibold">— A Happy Client</p>
  </div>
</section>

    </main>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },

};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <motion.section
        {...fadeInUp}
        className="bg-gradient-to-br from-[#2563EB] to-[#1B3173] text-white py-20 text-center"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
      </motion.section>

      {/* About Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}  className="py-16 bg-[#f8f6f3] px-4 md:px-60">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeInUp}>
            <Image
              src="/images/about/abt.png"
              alt="About Image"
              width={600}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-3xl font-bold mb-4 text-[#1B3173]">About Us</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed nulla lorem. Cras elementum pretium,
              dignissim velit, luctus lorem facilisis ex. Integer scelerisque, sapien sed gravida sagittis, quam libero
              rutrum erat, a pharetra orci nibh et odio.
            </p>
            <button className="bg-[#2563EB] text-white px-6 py-2 rounded hover:bg-[#1B3173]">Contact Now</button>
          </motion.div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} className="bg-[#EAF3FE] py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: "/images/home/one.gif",
              title: "Performance Management",
              stat: "65%",
              desc: "Curabitur faucibus arcu turpis dapibus sociosqu volutpat porta consectetur.",
            },
            {
              icon: "/images/home/two.gif",
              title: "Training And Development",
              stat: "4.80+",
              desc: "Dolor magnis mollis pulvinar cras vitae ac nulla. Urna interdum ultrices.",
            },
            {
              icon: "/images/home/three.gif",
              title: "Succession Planning",
              stat: "72K",
              desc: "Maecenas bibendum venenatis tempor hac per urna sem. Vel commodo cursus.",
            },
            {
              icon: "/images/home/four.gif",
              title: "Employee Relations",
              stat: "12m",
              desc: "Penatibus lacus metus pharetra posuere luctus libero suscipit. Porta velit.",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Image src={item.icon} alt={item.title} width={36} height={36} className="w-12 h-12 object-contain rounded-[300px]"/>
                <h3 className="font-semibold text-[#1B3173] text-lg">{item.title}</h3>
              </div>
              <hr className="mb-4" />
              <p className="text-4xl font-extrabold text-black mb-3">{item.stat}</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} className="py-16 bg-white px-4 md:px-60">
        <div className="text-center mb-10">
          <motion.h2 {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} className="text-3xl font-bold">
            Revolutionising Industries <br className="block md:hidden" /> with <span className="text-[#2563EB]">Top AI Projects</span>
          </motion.h2>
          <motion.p {...fadeInUp}transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} className="text-gray-600 mt-2">
            Explore our AI-powered innovations uniquely designed to meet your business needs and boost productivity.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"].map((img, idx) => (
            <motion.div key={idx} {...fadeInUp} transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} className="rounded overflow-hidden">
              <Image
                src={`/images/about/${img}`}
                alt={`AI Project ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* New Testimonials Section */}
      <motion.section
        className="bg-gradient-to-r from-[#0B1A38] to-[#1365F4] text-white py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <button className="bg-white text-[#0B1A38] font-semibold text-sm px-4 py-1 rounded-full mb-4 shadow hover:bg-gray-100 transition">
              What They Say →
            </button>

            <h2 className="text-4xl font-extrabold mb-4">Client Experience</h2>

            {/* Star Rating */}
            <div className="flex items-center text-yellow-400 mb-4 text-xl">
              {'★'.repeat(4)}<span className="text-gray-300">★</span>
            </div>

            {/* Review Text */}
            <p className="italic text-lg leading-relaxed mb-6 text-slate-200">
              Suspendisse potenti. Los Angeles is often called the entertainment capital of the world, hosting a myriad of film studios and theaters. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>

            <hr className="border-slate-600 my-6" />

            {/* Reviewer Info */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-lg text-white text-xl font-bold">“</div>
              <div>
                <p className="font-semibold text-white">Madison</p>
                <p className="text-sm text-gray-300">New York, USA</p>
              </div>
            </div>
          </div>

          {/* Testimonial Avatar Image */}
          <div className="flex justify-center">
            <Image
              src="/images/home/character_png-01.png"
              alt="Client Avatar"
              width={320}
              height={320}
              className="rounded-2xl"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}

"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import AnimatedCard from '@/components/AnimatedCard';
import Button from "../../components/Button";
import { useState } from 'react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Web() {
  const [images, setImages] = useState(
    [{title:"asdasdasdasdasd" ,src:"how-can-strong-communication-skills-transform-your-leadership-as-a-manager-01.jpg"},

      {title:"ali",src:"Ingram-Micro_Header-image_iStock-2166551077.jpg"},
      {title:"sajjad",src:"manufacturing-worker.jpg"}]
  )
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Lorem Ipsum - Welcome</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Parallax */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Welcome Lorem Ipsum Dolor tempor
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/contact">
              <button className="bg-[#A28367] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#C7AE87]">
                Contact Now
              </button>
            </Link>
          </motion.div>

          {/* Parallax Hero Image */}
          <Parallax speed={-10}>
            <div className="w-full h-200 bg-white rounded-lg flex items-center justify-center p-4">
              <Image
                src="/images/home/forhero banner.png"
                alt="Hero Banner"
                width={300}
                height={300}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </Parallax>
        </div>
      </section>

      {/* Highlight Section */}
      <motion.section
        className="bg-[#A28367] text-white py-20"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ut Enim Ad Minim Veniam</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="auth/sign-in" className="bg-white text-[#A28367] px-6 py-3 rounded-md font-semibold hover:bg-[#F9F6F2]">
              Login
            </Link>
            <Link href="/signup-criteria" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#A28367]">
              Sign Up
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 bg-white"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Heading Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['🚀', '📊', '🤝'].map((icon, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">Lorem Feature {index + 1}</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Cards with Animation */}
      <section className="px-6 md:px-20 py-12 space-y-24 text-gray-800">
        <motion.div
          className="text-center"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Lorem Ipsum Heading</h2>
          <p className="mb-8 text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, index) => (
              <AnimatedCard
                key={index}
                src={`/images/home/${item.src}`}
                alt={`Card Image ${item.title + 1}`}
                title={`Card Title ${item.title + 1}`}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                index={index}
              />
            ))}
        </div>

        {/* Logos + Feature */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Trusted by Lorem Companies</h2>
            <p className="mb-4 text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white flex items-center p-8">
                  <Image
                    src="/images/home/Untitled-3-01.png"
                    alt={`Logo ${i + 1}`}
                    width={100}
                    height={40}
                    className="object-contain max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/home/MK-CM995_FEDJOB_GR_20140610184008.jpg"
              alt="Feature Block"
              width={800}
              height={350}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Lorem Feature Block</h3>
              <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="bg-[#A28367] text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">Sign up now and explore what’s possible.</p>
        <Link href="/contact" className="bg-white text-[#A28367] px-6 py-3 rounded-md font-semibold hover:bg-[#F9F6F2]">
          Start Now
        </Link>
      </section>


      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
        <div className='my-30'>
          <h2 className="text-2xl font-semibold mt-5">Join Our Community</h2>
          <p className="text-gray-600 flex-wrap max-w-100">Lorem Ipsum has been the industry’s standard dummy text Lorem Ipsum has been the industry’s standard dummy text
            Lorem Ipsum has been the industry’s standard dummy text
            Lorem Ipsum has been the industry’s standard dummy text...</p>
        </div>
        <div className='shadow-lg p-6 mt-8' >
          <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
          <div className="flex gap-4 mb-4">
            <Button href="/auth/sign-up" className="bg-[#A28367] hover:bg-[#C7AE87] text-white min-w-[160px]">
              as Company
            </Button>
            <Button href="/auth/sign-up" className="bg-[#A28367] hover:bg-[#C7AE87] text-white min-w-[160px]">
              as Candidate
            </Button>
          </div>
          <p className="text-sm text-gray-600 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>


      {/* <section className="bg-gray-100 py-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe for lorem updates straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto" />
            <button className="bg-[#A28367] text-white px-6 py-2 rounded hover:bg-[#C7AE87]">Subscribe</button>
          </form>
        </section> */}
    </div>

  );
}

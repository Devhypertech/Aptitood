"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

export default function Web() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Talent Discovery | Home</title>
        <meta name="description" content="Connect with top talent and employers through Entak's AI-powered ECR system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 <section className="relative h-screen bg-[#EAF4FF] overflow-hidden">
  <div className="max-w-8xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-6 lg:px-0 relative z-0">

    {/* Left Large Image Fixed to Bottom */}
    <div className="relative h-full w-full flex items-end">
      <Image
        src="/images/home/HomeBanner.png" // your team image
        alt="Team Illustration"
        width={1200}
        height={1200}
        className="object-contain w-auto absolute bottom-0 top-2 left-0"
        
      />
    </div>

    {/* Right Content */}
    <div className="text-center md:text-left z-10">
      <span className="inline-block bg-white text-blue-600 text-sm px-4 py-1 rounded-full font-medium mb-4 shadow-md">
        Discover, Engage, Empower
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Unlocking Potential,<br /> One Hire At A Time
      </h1>
      <p className="text-gray-600 text-lg mb-8 max-w-lg">
        Transform your workplace with our innovative HR solutions! Empower your team with seamless recruitment, engagement, and development tools.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link href="/contact" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
          CONTACT NOW
        </Link>
        <Link href="/signup-criteria" className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition">
          EXPLORE SERVICES
        </Link>
      </div>
    </div>
  </div>

  {/* Right Hand Image */}
  <div className="absolute top-0 right-0 z-0 hidden lg:block">
    <Image
      src="/images/home/Home-3-Banner-03.png"
      alt="Magnet Hand"
      width={400}
      height={400}
      className="object-contain hover:scale-105 transition-transform duration-300"
    />
  </div>
</section>



      {/* Features Section */}
      <motion.section
        className="py-24 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">Why Choose Aptitood</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Matching',
                desc: 'Connect instantly with roles that fit your verified experience.',
                icon: '🔍',
              },
              {
                title: 'ECR Verified',
                desc: 'Your Electronic Career Record is trusted by leading employers.',
                icon: '📄',
              },
              {
                title: 'Skills Tracking',
                desc: 'Use xAPI & badges to show ongoing learning and certifications.',
                icon: '🏆',
              },
            ].map((item, i) => (
              <div key={i} className="border p-6 rounded-lg shadow hover:shadow-md transition text-left">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process / Feature Section */}
<section className="bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-sm font-semibold bg-white/10 text-white inline-block px-4 py-1 rounded-full mb-4">
      🚀 Seamless Onboarding Experience
    </p>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
      Streamlining Hiring, One Click At A Time
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { title: "Career Advice", icon: "💼", desc: "Accumsan ligula tincidunt duis dolor netus urna luctus mauris." },
        { title: "Job Search Tips", icon: "🔍", desc: "Ridiculus posuere tristique dis sem arcu aenean urna mattis." },
        { title: "Interview Preparation", icon: "📡", desc: "Lobortis habitant litora netus elit odio curabitur etiam parturient." },
        { title: "Professional Growth", icon: "📅", desc: "Morbi cras nulla lacus tincidunt commodo placerat maximus." },
        { title: "Resume Writing", icon: "📝", desc: "Cursus mauris vitae fusce posuere curae auctor, finibus pharetra." },
        { title: "Skill Development", icon: "📘", desc: "Velit hac praesent lectus ultricies commodo dignissim vitae." },
        { title: "Workforce Analytics", icon: "📊", desc: "Varius quis dignissim ex diam morbi in montes. Interdum nisl cras." },
        { title: "Hiring Insights", icon: "🧠", desc: "Mauris et sapien nulla, tincidunt lobortis sit amet in aenean." },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-blue-800/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition"
        >
          <div className="text-4xl bg-blue-600 p-4 rounded-xl mb-4 shadow-md">
            {item.icon}
          </div>
          <h4 className="font-bold text-lg mb-2">{item.title}</h4>
          <p className="text-sm text-blue-100">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Process Section – GIF-based Steps */}
<motion.section
  className="bg-white py-20"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-extrabold text-gray-800 mb-16">How It Works</h2>

    <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
      {[
        {
          gif: 'one.gif',
          title: 'Sign Up',
          desc: 'Register as a candidate or company',
        },
        {
          gif: 'two.gif',
          title: 'Build Profile',
          desc: 'Create your profile as candidate or company',
        },
        {
          gif: 'three.gif',
          title: 'Verification',
          desc: 'Self-verification upload (ID, email, location.)',
        },
        {
          gif: 'four.gif',
          title: 'Start Posting',
          desc: 'Posting jobs or apply to job from anywhere',
        },
      ].map((step, i) => (
        <div key={i} className="relative flex flex-col items-center text-center max-w-[160px]">
          {/* GIF inside colored circle */}
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg z-10 relative overflow-hidden">
            <img
              src={`/images/home/${step.gif}`}
              alt={`Step ${i + 1}`}
              className="w-12 h-12 object-contain rounded-[300px]"
            />
          </div>

          {/* Step Title and Description */}
          <div className="mt-4 font-bold text-lg text-gray-800">
            0{i + 1} {step.title}
          </div>
          <p className="text-sm text-gray-500 mt-1">{step.desc}</p>

          {/* Connector line between steps */}
          {i < 3 && (
            <div className="hidden md:block absolute right-[-80px] top-[40px] w-[160px] h-[2px] border-dashed border-t-2 border-gray-300 z-0">
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</motion.section>

{/* Video Showcase Section */}
<motion.section
  className="relative bg-white py-14 overflow-hidden"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Floating Dots */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <span className="absolute top-20 left-16 w-4 h-4 bg-red-400 rounded-full animate-pulse" />
    <span className="absolute top-24 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
    <span className="absolute bottom-10 left-24 w-3.5 h-3.5 bg-blue-600 rounded-full" />
    <span className="absolute top-27 right-16 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />
    <span className="absolute top-12 left-11 w-7 h-7 bg-blue-400 rounded-full animate-pulse" />

  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* Badge */}
    <span className="absolute bottom-17 left-14 w-5 h-5 bg-blue-600 rounded-full" />
     <span className="absolute top-28 right-16 w-5 h-5 bg-red-400 rounded-full animate-ping" />
    <span className="absolute bottom-9 right-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce" />
    <span className="absolute top-15 left-33 w-7 h-7 bg-red-400 rounded-full animate-pulse" />
    <span className="absolute bottom-30 right-0 w-6 h-6 bg-green-500 rounded-full animate-bounce" />
    <span className="absolute top-15 left-33 w-7 h-7 bg-red-400 rounded-full animate-pulse" />
    <span className="absolute top-28 right-36 w-5 h-5 bg-yellow-400 rounded-full animate-ping" />
    <p className="inline-block bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wider px-4 py-1 rounded-full mb-4">
      How We Work
    </p>
    
    {/* Title + Description */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
      Curious how do we work?
    </h2>
    <p className="text-gray-500 mb-12 max-w-xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla fringilla est,
      volutpat, eu amet morbi tincidunt. Mattis tempu.
    </p>
    {/* Video Container with Proper Height */}
    <div className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl w-full h-[400px] md:h-[480px]">
      <iframe
        src="https://www.youtube.com/embed/fhmkqXy0eHo?si=yZDWYckBui1ZuyUy"
        title="Intro Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      ></iframe>
    </div>
  </div>
</motion.section>


{/* Badge Showcase */}
<motion.section
  className="bg-gray-100 py-20"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">Showcase Your Skills with Badges</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {['ba1', 'ba2', 'ba3', 'ba4'].map((img, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-md w-60">
          <Image
            src={`/images/home/${img}.png`}
            alt={`Badge ${i + 1}`}
            width={120}
            height={120}
            className="mx-auto"
          />
          <h4 className="text-lg font-semibold mt-4 text-gray-800">Skill Badge {i + 1}</h4>
          <p className="text-sm text-gray-600">Earned through verified learning</p>
        </div>
      ))}
    </div>
  </div>
</motion.section>

  {/* Testimonials Section */}
  <motion.section
  className="bg-gradient-to-r from-[#0B1A38] to-[#1365F4] text-white py-10"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
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
        src="/images/home/character_png-01.png" // Replace with your actual avatar image path
        alt="Client Avatar"
        width={320}
        height={320}
        className="rounded-2xl"
      />
    </div>
  </div>
</motion.section>

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

  <motion.section
  className="bg-blue-600 text-white py-24"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.6 }}
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* CTA Headline */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Unlock Your Future?</h2>
    <p className="text-lg mb-10 max-w-xl mx-auto">
      Join thousands building career records that stand out. Whether you're a candidate or a company — we're ready when you are.
    </p>

    {/* Signup Buttons */}
    <div className="flex flex-col md:flex-row justify-center gap-6">
    <Button href="/auth/sign-up" className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg transition">
      <span className="text-blue-600 font-semibold">Sign Up as Candidate</span>
    </Button>

    <Button
      href="/auth/sign-up"
      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition"
    >
      <span className="text-blue-600 font-semibold">Sign Up as Company</span>
    </Button>
  </div>

    {/* Login CTA */}
    <p className="mt-8 text-sm text-white/80">
      Already have an account?{" "}
      <Link href="/auth/sign-in" className="underline font-medium text-white hover:text-gray-100">
        Log in here
      </Link>
    </p>
  </div>
</motion.section>

    </div>
  );
}
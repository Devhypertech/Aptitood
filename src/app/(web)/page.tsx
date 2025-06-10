import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Web() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Lorem Ipsum - Welcome</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>
      <div className="w-full h-200 bg-white rounded-lg flex items-center justify-center p-4">
  <Image
    src="/images/home/forhero banner.png"
    alt="Hero Banner"
    width={300}
    height={300}
    className="object-contain max-h-full max-w-full"
  />
      </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-[#A28367] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ut Enim Ad Minim Veniam</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="auth/sign-in" className="bg-white text-[#A28367] px-6 py-3 rounded-md font-semibold hover:bg-[#F9F6F2]">
              Login
            </Link>
            <Link href="#" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#A28367]">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Heading Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['🚀', '📊', '🤝'].map((icon, index) => (
              <div className="text-center" key={index}>
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">Lorem Feature {index + 1}</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Cards */}
      <section className="px-6 md:px-20 py-12 space-y-24 text-gray-800">
        <div className='text-center'>
          <h2 className="text-3xl font-semibold mb-2">Lorem Ipsum Heading</h2>
          <p className="mb-8 text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["how-can-strong-communication-skills-transform-your-leadership-as-a-manager-01.jpg", "Ingram-Micro_Header-image_iStock-2166551077.jpg", "manufacturing-worker.jpg"].map((img, i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-sm">
              <Image src={`/images/home/${img}`} alt={`Card Image ${i + 1}`} width={400} height={200} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Card Title {i + 1}</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos + Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <Image src="/images/home/MK-CM995_FEDJOB_GR_20140610184008.jpg" alt="Feature Block" width={800} height={350} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Lorem Feature Block</h3>
              <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#A28367] text-white py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 max-w-xl mx-auto">Sign up now and explore what&rsquo;s possible.</p>
          <Link href="/contact" className="bg-white text-[#A28367] px-6 py-3 rounded-md font-semibold hover:bg-[#F9F6F2]">
            Start Now
          </Link>
        </section>

        {/* Signup Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600">Lorem Ipsum has been the industry&rsquo;s standard dummy text...</p>
          </div>
          <div className="bg-gray-100 p-16 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-4">Sign Up</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-[#A28367] text-white py-2 rounded hover:bg-[#C7AE87]">Register</button>
            </form>
          </div>
        </div>

        {/* Newsletter */}
        <section className="bg-gray-100 py-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe for lorem updates straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto" />
            <button className="bg-[#A28367] text-white px-6 py-2 rounded hover:bg-[#C7AE87]">Subscribe</button>
          </form>
        </section>
      </section>
    </div>
  );
}

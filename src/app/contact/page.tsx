import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
     <section className="bg-gradient-to-br from-[#2563EB] to-[#1B3173] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            Connect with us by filling the form.
          </p>
        </div>
      </section>

      {/* Contact Form + Steps */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="border border-[#2563EB] rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-[#1B3173]">Contact Us For A 30 Mins Consultation</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Full Name" className="border p-3 rounded w-full" />
              <input type="email" placeholder="Email Address" className="border p-3 rounded w-full" />
              <input type="tel" placeholder="Phone No" className="border p-3 rounded w-full" />
              <input type="text" placeholder="Website" className="border p-3 rounded w-full" />
              <input type="text" placeholder="Business Name" className="border p-3 rounded w-full md:col-span-2" />
            </div>

            {/* Services */}
            <div className="mt-4">
              <p className="mb-2 font-medium text-[#1B3173]">What&rsquo;s your job description?</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "HR Executive", "CMO", "CEO", "CTO",
                  "COO", "CFO", "Business Developer", "Sales Head",
                  "Project Manager", "Other"
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#2563EB]" /> {service}
                  </label>
                ))}
              </div>
            </div>

            <textarea placeholder="Tell us about your business" className="border p-3 rounded w-full mt-4 h-24" />

 <p className="text-xs text-gray-600 mt-2">
  By providing a telephone number and submitting this form you are consenting to be contacted by SMS/text message. Message &amp; data rates may apply. You can reply STOP to opt&ndash;out.
</p>

           <div className="p-6 text-white text-center rounded-md" style={{ backgroundColor: "#1B3173" }}>
              Get Consultation
            </div>
          </form>
        </div>

        {/* Right - Steps */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#1B3173]">Ready To Conquer Your Market?</h3>
          <p className="text-sm text-gray-700 mb-8">BOOST YOUR BUSINESS WITH 3 SIMPLE STEPS:</p>
          <ol className="space-y-6 text-base">
            <li>
              <span className="text-[#2563EB] font-bold">1. Ready To Conquer Your Market?</span>
              <p className="text-gray-700">FLorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s.</p>
            </li>
            <li>
              <span className="text-[#2563EB] font-bold">2. Launch Your Business Plan</span>
              <p className="text-gray-700">Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,</p>
            </li>
            <li>
              <span className="text-[#2563EB] font-bold">3. Achieve Sustained Growth</span>
              <p className="text-gray-700">Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s,</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-40">
        <h3 className="text-2xl font-bold text-center mb-8 text-[#1B3173]">Contact Information 💬</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Call */}
          <div className="bg-white border border-[#1B3173] rounded-lg p-6 shadow-md">
            <div className="text-[#2563EB] text-3xl mb-2">📞</div>
            <h4 className="font-bold text-lg text-[#1B3173]">CALL US</h4>
            <p>(123) 456-7890</p>
            <p>(346) 321-1230</p>
          </div>
          {/* Email */}
          <div className="bg-white border border-[#1B3173] rounded-lg p-6 shadow-md">
            <div className="text-[#2563EB] text-3xl mb-2">📧</div>
            <h4 className="font-bold text-lg text-[#1B3173]">EMAIL US</h4>
            <p>info@entakllc.com</p>
            <p>support@entakllc.com</p>
          </div>
          {/* Location */}
          <div className="bg-white border border-[#1B3173] rounded-lg p-6 shadow-md">
            <div className="text-[#2563EB] text-3xl mb-2">📍</div>
            <h4 className="font-bold text-lg text-[#1B3173]">LOCATION</h4>
            <p>16518 Winter Cypress Wy, Cypress, TX 77429</p>
          </div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="text-center py-6">
        <div className="flex justify-center gap-6 text-[#2563EB] text-xl">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-tumblr"></i>
        </div>
      </section>
    </main>
  );
}

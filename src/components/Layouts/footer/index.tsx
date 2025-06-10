import Link from "next/link";

export function Footer (){
    return (

   <footer className="bg-[#A28367] text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Aptitood</h4>
        <p className="text-[#F9F6F2]">To ensure the Entak ECR system is compatible with existing Human Resource platforms, 
            educational institutions, and certification/credentialing systems by supporting the following standards:</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Links</h4>
        <ul className="space-y-2">
          <li><Link href="/services" className="text-[#F9F6F2] hover:text-[#C7AE87]">Features</Link></li>
          <li><Link href="/pricing" className="text-[#F9F6F2] hover:text-[#C7AE87]">Pricing</Link></li>
          <li><Link href="/about" className="text-[#F9F6F2] hover:text-[#C7AE87]">About</Link></li>
          <li><Link href="/contact" className="text-[#F9F6F2] hover:text-[#C7AE87]">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <p className="text-[#F9F6F2]">Email: support@entakllc.com</p>
        <p className="text-[#F9F6F2]">Phone: (123) 456-7890</p>
        <p className="text-[#F9F6F2]">Address: Abc road street 123 NY USA</p>
      </div>
    </div>

    <div className="mt-8 text-center text-[#F9F6F2]">
      &copy; <b>2025 Aptitood. All Rights Reserved.</b>
    </div>
  </div>
</footer>
)
}

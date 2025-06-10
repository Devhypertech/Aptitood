import Link from "next/link";

export function Webheader (){
    return (

    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
      <div className="text-xl font-bold text-[#A28367]">Aptitood</div>

      <nav className="hidden space-x-6 md:flex">
        <Link href="/" className="text-gray-700 hover:text-[#C7AE87]">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#C7AE87]">About</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#C7AE87]">Listings</Link>
        <Link href="/pricing" className="text-gray-700 hover:text-[#C7AE87]">Pricing</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#C7AE87]">Contact</Link>
      </nav>

      <div className="flex items-center space-x-3">
      <Link href="/auth/sign-in">
      <button className="rounded-md border border-[#A28367] px-4 py-1.5 text-[#A28367] hover:bg-[#C7AE87] hover:text-white transition">
      Login
      </button>
      </Link>
      <Link href="/auth/sign-up">
     <button className="rounded-md bg-[#A28367] px-4 py-1.5 text-white hover:bg-[#C7AE87] transition">
      Sign Up
     </button>
     </Link>
    </div>
    </div>
    </header>

)
}

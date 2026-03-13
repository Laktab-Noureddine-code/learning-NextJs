import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 sm:py-32 text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
          New products available
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Discover Our
          <span className="block text-gray-500">Curated Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Explore premium products handpicked for quality and style.
          From everyday essentials to standout pieces, find what speaks to you.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/products"
            className="rounded-lg bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gray-800 hover:shadow-md"
          >
            Browse Products
          </Link>
          <Link
            href="/card"
            className="rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
          >
            View Cart
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-200 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">Free Shipping</h3>
            <p className="mt-2 text-sm text-gray-500">On orders over $50. Fast, reliable delivery right to your door.</p>
          </div>
          <div className="flex flex-col items-center text-center rounded-xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">Secure Payments</h3>
            <p className="mt-2 text-sm text-gray-500">Your transactions are protected with industry-leading encryption.</p>
          </div>
          <div className="flex flex-col items-center text-center rounded-xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">Easy Returns</h3>
            <p className="mt-2 text-sm text-gray-500">30-day hassle-free return policy. No questions asked.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

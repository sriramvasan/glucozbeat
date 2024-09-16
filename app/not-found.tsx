"use client"; 
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import useRouter hook


export default function NotFound() {
  const router = useRouter(); // Initialize the router

  return (
    <section className="bg-white 2xl:max-container relative flex flex-col mt-16">
      <div className="container px-6 py-20 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
          <p className="text-lg font-medium text-blue-500">Oops!</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-4xl">Looks like this page went missing…</h1>
          <p className="text-lg mt-4 text-gray-500 md:text-xl">Maybe it&apos;s out finding some low-GI alternatives? But don&apos;t worry, we&apos;ll help you find your way.</p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-lg text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>

              <span>Go back</span>
            </button>

            <Link href="/">
              <button className="w-1/2 px-5 py-2 text-lg tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img className="w-full max-w-lg lg:mx-auto" src="/404.gif" alt="" />
        </div>
      </div>
    </section>

  )
}

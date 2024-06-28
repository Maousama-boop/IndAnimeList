"use client"

import Link from "next/link"

const PageNotFound = () => {
    return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-color-accent px-2 text-sm rounded rotate-12 absolute">
            Halaman Tidak Ditemukan 
        </div>
        <button class="mt-5">
        <p class="relative inline-block text-sm font-medium text-color-accent group active:text-orange-500 focus:outline-none focus:ring">
            <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-color-accent group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/">Kembali</Link>
            </span>
        </p>
        </button>
    </main>
    )
}

export default PageNotFound
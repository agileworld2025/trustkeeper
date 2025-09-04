"use client";

import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herosection-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between py-4 px-16 max-w-8xl mx-auto relative z-20">
        <div className="flex items-center gap-2">
          <Image
            src="/trustkeeper.png"
            alt="TrustKeeper Logo"
            width={32}
            height={32}
          />
          <div className="flex items-center">
            <span className="text-3xl font-poppins font-medium text-[rgba(0,230,245,1)] tracking-wider">
              Trust
            </span>
            <h1 className="text-3xl font-poppins font-medium text-white tracking-wider">
              Keeper
            </h1>
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <Image src="/hamburger-menu.png" alt="menu" width={40} height={40} />
        </button>
      </header>

      {/* Dropdown Menu Panel with Animation */}
      <div
        className={`absolute right-6 top-20 z-30 w-60 rounded-xl bg-[rgba(0,0,0,0.85)] shadow-lg backdrop-blur-md transition-all duration-500 ease-in-out transform ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6 text-lg font-poppins font-medium">
          <li>
            <a href="#features" className="hover:text-[#03F0FF] transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#03F0FF] transition">
              About
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-[#03F0FF] transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#03F0FF] transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 mt-12">
        <span className="rounded-full bg-[rgba(255,255,255,0.18)] px-5 py-2 text-[rgba(249,250,251,1)] text-[16px] font-poppins font-medium uppercase tracking-widest">
          100% Trusted Platform
        </span>

        <h1 className="mt-6 lg:text-8xl font-serif font-bold leading-snug">
          Your Financial Life, <br />
          In One{" "}
          <span className="bg-gradient-to-r from-white to-[#03F0FF] bg-clip-text text-transparent">
            Safe
          </span>{" "}
          Place
        </h1>

        <p className="mt-2 max-w-2xl text-[rgba(220,220,220,1)] text-xl font-poppins font-medium">
          From Bank Details To Property Papers, Trust Keeper Helps You Record,
          Manage, And Share Your Financial Information—Securely. For You. For
          Your Family.
        </p>

        <button className="mt-6 rounded-full bg-[rgba(0,230,245,1)] px-6 py-3 font-semibold text-black hover:bg-teal-300 transition">
          Download Now →
        </button>

        {/* iPhone Mockup */}
        <div className="relative mt-12 flex justify-center gap-6">
          <Image
            src="/herosection-phone.png"
            alt="TrustKeeper app"
            width={946}
            height={791}
            className="drop-shadow-2xl"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

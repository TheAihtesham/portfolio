"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className="font-serif text-2xl italic tracking-wide"
        >
          Aihtesham
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">

          <Link href="#about">About</Link>

          <Link href="#projects">Projects</Link>

          <Link href="#skills">Skills</Link>

          <Link href="#contact">Contact</Link>

        </nav>

      </div>
    </header>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#895737]">
            AVAILABLE FOR WORK
          </p>

          <h1 className="font-serif text-7xl leading-none lg:text-8xl">

            Hi, I'm{" "}

            <span className="italic">Aihtesham</span>

            <br />

            <span className="text-6xl italic text-[#895737]">
              Full Stack Developer.
            </span>

          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-[#5E3023]/70">

            Building AI-powered web applications using
            Next.js, Express, MongoDB and Gemini AI.

          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-[#C08552] px-8 py-4 text-white transition hover:scale-105">

              View Projects

            </button>

            <button className="flex items-center gap-2 rounded-full border border-[#C08552] px-8 py-4 hover:bg-[#C08552] hover:text-white transition">

              Resume

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-sm text-[#895737]">

            <span>Next.js</span>

            <span>Express</span>

            <span>MongoDB</span>

            <span>TypeScript</span>

            <span>Gemini AI</span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -left-10 top-8 h-64 w-64 rounded-full bg-[#C08552]/20 blur-3xl" />

            <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#895737]/10 blur-3xl" />

            <div className="flex h-[520px] w-[420px] items-center justify-center rounded-[40px] border border-[#DAB49D] bg-white shadow-xl">

              <div className="text-center">

                <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#C08552] text-5xl font-bold text-white">

                  A

                </div>

                <h3 className="font-serif text-4xl italic">

                  Software

                  <br />

                  Engineer

                </h3>

                <p className="mt-6 text-[#5E3023]/60">

                  Building scalable web
                  experiences.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
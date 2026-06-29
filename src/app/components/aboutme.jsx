export default function AboutPage() {
  return (
    <main id="about" className="min-h-screen bg-[#f0ece6] px-6 md:px-16 py-24">

      <div className="mb-24">
        <p
          className="text-[0.68rem] uppercase text-center tracking-[0.18em] text-[#C08552] mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Who I am
        </p>
        <h1
          className="text-[3rem] md:text-[3.7rem] text-center font-light tracking-tight text-[#1c1c1a] leading-[1.05]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          About me.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
        <div>

          <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#C08552] to-[#5E3023] flex items-center justify-center mb-8">
            <span
              className="text-[1.8rem] font-light text-white/60"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A
            </span>
          </div>

          <h2
            className="text-[1.4rem] font-light tracking-tight text-[#1c1c1a] leading-snug mb-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Chaudhary Aihtesham
          </h2>
          <p
            className="text-[0.72rem] uppercase tracking-[0.12em] text-[#C08552] mb-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Full-Stack Developer · Mumbai
          </p>

          <div className="border-t border-[#ddd8d0] mb-8" />
          <div className="flex flex-col gap-4">
            {[
              {
                label: "Email",
                href: "https://mail.google.com/mail/?view=cm&to=chaudharyaihtesham05@gmail.com",
                display: "chaudharyaihtesham05@gmail.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/TheAihtesham",
                display: "github.com/theaihtesham",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aihtesham-chaudhary-a52143343/",
                display: "linkedin.com/in/aihtesham",
              },
              {
                label: "Phone",
                href: "tel:+919004849667",
                display: "+91 9004849667",
              },
            ].map((c) => (
              <div key={c.label}>
                <p
                  className="text-[0.58rem] uppercase tracking-[0.14em] text-[#aaa49e] mb-0.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[0.8rem] font-light text-[#888077] hover:text-[#5E3023] transition-colors duration-150 truncate block"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {c.display} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            {[
              "I'm a full-stack developer based in Mumbai, focused on building modern web applications with clean architecture and thoughtful user experiences. I enjoy solving complex problems, learning new technologies, and turning ideas into reliable, scalable software.",
              "I believe great products are built through attention to detail, continuous improvement, and writing code that's easy to maintain. My goal is to create software that is not only functional but also intuitive, efficient, and built to stand the test of time.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-[0.95rem] font-light text-[#6b6560] leading-[1.9]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {para}
              </p>
            ))}
          </div>
          <div>
            <p
              className="text-[0.62rem] uppercase tracking-[0.16em] text-[#C08552] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              What I'm looking for
            </p>
            <div className="grid grid-cols-2 gap-px bg-[#ddd8d0] border border-[#ddd8d0]">
              {[
                { label: "Role", value: "Full-time / Internship" },
                { label: "Type", value: "Frontend / Backend / Fullstack" },
                { label: "Location", value: "Mumbai or Remote" },
                { label: "Stack", value: "Next.js · MERN · AI" },
              ].map((item) => (
                <div key={item.label} className="bg-[#f0ece6] px-5 py-4">
                  <p
                    className="text-[0.58rem] uppercase tracking-[0.12em] text-[#aaa49e] mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[0.82rem] font-light text-[#1c1c1a]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
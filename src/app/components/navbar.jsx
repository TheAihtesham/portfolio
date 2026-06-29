export default function Navbar() {
  return (
    <header className="pt-8 sticky top-0 z-50 bg-[#f0ece6]">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

        <a href="#hero">
          <h2
            className="text-xl italic font-light cursor-pointer"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Chaudhary Aihtesham
          </h2>
        </a>

        <div className="flex items-center gap-8 text-sm">
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#888077] hover:text-[#5E3023] transition-colors duration-150"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

      </div>
    </header>
  );
}

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col h-screen items-center justify-center text-center px-6 py-30">

            <h1 className="text-5xl md:text-7xl leading-[1.08] tracking-tight">
                Hi, I'm Aihtesham
                <span className="inline-block w-[0.7em] h-[0.7em] rounded-full overflow-hidden align-middle mx-2 mb-1 border-2 border-[#ddd8d0]">
                    <img
                        src="portfolioImage.jpeg"
                        alt="Aihtesham"
                        className="w-full h-full object-cover"
                    />
                </span>
                ,
            </h1>

            <h2 className="text-[42px] font-light italic leading-[1.1] tracking-tight mt-1">
                Full-Stack Web Engineer.
            </h2>
            <p
                className="mt-4 text-center font-light leading-tight text-[#2e2b29]"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontStyle: "italic" }}
            >
                building products that solve real problems,<br />
                not just{" "}
                <strong
                    className="not-italic text-[#5E3023] tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 400 }}
                >
                    showcase projects
                </strong>
            </p>

            <div className="flex items-center gap-6 mt-10">
                <a
                    href="/ChaudharyAihteshamResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#5E3023] text-[#5E3023] px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.12em] hover:bg-[#5E3023] hover:text-[#f0ece6] transition-all duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Resume ↓
                </a>

                <span className="w-px h-5 bg-[#ddd8d0]" />

                {[
                    { label: "GitHub", href: "https://github.com/TheAihtesham" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/aihtesham-chaudhary-a52143343" },
                ].map((l) => (
                    <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.72rem] uppercase tracking-[0.12em] text-[#aaa49e] hover:text-[#5E3023] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        {l.label} ↗
                    </a>
                ))}

            </div>

        </section>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#f0ece6] ">
            <div className="px-6 md:px-16 text-center py-24 border-b border-[#ddd8d0]">
                <p
                    className="text-[0.68rem] text-center uppercase tracking-[0.18em] text-[#C08552] mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Let's connect
                </p>
                <h2
                    className="text-[3rem] mx-auto md:text-[5rem]  font-light tracking-tight text-[#1c1c1a] leading-[1.0] mb-10 max-w-3xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    Got a problem <br />
                    <em className="italic text-[#C08552]">worth solving?</em>
                </h2>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=chaudharyaihtesham05@gmail.com&su=Let's Work Together"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-[#5E3023] px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.14em] text-[#5E3023] hover:bg-[#5E3023] hover:text-[#f0ece6] transition-all duration-200 group"
                    style={{ fontFamily: "var(--font-inter)" }}
                >
                    Get in touch
                    <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
            </div>
            <div className="px-6 md:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                <p
                    className="text-[0.9rem] font-light text-[#1c1c1a]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    Aihtesham.
                </p>

                <div className="flex items-center gap-5">
                    {[
                        { label: "GitHub", href: "https://github.com/TheAihtesham" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/aihtesham-chaudhary-a52143343/" },
                    ].map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.68rem] uppercase tracking-widest text-[#aaa49e] hover:text-[#5E3023] transition-colors duration-150"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            {l.label} ↗
                        </a>
                    ))}

                </div>

            </div>
        </footer>
    );
}
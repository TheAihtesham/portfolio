const projects = [
  {
    name: "OSSBuddy",
    type: "Open Source Discovery",
    year: "2026",
    desc: "Discover trending GitHub projects by category. GitHub OAuth with JWT authentication, personalized dashboards, category-based filtering, and AI-assisted recommendations via Gemini.",
    tags: ["Next.js", "Express", "MongoDB", "Gemini AI", "GitHub API", "JWT"],
    github: "https://github.com/TheAihtesham/OSSBuddy",
    live: "https://oss-buddy.vercel.app/",
  },
  {
    name: "PDFSense",
    type: "AI Document Tool",
    year: "2025",
    desc: "Upload PDFs and interact with them in natural language. Features a responsive three-panel workspace, AI-powered contextual Q&A, smart document understanding, and note-taking powered by Gemini AI.",
    tags: ["Next.js", "Express.js", "MongoDB", "Gemini AI", "Shadcn UI"],
    github: "https://github.com/TheAihtesham/AI-notes-pdf-taker",
    live: "https://ai-notes-pdf-taker.vercel.app/",
  },
  {
    name: "CodeMate",
    type: "Real-time Collaboration",
    year: "2025",
    desc: "WebSocket-powered collaborative code editor with multi-user live sync. Sandboxed code execution across multiple languages via Judge0, plus Gemini AI assistance built in.",
    tags: ["Next.js", "Express.js", "WebSockets", "Judge0", "Gemini AI", "Shadcn UI"],
    github: "https://github.com/TheAihtesham/ai-collaborative-code-editor",
    live: "https://ai-collaborative-code-editor.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main id="projects" className="min-h-screen bg-[#f0ece6] px-6 md:px-16 py-24">
      <div className="mb-12 max-w-xl mx-auto">
        
        <h1
          className="text-[3rem] md:text-[3.7rem] font-light tracking-tight text-[#1c1c1a] leading text-center"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Things I've built.
        </h1>
        <p
          className="mt-4 text-[0.88rem] font-light text-[#888077] leading-[0.2] text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Three live projects: real users, real infrastructure, shipped.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "1px", background: "#ddd8d0", border: "1px solid #ddd8d0" }}
      >
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-[#f0ece6] hover:bg-[#faf8f5] transition-colors duration-200 p-8 flex flex-col min-h-70 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span
                  className="text-[0.62rem] font-medium tracking-[0.14em] uppercase text-[#aaa49e]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p.year}
                </span>
              </div>
              
            </div>

            <div className="mt-auto pt-4">
              <p
                className="text-[0.62rem] uppercase tracking-[0.12em] text-[#C08552] mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {p.type}
              </p>

              <h2
                className="text-[1.5rem] font-medium tracking-tight text-[#1c1c1a] leading-[1.1] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.name}
              </h2>

              <p
                className="text-[0.84rem] font-light text-[#524d48] leading-[1.8] mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.58rem] uppercase tracking-[0.08em] text-[#64615e] border border-[#ddd8d0] px-2.5 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 pt-4 border-t border-[#ddd8d0]">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.68rem] uppercase tracking-widest text-[#888077] hover:text-[#5E3023] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  GitHub ↗
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.68rem] uppercase tracking-widest text-[#888077] hover:text-[#5E3023] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[#ffedda] p-8 flex flex-col min-h-70 opacity-30">
          <div className="flex justify-between items-start">
            <span
              className="text-[0.62rem] font-medium tracking-[0.14em] uppercase text-[#4e4c4a]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Soon
            </span>
            
          </div>
          <div className="mt-auto pt-8">
            <p
              className="text-[0.62rem] uppercase tracking-[0.12em] text-[#3b1f07] mb-2 font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              In progress
            </p>
            <h2
              className="text-[1.5rem] font-medium tracking-tight text-[#000000] leading-[0.9] mb-3"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Next project
            </h2>
            <p
              className="text-[0.84rem] font-light text-[#000000] leading-[1.8]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Always building something new. Follow on GitHub to stay updated.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center text-center gap-3">
        <p
          className="text-[0.75rem] uppercase tracking-[0.14em] text-[#aaa49e] leading-[0.5]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Want to see more?
        </p>
        <a
          href="https://github.com/TheAihtesham"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-[#5E3023] border-b border-[#C08552] pb-px tracking-wide hover:text-[#C08552] transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Visit my GitHub ↗
        </a>
      </div>

    </main>
  );
}
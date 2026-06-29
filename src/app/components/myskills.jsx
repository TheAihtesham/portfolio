export default function SkillsPage() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "devicon-react-original" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "WebSockets", icon: "devicon-socketio-original" },
        { name: "JWT Auth", icon: "devicon-javascript-plain" },
        { name: "OAuth 2.0", icon: "devicon-google-plain" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Prisma", icon: "devicon-prisma-original" },
        { name: "Mongoose", icon: "devicon-mongodb-plain" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Vercel", icon: "devicon-vercel-original" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "Render", icon: "devicon-nodejs-plain" },
      ],
    },
    {
      category: "AI & APIs",
      items: [
        { name: "Gemini AI", icon: "devicon-google-plain" },
        { name: "GitHub API", icon: "devicon-github-original" },
        { name: "Judge0", icon: "devicon-javascript-plain" },
        { name: "AI Integration", icon: "devicon-python-plain" },
      ],
    },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <main id="skills" className="min-h-screen bg-[#f0ece6] px-6 md:px-16 py-24">

        <div className="mb-16 text-center">
          <p
            className="text-[0.68rem] uppercase tracking-[0.18em] text-[#C08552] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            What I work with
          </p>
          <h1
            className="text-[3rem] md:text-[4rem] font-light tracking-tight text-[#1c1c1a] leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Skills.
          </h1>
          <p
            className="mt-4 text-[0.88rem] mx-auto font-light text-[#888077] leading-[1.8] max-w-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tools and technologies I use to go from idea to shipped product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddd8d0] border border-[#ddd8d0]">
          {skills.map((group) => (
            <div key={group.category} className="bg-[#f0ece6] p-6">

              <p
                className="text-[0.58rem] uppercase tracking-[0.18em] text-[#C08552] mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {group.category}
              </p>

              <div className="grid grid-cols-4 gap-px bg-[#f0ece6]  border-[#ddd8d0]">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-[#f0ece6] hover:bg-[#faf8f5] transition-colors duration-200 flex flex-col items-center justify-center gap-2.5 py-5 group cursor-default"
                  >
                    <i
                      className={`${skill.icon} text-[1.7rem] text-[#895737] group-hover:text-[#5E3023] transition-colors duration-200`}
                    />
                    <span
                      className="text-[0.55rem] uppercase tracking-[0.08em] text-[#aaa49e] group-hover:text-[#888077] transition-colors duration-200 text-center leading-tight px-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </main>
    </>
  );
}
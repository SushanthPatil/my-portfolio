

const projects = [
  {
    number: "01",
    type: "DATA ENGINEERING",
    name: "Sales Data Warehouse & Analytics",
    description:
      "A SQL Server data warehouse project featuring Bronze, Silver, and Gold layers, ETL pipelines, star-schema data modeling, and sales analytics.",
    stack: "SQL Server · T-SQL · ETL · Data Modeling",
    github:
      "https://github.com/SushanthPatil/SQL-Data_Warehouse_Project",
  },
  {
    number: "02",
    type: "AI APPLICATION",
    name: "AI-Powered Voice Expense Tracker",
    description:
      "A voice-driven expense tracker that uses natural-language processing to extract expense details and integrates a FastAPI backend with Notion.",
    stack: "Python · FastAPI · LLM · Notion API",
    github:
      "https://github.com/SushanthPatil/AI-Powered-Voice-Expense-Tracker",
  },
  {
    number: "03",
    type: "ANDROID APPLICATION",
    name: "Garage Badshaah",
    description:
      "An Android app for discovering nearby garages, viewing routes through Google Maps, and accessing online payment functionality.",
    stack: "Java · Android Studio · MySQL · Firebase · Google Maps API",
    github:
      "https://github.com/SushanthPatil/GarageBaadshah_Project1",
  },
];


const skills = [
  "Python",
  "Java",
  "C++",
  "SQL",
  "FastAPI",
  "Git & GitHub",
  "Data Modeling",
  "AI Integration",
  "Generative AI",
  "Machine Learning",
  "Data Analysis",
  "Agentic AI",
  "Software Development",
  "Data Warehousing",
  "ETL Pipelines",
  "Android Development",
  "RESTful APIs",
  "Notion API",
  "Google Maps API",
  "Problem Solving",
  "Full-Stack Development",
];

export default function Home() {
  return (
    <main>

          
      <nav className="navbar">
        <a
          className="brand"
          href="#home"
          aria-label="Sushanth Patil home"
        >
          SP<span>.</span>
        </a>

        {/* Desktop navigation */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resumes">Resumes</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile hamburger menu */}
        <details className="mobile-menu">
          <summary aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <div className="mobile-menu-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resumes">Resumes</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </details>

        <a
          className="nav-cta"
          href="https://www.linkedin.com/in/sushanth-b-patil-028191173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s connect <span>↗</span>
        </a>
      </nav>


       
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, WORLD. I&apos;M</p>

          <h1>
            Sushanth
            <br />
            <span>Patil</span>
          </h1>

          <h2>
            Computer Science Engineer & Software Developer
            <br />
            <span className="gradient-text">
              Turning ideas into technology.
            </span>
          </h2>
          
          <p className="hero-education">
            Indian Institute of Information Technology Dharwad
          </p>

          <p className="hero-description">
            I build practical technology through software development,
            SQL-based data solutions, and AI-powered applications.
            Explore my projects, the tools I use, and how I approach
            solving real-world problems.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="button-secondary" href="#contact">
              Get in touch
            </a>
          
            <a
              className="button-secondary"
              href="https://github.com/SushanthPatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub <span>↗</span>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/SushanthPatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="#projects">SELECTED PROJECTS ↘</a>
            <span className="social-divider" />
            <span>COMPUTER SCIENCE · 2022</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Decorative developer graphic">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-glow" />

          <div className="code-card">
            <div className="code-card-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.ts</span>
            </div>

            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">&quot;Sushanth&quot;</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; focus: [</p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp; <span className="code-green">&quot;Software&quot;</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">&quot;Data&quot;</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">&quot;AI&quot;</span></p>
              <p><span className="code-muted">07</span> &nbsp; ],</p>
              <p><span className="code-muted">08</span> &nbsp; mindset: <span className="code-blue">&quot;Always learning&quot;</span></p>
              <p><span className="code-muted">09</span> {"}"};</p>
            </div>

            <div className="code-card-footer">
              <span className="status-dot" /> READY TO BUILD
              <span>UTF-8</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span className="chip-icon">{"</>"}</span>
            Clean code
          </div>

          <div className="floating-chip chip-bottom">
            <span className="chip-icon">✳</span>
            Curious by nature
          </div>

          <div className="visual-label">PORTFOLIO / 2026</div>
        </div>

        <a className="scroll-cue" href="#about">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-strip">
        <div>
          <span className="strip-label">MY APPROACH</span>
          <span>Curiosity → Code → Practical solutions</span>
        </div>
        <span className="strip-symbol">✳</span>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
          <h2>
            Technology is interesting.
            <br />
            <span className="gradient-text">Making it useful is better.</span>
          </h2>
        </div>


        <div className="about-grid">
          <p className="about-lead">
            I&apos;m a Computer Science graduate interested in building
            software that solves real problems.
          </p>
          <div className="about-details">
            <p>
              My projects have given me opportunities to explore SQL data
              warehousing, Python APIs, and AI-assisted workflows. I enjoy
              learning how systems fit together, experimenting with ideas,
              and improving through hands-on development.
            </p>
            <p>
              I&apos;m continuing to develop my technical skills and looking
              for opportunities where I can contribute, learn from a team,
              and build reliable products.
            </p>
          </div>
        </div>

          <div className="education-card">
          <div className="education-icon">
            <span aria-hidden="true">🎓</span>
          </div>

          <div className="education-details">
            <p className="education-label">EDUCATION</p>
            <h3>Bachelor of Technology (B.Tech.)</h3>
            <p>Computer Science and Engineering</p>
            <p className="education-institution">
              Indian Institute of Information Technology Dharwad
            </p>
            <p className="education-meta">
              2018 – 2022 · Dharwad, Karnataka
            </p>
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>Things I&apos;ve built<span className="accent">.</span></h2>
            </div>
            <p className="section-note">
              A selection of projects exploring data, software and AI.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number} / CASE STUDY</span>
                  <span className="project-arrow">↗</span>
                </div>
                <p className="project-type">{project.type}</p>
                
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack}</div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  View on GitHub ↗
                </a>

              </article>
            ))}
          </div>

          <p className="project-note">
            Project details and repository links will be added after the
            code and demos are verified.
          </p>
        </div>
      </section>
      
      <section className="resume-section section-wrap" id="resumes">
        <div className="resume-heading">
          <p className="eyebrow">CAREER RESOURCES</p>
          <h2>
            Resumes for <span className="gradient-text">your next opportunity.</span>
          </h2>
          <p className="resume-intro">
            Explore my experience and projects through a resume tailored to each role.
          </p>
        </div>

        <div className="resume-grid">
          <article className="resume-card">
            <div className="resume-card-icon">01</div>
            <p className="resume-category">DATA & ANALYTICS</p>
            <h3>Data Analyst</h3>
            <p className="resume-description">
              SQL, data modeling, ETL pipelines, and analytical reporting.
            </p>
            <a
              className="resume-download"
              href="/Sushanth-Patil-Data-Analyst-Resume.pdf"
              download="Sushanth-Patil-Data-Analyst-Resume.pdf"
            >
              Download Resume <span>↓</span>
            </a>
          </article>

          <article className="resume-card">
            <div className="resume-card-icon">02</div>
            <p className="resume-category">SOFTWARE ENGINEERING</p>
            <h3>Software Development Engineer</h3>
            <p className="resume-description">
              Programming, data structures, algorithms, and application development.
            </p>
            <a
              className="resume-download"
              href="/Sushanth-Patil-SDE-Resume.pdf"
              download="Sushanth-Patil-SDE-Resume.pdf"
            >
              Download Resume <span>↓</span>
            </a>
          </article>

          <article className="resume-card">
            <div className="resume-card-icon">03</div>
            <p className="resume-category">ARTIFICIAL INTELLIGENCE</p>
            <h3>AI Engineer</h3>
            <p className="resume-description">
              Python, machine learning, Generative AI, and AI-powered applications.
            </p>
            <a
              className="resume-download"
              href="/Sushanth-Patil-AI-Engineer-Resume.pdf"
              download="Sushanth-Patil-AI-Engineer-Resume.pdf"
            >
              Download Resume <span>↓</span>
            </a>
          </article>
        </div>
      </section>


      <section className="content-section section-wrap" id="skills">
        <div className="section-heading">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>Tools I work with<span className="accent">.</span></h2>
          <p className="section-note">
            Technologies explored through learning and hands-on projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="eyebrow">04 / WHAT&apos;S NEXT?</p>
        <h2>
          Have an opportunity?
          <br />
          <span className="gradient-text">Let&apos;s talk.</span>
        </h2>
        <p className="contact-description">
          I&apos;m interested in connecting with teams working on meaningful
          software, data and AI projects.
        </p>
        <a
          className="button-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=patilsushanth2000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me <span>↗</span>
        </a>
        <p className="contact-reminder">
          Replace the placeholder email and add your professional links
          before publishing.
        </p>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">SP<span>.</span></a>
        <p>Designed with intention. Built with curiosity.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

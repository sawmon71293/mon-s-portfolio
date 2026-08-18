"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Database,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";

type Chapter = "about" | "projects" | "skills" | "journey" | "contact";

const chapters: { id: Chapter; number: string; label: string }[] = [
  { id: "about", number: "01", label: "ABOUT" },
  { id: "projects", number: "02", label: "PROJECTS" },
  { id: "skills", number: "03", label: "SKILLS" },
  { id: "journey", number: "04", label: "JOURNEY" },
  { id: "contact", number: "05", label: "CONTACT" },
];

const projects = [
  { title: "Loan Origination System", text: "A lending workflow for applications, approval rules, disbursement.", tags: [".NET", "React", "SQL Server"], image: "/svg/12_project_signposts.svg" },
  { title: "HR Portal", text: "An internal platform for employee administration, leave workflows and attendance", tags: ["Next.js", "TypeScript", "React", ".Net"], image: "/svg/10_tech_shelf.svg" },
  { title: "Financial Systems' Frontend Development", text: "Developed responsive frontend applications for financial systems, integrating complex business workflows with clean, maintainable user interfaces.", tags: ["React", "Vue", "NuxtJS"], image: "/svg/09_laptop.svg" },
];

const skills = ["C#", ".NET", "ASP.NET Core", "TypeScript", "React", "Next.js", "VueJS", "NuxtJS", "SQL Server", "PostgreSQL", "REST APIs", "Git", "Docker", "Linux"];
const pageNumbers: Record<Chapter, string> = { about: "03", projects: "06", skills: "10", journey: "14", contact: "18" };

export default function Home() {
  const [chapter, setChapter] = useState<Chapter>("about");

  function navigate(next: Chapter) {
    setChapter(next);
    setTimeout(() => document.getElementById("storybook")?.scrollIntoView({ behavior: "smooth", block: "center" }), 20);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#123544] text-[#4d2e20]">
      <Hero onOpen={() => navigate("about")} />
      <section id="storybook" className="storybook-stage">
        <BackgroundDecor />
        <div className="book-wrap">
          <div className="book">
            <div className="book-page left-page">
              <PageContent chapter={chapter} side="left" navigate={navigate} />
            </div>
            <div className="book-spine" />
            <div className="book-page right-page">
              <PageContent chapter={chapter} side="right" navigate={navigate} />
            </div>
            <ChapterTabs active={chapter} navigate={navigate} />
            <button aria-label="Previous chapter" className="page-arrow left-3" onClick={() => navigate(previousChapter(chapter))}><ArrowLeft size={22} /></button>
            <button aria-label="Next chapter" className="page-arrow right-3" onClick={() => navigate(nextChapter(chapter))}><ArrowRight size={22} /></button>
            <div className="page-number">{pageNumbers[chapter]}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Hero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="hero">
      <img
        src="/svg/01_forest_night_background.svg"
        alt=""
        className="hero-background"
      />

      <div className="hero-vignette" />
      <div className="hero-glow" />

      <img
        src="/svg/18_stars_sparkles.svg"
        alt=""
        className="hero-stars hero-stars-left"
      />

      <img
        src="/svg/18_stars_sparkles.svg"
        alt=""
        className="hero-stars hero-stars-right"
      />

      <img
        src="/svg/06_leaf_scatter.svg"
        alt=""
        className="hidden md:block hero-leaves"
      />

      <div className="hidden md:block hero-developer">
        <div className="developer-light" />

        <img
          src="/svg/cozy-developer.png"
          alt="Saw Mon working comfortably with a laptop and coffee"
          className="developer-scene"
        />

        <img
          src="/svg/04_green_companion.svg"
          alt=""
          className="developer-companion"
        />

        <img
          src="/svg/05_mushrooms.svg"
          alt=""
          className="developer-mushrooms hidden md:block"
        />

        <div className="developer-fireflies">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
        </div>
      </div>

      <div className="hero-journey">
        <div className="journey-kicker">
          FULL STACK SOFTWARE DEVELOPER
        </div>

        <h1>
          Saw Mon&apos;s
          <span>Digital Journey</span>
        </h1>

        <div className="journey-divider">
          <span />
          <b>❦</b>
          <span />
        </div>

        <p className="journey-intro">
          A little journey through code,
          <br />
          creativity and continuous learning.
        </p>

        {/* Story path */}
        <div className="journey-path">

          <div className="journey-step">
            <span className="journey-dot">01</span>

            <div>
              <strong>Code</strong>
              <small>
                Turning ideas into useful systems.
              </small>
            </div>
          </div>

          <div className="journey-branch" />

          <div className="journey-step">
            <span className="journey-dot">02</span>

            <div>
              <strong>Learn</strong>
              <small>
                Exploring new technologies and ideas.
              </small>
            </div>
          </div>

          <div className="journey-branch" />

          <div className="journey-step">
            <span className="journey-dot">03</span>

            <div>
              <strong>Build</strong>
              <small>
                Creating systems that solve real problems.
              </small>
            </div>
          </div>

          <div className="journey-branch" />

          <div className="journey-step">
            <span className="journey-dot">04</span>

            <div>
              <strong>Grow</strong>
              <small>
                Becoming a better developer, one chapter at a time.
              </small>
            </div>
          </div>

        </div>

        <button
          className="hero-open-book"
          onClick={onOpen}
        >
          <span>OPEN THE BOOK</span>
          <span className="hero-arrow">→</span>
        </button>

        <div className="hero-caption">
          <span>✦</span>
          turn the page
          <span>✦</span>
        </div>
      </div>

      <div className="hero-ground" />
    </section>
  );
}

function PageContent({ chapter, side, navigate }: { chapter: Chapter; side: "left" | "right"; navigate: (c: Chapter) => void }) {
  if (chapter === "about") return side === "left" ? <AboutPage navigate={navigate} /> : <AboutArt />;
  if (chapter === "projects") return side === "left" ? <ProjectsIntro navigate={navigate} /> : <ProjectsPage />;
  if (chapter === "skills") return side === "left" ? <SkillsIntro navigate={navigate} /> : <SkillsPage />;
  if (chapter === "journey") return side === "left" ? <JourneyIntro navigate={navigate} /> : <JourneyPage />;
  return side === "left" ? <ContactIntro navigate={navigate} /> : <ContactPage />;
}

function AboutPage({ navigate }: { navigate: (c: Chapter) => void }) {
  return <div className="page-content">
    <Ribbon>CHAPTER 01</Ribbon><h2>Who am I?</h2>
    <p className="lead">Hi! I&apos;m Saw Mon. I enjoy turning complex problems into simple, useful systems.</p>
    <p>I care about clean code, meaningful impact and continuous learning. My work has taken me through web applications, loan origination system and internal business platforms.</p>
    <div className="mini-stack">
      <MiniBadge icon={<Code2 />} text="C#" />
      <MiniBadge icon={<Server />} text=".NET" />
      <MiniBadge icon={<Code2 />} text="NodeJS" />
      <MiniBadge icon={<Server />} text="Fastify" />
      <MiniBadge icon={<Sparkles />} text="React" />
      <MiniBadge icon={<Server />} text="NextJS" />
      <MiniBadge icon={<Sparkles />} text="Vue" />
      <MiniBadge icon={<Server />} text="NuxtJS" />
      <MiniBadge icon={<Database />} text="SQL" />
      <MiniBadge icon={<Database />} text="MongoDB" />
    </div>
    <button className="wood-button small" onClick={() => navigate("projects")}>Explore my projects →</button>
  </div>;
}

function AboutArt() {
  return <div className="illustration-page">
    <div className="floating-label label-dotnet">.NET</div><div className="floating-label label-react">⚛</div><div className="floating-label label-sql">SQL</div>
    <img src="/svg/08_developer_desk.svg" alt="Developer working at a desk" className="desk-scene" />
    <img src="/svg/04_green_companion.svg" alt="" className="small-companion" />
  </div>;
}

function ProjectsIntro({ navigate }: { navigate: (c: Chapter) => void }) {
  return <div className="page-content">
    <Ribbon>CHAPTER 02</Ribbon><h2>Things I&apos;ve Built</h2>
    <p className="lead">Here are some of the systems I&apos;ve worked on.</p>
    <p>I especially enjoy projects where business rules, APIs, databases and real-world workflows all have to work together.</p>
    <div className="wooden-sign-list">
      <div>Loan Origination System</div>
      <div>HR Portal</div>
      <div>Frontend Development for Financial Systems</div>
      <div>Digital Recruitment Solution</div>
    </div>
    <button className="wood-button small" onClick={() => navigate("skills")}>See my toolbox →</button>
  </div>;
}

function ProjectsPage() {
  return <div className="project-page">
    <div className="problem-solution"><div><span className="tiny-ribbon">THE PROBLEM</span><p>Manual, paper-based processes were slow and error-prone.</p></div><div><span className="tiny-ribbon green">THE SOLUTION</span><p>A digital workflow that makes everything faster, cleaner and easier to track.</p></div></div>
    <div className="project-cards">{projects.map(project => <article key={project.title} className="project-card"><div><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><img src={project.image} alt="" /></article>)}</div>
  </div>;
}

function SkillsIntro({ navigate }: { navigate: (c: Chapter) => void }) {
  return <div className="page-content">
    <Ribbon>CHAPTER 03</Ribbon><h2>My Toolbox</h2>
    <p className="lead">Some of the technologies I work with.</p>
    <p>From backend services and databases to modern frontend interfaces, these are the tools I reach for most often.</p>
    <div className="skill-shelf-mini">
      <span>C#</span>
      <span>.NET</span>
      <span>NodeJS</span>
      <span>Fastify</span>
      <span>React</span>
      <span>VueJS</span>
      <span>TS</span>
      <span>SQL</span>
      <span>Git</span>
    </div>
    <button className="wood-button small" onClick={() => navigate("journey")}>Follow my journey →</button>
  </div>;
}

function SkillsPage() {
  return <div className="skills-page">
    <img src="/svg/10_tech_shelf.svg" alt="Technology shelf" className="tech-shelf" />
    <div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
    <img src="/svg/13_potted_plant.svg" alt="" className="skill-plant" />
  </div>;
}

function JourneyIntro({ navigate }: { navigate: (c: Chapter) => void }) {
  return <div className="page-content">
    <Ribbon>CHAPTER 04</Ribbon><h2>My Journey</h2>
    <p className="lead">A path of learning, building and growing.</p>
    <p>Every project adds another little chapter — from writing my first programs to building systems used in real financial workflows.</p>
    <div className="journey-milestones"><span>Started Coding</span><span>Financial Systems Frontend Development</span><span>Loan Origination System</span><span>HR Portal</span></div>
    <button className="wood-button small" onClick={() => navigate("contact")}>Let&apos;s build together →</button>
  </div>;
}

function JourneyPage() {
  return <div className="journey-page">
    <img src="/svg/11_journey_path.svg" alt="Illustrated career journey path" className="journey-map" />
    <img src="/svg/07_pink_character.svg" alt="" className="journey-character" />
    <img src="/svg/04_green_companion.svg" alt="" className="journey-companion" />
  </div>;
}

function ContactIntro({ navigate }: { navigate: (c: Chapter) => void }) {
  return <div className="page-content">
    <Ribbon>CHAPTER 05</Ribbon><h2>Let&apos;s Build Something Together</h2>
    <p className="lead">I&apos;m open to remote opportunities and interesting projects.</p>
    <p>If you have a problem that needs thoughtful software, I&apos;d love to hear about it.</p>
    <div className="contact-links">
      <a href="mailto:sawmon71293@gmail.com"><Mail size={18} />sawmon71293@gmail.com</a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><svg
        xmlns="http://w3.org"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>https://github.com/sawmon71293</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <svg
          xmlns="http://w3.org"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>https://www.linkedin.com/in/saw-mon-han</a>
    </div>
    <button className="text-button" onClick={() => navigate("about")}>← Start from the beginning</button>
  </div>;
}

function ContactPage() {
  return <div className="contact-page">
    <img src="/svg/16_contact_lantern.svg" alt="" className="lantern" />
    <img src="/svg/13_potted_plant.svg" alt="" className="contact-plant" />
    <div className="contact-stars">✦ ✧ ✦</div>
    <div className="contact-note"><strong>OPEN TO:</strong><br />Remote opportunities<br />Interesting projects<br />Continuous learning</div>
  </div>;
}

function MiniBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return <div className="mini-badge">{icon}<span>{text}</span></div>;
}

function Ribbon({ children }: { children: React.ReactNode }) { return <div className="ribbon">{children}</div>; }

function ChapterTabs({ active, navigate }: { active: Chapter; navigate: (c: Chapter) => void }) {
  return <nav className="chapter-tabs">{chapters.map((item, index) => <button key={item.id} onClick={() => navigate(item.id)} className={`chapter-tab ${active === item.id ? "active" : ""} ${index === 1 ? "orange" : ""} ${index === 2 ? "green" : ""} ${index === 3 ? "blue" : ""}`}><b>{item.number}</b><span>{item.label}</span></button>)}</nav>;
}

function nextChapter(current: Chapter): Chapter {
  const index = chapters.findIndex(item => item.id === current);
  return chapters[(index + 1) % chapters.length].id;
}

function previousChapter(current: Chapter): Chapter {
  const index = chapters.findIndex(item => item.id === current);
  return chapters[(index - 1 + chapters.length) % chapters.length].id;
}

function BackgroundDecor() {
  return <>
    <img src="/svg/05_mushrooms.svg" alt="" className="decor-mushrooms" />
    <img src="/svg/06_leaf_scatter.svg" alt="" className="decor-leaves" />
    <img src="/svg/18_stars_sparkles.svg" alt="" className="decor-stars" />
    <img src="/svg/15_coffee_lamp.svg" alt="" className="decor-lamp" />
  </>;
}

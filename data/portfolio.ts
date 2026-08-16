export type Project = {
  title: string;
  description: string;
  stack: string[];
  color: string;
};

export const projects: Project[] = [
  {
    title: "Loan Origination System",
    description: "A lending workflow that connects applications, approval rules, disbursement and financial-system integration.",
    stack: [".NET", "React", "SQL Server", "Mifos"],
    color: "orange"
  },
  {
    title: "HR Administration Portal",
    description: "An internal platform for employee administration, leave workflows and operational management.",
    stack: ["Next.js", "TypeScript", "React", "SQL Server"],
    color: "sage"
  },
  {
    title: "Financial System Integration",
    description: "Backend integrations that move customer, account and transaction data between financial services.",
    stack: [".NET", "SQL Server", "PostgreSQL", "REST"],
    color: "blue"
  }
];

export const skills = [
  "C#", ".NET", "ASP.NET Core", "TypeScript", "React", "Next.js",
  "SQL Server", "PostgreSQL", "Git", "Docker", "REST APIs"
];

export const chapters = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "journey", label: "JOURNEY" },
  { id: "contact", label: "CONTACT" }
] as const;

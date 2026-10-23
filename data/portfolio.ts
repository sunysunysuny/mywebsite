// All site content lives here. Replace every "[TODO ...]" before publishing.

export const profile = {
  name: "Himanshu Sharma",
  shortName: "Himanshu",
  title: "Senior Fullstack Developer",
  tagline:
    "Passionate Senior Fullstack Developer with 9+ years of experience building scalable web applications and backend systems.",
  roles: ["Laravel", "FastAPI", "Next.js", "PHP", "Python"],
  availability: "Open to senior / lead roles & freelance",
  location: "Gurugram, India",
  email: "[TODO: your-email@example.com]",
  linkedin: "https://www.linkedin.com/in/[TODO]",
  github: "https://github.com/[TODO]",
  resume: "/resume.pdf",
  photo: "", // e.g. "/himanshu.jpg" — leave empty to show initials
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 9, suffix: "+", label: "Years experience" },
  { value: 4, suffix: "", label: "Companies" },
  { value: 5, suffix: "+", label: "Production products" },
  { value: 2, suffix: "", label: "Apps live on Play Store" },
];

export const about = [
  "Passionate Senior Fullstack Developer with 9+ years of experience in developing web applications and backend systems. Skilled at writing clear, concise code that is easy to maintain and troubleshoot.",
  "Experienced in working with both small and large teams across multiple projects — including 3+ years remote for a German company. Able to work independently in remote or in-office environments as the company needs.",
];

export const highlights = [
  "Fintech & payments: Razorpay, PhonePe, BBPS bill payments, rewards",
  "Owned products end-to-end: API design → database → frontend → deployment",
  "Security-first APIs: JWT/Sanctum auth, SQL injection, CSRF & XSS prevention",
];

export const principles = [
  { icon: "Layers", title: "Scalable architecture", text: "Layered services, clean schemas and indexing that hold up as data and traffic grow." },
  { icon: "ShieldCheck", title: "Secure APIs", text: "Industry-standard auth (JWT, Sanctum, OAuth) and protection against SQLi, CSRF and XSS." },
  { icon: "Gauge", title: "Performance", text: "Query tuning, Redis caching and Lighthouse-driven frontend optimization." },
  { icon: "Workflow", title: "Automation", text: "Schedulers and jobs that replace manual uploads, cut errors and save manpower." },
  { icon: "Code2", title: "Maintainable code", text: "Modular, reusable code that's easy to read, test and troubleshoot." },
  { icon: "Users", title: "Team delivery", text: "Agile delivery with small and large teams, in-office and remote, with Git-based CI/CD." },
];

export const skills: Record<string, { name: string; level: "Expert" | "Proficient" | "Familiar" }[]> = {
  Backend: [
    { name: "Laravel", level: "Expert" }, { name: "PHP", level: "Expert" }, { name: "FastAPI", level: "Expert" },
    { name: "Python", level: "Proficient" }, { name: "SQL", level: "Expert" }, { name: "MySQL", level: "Expert" },
    { name: "PostgreSQL", level: "Proficient" },
  ],
  Frontend: [
    { name: "Next.js", level: "Proficient" }, { name: "Angular", level: "Proficient" }, { name: "JavaScript", level: "Expert" },
    { name: "jQuery", level: "Expert" }, { name: "Ajax", level: "Expert" }, { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" }, { name: "Tailwind", level: "Expert" }, { name: "Flowbite", level: "Proficient" },
    { name: "Bootstrap", level: "Expert" },
  ],
  "APIs & Integrations": [
    { name: "Razorpay", level: "Expert" }, { name: "PhonePe", level: "Expert" }, { name: "Bill Avenue (BBPS)", level: "Proficient" },
    { name: "Signal", level: "Familiar" }, { name: "Redis", level: "Proficient" }, { name: "Google Maps", level: "Proficient" },
    { name: "Google Auth", level: "Proficient" }, { name: "Algolia", level: "Proficient" },
  ],
  Tools: [
    { name: "Git & CI/CD", level: "Expert" }, { name: "Google App Engine", level: "Proficient" }, { name: "Firebase", level: "Proficient" },
    { name: "VS Code", level: "Expert" }, { name: "Lighthouse", level: "Proficient" }, { name: "Postman", level: "Expert" },
    { name: "Schema Design", level: "Expert" }, { name: "Agile & Analytics", level: "Proficient" },
  ],
};
// [TODO] Adjust skill levels above to match your own assessment.

export const experience = [
  {
    role: "Senior FullStack Developer",
    company: "BankSathi",
    place: "Gurugram",
    dates: "Aug 2023 – Present",
    stack: ["FastAPI", "Laravel", "Next.js", "Tailwind"],
    points: [
      "Built and maintain BankSathi's core products — ScoreUp API, BankSathi App API, CRM, Ledger and Lead — for high performance and scalability.",
      "Removed manual payout uploads by automating payouts with schedulers, reducing errors and saving manpower.",
      "Automated processing of FII-provided Excel files to update lead status, cutting manual effort and errors.",
      "Integrated third-party financial services and FII APIs for seamless data exchange.",
      "Secured APIs against SQL injection, CSRF and XSS, optimized response times, and run deployments via Git CI/CD.",
    ],
  },
  {
    role: "Senior FullStack Developer",
    company: "Praktika",
    place: "Germany (Remote)",
    dates: "Jan 2020 – Jul 2023",
    stack: ["Angular", "Laravel", "Tailwind", "App Engine"],
    points: [
      "Designed a fast, responsive, SEO-friendly job platform using Angular, Laravel and Tailwind CSS.",
      "Added Google and Microsoft sign-in for seamless, secure employer login.",
      "Improved search experience by implementing Algolia search.",
      "Cached frequently accessed data and query results in Redis.",
      "Deployed on Google App Engine for high availability and scalability, with Git-based CI/CD.",
    ],
  },
  {
    role: "FullStack Developer",
    company: "Kanhasoft",
    place: "Ahmedabad",
    dates: "Sep 2018 – Dec 2019",
    stack: ["AngularJS", "PHP", "APIs"],
    points: [
      "Built and customized FullCalendar features (views, event rendering, event manipulation) in AngularJS.",
      "Integrated payment gateway, social media and geolocation APIs to enhance user experience.",
      "Wrote clean, modular, reusable code that reduced technical debt.",
    ],
  },
  {
    role: "Software Developer",
    company: "Velocis Systems Pvt.",
    place: "Jaipur",
    dates: "Oct 2016 – Jun 2018",
    stack: ["SQL", "Schema Design"],
    points: [
      "Wrote efficient JOINs, subqueries and advanced SQL for complex business logic.",
      "Designed database schemas, tables and relationships for scalable applications.",
      "Applied normalization and indexing strategies to speed up data retrieval and reduce redundancy.",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link: string;
  linkLabel: string;
  points: string[];
  problem: string;
  role: string;
  architecture: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    title: "ScoreUp App",
    summary: "Financial awareness platform to check credit score, understand credit health and get actionable recommendations.",
    tags: ["FastAPI", "MySQL", "Razorpay", "PhonePe", "BBPS"],
    link: "https://play.google.com/store/apps/details?id=club.app.scoreup",
    linkLabel: "Play Store",
    points: [
      "Built the backend from scratch with FastAPI and MySQL.",
      "Integrated Razorpay & PhonePe payments, Razorpay Rewards and BBPS bill payments.",
      "Layered architecture (routes, services, repositories, middleware).",
    ],
    problem: "Users needed a simple way to check their credit score, understand it, and act on it — plus pay bills and earn rewards in one app.",
    role: "Built the ScoreUp backend from scratch: REST APIs for onboarding, credit score retrieval, payments and notifications.",
    architecture: ["Mobile app", "FastAPI (routes → services → repositories)", "MySQL", "Razorpay / PhonePe / BBPS"],
    impact: "[TODO: e.g. users onboarded, transactions processed, API response time]",
  },
  {
    title: "BankSathi App",
    summary: "API powering the BankSathi mobile app for financial product distribution.",
    tags: ["Laravel", "JWT", "Sanctum", "Redis"],
    link: "https://play.google.com/store/apps/details?id=com.app.banksathi",
    linkLabel: "Play Store",
    points: [
      "Designed, built and maintain the Laravel API.",
      "Secure authentication with JWT and Laravel Sanctum.",
      "Redis/Memcached caching and query optimization.",
    ],
    problem: "A growing mobile user base needed a fast, secure and reliable API.",
    role: "Designed, developed and maintain the API; monitor health, logs and errors.",
    architecture: ["Mobile app", "Laravel API (JWT / Sanctum)", "Redis / Memcached", "MySQL"],
    impact: "[TODO: e.g. active users, requests/day, latency improvement]",
  },
  {
    title: "BankSathi CRM",
    summary: "Internal CRM for managing leads and operations at scale.",
    tags: ["Laravel", "DataTables", "Scheduler"],
    link: "https://crm.banksathi.com/",
    linkLabel: "Visit site",
    points: [
      "Efficient data management with DataTables.",
      "Automated tasks with Laravel Scheduler and Jobs.",
      "Automated email notifications.",
    ],
    problem: "Operations teams were spending time on manual, repetitive data work.",
    role: "Developed and maintain the CRM, including automation of scheduled tasks and notifications.",
    architecture: ["Ops team", "Laravel + DataTables", "Scheduler / Queue jobs", "Email"],
    impact: "[TODO: e.g. hours saved per week, records managed]",
  },
  {
    title: "BankSathi Ledger",
    summary: "Ledger system for tracking financial records with exports.",
    tags: ["Laravel", "Next.js", "Excel/PDF"],
    link: "https://ledger.banksathi.com/",
    linkLabel: "Visit site",
    points: [
      "Laravel backend with a Next.js frontend.",
      "Dynamic forms with server-side validation.",
      "Excel and PDF export.",
    ],
    problem: "Finance needed accurate ledger data with easy exports.",
    role: "Developed and maintain the Ledger across backend and frontend.",
    architecture: ["Next.js UI", "Laravel API + validation", "MySQL", "Excel / PDF export"],
    impact: "[TODO: e.g. entries processed, reporting time saved]",
  },
  {
    title: "Praktika",
    summary: "Job platform for the education sector where employers create and manage job listings.",
    tags: ["Angular", "Laravel", "App Engine", "Algolia"],
    link: "https://www.praktika.de/",
    linkLabel: "Visit site",
    points: [
      "Google & Microsoft sign-in for employers.",
      "Algolia-powered search.",
      "Deployed on Google App Engine.",
    ],
    problem: "Employers needed an easy, fast way to post and manage jobs, and candidates needed great search.",
    role: "Developed and maintained the platform remotely for a German company for 3.5 years.",
    architecture: ["Angular SPA", "Laravel API", "Redis + Algolia", "Google App Engine"],
    impact: "[TODO: e.g. listings, monthly visitors, search speed]",
  },
];

export const testimonials = [
  { quote: "[TODO: real quote from a manager or colleague]", name: "[TODO: Name]", role: "[TODO: Role, Company]" },
  { quote: "[TODO: real quote from a client or teammate]", name: "[TODO: Name]", role: "[TODO: Role, Company]" },
];

export const education = {
  degree: "Bachelor of Technology — Electronics & Communication",
  school: "Rajasthan Technical University, Kota",
};

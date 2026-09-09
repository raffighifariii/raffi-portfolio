// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING IN THIS FILE — it holds all your content.
//  Swap names, links, projects, and skills with your real data.
// ─────────────────────────────────────────────────────────────

// Your name + the links used in the sidebar and contact section.
export const PROFILE = {
  name: "Raffi Ghifari",
  email: "you@email.com", // EDIT
  github: "https://github.com/your-username", // EDIT
  linkedin: "https://linkedin.com/in/your-username", // EDIT
};

// Text that changes with the EN / ID toggle.
export const T = {
  en: {
    status: "Open to work",
    nav: {
      about: "About",
      work: "Work",
      capabilities: "Capabilities",
      experience: "Experience",
      contact: "Contact",
    },
    role: "Software Developer",
    intro:
      "I build clean, end-to-end web products with React and Laravel — from database to pixel.",
    heroCtaWork: "Explore Selected Work",
    heroCtaResume: "Resume / CV",
    location: "Malang, Indonesia",
    aboutSection: "01 / ABOUT",
    aboutTitle: "About",
    aboutLead:
      "I build functional, end-to-end web software with an emphasis on clean code, dependable architecture, and thoughtful interfaces.",
    about: [
      "I'm a recent Computer Science graduate from Universitas Brawijaya. I like shipping things that actually work — most recently a full-stack research platform built with Laravel, React and Inertia.",
      "I care about clean code, thoughtful interfaces, and learning fast. Off the keyboard you'll find me mixing hip-hop & trap and chasing frames in Valorant.",
    ],
    educationTitle: "Education",
    educationSchool: "Universitas Brawijaya",
    educationDegree: "Computer Science graduate",
    workSection: "02 / SELECTED WORK",
    workTitle: "Selected work",
    viewProject: "View Project",
    capabilitiesSection: "03 / CAPABILITIES",
    capabilitiesTitle: "Capabilities",
    experienceSection: "04 / EXPERIENCE",
    experienceTitle: "Experience",
    contactSection: "05 / CONTACT",
    contactHeading: "Have something worth building?",
    contactCta: "Let's talk",
    contactTitle: "Let's build something",
    contactBody:
      "I'm open to junior / entry developer roles and freelance work. The fastest way to reach me is email.",
    email: "Email me",
  },
  id: {
    status: "Terbuka untuk kerja",
    nav: {
      about: "Tentang",
      work: "Karya",
      capabilities: "Kemampuan",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    role: "Software Developer",
    intro:
      "Aku bikin produk web yang rapi dan menyeluruh pakai React dan Laravel — dari database sampai tampilan.",
    heroCtaWork: "Lihat Karya Pilihan",
    heroCtaResume: "Resume / CV",
    location: "Malang, Indonesia",
    aboutSection: "01 / TENTANG",
    aboutTitle: "Tentang",
    aboutLead:
      "Aku membangun perangkat lunak web yang fungsional dan menyeluruh dengan penekanan pada kode bersih, arsitektur andal, dan antarmuka yang dipikirkan matang.",
    about: [
      "Aku fresh graduate Ilmu Komputer dari Universitas Brawijaya. Aku suka bikin hal yang beneran jalan — terakhir sebuah platform riset full-stack dengan Laravel, React, dan Inertia.",
      "Aku peduli sama kode bersih, antarmuka yang dipikirin matang, dan belajar cepat. Di luar ngoding, aku nge-mix hip-hop & trap dan main Valorant.",
    ],
    educationTitle: "Pendidikan",
    educationSchool: "Universitas Brawijaya",
    educationDegree: "Lulusan Ilmu Komputer",
    workSection: "02 / KARYA PILIHAN",
    workTitle: "Karya pilihan",
    viewProject: "Lihat Proyek",
    capabilitiesSection: "03 / KEMAMPUAN",
    capabilitiesTitle: "Kemampuan",
    experienceSection: "04 / PENGALAMAN",
    experienceTitle: "Pengalaman",
    contactSection: "05 / KONTAK",
    contactHeading: "Ada proyek yang ingin dibangun?",
    contactCta: "Yuk ngobrol",
    contactTitle: "Yuk bikin sesuatu",
    contactBody:
      "Aku terbuka untuk posisi developer junior/entry dan kerja freelance. Cara tercepat menghubungi aku lewat email.",
    email: "Email aku",
  },
};

// Real projects only.
export const PROJECTS = [
  {
    index: "01",
    year: "2025",
    title: "CAMP-BIOTICS Research Center",
    tag: "Full-stack · Thesis",
    link: "#", // EDIT
    stageType: "desktop",
    en: "A research platform for LP2M Universitas Negeri Padang — journal & article management, news, and an admin dashboard, built end to end.",
    id: "Platform riset untuk LP2M Universitas Negeri Padang — manajemen jurnal & artikel, berita, dan dashboard admin, dibangun dari nol sampai jadi.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind", "SQLite"],
  },
  {
    index: "02",
    year: "2024",
    title: "bymis.id Fashion Catalog",
    tag: "Mobile · Client project",
    link: "#", // EDIT
    stageType: "mobile",
    en: "A product catalog app for a fashion brand, delivered as a complete ready-to-use build with visual assets and project files.",
    id: "Aplikasi katalog produk untuk brand fashion, dikirim sebagai build lengkap siap pakai beserta aset visual dan file project.",
    stack: ["MIT App Inventor 2", "UI Design"],
  },
];

// Professional Experience timeline.
export const EXPERIENCES = [
  {
    year: "2025",
    role: { en: "Software Development Intern", id: "Software Development Intern" },
    organization: "Diskominfo Kota Batu",
    en: "Contributed to internal web development and software systems support during internship.",
    id: "Berkontribusi dalam pengembangan aplikasi web dan sistem perangkat lunak selama magang.",
    tech: ["Laravel", "Web Systems"],
  },
];

// Editorial Capabilities groups.
export const CAPABILITIES = [
  {
    index: "01",
    en: "Frontend",
    id: "Frontend",
    items: ["React", "Inertia.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    index: "02",
    en: "Backend & Data",
    id: "Backend & Data",
    items: ["Laravel", "PHP", "REST APIs", "SQLite", "MySQL"],
  },
  {
    index: "03",
    en: "Mobile",
    id: "Mobile",
    items: ["MIT App Inventor 2", "UI Design", "Responsive Layouts"],
  },
  {
    index: "04",
    en: "Tools & Workflow",
    id: "Tools & Workflow",
    items: ["Git & GitHub", "Vite", "Figma"],
  },
];

// Preserved for backwards compatibility during migration.
export const LOGOS = [
  { key: "react", brand: "#61DAFB" },
  { key: "laravel", brand: "#FF2D20" },
  { key: "vite", brand: "#646CFF" },
  { key: "tailwindcss", brand: "#06B6D4" },
  { key: "typescript", brand: "#3178C6" },
  { key: "javascript", brand: "#F7DF1E" },
  { key: "php", brand: "#777BB4" },
  { key: "git", brand: "#F05032" },
  { key: "mysql", brand: "#4479A1" },
  { key: "figma", brand: "#F24E1E" },
];

export const SKILLS = [
  { en: "Languages", id: "Bahasa", items: ["JavaScript", "TypeScript", "PHP", "SQL"] },
  { en: "Frontend", id: "Frontend", items: ["React", "Inertia.js", "Tailwind"] },
  { en: "Backend & Data", id: "Backend & Data", items: ["Laravel", "REST APIs", "SQLite", "MySQL"] },
  { en: "Tools & Workflow", id: "Tools & Workflow", items: ["Git & GitHub", "Vite", "Figma"] },
];

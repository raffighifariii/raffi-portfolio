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
    nav: { about: "About", work: "Work", skills: "Skills", contact: "Contact" },
    role: "Software Developer",
    intro:
      "I build clean, end-to-end web products with React and Laravel — from database to pixel.",
    aboutTitle: "About",
    about: [
      "I'm a recent Computer Science graduate from Universitas Brawijaya. I like shipping things that actually work — most recently a full-stack research platform built with Laravel, React and Inertia.",
      "I care about clean code, thoughtful interfaces, and learning fast. Off the keyboard you'll find me mixing hip-hop & trap and chasing frames in Valorant.",
    ],
    workTitle: "Selected work",
    skillsTitle: "Skills & tools",
    contactTitle: "Let's build something",
    contactBody:
      "I'm open to junior / entry developer roles and freelance work. The fastest way to reach me is email.",
    email: "Email me",
  },
  id: {
    status: "Terbuka untuk kerja",
    nav: { about: "Tentang", work: "Karya", skills: "Skill", contact: "Kontak" },
    role: "Software Developer",
    intro:
      "Aku bikin produk web yang rapi dan menyeluruh pakai React dan Laravel — dari database sampai tampilan.",
    aboutTitle: "Tentang",
    about: [
      "Aku fresh graduate Ilmu Komputer dari Universitas Brawijaya. Aku suka bikin hal yang beneran jalan — terakhir sebuah platform riset full-stack dengan Laravel, React, dan Inertia.",
      "Aku peduli sama kode bersih, antarmuka yang dipikirin matang, dan belajar cepat. Di luar ngoding, aku nge-mix hip-hop & trap dan main Valorant.",
    ],
    workTitle: "Karya pilihan",
    skillsTitle: "Skill & tools",
    contactTitle: "Yuk bikin sesuatu",
    contactBody:
      "Aku terbuka untuk posisi developer junior/entry dan kerja freelance. Cara tercepat menghubungi aku lewat email.",
    email: "Email aku",
  },
};

// Your projects. `link` is the page opened on click (live site or repo).
// `grad` is the color of the floating hover preview.
export const PROJECTS = [
  {
    year: "2025",
    title: "CAMP-BIOTICS Research Center",
    tag: "Full-stack · Thesis",
    link: "#", // EDIT
    grad: "linear-gradient(135deg, #151F27, #233946)",
    en: "A research platform for LP2M Universitas Negeri Padang — journal & article management, news, and an admin dashboard, built end to end.",
    id: "Platform riset untuk LP2M Universitas Negeri Padang — manajemen jurnal & artikel, berita, dan dashboard admin, dibangun dari nol sampai jadi.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind", "SQLite"],
  },
  {
    year: "2024",
    title: "bymis.id Fashion Catalog",
    tag: "Mobile · Client project",
    link: "#", // EDIT
    grad: "linear-gradient(135deg, #101820, #354E5E)",
    en: "A product catalog app for a fashion brand, delivered as a complete ready-to-use build with visual assets and project files.",
    id: "Aplikasi katalog produk untuk brand fashion, dikirim sebagai build lengkap siap pakai beserta aset visual dan file project.",
    stack: ["MIT App Inventor 2", "UI Design"],
  },
  {
    year: "—",
    title: "Your next project",
    tag: "Add one more",
    link: "#",
    grad: "linear-gradient(135deg, #151F27, #2A3C47)",
    en: "Pick something that shows a different muscle — an API, a tool, a game. One tight sentence.",
    id: "Pilih sesuatu yang nunjukin sisi lain — API, tools, atau game. Satu kalimat padat aja.",
    stack: ["Tech", "Stack", "Tags"],
  },
];

// Logos shown in the Skills section (grayscale → brand color on hover).
// `key` must match a react-icons/si export (see components/Skills.jsx map).
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

// Skill groups (text lists under the logos).
export const SKILLS = [
  { en: "Languages", id: "Bahasa", items: ["JavaScript", "TypeScript", "PHP", "SQL"] },
  { en: "Frontend", id: "Frontend", items: ["React", "Inertia.js", "Tailwind"] },
  { en: "Backend & Data", id: "Backend & Data", items: ["Laravel", "REST APIs", "SQLite", "MySQL"] },
  { en: "Tools", id: "Tools", items: ["Git & GitHub", "Vite", "Figma"] },
];

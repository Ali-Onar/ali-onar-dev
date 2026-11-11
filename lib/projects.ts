export type Status = "live" | "production" | "client";

export type Project = {
  key: string;
  title: string;
  status: Status;
  stack: string[];
  url?: string;
  image?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    key: "amperofis",
    title: "AmperOfis",
    status: "client",
    stack: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Railway", "Cloudflare"],
    url: "https://amperofis.com/",
    image: "/images/projects/amperofis.jpg",
    accent: "from-yellow-500/25 to-slate-500/10",
  },
  {
    key: "ecoban",
    title: "Ecoban",
    status: "client",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "i18n", "Railway", "Cloudflare"],
    url: "https://ecoban.com.tr/",
    image: "/images/projects/ecoban.jpg",
    accent: "from-green-500/25 to-sky-500/10",
  },
  {
    key: "tvtenerji",
    title: "TVT Isıtma Soğutma",
    status: "client",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS", "SEO", "Railway", "Cloudflare"],
    url: "https://tvtenerji.com/",
    image: "/images/projects/tvtenerji.jpg",
    accent: "from-red-500/25 to-blue-500/10",
  },
  {
    key: "toptantursu",
    title: "Toptan Turşu",
    status: "client",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Railway", "Cloudflare"],
    url: "https://toptantursu.com/",
    image: "/images/projects/toptantursu.jpg",
    accent: "from-green-500/25 to-lime-500/10",
  },
  {
    key: "adilanaliz",
    title: "AdilAnaliz",
    status: "client",
    stack: ["Next.js", "TypeScript", "RAG", "iyzico", "Hetzner"],
    url: "https://adilanaliz.com/",
    image: "/images/projects/adilanaliz.jpg",
    accent: "from-slate-500/25 to-zinc-500/10",
  },
  {
    key: "aktek",
    title: "Aktek Elektromekanik",
    status: "client",
    stack: ["Next.js", "TypeScript", "SEO", "TailwindCSS", "Telegram", "Railway"],
    url: "https://aktekelektromekanik.com/",
    image: "/images/projects/aktek-elektromekanik.jpg",
    accent: "from-cyan-500/25 to-blue-500/10",
  },
  {
    key: "rumimetric",
    title: "RumiMetric",
    status: "client",
    stack: ["Next.js", "Supabase", "TailwindCSS", "TypeScript", "Railway"],
    url: "https://rumimetric.com/",
    image: "/images/projects/rumimetric.jpg",
    accent: "from-lime-500/25 to-green-500/10",
  },
  {
    key: "tekliftamam",
    title: "TeklifTamam",
    status: "client",
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "Railway"],
    url: "https://tekliftamam.com/",
    image: "/images/projects/tekliftamam.jpg",
    accent: "from-amber-500/25 to-yellow-500/10",
  },
  {
    key: "tigaa",
    title: "Tigaa",
    status: "client",
    stack: ["Next.js", "Supabase", "TypeScript", "OpenAI", "Cloudflare"],
    url: "https://tigaa.com.tr/",
    image: "/images/projects/tigaa.jpg",
    accent: "from-orange-500/25 to-amber-500/10",
  },
  {
    key: "meritrisk",
    title: "Merit Risk Platform Rewrite",
    status: "live",
    stack: ["Next.js", "Express", "PostgreSQL", "TypeScript", "AWS"],
    url: "https://meritrisk.com.tr/",
    image: "/images/projects/meritrisk.jpg",
    accent: "from-blue-500/25 to-indigo-500/10",
  },
  {
    key: "kolaytadilat",
    title: "KolayTadilat",
    status: "client",
    stack: ["Vite", "React", "TanStack", "Express", "Supabase", "Param"],
    url: "https://kolaytadilat.com/",
    image: "/images/projects/kolaytadilat.jpg",
    accent: "from-emerald-500/25 to-teal-500/10",
  },
  {
    key: "ireturnticket",
    title: "IReturnTicket",
    status: "client",
    stack: ["Next.js", "Supabase", "Lemon Squeezy", "Resend", "Railway"],
    url: "https://ireturnticket.com/",
    image: "/images/projects/ireturnticket.jpg",
    accent: "from-violet-500/25 to-purple-500/10",
  },
  {
    key: "sonic8",
    title: "Sonic8",
    status: "live",
    stack: [
      "Next.js",
      "Supabase",
      "Clerk",
      "Lemon Squeezy",
      "Edge Functions",
      "Vercel",
    ],
    url: "https://sonic8.io/",
    image: "/images/projects/sonic8.jpg",
    accent: "from-sky-500/25 to-cyan-500/10",
  },
  {
    key: "oneclickgenerator",
    title: "OneClickGenerator",
    status: "client",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Railway"],
    url: "https://oneclickgenerator.io/",
    image: "/images/projects/oneclickgenerator.jpg",
    accent: "from-rose-500/25 to-pink-500/10",
  },
  {
    key: "denersen",
    title: "Denersen",
    status: "live",
    stack: ["Next.js", "TailwindCSS", "Supabase", "Lemon Squeezy", "Railway"],
    url: "https://denersen.com/",
    image: "/images/projects/denersen.jpg",
    accent: "from-fuchsia-500/25 to-purple-500/10",
  },
  {
    key: "loadmuscle",
    title: "LoadMuscle Web & Mobile",
    status: "live",
    stack: ["React Native", "Expo", "Next.js", "Supabase", "Vercel"],
    url: "https://www.loadmuscle.com/",
    image: "/images/projects/loadmuscle-web.jpg",
    accent: "from-yellow-500/25 to-orange-500/10",
  },
];

export const getProject = (key: string) => projects.find((p) => p.key === key);

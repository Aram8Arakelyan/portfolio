// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for your personal content.
// Edit the values below — every page reads from here.
// ─────────────────────────────────────────────────────────────────────────────

export type SocialLink = { label: string; href: string }
export type NavItem = { label: string; href: string }

export type Project = {
  title: string
  description: string
  tech: string[]
  /** Live URL (optional). */
  href?: string
  /** Source repository (optional). */
  repo?: string
  /** Surface this project on the home page. */
  featured?: boolean
}

export type ExperienceItem = {
  role: string
  company: string
  /** e.g. "Aug 2024 — Present" */
  period: string
  description: string
  /** Key technologies used in the role. */
  tech?: string[]
}

export type EducationItem = {
  school: string
  degree: string
  period: string
}

// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is the stable production domain
// (or your custom domain once configured); falls back to localhost in dev.
const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const site = {
  name: 'Aram Arakelyan',
  /** Short role/tagline shown under your name. */
  role: 'Frontend Team Lead at CoinStats',
  /** Canonical URL — Vercel's stable production domain (auto-updates if you add a custom domain). */
  url: productionUrl,
  location: 'Yerevan, Armenia',
  /** Used as the default meta description. */
  description:
    'Frontend Team Lead at CoinStats with 5+ years building high-performance, user-centric web apps in React, Next.js, and Web3. I write about engineering, performance, and the web.',
  /** One line on what you’re focused on right now (shown on the home page). */
  now: 'Leading frontend at CoinStats — modernizing our React/Next.js architecture, pushing Core Web Vitals and SEO, and shipping Web3 wallet experiences.',
  email: 'aram.arakelyan148@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Aram8Arakelyan' },
    { label: 'GitHub (work)', href: 'https://github.com/aramarakelyan88' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aram-arakelyan-665a3b1a1/' },
    { label: 'X', href: 'https://x.com/aramarakelyan88' },
    { label: 'Telegram', href: 'https://t.me/reactnexthub' },
  ] satisfies SocialLink[],
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],
}

/** A Telegram channel you run — featured on the home page. */
export const channel = {
  name: 'React Next Hub',
  url: 'https://t.me/reactnexthub',
  description:
    'Daily news on React, Next.js, web development, and AI in development. Join the community and keep your edge sharp.',
}

/** A short bio for the About page (kept as paragraphs). */
export const bio: string[] = [
  'I’m a Frontend Team Lead at CoinStats with 5+ years of experience building high-performance, user-centric web applications. I specialize in React, Next.js, and Web3, and I care a lot about architecture, performance (Core Web Vitals), and SEO.',
  'At CoinStats I’ve led upgrades to our React and Next.js stack, built the frontend for our AI assistant, integrated Web3 wallets like MetaMask and WalletConnect, and driven major performance and SEO improvements. Before CoinStats I led full-stack teams delivering Laravel and Vue.js platforms — including map-based services for government postal franchises (SaudiPost, DubaiPost).',
  'Outside of work I run the React Next Hub Telegram channel and write here about engineering, performance, and the web.',
]

export const skills: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Web3 / dApps',
  'Vue.js',
  'Core Web Vitals',
  'SEO',
  'Performance',
  'CSS / CSS Modules',
  'i18n',
  'Git',
]

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Team Lead',
    company: 'CoinStats',
    period: 'Aug 2024 — Present',
    description:
      'Lead frontend architecture and performance. Upgraded the React/Next.js stack from a legacy server.js setup to modern configs, built the frontend for CoinStats’ AI assistant (ai.coinstats.app), migrated global styles to CSS Modules, and launched a Telegram bot with web-app support. Drove Core Web Vitals (LCP/CLS/FID) and SEO gains, resolved Ethereum wallet conflicts via EIP-6963, and own observability with Datadog and Sentry while mentoring the team.',
    tech: ['Next.js', 'React', 'EIP-6963', 'i18n', 'Core Web Vitals', 'SEO', 'Datadog', 'Sentry'],
  },
  {
    role: 'Frontend Developer',
    company: 'CoinStats',
    period: 'Mar 2022 — Aug 2024',
    description:
      'Built and optimized the crypto portfolio tracker and DeFi dApp. Integrated a wide range of wallets (MetaMask, WalletConnect, Trust Wallet, OKX, Exodus, and more), created interactive analytics charts, migrated class components to hooks, and improved SEO with code-splitting, lazy loading, and bundle analysis.',
    tech: ['React', 'Next.js', 'dApp', 'WalletConnect', 'Chart.js', 'React Hooks'],
  },
  {
    role: 'Development Team Lead',
    company: 'Evistep',
    period: 'Aug 2021 — Mar 2022',
    description:
      'Led and mentored a team of developers and interns, ran code reviews, defined technical roadmaps and architecture, and delivered full-stack solutions on time.',
    tech: ['Laravel', 'Vue.js'],
  },
  {
    role: 'Full Stack Developer → Project Lead',
    company: 'Geoking (SaudiPost / DubaiPost / OMD)',
    period: 'Sep 2020 — Feb 2022',
    description:
      'Built and later led GeoKing, a location and reputation-management platform for postal franchises. Integrated Google Maps, My Business, and social APIs (Twitter, Facebook, Instagram, Graph), managed a team, and acted as the primary point of contact for clients.',
    tech: ['Vue.js', 'Laravel', 'Google Maps API', 'REST APIs'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Evistep',
    period: 'Sep 2020 — Aug 2021',
    description:
      'Delivered client web apps end-to-end with Laravel and Vue.js — e-commerce platforms, landing pages, and custom admin tools — working directly with international clients from planning to deployment.',
    tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'SCSS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'AXSoft LLC',
    period: 'Jun 2020 — Sep 2020',
    description:
      'Built full-cycle web projects from scratch — e-commerce shops, marketing landing pages, and dynamic content platforms — with a focus on custom animations, responsive design, and cross-browser compatibility.',
    tech: ['Laravel', 'WordPress', 'jQuery', 'Bootstrap', 'MySQL'],
  },
]

export const education: EducationItem[] = [
  {
    school: 'Yerevan State University',
    degree: 'BSc, Informatics and Applied Mathematics',
    period: '2018 — 2022',
  },
]

export const languages: string[] = [
  'Armenian (native)',
  'English (professional)',
  'Russian (professional)',
]

export const certifications: string[] = [
  'Claude Code 101',
  'Claude Code in Action',
  'Claude Platform 101',
  'Introduction to Claude Cowork',
  'Claude 101',
]

export const projects: Project[] = [
  {
    title: 'Wallet Wrapped',
    description:
      'Spotify Wrapped for any crypto wallet — an animated on-chain portfolio story with a scam-airdrop filter. A zero-dependency static site built on the CoinStats wallet/DeFi API.',
    tech: ['JavaScript', 'Web3', 'CoinStats API'],
    repo: 'https://github.com/Aram8Arakelyan/wallet-wrapped',
    featured: true,
  },
  {
    title: 'Daily Habit Tracker',
    description: 'A simple, focused tracker for building and keeping daily habits.',
    tech: ['TypeScript'],
    repo: 'https://github.com/Aram8Arakelyan/daily-habit-tracker',
    featured: true,
  },
  {
    title: 'Crypto Mood Ring',
    description: 'A small experiment that turns crypto market sentiment into a live visual mood.',
    tech: ['JavaScript'],
    repo: 'https://github.com/Aram8Arakelyan/crypto-mood-ring',
  },
]

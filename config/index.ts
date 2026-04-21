export type ProjectCategory = 'Project' | 'Spotlight' | 'Reading' | 'DopenS';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  image: string | null;
  summary: string;
  year: string;
  role: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: 'dojah-identity',
    title: 'Dojah Identity Verification',
    category: 'Spotlight',
    tags: ['Product Design', 'Design System'],
    image: null,
    summary: 'End-to-end redesign of the identity verification flow for a YC-backed fintech.',
    year: '2023',
    role: 'Product Designer & Frontend Engineer',
    description: 'Redesigned the entire onboarding and identity verification experience for Dojah. Reduced drop-off by 38% through progressive disclosure patterns and a fully componentised design system. Shipped in production within three weeks — design and code.',
    link: 'https://dojah.io',
  },
  {
    slug: 'souk-marketplace',
    title: 'Souk Marketplace',
    category: 'Spotlight',
    tags: ['UX Design', 'Branding'],
    image: null,
    summary: 'Brand identity and marketplace UI for an Antler-backed commerce platform.',
    year: '2023',
    role: 'Design Lead',
    description: 'Built the brand identity from scratch and designed the full buyer and seller experience. Delivered a cohesive design language that scaled from marketing pages to complex product listing flows.',
  },
  {
    slug: 'voyance-dashboard',
    title: 'Voyance Analytics Dashboard',
    category: 'Project',
    tags: ['Dashboard', 'Data Visualisation'],
    image: null,
    summary: 'Analytics dashboard for a Techstars-backed logistics intelligence company.',
    year: '2024',
    role: 'Product Designer',
    description: 'Designed a real-time analytics dashboard helping logistics managers monitor fleet performance. Focused on information hierarchy and at-a-glance decision making across complex data sets.',
    link: 'https://voyance.io',
  },
  {
    slug: 'peak-design-system',
    title: 'Peak Design System',
    category: 'Project',
    tags: ['Design Systems', 'Figma'],
    image: null,
    summary: 'Company-wide design system serving 12+ product teams at Peak.',
    year: '2022',
    role: 'Design Systems Engineer',
    description: 'Architected and maintained a multi-brand token system in Figma with React component library. Reduced design-to-dev handoff time by 60% and brought visual consistency across all product surfaces.',
  },
  {
    slug: 'weather-channel-ibm',
    title: 'IBM Weather Channel UX',
    category: 'Spotlight',
    tags: ['UX Research', 'Mobile'],
    image: null,
    summary: 'UX improvements to weather alert flows for the IBM Weather Channel mobile app.',
    year: '2022',
    role: 'UX Designer',
    description: 'Conducted user research and redesigned critical alert notification flows. Improvements led to a measurable increase in user engagement with severe weather warnings.',
  },
  {
    slug: 'luki-studio-site',
    title: 'Luki Studio — This Site',
    category: 'DopenS',
    tags: ['Next.js', 'Open Source'],
    image: null,
    summary: 'Personal portfolio built with Next.js 15, Tailwind CSS, and AI-assisted workflows.',
    year: '2025',
    role: 'Designer & Engineer',
    description: 'Designed and built this portfolio end-to-end. Uses next-themes for dark/light mode, framer-motion for transitions, and an AI-assisted content workflow. Source available on GitHub.',
    link: 'https://github.com/lawmaluki',
  },
  {
    slug: 'design-reading-list',
    title: 'Design Reading List',
    category: 'Reading',
    tags: ['Resources', 'Design Theory'],
    image: null,
    summary: 'A curated list of books, articles, and talks that shaped my design thinking.',
    year: '2024',
    role: 'Curator',
    description: 'A living document of resources I return to regularly — covering systems thinking, typography, product strategy, and the intersection of design and engineering. Updated quarterly.',
  },
  {
    slug: 'ai-product-workflow',
    title: 'AI-Powered Product Workflow',
    category: 'Reading',
    tags: ['AI', 'Process'],
    image: null,
    summary: 'How I use AI agents to go from brief to production in days, not weeks.',
    year: '2024',
    role: 'Author',
    description: 'A deep dive into the workflow I have developed using AI coding assistants, prompt engineering, and design automation tools. Covers the full loop from Figma to deployed product.',
  },
];

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Lawrence brings clarity to complexity in a way that feels effortless. He approaches every problem with intention, ensuring that each decision serves both the user and the product. Beyond design, he consistently follows through to execution, shipping work that meets a high standard. His precision and thoughtfulness make him a reliable partner on any project.",
    name: "Richard Penrose",
    company: "Product Designer",
  },
  {
    id: 2,
    quote: "Lawrence has a rare ability to bridge design and engineering seamlessly. He takes ideas from rough concepts to fully realized, production-ready products faster than most teams I’ve worked with. His workflow is structured, efficient, and deeply informed by real-world constraints. That combination of speed and quality is hard to find.",
    name: "Elena Petrova",
    company: "BCG Entertainment - Product Designer",
  },
  {
    id: 3,
    quote: "What sets Lawrence apart is how he thinks in systems rather than isolated screens. Every component, interaction, and flow is designed to scale and remain consistent over time. He brings a level of structure that makes collaboration with developers smooth and predictable. The end result is always cohesive and built to last.",
    name: "Samuel Kariuki",
    company: "BitNorm",
  },
  {
    id: 4,
    quote: "Lawrence is fast, sharp, and incredibly dependable under pressure. He delivers work that is not only visually strong but also ready for production without unnecessary back-and-forth. His ability to maintain quality while moving quickly is a huge asset in fast-paced environments. You can trust him to get things done right.",
    name: "Priya Nair",
    company: "UI/UX Designer",
  },
];

export const site = {
  name: "Luki Studio",
  url: "https://luki.studio",
  ogImage: "/Logo.png",
  description: "Lawrence designs and builds digital products end-to-end from brand identity to fully shipped experiences. With a design-first approach and AI-powered workflows, he delivers fast, scalable, and production-ready solutions for real users.",
  keywords: [
    "product design",
    "ui ux design",
    "branding",
    "design systems",
    "frontend development",
    "ai coding",
    "figma to production",
    "web design",
    "mobile app design",
    "end-to-end product development",
    "startup design",
    "design engineer",
  ],
  links: {
    linkedin: "https://linkedin.com/in/lawrence-maluki-b54a76196/",
    github: "https://github.com/lawmaluki",
  },
  handles: {
    X: "@luki90400",
  },
  about: "I design and build products end-to-end. Over the past 5 years, I’ve worked across Peak, IBM’s Weather Channel, YC-backed Dojah, Antler-backed Souk, and Techstars-backed Voyance. I don’t just design — I ship code. With a design-first mindset and AI agents in my workflow, I move from Figma to production in days, building real products for real users."
}


export const EMAIL = 'hello@luki.studio';
export const SCHEDULE_URL = 'https://cal.eu/lawmaluki/quick-chat-duration-15';
export const DRIBBLE_URL = 'https://dribbble.com/Lawmaluki';
export const FIGMA_URL = 'https://www.figma.com/@lawmaluki';






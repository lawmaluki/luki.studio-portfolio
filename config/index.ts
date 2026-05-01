
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
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396664/screen_57_otpill.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396664/screen_59_i07gal.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396664/screen_60_kkfi0m.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396664/screen_56_kufxgo.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396664/screen_58_yp9g4i.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396663/screen_54_jsr3iy.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396663/screen_55_c1mfxa.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777396662/screen_53_cajkel.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392951/screen_52_abhwd1.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392951/screen_51_conwd8.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392951/screen_50_zczqzs.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392951/screen_49_i8foaz.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392951/screen_48_xqq1a8.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_47_wedeif.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_46_hhqcio.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_45_tvznqx.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_43_pbyaql.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_42_uzeoti.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392950/screen_40_o4nycq.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_37_as6zly.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_39_gj348y.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_38_oruijp.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_37-1_zqr5e0.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_36_vehmtp.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392949/screen_35_y21pbj.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392948/screen_34_ookixq.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392948/screen_33_x35yz8.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392948/screen_29_iulrfg.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392948/screen_31_k4lb0w.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392948/screen_25_xbjacy.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392947/screen_15_agjaao.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392947/screen_13_jrxm5i.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392947/screen_11_lndugd.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392947/screen_12_xqnyuj.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392947/screen_10_bpofnj.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392946/screen_23_hoqkdv.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392946/screen_9_y73ojp.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392946/screen_22_dljjmn.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392946/screen_8_pjgdqh.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392946/screen_5_bjuo0i.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392945/screen_20_ggclef.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392945/screen_7_xpyfvd.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392945/screen_4_pmmjup.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392944/screen_16_kiejld.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392944/screen_2_mxknrd.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392944/screen_1_nwtlek.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777392944/screen_19_urax8o.png' },

    {
      slug: '',
      title: 'Steal These 6 Startup Ideas For 2024 | Theo Tabah & Jordan Mix',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.youtube.com/results?search_query=Steal+These+6+Startup+Ideas+For+2024+Theo+Tabah+Jordan+Mix',
    },
    {
      slug: '',
      title: '600 Startups Hiring Remotely in 2018',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://rdutel.medium.com/600-startups-hiring-remotely-in-2018-a5c9e9c558f6',
    },
    {
      slug: '',
      title: 'Welcome to A Smart Bear: Longform',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://longform.asmartbear.com/',
    },
    {
      slug: '',
      title: 'Afridigest',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://afridigest.substack.com/s/fintech',
    },
    {
      slug: '',
      title: 'Upgrade your life, money, and travel',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.chrishutchins.com/',
    },
    {
      slug: '',
      title: 'Bootstrapped',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://bootstrapped.fm/',
    },
    {
      slug: '',
      title: 'The Bootstrapped Founder',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://thebootstrappedfounder.com/',
    },
    {
      slug: '',
      title: 'Building Africa',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://buildingafrika.substack.com/',
    },
    {
      slug: '',
      title: 'How to do product positioning',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://evanjconrad.com/posts/product-abstraction',
    },
    {
      slug: '',
      title: 'How to succeed with 0 followers',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://x.com/dannypostma/status/1646368426246680579',
    },
    {
      slug: '',
      title: 'Huberman Lab',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.hubermanlab.com/',
    },
    {
      slug: '',
      title: 'Indie Hackers',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.indiehackers.com/',
    },
    {
      slug: '',
      title: 'Kenyan Wallstreet',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://afripods.africa/podcast/kenyan-wallstreet/kenyan-wallstreet',
    },
    {
      slug: '',
      title: 'Marketing Examples',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://marketingexamples.com/',
    },
    {
      slug: '',
      title: 'A No BS Guide To Making Your First $1,000,000',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.youtube.com/watch?v=Zac26HFtIVo',
    },
    {
      slug: '',
      title: 'My First Million',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.mfmpod.com/',
    },
    {
      slug: '',
      title: 'Start Your Side Hustle Today',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://nichetwins.com/',
    },
    {
      slug: '',
      title: 'Sh*t You Don’t Learn in School Podcast',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://calvinrosser.com/learn/',
    },
    {
      slug: '',
      title: 'Excuse me, is there a problem?',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://longform.asmartbear.com/problem/',
    },
    {
      slug: '',
      title: 'Pinterest sent 125K visitors to my website this month. AMA.',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.indiehackers.com/post/pinterest-sent-125k-visitors-to-my-website-this-month-ama-98872a773c',
    },
    {
      slug: '',
      title: 'Nick Gray',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://nickgray.net/',
    },
    {
      slug: '',
      title: 'Startup Acquisition Stories',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://podcasts.apple.com/us/podcast/startup-acquisition-stories/id1595743531',
    },
    {
      slug: '',
      title: 'The Startup Ideas Podcast',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://open.spotify.com/show/6aB0v6amo3a8hgTCjlTlvh',
    },
    {
      slug: '',
      title: 'Startups for the Rest of Us',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.startupsfortherestofus.com/',
    },
    {
      slug: '',
      title: 'Sweaty Startup',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.sweatystartup.com/',
    },
    {
      slug: '',
      title: 'Tech Safari',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://techsafari.io/',
    },
    {
      slug: '',
      title: 'The Final Chapter of My First Startup',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://sparktoro.com/blog/the-final-chapter-of-my-first-startup/',
    },
    {
      slug: '',
      title: 'The Hard Things About Subscription Payments in Africa',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://wiza.jalaka.si/thoughts/the-hard-things-about-subscription-payments-in-africa/',
    },
    {
      slug: '',
      title: 'AI Tooling for Software Engineers in 2026',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://newsletter.pragmaticengineer.com/',
    },
    {
      slug: '',
      title: 'Kopywriting Kourse',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://kopywriting.com/join/',
    },
    {
      slug: '',
      title: 'Micro SaaS Idea',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://microsaasidea.substack.com/',
    },
    {
      slug: '',
      title: 'The Future of Design: How AI Is Shifting Designers from Makers to Curators',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://uxmag.com/articles/the-future-of-design-how-ai-is-shifting-designers-from-makers-to-curators',
    },
    {
      slug: '',
      title: 'Design Against the Machine',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://borism.medium.com/design-against-the-machine-72648374aec1',
    },
    {
      slug: '',
      title: 'Artificial intelligence (AI) in the design process',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/artificial-intelligence-ai-in-the-design-process-a-review-and-analysis-on-generative-ai-perspectives/36E8736EEB55F0B38C2C9AB47EF381FE',
    },
    {
      slug: '',
      title: 'Introducing Mercury OS',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://uxdesign.cc/introducing-mercury-os-f4de45a04289',
    },
    {
      slug: '',
      title: 'The Future of the Operating System',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://medium.com/@ghelayash/the-future-of-the-operating-system-8b9f5bfc5bbb',
    },
    {
      slug: '',
      title: 'Dune (Novel)',
      category: 'Reading',
      tags: [],
      image: null,
      summary: '',
      year: '',
      role: '',
      description: '',
      link: 'https://ebooks.rahnuma.org/1690308873-Dune.pdf.html',
    },
  {
    slug: 'posco-smart-home-control-panel-ui',
    title: 'POSCO Smart Home Control Panel UI',
    category: 'Project',
    tags: ['UI/UX', 'Concept', 'Design System'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/73062f242563769.696fa8e609cd6.png',
    summary: 'The Future of Atmospheric Living.',
    year: '2025',
    role: 'Product Designer & Frontend Engineer',
    description: `<style>
  .ps { font-family: inherit; line-height: 1.6; color: #4E4E4E; --ps-text: #4E4E4E; --ps-muted: #6b7280; --ps-soft: #8b8b8b; --ps-line: #eeeeee; }
  .ps * { box-sizing: border-box; }
  .ps img { display: block; width: 100%; height: auto; }
  .ps h1, .ps h2, .ps h3, .ps p { margin: 0; }
  .ps h1 { font-size: clamp(36px, 6vw, 68px); line-height: 0.95; letter-spacing: -0.055em; font-weight: 700; color: #2d2d2d; }
  .ps h2 { margin-bottom: 20px; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.05; letter-spacing: -0.04em; color: #2d2d2d; font-weight: bold; }
  .ps h3 { margin: 34px 0 10px; font-size: 22px; line-height: 1.25; letter-spacing: -0.02em; color: #2d2d2d; font-weight: bold; }
  .ps p { color: var(--ps-muted); font-size: clamp(16px, 1.6vw, 18px); line-height: 1.65; }
  .ps strong { color: var(--ps-text); font-weight: 700; }
  .ps .ps-eyebrow { margin: 0 0 12px; color: var(--ps-soft); font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; }
  .ps .ps-subtitle { margin-top: 18px; color: #2d2d2d; font-size: clamp(18px, 2vw, 26px); font-style: italic; line-height: 1.4; }
  .ps .ps-hero { padding-bottom: 36px; }
  .ps .ps-media { margin: 48px 0 12px; }
  .ps .ps-media img { border-radius: 26px; object-fit: cover; }
  .ps .ps-media-stack { display: grid; gap: 28px; margin: 48px 0 12px; }
  .ps .ps-media-stack img { border-radius: 26px; object-fit: cover; }
  .ps .ps-section { padding: 56px 0 24px; }
  .ps .ps-copy-stack { display: grid; gap: 18px; }
  .ps .ps-feature-list { display: grid; gap: 18px; margin-top: 18px; }
  .ps .ps-feature-item { padding: 22px 0 0; border-top: 1px solid var(--ps-line); }
  .ps .ps-feature-item p + p { margin-top: 8px; }
  .ps .ps-impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 28px; }
  .ps .ps-impact-card { min-height: 180px; padding: 24px; border: 1px solid var(--ps-line); border-radius: 24px; background: #fafafa; }
  .ps .ps-impact-card span { display: block; margin-bottom: 12px; color: var(--ps-soft); font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }
  .ps .ps-impact-card p { color: var(--ps-text); font-size: 18px; line-height: 1.45; }
  .ps .ps-note { margin-top: 12px; color: var(--ps-soft); font-size: 16px; font-style: italic; }
  @media (max-width: 760px) { .ps .ps-impact-grid { grid-template-columns: 1fr; } .ps .ps-media img, .ps .ps-media-stack img { border-radius: 18px; } }
  /* Dark mode */
  .dark .ps { --ps-text: #e5e7eb; --ps-muted: #9ca3af; --ps-soft: #6b7280; --ps-line: #374151; color: #e5e7eb; }
  .dark .ps h1, .dark .ps h2, .dark .ps h3 { color: #f3f4f6; }
  .dark .ps p { color: #9ca3af; }
  .dark .ps strong { color: #e5e7eb; }
  .dark .ps .ps-subtitle { color: #d1d5db; }
  .dark .ps .ps-impact-card { background: #1f2937; border-color: #374151; }
  .dark .ps .ps-impact-card p { color: #e5e7eb; }
</style>

<div class="ps">

  <div class="ps-hero">
    <p class="ps-eyebrow">Smart Home Interface Concept</p>
    <h1>POSCO Smart Home Control Panel UI</h1>
    <p class="ps-subtitle">The Future of Atmospheric Living</p>
  </div>

  <div class="ps-media">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/73062f242563769.696fa8e609cd6.png" alt="POSCO Smart Home Control Panel UI overview" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ps-section">
    <h2>My Vision</h2>
    <div class="ps-copy-stack">
      <p>Modern smart homes often feel like spreadsheets: cluttered, clinical, and overloaded with controls.</p>
      <p><strong>Aurora Home OS</strong> is my concept for transforming home management into a more sensory, atmospheric experience.</p>
      <p>The interface moves away from traditional control panels and toward living interfaces that adapt to the time of day, the home environment, and the mood of the people inside it.</p>
    </div>

    <h3>Design Language</h3>
    <div class="ps-feature-list">
      <div class="ps-feature-item">
        <p><strong>Glassmorphism 2.0</strong></p>
        <p>Deep blurs and soft outer glows create visual depth without adding unnecessary noise.</p>
      </div>
      <div class="ps-feature-item">
        <p><strong>OLED-Optimized</strong></p>
        <p>A true-black foundation helps reduce visual intrusion at night while giving the interface a calm, premium glow.</p>
      </div>
      <div class="ps-feature-item">
        <p><strong>Tactile Digitalism</strong></p>
        <p>High-fidelity digital dials are paired with large, physical-inspired touch zones for better accessibility and easier interaction.</p>
      </div>
    </div>
  </div>

  <div class="ps-media">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2371db242563769.69f0bd0c6e3b8.png" alt="Smart home control panel interface preview" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ps-section">
    <h2>Functional Breakdown</h2>
    <div class="ps-feature-list">
      <div class="ps-feature-item">
        <h3>1. The Glance Sidebar</h3>
        <p>The left side of the interface is designed as a permanent status pillar, giving users quick access to high-frequency information such as time, weather, and lighting status.</p>
        <p><strong>Dynamic Lighting:</strong> one-tap scene controls such as Gold, Beige, and White allow instant mood changes without forcing users into deeper menus.</p>
      </div>
      <div class="ps-feature-item">
        <h3>2. The Smart Thermal Core</h3>
        <p>Instead of standard plus and minus buttons, the climate controls use a progressive arc dial that feels more fluid and intentional.</p>
        <p><strong>Visual Warmth:</strong> the arc responds with changing color temperature as the user adjusts the climate, giving immediate feedback.</p>
        <p><strong>Centralized Modes:</strong> cooling, power, and ventilation are grouped within a focused touch zone for ergonomic ease.</p>
      </div>
      <div class="ps-feature-item">
        <h3>3. The Hybrid Dock</h3>
        <p>Because smart should never mean slow, three mission-critical actions — temperature, light, and security — remain available in a high-contrast bottom dock.</p>
        <p><strong>High-Affordance Icons:</strong> large touch targets support low-light interactions when the user is drowsy, distracted, or in a hurry.</p>
      </div>
    </div>
  </div>

  <div class="ps-media-stack">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0ed7c3242563769.69f0bd0c6d775.png" alt="Smart home lighting interface screen" width="1200" height="675" loading="lazy" />
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a10942242563769.69f0bd0c6ddab.png" alt="Smart home temperature interface screen" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ps-section">
    <h2>Expected Impact</h2>
    <p class="ps-note">The concept has not yet been validated through formal user testing. The following outcomes represent the intended product impact.</p>
    <div class="ps-impact-grid">
      <div class="ps-impact-card">
        <span>Efficiency</span>
        <p>Reduced time-to-task for climate adjustments through clearer hierarchy and fewer interaction steps.</p>
      </div>
      <div class="ps-impact-card">
        <span>Sentiment</span>
        <p>Designed to feel calming and premium rather than overly technological.</p>
      </div>
      <div class="ps-impact-card">
        <span>Accessibility</span>
        <p>High-contrast readouts make key information easier to see from a distance.</p>
      </div>
    </div>
  </div>

  <div class="ps-media-stack">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/350696242563769.696fa8e60a1db.png" alt="POSCO smart home interface layout" width="1200" height="675" loading="lazy" />
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5bfd23242563769.69f0bd0c6d051.png" alt="Smart home control panel close up" width="1200" height="675" loading="lazy" />
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f0e815242563769.69f0bd0c6c9e2.png" alt="Smart home control panel visual detail" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ps-section">
    <h2>Key Takeaway</h2>
    <p>By prioritizing <strong>visual hierarchy</strong> and <strong>negative space</strong>, this concept positions the smart home interface as a piece of digital furniture rather than just another utility screen.</p>
  </div>

  <div class="ps-media">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5e1177242563769.696fa8e60aa7a.png" alt="Final POSCO Smart Home Control Panel UI showcase" width="1200" height="675" loading="lazy" />
  </div>

</div>`,
    link: '',
  },
  {
    slug: 'chat-bubble-variations',
    title: 'Chat Bubble Variations',
    category: 'Project',
    tags: ['UI Design', 'Case Study', 'Design System'],
    image: 'https://cdn.dribbble.com/userupload/46368263/file/8f35925d543bbd92427568f72196f2c5.png?resize=1600x900&vertical=center',
    summary: 'Designing clear, accessible, and scalable conversations through thoughtful chat bubble structure.',
    year: '2025',
    role: 'UI/UX Designer',
    description: `<style>
  .cbv {
    font-family: inherit;
    line-height: 1.6;
    color: #4E4E4E;
    --cbv-text: #4E4E4E;
    --cbv-muted: #6b7280;
    --cbv-soft: #f6f7fb;
    --cbv-border: #e5e7eb;
    --cbv-accent: #126BAB;
    --cbv-radius: 18px;
  }

  .cbv * { box-sizing: border-box; }
  .cbv img { display: block; width: 100%; height: auto; }

  .cbv .cbv-eyebrow {
    margin: 0 0 12px;
    color: var(--cbv-accent);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .cbv h1 {
    margin: 0;
    font-size: clamp(36px, 6vw, 64px);
    line-height: 1.05;
    letter-spacing: -0.05em;
    color: #2d2d2d;
    font-weight: bold;
  }

  .cbv h2 {
    margin: 0 0 16px;
    font-size: clamp(22px, 3vw, 32px);
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #2d2d2d;
    font-weight: bold;
  }

  .cbv p { margin: 0 0 16px; color: var(--cbv-muted); font-size: clamp(16px, 1.6vw, 18px); line-height: 1.65; }
  .cbv li { color: var(--cbv-muted); font-size: clamp(16px, 1.6vw, 18px); line-height: 1.65; }
  .cbv strong { color: var(--cbv-text); font-weight: 700; }

  .cbv .cbv-lead {
    max-width: 700px;
    margin-top: 16px;
    margin-bottom: 0;
    color: var(--cbv-muted);
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.5;
  }

  .cbv .cbv-hero { padding-bottom: 28px; }

  .cbv .cbv-media { margin: 36px 0; }
  .cbv .cbv-media img { border-radius: 8px; object-fit: contain; }

  .cbv .cbv-content { display: grid; gap: 18px; padding: 28px 0; }

  .cbv .cbv-card {
    padding: 30px;
    border: 1px solid var(--cbv-border);
    border-radius: var(--cbv-radius);
    background: var(--cbv-soft);
  }

  .cbv .cbv-card ol {
    display: grid;
    gap: 10px;
    margin: 0;
    padding-left: 24px;
  }

  .cbv .cbv-result {
    margin-top: 18px;
    color: var(--cbv-text);
    font-style: italic;
    font-weight: 700;
  }

  .cbv .cbv-palette-wrap {
    margin: 12px 0 36px;
    padding: 20px;
    border: 1px solid var(--cbv-border);
    border-radius: var(--cbv-radius);
  }

  .cbv .cbv-palette-wrap h2 { font-size: 20px; margin-bottom: 14px; letter-spacing: -0.02em; }

  .cbv .cbv-palette {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid var(--cbv-border);
  }

  .cbv .cbv-swatch {
    min-height: 76px;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 10px 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .cbv .cbv-image-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin: 36px 0; }
  .cbv .cbv-image-grid img { border-radius: 12px; }

  .cbv .cbv-workspace {
    margin-top: 36px;
    padding: 30px;
    border: 1px solid var(--cbv-border);
    border-radius: var(--cbv-radius);
    background: var(--cbv-soft);
  }

  .cbv .cbv-workspace a {
    color: var(--cbv-text);
    text-decoration: none;
    border-bottom: 2px solid #ea64d9;
    overflow-wrap: anywhere;
    transition: opacity 0.2s ease;
  }
  .cbv .cbv-workspace a:hover { opacity: 0.72; }

  @media (max-width: 760px) {
    .cbv .cbv-card, .cbv .cbv-palette-wrap, .cbv .cbv-workspace { padding: 22px; }
    .cbv .cbv-palette { grid-template-columns: repeat(2, 1fr); }
    .cbv .cbv-swatch { min-height: 64px; }
  }

  /* Dark mode */
  .dark .cbv {
    --cbv-text: #e5e7eb;
    --cbv-muted: #9ca3af;
    --cbv-soft: #1f2937;
    --cbv-border: #374151;
    color: #e5e7eb;
  }
  .dark .cbv h1, .dark .cbv h2 { color: #f3f4f6; }
  .dark .cbv p, .dark .cbv li { color: #9ca3af; }
  .dark .cbv strong { color: #e5e7eb; }
  .dark .cbv .cbv-result { color: #e5e7eb; }
  .dark .cbv .cbv-workspace a { color: #e5e7eb; }
</style>

<div class="cbv">

  <div class="cbv-hero">
    <p class="cbv-eyebrow">Exploring Messaging UI System</p>
    <h1>Chat Bubble Variations</h1>
    <p class="cbv-lead">Designing clear, accessible, and scalable conversations through thoughtful chat bubble structure.</p>
  </div>

  <div class="cbv-media">
    <img src="https://cdn.dribbble.com/userupload/46368263/file/8f35925d543bbd92427568f72196f2c5.png?resize=1600x900&vertical=center" alt="Chat Bubble Variations hero presentation" width="1600" height="900" loading="lazy" />
  </div>

  <div class="cbv-palette-wrap">
    <h2>Color Palette</h2>
    <div class="cbv-palette">
      <div class="cbv-swatch" style="background:#010101;color:#fff;">#010101</div>
      <div class="cbv-swatch" style="background:#126BAB;color:#fff;">#126BAB</div>
      <div class="cbv-swatch" style="background:#FDFDFE;color:#111;">#FDFDFE</div>
      <div class="cbv-swatch" style="background:#41475C;color:#fff;">#41475C</div>
      <div class="cbv-swatch" style="background:#1689db;color:#fff;">#1689db</div>
      <div class="cbv-swatch" style="background:#98A6B2;color:#111;">#98A6B2</div>
      <div class="cbv-swatch" style="background:#517092;color:#fff;">#517092</div>
    </div>
  </div>

  <div class="cbv-content">
    <p>Chat bubbles are one of the most common UI patterns, yet small design decisions can make or break conversation flow. This case study explores the anatomy of chat bubbles and how thoughtful structure improves clarity, usability, and accessibility in messaging interfaces.</p>

    <div class="cbv-card">
      <h2>The Problem</h2>
      <p>Inconsistent sizing, poor contrast, and unclear sender distinction often disrupt readability and increase cognitive load, especially in long or fast-moving conversations.</p>
    </div>
  </div>

  <div class="cbv-media">
    <img src="https://cdn.dribbble.com/userupload/46368363/file/c6cd94fd3e237bc497621a2fd05787da.png?resize=1504x846&vertical=center" alt="Chat bubble structure and layout exploration" width="1504" height="846" loading="lazy" />
  </div>

  <div class="cbv-media">
    <img src="https://cdn.dribbble.com/userupload/46368364/file/338052d44e9ba9b5c50b1eb69916eafa.png?resize=1504x846&vertical=center" alt="Chat bubble variants and state examples" width="1504" height="846" loading="lazy" />
  </div>

  <div class="cbv-media">
    <img src="https://cdn.dribbble.com/userupload/46368365/file/b78d13a41ea33a111957573a64770f9f.png?resize=1504x846&vertical=center" alt="Chat bubble interaction and styling examples" width="1504" height="846" loading="lazy" />
  </div>

  <div class="cbv-content">
    <div class="cbv-card">
      <h2>Key Components</h2>
      <ol>
        <li>Message container that adapts to content.</li>
        <li>Directional tail to reinforce ownership.</li>
        <li>Readable text hierarchy for fast scanning.</li>
        <li>Subtle metadata such as timestamps and status.</li>
        <li>Flexible variants built with Auto Layout.</li>
      </ol>
      <p class="cbv-result">Result: smoother conversation flow with less visual noise, letting users focus on what matters: the message.</p>
    </div>
  </div>

  <div class="cbv-image-grid">
    <img src="https://cdn.dribbble.com/userupload/46368367/file/a6105287706de06c20f6cecc683df7b2.png?resize=1905x1072&vertical=center" alt="Additional preview one" width="1905" height="1072" loading="lazy" />
    <img src="https://cdn.dribbble.com/userupload/46368366/file/14fadc56d935400974a3c492638123e1.png?resize=1905x1072&vertical=center" alt="Additional preview two" width="1905" height="1072" loading="lazy" />
    <img src="https://cdn.dribbble.com/userupload/46368368/file/73b56f4d3b2eb2548cc71be276f5115e.png?resize=1905x1072&vertical=center" alt="Additional preview three" width="1905" height="1072" loading="lazy" />
  </div>

  <div class="cbv-workspace">
    <h2>Link to the Design Workspace</h2>
    <p>
      <a href="https://www.figma.com/community/file/1592807537519737559/chat-bubble-variations" target="_blank" rel="noopener noreferrer">
        Open the Figma community file
      </a>
    </p>
    <p><strong>Thank you.</strong></p>
  </div>

</div>`,
    link: 'https://www.figma.com/community/file/1592807537519737559/chat-bubble-variations',
  },
  {
    slug: 'chat-bubble-anatomy',
    title: 'Chat Bubble Anatomy',
    category: 'Project',
    tags: ['UX Design', 'Case Study', 'Accessibility'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c88857242175915.69679e60234f3.png',
    summary: 'Designing clear, usable, and accessible messaging interfaces.',
    year: '2025',
    role: 'UX Designer, Product Designer',
    description: `<style>
  .cb-study {
    font-family: inherit;
    font-size: 18px;
    line-height: 1.65;
    color: #4E4E4E;
    --cb-text: #4E4E4E;
    --cb-muted: #6b7280;
    --cb-soft: #f6f6f6;
    --cb-accent: #ff7700;
  }

  .cb-study * { box-sizing: border-box; }
  .cb-study img { display: block; width: 100%; height: auto; }

  .cb-hero { padding-top: 0; margin-bottom: 0; }
  .cb-hero img { border-radius: 20px; }

  .cb-content { max-width: 880px; margin: 0 auto; padding: 64px 0 0; }
  .cb-content.cb-compact { padding-top: 48px; }
  .cb-images { padding-top: 56px; }

  .cb-eyebrow {
    margin: 0 0 12px;
    color: var(--cb-muted);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .cb-study h1 {
    margin: 0;
    font-size: clamp(36px, 7vw, 72px);
    letter-spacing: -0.05em;
    line-height: 1.15;
    color: var(--cb-text);
    font-weight: bold;
  }

  .cb-study h2 {
    margin: 0 0 24px;
    font-size: clamp(26px, 4vw, 40px);
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: var(--cb-text);
    font-weight: bold;
  }

  .cb-study h3 {
    margin: 36px 0 12px;
    font-size: 22px;
    line-height: 1.15;
    color: var(--cb-text);
    font-weight: bold;
  }

  .cb-study p { margin: 0 0 20px; color: var(--cb-text); }

  .cb-subtitle {
    max-width: 660px;
    margin-top: 24px;
    margin-bottom: 0;
    color: var(--cb-muted);
    font-size: clamp(18px, 2.5vw, 26px);
    font-style: italic;
    line-height: 1.4;
  }

  .cb-lead { font-size: 22px; line-height: 1.55; }

  .cb-statement {
    margin-top: 36px;
    padding: 28px;
    background: var(--cb-soft);
    border-radius: 24px;
  }
  .cb-statement p:last-child { margin-bottom: 0; }

  .cb-list {
    display: grid;
    gap: 10px;
    margin: 20px 0 32px;
    padding: 0;
    list-style: none;
  }
  .cb-list li {
    position: relative;
    padding-left: 28px;
    color: var(--cb-text);
  }
  .cb-list li::before {
    content: "";
    position: absolute;
    top: 0.8em;
    left: 0;
    width: 8px;
    height: 8px;
    background: var(--cb-accent);
    border-radius: 999px;
    transform: translateY(-50%);
  }

  .cb-quote {
    margin-top: 32px;
    color: var(--cb-muted);
    font-size: 24px;
    font-style: italic;
  }

  .cb-image-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }

  .cb-image-card {
    overflow: hidden;
    background: var(--cb-soft);
    border-radius: 28px;
    margin: 0;
  }

  .cb-outcomes-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
  }

  .cb-result {
    margin-top: 32px;
    padding: 28px;
    color: var(--cb-text);
    background: var(--cb-soft);

    border-radius: 20px;
    font-size: 22px;
    font-weight: 700;
    font-style: italic;
    line-height: 1.45;
  }

  .cb-workspace-link {
    display: inline-block;
    margin-top: 16px;
    color: var(--cb-accent);
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 4px;
    overflow-wrap: anywhere;
  }

  .cb-footer {
    padding: 64px 0 32px;
    color: var(--cb-muted);
  }

  @media (max-width: 720px) {
    .cb-study { font-size: 16px; }
    .cb-lead, .cb-quote, .cb-result { font-size: 19px; }
    .cb-outcomes-grid { grid-template-columns: 1fr; gap: 8px; }
  }

  /* Dark mode */
  .dark .cb-study {
    --cb-text: #e5e7eb;
    --cb-muted: #9ca3af;
    --cb-soft: #1f2937;
    color: #e5e7eb;
  }
  .dark .cb-study h1,
  .dark .cb-study h2,
  .dark .cb-study h3 { color: #f3f4f6; }
  .dark .cb-study p { color: #d1d5db; }
  .dark .cb-study .cb-list li { color: #d1d5db; }
  .dark .cb-study .cb-result { color: #e5e7eb; }
</style>

<div class="cb-study">

  <div class="cb-hero">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c88857242175915.69679e60234f3.png" alt="Chat Bubble Anatomy cover image" width="1400" height="700" loading="lazy" />
  </div>

  <div class="cb-content">
    <p class="cb-eyebrow">UX Case Study</p>
    <h1>Chat Bubble Anatomy</h1>
    <p class="cb-subtitle">Designing clear, usable, and accessible messaging interfaces.</p>
  </div>

  <div class="cb-content">
    <h2>Why?</h2>
    <p class="cb-lead">
      Chat interfaces are among the most frequently used UI patterns in modern digital products — from messaging apps and customer support tools to collaboration platforms and social networks.
    </p>
    <p>
      Despite their familiarity, poorly designed chat bubbles can quickly introduce confusion, accessibility barriers, and cognitive overload.
    </p>

    <div class="cb-statement">
      <h3>Problem Statement</h3>
      <p>Most chat UIs look fine until you actually try to create, scale, and design them across real use cases.</p>
      <ul class="cb-list">
        <li>Message bubbles that stretch, shrink, and freestyle their sizes.</li>
        <li>Contrast so low it feels like a guessing game.</li>
        <li>"Wait, who sent this?" moments in busy conversations.</li>
        <li>Layouts that panic when a message is longer than two words.</li>
      </ul>
      <p>
        The result is a conversation experience that feels more like decoding a puzzle than communication — especially for users with visual, cognitive, or motor impairments.
      </p>
    </div>

    <p class="cb-quote">Chats should flow. Not fight back.</p>
  </div>

  <div class="cb-content">
    <h2>Goals &amp; Design Principles</h2>

    <h3>Primary Goals</h3>
    <ul class="cb-list">
      <li>Improve conversation clarity.</li>
      <li>Support scalable content across short messages, long messages, and system messages.</li>
      <li>Ensure accessibility compliance.</li>
      <li>Maintain visual balance without distracting from the message.</li>
    </ul>

    <h3>Design Principles</h3>
    <ul class="cb-list">
      <li><strong>Content-first layout:</strong> the message dictates the container, not the other way around.</li>
      <li><strong>Consistency through variants:</strong> predictable patterns reduce cognitive load.</li>
      <li><strong>Accessibility by default:</strong> contrast, spacing, and semantics are non-negotiable.</li>
      <li><strong>Minimal but expressive:</strong> form should support function, not compete with it.</li>
    </ul>
  </div>

  <div class="cb-images">
    <div class="cb-image-grid">
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8f37d0242175915.69679e6024681.png" alt="Chat bubble anatomy layout example" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8cdc99242175915.69679e6024dd9.png" alt="Chat bubble spacing and sizing example" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6ecaee242175915.69679e60252e7.png" alt="Chat bubble accessibility and contrast example" width="1200" height="675" loading="lazy" /></figure>
    </div>
  </div>

  <div class="cb-content">
    <h2>Outcome &amp; Learnings</h2>
    <div class="cb-outcomes-grid">
      <div>
        <h3>Key Outcomes</h3>
        <ul class="cb-list">
          <li>Increased clarity in multi-message conversations.</li>
          <li>Better scalability across devices and message lengths.</li>
          <li>A stronger foundation for future features such as reactions, replies, and attachments.</li>
        </ul>
      </div>
      <div>
        <h3>Key Learnings</h3>
        <ul class="cb-list">
          <li>Small UI elements have outsized UX impact.</li>
          <li>Consistency builds trust and reduces mental effort.</li>
          <li>Accessibility improvements benefit all users, not only edge cases.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cb-images">
    <div class="cb-image-grid">
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/28665f242175915.69679e6023c5f.png" alt="Chat bubble UI presentation mockup" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3b1cb2242175915.69f0b0982f1a3.png" alt="Chat bubble component variants" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d89f30242175915.69f0b0982e8ca.png" alt="Chat bubble system design example" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7c841f242175915.69f0b0982ded5.png" alt="Chat bubble design details" width="1200" height="675" loading="lazy" /></figure>
      <figure class="cb-image-card"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/037c9c242175915.69f0b0982d689.png" alt="Chat bubble final UI system" width="1200" height="675" loading="lazy" /></figure>
    </div>
  </div>

  <div class="cb-content cb-compact">
    <h2>Conclusion</h2>
    <p>Chat bubbles may appear simple, but their anatomy plays a critical role in how people communicate digitally.</p>
    <p>By focusing on clarity, usability, and accessibility, a basic UI pattern can become a powerful, inclusive conversation tool.</p>
    <p class="cb-result">
      Result: smoother conversation flow with less visual noise, letting users focus on what matters — the message.
    </p>
  </div>

  <div class="cb-images">
    <figure class="cb-image-card">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/994f95242175915.69679e602414d.png" alt="Chat Bubble Anatomy closing visual" width="1200" height="675" loading="lazy" />
    </figure>
  </div>

  <div class="cb-content cb-compact">
    <h2>Design Workspace</h2>
    <p>View the full design file on Figma Community.</p>
    <a class="cb-workspace-link" href="https://www.figma.com/community/file/1590820100189543293/chat-bubble-anatomy" target="_blank" rel="noopener noreferrer">
      Open the Chat Bubble Anatomy design workspace
    </a>
  </div>

</div>`,
    link: 'https://www.figma.com/community/file/1590820100189543293/chat-bubble-anatomy',
  },
  {
    slug: 'ai-key-concept',
    title: 'A universal key for instant AI access on the keyboard.',
    category: 'Project',
    tags: ['UI Design', 'Concept', 'AI'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/86e1b8241728615.695e733222074.png',
    summary: 'A universal key for instant AI access integrated into keyboards — enabling fast, seamless intelligence anywhere.',
    year: '2024',
    role: 'UI/UX Designer',
    description: `<style>
  .ak-study {
    font-family: inherit;
    line-height: 1.6;
    color: #4E4E4E;
  }

  .ak-study h1 {
    font-size: 42px;
    margin-bottom: 20px;
    line-height: 1.2;
    color: #4E4E4E;
    font-weight: bold;
  }

  .ak-study p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #4E4E4E;
  }

  .ak-study .ak-section-title {
    font-size: 22px;
    margin-top: 60px;
    margin-bottom: 15px;
    font-weight: bold;
    color: #191919;
  }

  .ak-study .ak-image {
    margin: 40px 0;
  }

  .ak-study .ak-image img {
    width: 100%;
    border-radius: 14px;
    display: block;
  }

  .ak-study ul {
    padding-left: 20px;
    font-size: 18px;
    color: #4E4E4E;
  }

  .ak-study li {
    margin-bottom: 12px;
  }

  .ak-study .ak-question {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #4E4E4E;
  }

  .ak-study .ak-tag {
    margin-top: 10px;
    font-size: 16px;
    color: #6b7280;
  }

  .ak-study .ak-resources {
    margin-top: 16px;
  }

  .ak-study .ak-resources a {
    color: #1769ff;
    text-decoration: none;
    word-break: break-all;
    font-size: 16px;
  }

  .ak-study .ak-footer {
    margin-top: 5%;
    font-size: 32px;
    font-weight: bold;
    color: #4E4E4E;
  }

  /* Dark mode overrides */
  .dark .ak-study {
    color: #d1d5db;
  }

  .dark .ak-study h1 {
    color: #f3f4f6;
  }

  .dark .ak-study p {
    color: #9ca3af;
  }

  .dark .ak-study .ak-section-title {
    color: #f3f4f6;
  }

  .dark .ak-study ul {
    color: #9ca3af;
  }

  .dark .ak-study .ak-question {
    color: #e5e7eb;
  }

  .dark .ak-study .ak-tag {
    color: #6b7280;
  }

  .dark .ak-study .ak-resources a {
    color: #60a5fa;
  }

  .dark .ak-study .ak-footer {
    color: #f3f4f6;
  }
</style>

<section class="ak-study">

  <h1>A universal key for instant AI access on the keyboard.</h1>

  <div class="ak-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/86e1b8241728615.695e733222074.png" alt="AI Key Concept" width="1200" height="675" loading="lazy" />
  </div>

  <p>
    A universal key for instant AI access integrated into keyboards could reshape how we interact with software — enabling fast, seamless access to intelligence anywhere.
  </p>

  <p>
    Instead of switching apps or contexts, AI becomes a native layer — triggered instantly from your keyboard.
  </p>

  <div class="ak-section-title">Design &amp; Placement</div>

  <ul>
    <li>Dedicated AI key, similar to "Fn" or "Windows"</li>
    <li>Recognizable icon (AI symbol or light cue)</li>
    <li>Customizable mapping (e.g. replacing Caps Lock)</li>
  </ul>

  <div class="ak-section-title">Core Features</div>

  <ul>
    <li>Instant AI access across any app</li>
    <li>Voice activation support for hands-free interaction</li>
    <li>Cross-platform functionality (OS + browser + apps)</li>
  </ul>

  <div class="ak-section-title">Challenges</div>

  <ul>
    <li>Privacy concerns and data handling</li>
    <li>Standardization across hardware manufacturers</li>
    <li>Avoiding accidental triggers</li>
  </ul>

  <div class="ak-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2596da241728615.695e733223dfe.png" alt="Keyboard Exploration" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ak-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/13112c241728615.695e7332235bb.png" alt="AI Key Detail" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ak-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a56d89241728615.695e733222b11.png" alt="Wide Concept View" width="1200" height="675" loading="lazy" />
  </div>

  <div class="ak-question">
    Would you envision this as a pure software shortcut, or a dedicated hardware key?
    <div class="ak-tag">Designed in Figma</div>
  </div>

  <div class="ak-section-title">Resources</div>
  <div class="ak-resources">
    <a href="https://drive.google.com/drive/folders/1JMO2EJ4ll-NW_WmNkmJPu_nTNVgcvuXx?usp=drive_link" target="_blank" rel="noopener noreferrer">
      View Project Files
    </a>
  </div>

  <div class="ak-footer">Thank you for exploring this AI concept!</div>

</section>`,
    link: 'https://drive.google.com/drive/folders/1JMO2EJ4ll-NW_WmNkmJPu_nTNVgcvuXx?usp=drive_link',
  },
  {
    slug: 'smart-control-schneider-electric',
    title: 'Smart Control Concept [Schneider Electric]',
    category: 'Project',
    tags: ['UI Design', 'Concept', 'IoT'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cfcb72241729233.695e7553bced2.png',
    summary: 'Exploring elegance in everyday control.',
    year: '2024',
    role: 'UI/UX/Product Designer',
    description: `<style>
  .sc-study {
    font-family: inherit;
    line-height: 1.6;
    color: #4E4E4E;
  }

  .sc-study p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #4E4E4E;
  }

  .sc-study .sc-highlight {
    font-weight: bold;
    color: #4E4E4E;
  }

  .sc-study h1 {
    font-size: 40px;
    margin-bottom: 10px;
    color: #4E4E4E;
    font-weight: bold;
    line-height: 1.1;
  }

  .sc-study .sc-caption {
    font-size: 20px;
    color: #6b7280;
    font-style: italic;
    margin-bottom: 40px;
  }

  .sc-study .sc-section-title {
    font-size: 22px;
    margin-top: 60px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #4E4E4E;
  }

  .sc-study .sc-section-subtle {
    font-style: italic;
    color: #9ca3af;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .sc-study .sc-image {
    margin: 40px 0;
  }

  .sc-study .sc-image img {
    width: 100%;
    border-radius: 12px;
    display: block;
  }

  .sc-study ul {
    padding-left: 20px;
    font-size: 18px;
    color: #4E4E4E;
  }

  .sc-study li {
    margin-bottom: 10px;
  }

  .sc-study .sc-reflection {
    margin-top: 60px;
  }

  .sc-study .sc-emphasis {
    color: #ff5f00;
    font-weight: bold;
  }

  /* Dark mode overrides */
  .dark .sc-study {
    color: #d1d5db;
  }

  .dark .sc-study h1 {
    color: #f3f4f6;
  }

  .dark .sc-study p {
    color: #9ca3af;
  }

  .dark .sc-study .sc-highlight {
    color: #e5e7eb;
  }

  .dark .sc-study .sc-caption {
    color: #6b7280;
  }

  .dark .sc-study .sc-section-title {
    color: #f3f4f6;
  }

  .dark .sc-study .sc-section-subtle {
    color: #6b7280;
  }

  .dark .sc-study ul {
    color: #9ca3af;
  }
</style>

<section class="sc-study">

  <h1>Smart Control Concept [Schneider Electric]</h1>
  <div class="sc-caption">Exploring elegance in everyday control.</div>

  <div class="sc-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cfcb72241729233.695e7553bced2.png" alt="Smart Control UI" width="1200" height="675" loading="lazy" />
  </div>

  <p>
    This concept imagines a minimal wall interface that
    <span class="sc-highlight">merges climate control</span> and
    <span class="sc-highlight">real-time weather</span> into one clean surface.
  </p>

  <p>
    Built around <span class="sc-highlight">Schneider Electric's design language</span>
    — warm textures, subtle light cues, and quiet intelligence —
    the interface blends digital clarity with tactile calm.
  </p>

  <div class="sc-section-title">Iterations</div>
  <div class="sc-section-subtle">Exploration</div>

  <ul>
    <li>Ambient, wood-grain interface: physical warmth meets digital precision</li>
    <li>Tap-based control with glowing state feedback</li>
    <li>"On/Off" behavior visualized through light, not icons</li>
    <li>Quick forecast integrated directly into the device</li>
  </ul>

  <div class="sc-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/da5031241729233.695e7553bdc9d.png" alt="Iteration 1" width="1200" height="675" loading="lazy" />
  </div>

  <div class="sc-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/756ff6241729233.695e7553be6ae.png" alt="Iteration 2" width="1200" height="675" loading="lazy" />
  </div>

  <div class="sc-image">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/475094241729233.695e7553bd570.png" alt="Iteration 3" width="1200" height="675" loading="lazy" />
  </div>

  <div class="sc-reflection">
    <div class="sc-section-title">Reflection</div>

    <p>
      Sometimes design is about balance between function, emotion, and form. This one leans heavily toward emotion, asking: "What if your thermostat looked so good you didn't care if it took two extra taps?"
    </p>

    <p class="sc-emphasis">
      Anyway, while exploring simplicity, I might've butchered usability a little. But what if that's where beauty begins?
    </p>
  </div>

</section>`,
    link: '',
  },
  {
    slug: 'app-workspace',
    title: 'App Redesign',
    category: 'Project',
    tags: ['UI Design', 'Product Design', 'Figma'],
    image: 'https://cdn.dribbble.com/userupload/47156033/file/a352e4430a36f81d71d082844f9a67d2.png?resize=1600x900&vertical=center',
    summary: 'A clean, structured app workspace design built for clarity and scalability.',
    year: '2026',
    role: 'UI/UX Designer',
    description: `<style>
  .aw {
    font-family: inherit;
    line-height: 1.6;
    color: #4E4E4E;
    --aw-text: #4E4E4E;
    --aw-muted: #6b7280;
    --aw-border: #ececf2;
    --aw-card-bg: #ffffff;
    --aw-radius: 18px;
    --aw-max-wide: 1024px;
    --aw-max-content: 752px;
  }

  .dark .aw {
    color: #d1d5db;
    --aw-text: #d1d5db;
    --aw-muted: #9ca3af;
    --aw-border: #374151;
    --aw-card-bg: #1f2937;
  }

  .aw * { box-sizing: border-box; }

  .aw .aw-showcase {
    display: grid;
    gap: 36px;
    width: 100%;
  }

  .aw .aw-media {
    width: min(100%, var(--aw-max-content));
    margin: 0 auto;
  }

  .aw .aw-media--wide {
    width: min(100%, var(--aw-max-wide));
  }

  .aw .aw-media img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: contain;
  }

  .aw .aw-spacer {
    height: 12px;
  }

  .aw .aw-card {
    width: min(100%, var(--aw-max-content));
    margin: 12px auto 0;
    padding: 32px;
    border: 1px solid var(--aw-border);
    border-radius: var(--aw-radius);
    background: var(--aw-card-bg);
  }

  .aw .aw-headline {
    margin: 0 0 8px;
    width: min(100%, var(--aw-max-content));
    font-size: clamp(32px, 5vw, 52px);
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: var(--aw-text);
    font-weight: 700;
  }

  .aw .aw-card h1 {
    margin: 0;
    font-size: clamp(28px, 4vw, 40px);
    line-height: 1.15;
    letter-spacing: -0.04em;
    color: var(--aw-text);
  }

  .aw .aw-card p {
    margin: 16px 0 0;
    color: var(--aw-muted);
    font-size: 18px;
  }

  .aw .aw-card a {
    color: var(--aw-text);
    text-decoration: none;
    border-bottom: 2px solid #ea64d9;
    overflow-wrap: anywhere;
    transition: opacity 0.2s ease;
  }

  .aw .aw-card a:hover {
    opacity: 0.72;
  }

  @media (max-width: 760px) {
    .aw .aw-showcase {
      gap: 24px;
    }

    .aw .aw-card {
      padding: 24px;
    }
  }
</style>

<div class="aw">
  <section class="aw-showcase">
    <h1 class="aw-headline">Design Improvements</h1>

    <figure class="aw-media aw-media--wide">
      <img src="https://cdn.dribbble.com/userupload/47156033/file/a352e4430a36f81d71d082844f9a67d2.png?resize=1600x900&vertical=center" alt="App workspace hero preview" loading="lazy" />
    </figure>

    <div class="aw-spacer"></div>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156030/file/3995ef206c1ba8232810651cbbf474e5.png?resize=1504x423&vertical=center" alt="App workspace section divider one" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156031/file/57564531db8519adb1d8b4a039853f0d.png?resize=1504x472&vertical=center" alt="App workspace section divider two" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156036/file/c23917acfdb0ca0c9ddcc45fd6b7af1b.png?resize=1504x1350&vertical=center" alt="App workspace screen preview one" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156041/file/330001baff36eec2a037de255f51abe1.png?resize=1504x3449&vertical=center" alt="App workspace long screen flow" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156039/file/106f4f76401b561f7705f4f8a3e5ebb0.png?resize=1504x1968&vertical=center" alt="App workspace screen preview two" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156040/file/586d8d9b9b75e19a7607bbb129da2680.png?resize=1504x1623&vertical=center" alt="App workspace screen preview three" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156034/file/0dc9d096d86f84b67ba8ee67c6c1891d.png?resize=1504x1541&vertical=center" alt="App workspace screen preview four" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156037/file/418ae66c56df134738c92d44d65d33ba.png?resize=1504x2630&vertical=center" alt="App workspace tall screen preview" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156038/file/a97d6ebf9918d3c638e300edfb73efdb.png?resize=1504x1629&vertical=center" alt="App workspace screen preview five" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156035/file/b24c2c8f5740d0bf3af2c852505eb781.png?resize=1504x1386&vertical=center" alt="App workspace screen preview six" loading="lazy" />
    </figure>

    <figure class="aw-media">
      <img src="https://cdn.dribbble.com/userupload/47156032/file/79b89b6f4040b38717cef17d57ac3716.png?resize=1504x505&vertical=center" alt="App workspace closing visual" loading="lazy" />
    </figure>

    <section class="aw-card">
      <h1>App Workspace</h1>
      <p>
        View the working design file in Figma:
        <a href="https://www.figma.com/design/QqGDuArtTu2g4gPVtUsL3R/Test-Assignment?node-id=0-1&t=wjnKHd27lyZb5SlA-1" target="_blank" rel="noopener noreferrer">
          Open Figma workspace
        </a>
      </p>
    </section>
  </section>
</div>`,
    link: '',
  },
  {
    slug: 'remote-control-design',
    title: 'Remote Control Design',
    category: 'Project',
    tags: ['Product Design', 'Concept', 'Hardware UI'],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9315aa241631277.695cc3c087dbf.png',
    summary: 'Exploring the evolution of remote control design from button-heavy layouts to modern, intelligent touchscreen interfaces.',
    year: '2025',
    role: 'UI/UX Designer',
    description: `<style>
  .rc {
    font-family: inherit;
    line-height: 1.6;
    color: #4E4E4E;
    --rc-text: #4E4E4E;
    --rc-muted: #6b7280;
    --rc-accent: #0057ff;
    --rc-border: #eee;
    --rc-radius: 16px;
  }

  .dark .rc {
    color: #d1d5db;
    --rc-text: #d1d5db;
    --rc-muted: #9ca3af;
    --rc-border: #374151;
  }

  .rc * { box-sizing: border-box; }

  .rc .rc-container {
    max-width: 920px;
    margin: 0 auto;
    padding: 0 0 60px;
  }

  .rc h1 {
    font-size: clamp(28px, 5vw, 44px);
    margin: 0 0 20px;
    color: var(--rc-text);
    letter-spacing: -0.02em;
  }

  .rc h2 {
    font-size: clamp(20px, 3vw, 28px);
    margin: 0 0 10px;
    color: var(--rc-text);
    letter-spacing: -0.01em;
  }

  .rc p {
    font-size: 18px;
    color: var(--rc-muted);
    margin: 0 0 20px;
  }

  .rc .rc-lead {
    font-size: clamp(18px, 2.5vw, 22px);
    color: var(--rc-muted);
    margin-bottom: 40px;
  }

  .rc .rc-image {
    margin: 50px 0;
  }

  .rc .rc-image img {
    width: 100%;
    border-radius: var(--rc-radius);
    display: block;
  }

  .rc ul {
    padding-left: 20px;
    color: var(--rc-muted);
    font-size: 18px;
    margin: 0 0 20px;
  }

  .rc li {
    margin-bottom: 10px;
  }

  .rc .rc-section {
    margin-top: 60px;
  }

  .rc .rc-download {
    margin-top: 80px;
    padding-top: 20px;
    border-top: 1px solid var(--rc-border);
  }

  .rc .rc-download a {
    color: var(--rc-accent);
    text-decoration: none;
    font-weight: 600;
  }

  .rc .rc-download a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .rc p, .rc ul {
      font-size: 16px;
    }
  }
</style>

<div class="rc">
  <div class="rc-container">

    <h1>Remote Control Design (Concept)</h1>

    <div class="rc-image">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9315aa241631277.695cc3c087dbf.png" alt="Remote control evolution design" loading="lazy" />
    </div>

    <p class="rc-lead">
      This project explores the evolution of remote control design, transitioning from traditional button-heavy layouts to modern, intelligent interfaces.
    </p>

    <div class="rc-section">
      <h2>Smart Remote with a Screen</h2>

      <p>
        The final concept introduces a touchscreen interface combined with minimal physical controls,
        creating a more adaptive and user-focused experience.
      </p>

      <p>
        Instead of fixed buttons, the interface becomes dynamic—allowing users to personalize
        controls based on context and usage.
      </p>

      <ul>
        <li>Quick-access shortcuts for streaming platforms</li>
        <li>Essential physical controls (volume, playback, voice)</li>
        <li>Integrated clock and contextual information display</li>
      </ul>
    </div>

    <div class="rc-image">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7dc8cc241631277.695cc3c08904d.png" alt="Smart remote interface" loading="lazy" />
    </div>

    <div class="rc-section">
      <h2>Impact</h2>

      <p>
        This evolution represents a shift from tool-driven design to a more intuitive,
        experience-driven approach. By blending hardware and software, the remote becomes
        more than a controller—it becomes an interface for interaction.
      </p>
    </div>

    <div class="rc-image">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7f2d35241631277.695cc3c0884e0.png" alt="Remote UI concept" loading="lazy" />
    </div>

    <div class="rc-image">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9e8666241631277.695cc3c088a26.png" alt="Remote UI variation" loading="lazy" />
    </div>

    <div class="rc-download">
      <p>Download high-resolution screens (4K):</p>
      <a href="https://drive.google.com/drive/folders/1-8ligSMkWF_3HINeeVOAzp5IqK3pld86?usp=drive_link" target="_blank" rel="noopener noreferrer">
        View Files →
      </a>
    </div>

  </div>
</div>`,
    link: '',
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






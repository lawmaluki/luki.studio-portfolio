
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
    image: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1777365855/Frame_32_hbl99t.png',
    summary: 'The Future of Atmospheric Living.',
    year: '2025',
    role: 'Product Designer & Frontend Engineer',
    description: `<style>
  .case-study {
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(24px, 5vw, 72px) clamp(16px, 4vw, 40px);
    color: #f5f5f5;
    line-height: 1.7;
  }

  .case-study h1 {
    font-size: clamp(2rem, 6vw, 4.5rem);
    line-height: 1.05;
    margin-bottom: 18px;
    letter-spacing: -0.04em;
  }

  .case-study h2 {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    margin: 64px 0 18px;
    letter-spacing: -0.03em;
  }

  .case-study h3 {
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    margin: 34px 0 10px;
    color: #ffffff;
  }

  .case-study p {
    font-size: clamp(1rem, 1.4vw, 1.12rem);
    color: rgba(255, 255, 255, 0.72);
    margin: 0 0 18px;
  }

  .case-study strong {
    color: #ffffff;
    font-weight: 700;
  }

  .case-study em {
    color: rgba(255, 255, 255, 0.58);
  }

  .hero-text {
    max-width: 780px;
    margin-bottom: 36px;
  }

  .eyebrow {
    display: inline-flex;
    margin-bottom: 18px;
    padding: 8px 14px;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.75);
    font-size: 0.85rem;
  }

  .case-image,
  .image-grid img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 28px;
    object-fit: cover;
    box-shadow: 0 24px 80px rgba(0,0,0,0.35);
  }

  figure {
    margin: 32px 0;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 3vw, 28px);
    margin: 36px 0;
  }

  .content-card {
    padding: clamp(22px, 4vw, 36px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 28px;
    background:
      radial-gradient(circle at top left, rgba(255, 196, 87, 0.12), transparent 35%),
      rgba(255,255,255,0.045);
    backdrop-filter: blur(16px);
    margin: 28px 0;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 28px;
  }

  .feature {
    padding: 22px;
    border-radius: 22px;
    background: rgba(255,255,255,0.055);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .impact-list {
    display: grid;
    gap: 14px;
    margin-top: 20px;
  }

  .impact-item {
    padding: 18px 20px;
    border-radius: 18px;
    background: rgba(255,255,255,0.055);
    border: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.78);
  }

  .thank-you {
    text-align: center;
    margin: 70px auto 32px;
    max-width: 680px;
  }

  @media (max-width: 768px) {
    .image-grid,
    .feature-grid {
      grid-template-columns: 1fr;
    }

    .case-study h2 {
      margin-top: 48px;
    }

    .case-image,
    .image-grid img {
      border-radius: 20px;
    }
  }
</style>

<section class="case-study">
  <div class="hero-text">
    <span class="eyebrow">Smart Home UI · Product Design · Frontend Concept</span>

    <h1>POSCO Smart Home Control Panel UI</h1>

    <p>
      <em>The Future of Atmospheric Living</em>
    </p>
  </div>

  <figure>
    <img
      class="case-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/73062f242563769.696fa8e609cd6.png"
      alt="POSCO Smart Home Control Panel UI"
      width="1200"
      height="868"
      loading="lazy"
    >
  </figure>

  <div class="content-card">
    <h2>My Vision</h2>

    <p>
      Modern smart homes often feel like spreadsheets — cluttered, clinical, and overly technical.
    </p>

    <p>
      <strong>Aurora Home OS</strong> is my concept for transforming home management into a calm,
      sensory experience. Instead of designing another traditional control panel, I focused on creating
      a living interface that adapts to the time of day, mood, and comfort of the inhabitants.
    </p>
  </div>

  <h2>Design Language</h2>

  <div class="feature-grid">
    <div class="feature">
      <h3>Glassmorphism 2.0</h3>
      <p>Deep blur, soft glow, and layered transparency create depth without visual noise.</p>
    </div>

    <div class="feature">
      <h3>OLED-Optimized</h3>
      <p>A true-black foundation reduces glare, saves energy, and feels elegant at night.</p>
    </div>

    <div class="feature">
      <h3>Tactile Digitalism</h3>
      <p>Large touch zones and physical-inspired controls make the interface easier to use.</p>
    </div>
  </div>

  <h2>Functional Breakdown</h2>

  <div class="content-card">
    <h3>1. The “Glance” Sidebar</h3>
    <p>
      Since users often check time, weather, and quick status first, the left section acts as a permanent
      status pillar. One-tap lighting scenes such as Gold, Beige, and White allow instant mood changes
      without navigating through menus.
    </p>

    <h3>2. The Smart Thermal Core</h3>
    <p>
      Instead of relying on basic plus and minus buttons, the climate system uses a progressive arc dial.
      The interface visually responds as the user adjusts the temperature, creating a more intuitive
      sense of warmth and comfort.
    </p>

    <h3>3. The Hybrid Dock</h3>
    <p>
      Key actions like Temperature, Light, and Security remain fixed in a high-contrast bottom dock.
      This keeps essential controls accessible even in low-light moments or when the user is in a hurry.
    </p>
  </div>

  <div class="image-grid">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8addef242563769.696fa8e49477d.png" alt="Smart home lighting scene interface" width="1200" height="675" loading="lazy">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/205270242563769.696fa8e493f63.png" alt="Smart home temperature control interface" width="1200" height="675" loading="lazy">
  </div>

  <h2>The Impact</h2>

  <p><em>No formal testing was conducted — these results are projected.</em></p>

  <div class="impact-list">
    <div class="impact-item">
      <strong>35% projected reduction</strong> in time-to-task for climate adjustments.
    </div>

    <div class="impact-item">
      <strong>User sentiment:</strong> Designed to feel calming and premium rather than overly technological.
    </div>

    <div class="impact-item">
      <strong>Accessibility:</strong> High-contrast readouts improve visibility from a distance.
    </div>
  </div>

  <figure>
    <img
      class="case-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/350696242563769.696fa8e60a1db.png"
      alt="POSCO Smart Home Control Panel UI preview"
      width="1200"
      height="675"
      loading="lazy"
    >
  </figure>

  <div class="image-grid">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d2b285242563769.696fa8e5493e3.png" alt="Smart home control panel detail screen" width="1200" height="675" loading="lazy">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4fe5f2242563769.696fa8e54993b.png" alt="Smart home dashboard visual detail" width="1200" height="675" loading="lazy">
  </div>

  <div class="content-card">
    <h2>Key Takeaways</h2>

    <p>
      By prioritizing <strong>visual hierarchy</strong>, <strong>negative space</strong>, and
      <strong>high-affordance controls</strong>, this concept shows how a smart home interface can become
      digital furniture — not just another utility screen.
    </p>
  </div>

  <div class="thank-you">
    <h2>Thank You</h2>
    <p><strong>For more information about this project, feel free to reach out.</strong></p>
  </div>

  <figure>
    <img
      class="case-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5e1177242563769.696fa8e60aa7a.png"
      alt="Final POSCO Smart Home Control Panel UI showcase"
      width="1200"
      height="745"
      loading="lazy"
    >
  </figure>
</section>`,
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






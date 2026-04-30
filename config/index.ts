
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
    border-left: 5px solid var(--cb-accent);
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






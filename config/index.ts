
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
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245595/Screen_K_lxbi66.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245595/Screen_D_zgjmxs.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245595/Screen_A_lhhcyu.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245595/Screen_B_onzsny.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_L_n9stmr.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_C_ok5cno.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_F_f8qfad.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_M_ys0rl1.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_G_fkqrax.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245596/Screen_E_rymv8o.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245597/Screen_I_ul6itb.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245597/Screen_J_wftnej.png' },
  { slug: '', title: '', category: 'Spotlight', tags: [], image: null, summary: '', year: '', role: '', description: '', link: 'https://res.cloudinary.com/dhlpswcjl/image/upload/v1784245597/Screen_H_lwxrfw.png' },
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
    slug: 'akropolis',
    title: 'Akropolis',
    category: 'Project',
    tags: ['Product Design', 'Social Platform', 'Mobile Design'],
    image: 'https://cdn.dribbble.com/userupload/48481724/file/3f5bb96013f0c1ef7876abcd680c8581.png?resize=752x&vertical=center',
    summary: 'A video-first social platform designed to encourage healthier online discussions by replacing text comments with authentic video responses.',
    year: '2024',
    role: 'Product Designer',
    description: `<style>
  .ak {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --ink: #2d2d2d;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f3f4f6;
    --accent: #3157d5;
    --deep: #141b2f;
    --radius: 10px;
  }
  .ak * { box-sizing: border-box; }
  .ak img { display: block; width: 100%; height: auto; border-radius: var(--radius); }
  .ak a { color: inherit; text-decoration: none; }
  .ak .page { overflow: hidden; }
  .ak .section { padding: 80px 24px; }
  .ak .section.alt { background: var(--soft); }
  .ak .wrap { width: min(1120px, 100%); margin: 0 auto; }
  .ak .narrow { width: min(780px, 100%); margin: 0 auto; }
  .ak .hero { padding: 64px 24px 48px; }
  .ak .hero-cover { margin: 0; }
  .ak .hero-cover img { border-radius: 0; max-height: 72vh; object-fit: cover; }
  .ak .hero-inner { width: min(1120px, 100%); margin: 0 auto; }
  .ak .eyebrow { margin: 0 0 18px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .ak h1, .ak h2, .ak h3 { margin: 0; line-height: 1.1; letter-spacing: 0; color: #2d2d2d; }
  .ak h1 { max-width: 900px; font-size: clamp(48px, 7vw, 88px); font-weight: 800; }
  .ak h2 { margin-bottom: 20px; font-size: clamp(26px, 3.8vw, 44px); font-weight: 700; }
  .ak h3 { margin: 28px 0 10px; font-size: 20px; font-weight: 700; }
  .ak p { margin: 0 0 16px; }
  .ak ul, .ak ol { margin: 0 0 18px; padding-left: 26px; }
  .ak li { margin-bottom: 6px; }
  .ak strong { font-weight: 700; color: var(--ink); }
  .ak .lead { max-width: 760px; margin-top: 22px; color: var(--muted); font-size: clamp(20px, 2.4vw, 28px); line-height: 1.36; }
  .ak .section-label { margin: 0 0 12px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .ak .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .ak .meta-item { min-height: 140px; padding: 24px 28px; background: var(--panel); }
  .ak .meta-item span { display: block; margin-bottom: 10px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .ak .meta-item strong { display: block; font-size: 18px; line-height: 1.4; font-weight: 600; }
  .ak .shot { overflow: hidden; border-radius: var(--radius); background: var(--panel); box-shadow: 0 18px 60px rgba(13, 12, 34, 0.08); margin-top: 36px; }
  .ak .shot img { border-radius: 0; }
  .ak .callout { margin: 28px 0; padding: 28px 32px; background: var(--soft); border-radius: var(--radius); font-size: 21px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .ak .loop { margin: 20px 0; padding: 22px 28px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); font-size: 15px; font-weight: 600; color: var(--accent); letter-spacing: 0.02em; }
  /* Carousel */
  .ak .carousel { margin-top: 36px; }
  .ak .carousel input[type="radio"] { display: none; }
  .ak .carousel-slides { position: relative; border-radius: var(--radius); overflow: hidden; background: var(--soft); box-shadow: 0 18px 60px rgba(13,12,34,0.08); }
  .ak .carousel-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.3s ease; }
  .ak .carousel-slide img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .ak .carousel-thumbs { display: flex; gap: 8px; margin-top: 12px; justify-content: center; flex-wrap: wrap; }
  .ak .carousel-thumbs label { cursor: pointer; border-radius: 6px; overflow: hidden; border: 2px solid transparent; transition: border-color 0.2s; }
  .ak .carousel-thumbs label img { display: block; width: 80px; height: 54px; object-fit: cover; border-radius: 0; opacity: 0.5; transition: opacity 0.2s; }
  .ak .carousel-thumbs label:hover img { opacity: 0.8; }
  #ak-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1),
  #ak-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2),
  #ak-c1-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #ak-c1-1:checked ~ .carousel-thumbs label:nth-child(1),
  #ak-c1-2:checked ~ .carousel-thumbs label:nth-child(2),
  #ak-c1-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); }
  #ak-c1-1:checked ~ .carousel-thumbs label:nth-child(1) img,
  #ak-c1-2:checked ~ .carousel-thumbs label:nth-child(2) img,
  #ak-c1-3:checked ~ .carousel-thumbs label:nth-child(3) img { opacity: 1; }
  #ak-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1),
  #ak-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2),
  #ak-c2-3:checked ~ .carousel-slides .carousel-slide:nth-child(3),
  #ak-c2-4:checked ~ .carousel-slides .carousel-slide:nth-child(4),
  #ak-c2-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #ak-c2-1:checked ~ .carousel-thumbs label:nth-child(1),
  #ak-c2-2:checked ~ .carousel-thumbs label:nth-child(2),
  #ak-c2-3:checked ~ .carousel-thumbs label:nth-child(3),
  #ak-c2-4:checked ~ .carousel-thumbs label:nth-child(4),
  #ak-c2-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--accent); }
  #ak-c2-1:checked ~ .carousel-thumbs label:nth-child(1) img,
  #ak-c2-2:checked ~ .carousel-thumbs label:nth-child(2) img,
  #ak-c2-3:checked ~ .carousel-thumbs label:nth-child(3) img,
  #ak-c2-4:checked ~ .carousel-thumbs label:nth-child(4) img,
  #ak-c2-5:checked ~ .carousel-thumbs label:nth-child(5) img { opacity: 1; }
  .ak .footer { padding: 80px 24px; background: var(--panel); border-top: 1px solid var(--line); text-align: center; }
  .ak .footer h2 { color: var(--ink); }
  .ak .footer p { width: min(720px, 100%); margin: 18px auto 0; color: var(--muted); }
  @media (max-width: 880px) {
    .ak .section { padding: 60px 20px; }
    .ak .hero { padding: 48px 20px 36px; }
    .ak .meta-grid { grid-template-columns: repeat(2, 1fr); }
    .ak .meta-item { min-height: auto; }
  }
  .dark .ak { color: #d1d5db; --ink: #e5e7eb; --panel: #1f2937; --line: #374151; --muted: #9ca3af; --soft: #111827; }
  .dark .ak h1, .dark .ak h2, .dark .ak h3 { color: #f3f4f6; }
  .dark .ak p { color: #9ca3af; }
  .dark .ak strong { color: #e5e7eb; }
  .dark .ak .section.alt { background: #111827; }
  .dark .ak .meta-item { background: #1f2937; }
  .dark .ak .shot { background: #1f2937; box-shadow: 0 18px 60px rgba(0,0,0,0.4); }
  .dark .ak .callout { background: #1f2937; color: #d1d5db; }
  .dark .ak .loop { background: #1f2937; border-color: #374151; }
</style>

<div class="ak">
  <main class="page">

    <header class="hero">
      <div class="hero-inner">
        <p class="eyebrow">Product Design Case Study</p>
        <h1>Akropolis</h1>
        <p class="lead">How do you encourage healthier online discussions by replacing text with video while creating a sustainable engagement model?</p>
      </div>
    </header>

    <figure class="hero-cover">
      <img src="https://cdn.dribbble.com/userupload/48481724/file/3f5bb96013f0c1ef7876abcd680c8581.png?resize=752x&vertical=center" alt="Akropolis product overview">
    </figure>

    <section class="meta-grid" aria-label="Project details">
      <div class="meta-item">
        <span>Role</span>
        <strong>Product Designer</strong>
      </div>
      <div class="meta-item">
        <span>Timeline</span>
        <strong>12 Weeks</strong>
      </div>
      <div class="meta-item">
        <span>Platform</span>
        <strong>Android &amp; iOS</strong>
      </div>
      <div class="meta-item">
        <span>Responsibilities</span>
        <strong>Product Strategy, UX Research, UI Design, Design System, Prototyping</strong>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">The Problem</p>
        <h2>Solving a Behavioral and Product Strategy Problem</h2>
        <p>Online discussions have become increasingly reactive. Most conversations happen through short text comments that <strong>strip away tone, emotion, and intent</strong> — often leading to misunderstandings, hostility, and low-quality engagement.</p>
        <p>Akropolis explores a different approach by replacing traditional text discussions with <strong>video responses</strong>. The goal was to design a platform where people communicate more authentically, rewarding thoughtful participation while creating healthier online communities.</p>
        <div class="callout">How do you fix online discourse without building a ghost town?</div>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48482781/file/9b44a828a51b9f1ff1a92645dfd225bf.png?resize=752x&vertical=center" alt="Akropolis platform screens">
        </div>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48482780/file/ac037490bc1c521eb896375ddc3be2b1.png?resize=752x&vertical=center" alt="Akropolis platform detail">
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">Research</p>
        <h2>Understanding the Pain Points</h2>
        <p>Social media has made it easier than ever to share opinions, but much harder to have meaningful conversations. While existing platforms optimize for engagement through comments, likes, and shares, they often fail to encourage understanding.</p>
        <p>Text removes emotional context. A sentence intended to be thoughtful can easily be interpreted as hostile. Combined with anonymity and rapid interactions, this creates <strong>environments where meaningful discussion becomes increasingly difficult.</strong></p>

        <div class="carousel">
          <input type="radio" name="ak-c1" id="ak-c1-1" checked>
          <input type="radio" name="ak-c1" id="ak-c1-2">
          <input type="radio" name="ak-c1" id="ak-c1-3">
          <div class="carousel-slides" style="aspect-ratio:4/3">
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482782/file/502e7d17178bc19085f5a67f7db29d3b.png?resize=752x&vertical=center" alt="User pain points analysis"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482783/file/9539f67d3072cc1c69c6f646d69bfb0a.png" alt="Research insights graphic"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482784/file/8d0ae8f69138e15634e3834704d53589.png" alt="Behavioural research graphic"></figure>
          </div>
          <div class="carousel-thumbs">
            <label for="ak-c1-1"><img src="https://cdn.dribbble.com/userupload/48482782/file/502e7d17178bc19085f5a67f7db29d3b.png?resize=752x&vertical=center" alt="Slide 1"></label>
            <label for="ak-c1-2"><img src="https://cdn.dribbble.com/userupload/48482783/file/9539f67d3072cc1c69c6f646d69bfb0a.png" alt="Slide 2"></label>
            <label for="ak-c1-3"><img src="https://cdn.dribbble.com/userupload/48482784/file/8d0ae8f69138e15634e3834704d53589.png" alt="Slide 3"></label>
          </div>
        </div>

        <h3>Moving Beyond Text-Based Discussions</h3>
        <p>During research, I analyzed how major social platforms handle discussions. X (Twitter) optimizes for speed and virality. Reddit organizes conversations well but remains heavily text-dependent. TikTok excels at video consumption but isn't designed for deep threaded discussions. YouTube supports video but relies primarily on text comments for interaction.</p>
        <p>None of these platforms were fundamentally designed around the idea that <strong>conversation itself could be video-first</strong>.</p>
        <h2>What if online conversations were designed around human presence instead of written comments?</h2>
        <p>This question became the foundation of Akropolis. Rather than treating video as a supplementary feature, Akropolis positions video as the <strong>primary language of communication</strong>. Every discussion, response, reaction, and reply is centered around video interactions.</p>

        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48482779/file/cee1afb4bca4af284f35d7a4a57adb43.png?resize=752x&vertical=center" alt="Akropolis concept screens">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Opportunity</p>
        <h2>Why Was This a Valuable Opportunity?</h2>

        <h3>1. Increasing Authenticity</h3>
        <p>Text allows people to hide emotion, intention, and accountability. Video introduces facial expressions, tone, and body language, which can increase perceived authenticity and reduce misunderstandings.</p>
        <p>Through the <strong>Engagement and Emblem systems</strong>, users are encouraged to read and understand content, provide thoughtful responses, and build credibility within the community. Rather than rewarding the loudest voices, the system aims to reward meaningful participation.</p>

        <h3>2. Creating a Healthier Community Model</h3>
        <p>Traditional moderation models rely heavily on centralized review teams, making it difficult to scale while maintaining fairness. Akropolis explores a more community-driven approach where visibility is tied to engagement quality rather than anonymous outrage.</p>
        <p>By combining video communication with reputation mechanics, users are encouraged to contribute more thoughtfully because their identity and presence are directly associated with their responses.</p>

        <h3>3. Creator-Centric Growth</h3>
        <p>The <strong>Emblem system</strong> introduced an alternative growth mechanism: users earn temporary visibility boosts through active participation. This creates a feedback loop where meaningful contributions lead to increased exposure, interactions, and reputation growth.</p>

        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48482793/file/e4ba5249d17fc7e56b082b06c7b24651.png?resize=752x&vertical=center" alt="Akropolis engagement system">
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">Understanding Users</p>
        <h2>Research Objectives</h2>
        <p>Before exploring layouts or interactions, we focused on a more fundamental question: <strong>why do online discussions often fail to create meaningful conversations?</strong></p>

        <h3>1. Why do online conversations become hostile?</h3>
        <p>We explored whether anonymity influences user behaviour, how the absence of facial expressions affects communication, and what makes users feel comfortable expressing opposing opinions. These findings established one of Akropolis' core principles: bringing human presence back into online conversations through video.</p>

        <h3>2. What motivates people to participate?</h3>
        <p>Many users consume content without responding, while others participate frequently. We explored what motivates someone to comment, why some creators consistently receive engagement, and how important visibility and reputation are within online communities. These questions shaped the engagement system where users earn points and Emblems through meaningful participation.</p>

        <h3>3. Why do users abandon discussions?</h3>
        <p>Long and cluttered comment threads, difficulty following multiple conversations, and lack of incentives to revisit discussions were key factors. These observations reinforced the need for structured, <strong>threaded video conversations that are easier to follow and more rewarding to participate in.</strong></p>

        <h3>4. How is trust established online?</h3>
        <p>We explored how users decide whether another person's opinion is credible — examining real identity versus anonymous accounts, visible expertise, tone, and authenticity conveyed through facial expressions. These findings supported making video the primary communication medium.</p>

        <h3>5. Can video improve communication?</h3>
        <p>Rather than asking how we could improve text comments, we explored whether visual communication could reduce misunderstandings, increase empathy, encourage accountability, and improve trust. <strong>This question ultimately became the foundation of the Akropolis product vision.</strong></p>

        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493088/file/ce17984d6ff10074b990d02a8ccfd6cb.png?resize=752x&vertical=center" alt="Research and user insights">
        </div>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493087/file/4bf6343b7dabf6615cffacb628b77167.jpg?resize=752x&vertical=center" alt="Competitive analysis research">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Competitive Analysis</p>
        <h2>How Existing Platforms Handle Discussion</h2>
        <p>Before designing Akropolis, I analyzed how existing social media platforms encourage discussions and where they fall short. Platforms reviewed included Reddit, X (formerly Twitter), TikTok, YouTube, Facebook, and Threads. Each approaches community engagement differently.</p>

        <h3>Discussion Structure</h3>
        <p>Are discussions easy to follow? Can users maintain meaningful conversations? Does the structure encourage dialogue or simply reactions? This highlighted the opportunity for threaded video discussions that preserve conversational flow.</p>

        <h3>Content Discovery</h3>
        <p>Trending topics, personalised recommendations, categories, and search functionality were analyzed. This influenced the design of Akropolis' discussion feed, making it easier for users to discover conversations aligned with their interests.</p>

        <h3>Community Moderation</h3>
        <p>Findings supported the inclusion of community-driven moderation, where users collectively vote on flagged content — creating a more collaborative and scalable moderation process.</p>

        <h3>Creator Incentives &amp; Engagement Loops</h3>
        <p>Rather than rewarding passive scrolling, the core engagement loop encourages active and constructive contributions.</p>
        <div class="loop">Read → Rate → Reply → Earn Engagement → Unlock Emblems → Gain Visibility → Encourage More Participation</div>

        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493086/file/76bd3d881ec507758d59b7bae3b8aa80.png?resize=752x&vertical=center" alt="Competitive analysis chart">
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">User Research</p>
        <h2>Interviews &amp; Behaviour Analysis</h2>

        <h3>Key Interview Insights</h3>
        <ul>
          <li>Users often misunderstand intent when conversations rely only on text.</li>
          <li>Many participants avoid commenting because discussions quickly become hostile.</li>
          <li>Visible identity increases accountability.</li>
          <li>People are more likely to trust someone they can see and hear.</li>
          <li>Users appreciate recognition when they contribute meaningful content.</li>
        </ul>

        <h3>Key Behavioural Observations</h3>
        <p><strong>Reactive participation</strong> — Users frequently respond immediately after reading emotionally charged content without considering alternative perspectives.</p>
        <p><strong>Passive consumption</strong> — Most users consume significantly more content than they create, making participation a key challenge.</p>
        <p><strong>Emotional content spreads faster</strong> — Content that evokes strong reactions receives more engagement than thoughtful discussions.</p>
        <p><strong>Discussion fatigue</strong> — As conversations become longer and more fragmented, users abandon them entirely.</p>
        <p><strong>Recognition drives participation</strong> — Users contribute consistently when they receive visible acknowledgment for thoughtful participation. This directly informed the design of the Engagement Level and Emblem systems.</p>

        <h3>UX Strategy</h3>
        <p>Every interaction within Akropolis was designed around one central question: <strong>How can the product make participating in meaningful discussions feel easier than simply scrolling past them?</strong></p>
        <p>The experience principles that shaped the product:</p>
        <ul>
          <li>Every interaction should feel effortless.</li>
          <li>Discovery comes before participation.</li>
          <li>Creating a video response should feel natural.</li>
          <li>Encourage positive behaviour through feedback.</li>
          <li>Build trust through transparency.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Architecture</p>
        <h2>Information Architecture</h2>
        <p>The platform needed to support a discussion model where users consume, create, and respond through video rather than text. The architecture guides users naturally through the platform while supporting the product's core engagement loop:</p>
        <div class="loop">Discover → Watch → Respond → Earn Recognition → Return</div>
        <p>One of the biggest challenges in product design is determining <strong>what deserves to be built first</strong>. For Akropolis, the primary goal was not to build another feature-rich social media platform — it was to solve one core problem exceptionally well before expanding into additional functionality.</p>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493735/file/e5105c5005734c43bcb18c8ca4100d62.png?resize=752x&vertical=center" alt="Feature prioritization framework">
        </div>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493764/file/5acab012166e58cfed1d91030ac2b15e.png?resize=752x&vertical=center" alt="Information architecture diagram">
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">Design Exploration</p>
        <h2>Transforming Strategy into User Experiences</h2>
        <p>Unlike traditional social networks where conversations happen through text comments, Akropolis required users to navigate, consume, and participate through video — presenting unique interaction challenges that couldn't be solved with visual design alone.</p>

        <h3>Phase 1 — Low-Fidelity Sketches</h3>
        <p>Quick hand-drawn sketches and rough interface concepts explored home feed layouts, video discussion pages, recording flows, user profile structures, and navigation concepts. The earliest concepts revealed that replicating existing social media layouts made Akropolis feel like another TikTok clone, encouraging a rethink around conversations instead of content consumption.</p>

        <h3>Phase 2 — Wireframing</h3>
        <p>Wireframes validated navigation, content hierarchy, screen relationships, user journeys, and interaction flow — ensuring users could move naturally from discovering discussions to participating in them.</p>

        <h3>Phase 3 — Layout Exploration</h3>
        <p>A card-based feed with larger video previews allowed users to understand each discussion before opening it. Threaded video conversations (over a continuous reply feed) preserved conversational context. Recording was integrated directly into the discussion experience to reduce friction.</p>

        <h3>Phase 4 — Navigation Exploration</h3>
        <p>Traditional social media applications prioritise content consumption. Akropolis instead prioritises participation — a distinction that shaped every navigation decision.</p>

        <h3>Phase 5 — Iteration</h3>
        <p>The final interface was the result of many small improvements: simplifying discussion cards, increasing video thumbnail sizes, reducing unnecessary recording buttons, improving engagement indicators, and introducing clearer hierarchy between original discussions and replies.</p>

        <div class="carousel">
          <input type="radio" name="ak-c2" id="ak-c2-1" checked>
          <input type="radio" name="ak-c2" id="ak-c2-2">
          <input type="radio" name="ak-c2" id="ak-c2-3">
          <input type="radio" name="ak-c2" id="ak-c2-4">
          <input type="radio" name="ak-c2" id="ak-c2-5">
          <div class="carousel-slides" style="aspect-ratio:3/2">
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493772/file/c04f4c07666b7798cc1cc68c09969c80.png?resize=752x&vertical=center" alt="Design exploration screen 1"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493766/file/fd4f80c190b5ba4f8a723b151b2744f4.png?resize=752x&vertical=center" alt="Design exploration screen 2"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493765/file/2eaf794aa57df75c1322611f1d51357c.png?resize=752x&vertical=center" alt="Design exploration screen 3"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493769/file/a7f87ad97c6e6fd206d3abad1b9d8b59.png?resize=752x514&vertical=center" alt="Design exploration screen 4"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493763/file/5b30e973fb7ac2e89a95988666de568c.png?resize=752x&vertical=center" alt="Design exploration screen 5"></figure>
          </div>
          <div class="carousel-thumbs">
            <label for="ak-c2-1"><img src="https://cdn.dribbble.com/userupload/48493772/file/c04f4c07666b7798cc1cc68c09969c80.png?resize=752x&vertical=center" alt="Slide 1"></label>
            <label for="ak-c2-2"><img src="https://cdn.dribbble.com/userupload/48493766/file/fd4f80c190b5ba4f8a723b151b2744f4.png?resize=752x&vertical=center" alt="Slide 2"></label>
            <label for="ak-c2-3"><img src="https://cdn.dribbble.com/userupload/48493765/file/2eaf794aa57df75c1322611f1d51357c.png?resize=752x&vertical=center" alt="Slide 3"></label>
            <label for="ak-c2-4"><img src="https://cdn.dribbble.com/userupload/48493769/file/a7f87ad97c6e6fd206d3abad1b9d8b59.png?resize=752x514&vertical=center" alt="Slide 4"></label>
            <label for="ak-c2-5"><img src="https://cdn.dribbble.com/userupload/48493763/file/5b30e973fb7ac2e89a95988666de568c.png?resize=752x&vertical=center" alt="Slide 5"></label>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Video Recording &amp; Design System</p>
        <h2>Reducing Hesitation, Building Consistency</h2>

        <h3>Video Recording</h3>
        <p>Recording videos requires more effort than typing text, and many users feel uncomfortable appearing on camera. The recording experience focuses on simplicity: large recording controls, live camera preview, a recording timer, a review screen, and simple editing tools. The design removes unnecessary complexity, making recording feel like a natural continuation of the conversation.</p>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493762/file/95aac2d4a06549e477a8118d28b32a66.png?resize=752x&vertical=center" alt="Video recording experience">
        </div>

        <h3>Design System</h3>
        <p>As the application evolved, maintaining consistency across dozens of screens became increasingly important. A design system was developed with reusable components, clear visual rules, and interaction standards — not only to create a visually cohesive product but to streamline collaboration with developers and make future feature development more efficient.</p>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493767/file/1b164885401ad8d9218cef387c9737ba.png?resize=752x567&vertical=center" alt="Akropolis design system">
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">Technical &amp; Success</p>
        <h2>Designing with Engineering in Mind</h2>
        <p>I considered the engineering implications behind each feature to ensure proposed solutions were not only desirable for users but also feasible for development. Video files require significantly more bandwidth, storage, and processing power than text or images — poor performance causes users to abandon the experience.</p>
        <p>Akropolis is designed for both Android and iOS. Working with Flutter developers meant considering how design decisions would translate into implementation. Components, interaction states, spacing rules, and design specifications were organized to support efficient developer handoff.</p>

        <h3>Measuring Success</h3>
        <p>A successful product is measured by how effectively it solves user problems and supports business objectives over time. By focusing on behavioural and community metrics rather than vanity metrics, Akropolis can continuously evaluate whether it is delivering healthier, more engaging conversations while supporting sustainable platform growth.</p>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493792/file/3081220b28cb040834620b85a67e4d5c.png?resize=752x&vertical=center" alt="Success metrics dashboard">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Reflection</p>
        <h2>What I Learned</h2>
        <p><strong>Designing for Human Behaviour</strong> — One of the biggest lessons was that product design is fundamentally about influencing behaviour. Small decisions — how users are rewarded, how discussions are structured, how visibility is earned — can significantly shape the way people interact with one another.</p>
        <p><strong>Thinking Beyond Individual Screens</strong> — The real challenge lay in connecting every part of the experience into a cohesive ecosystem. Each screen needed to contribute to the overall product vision, not just solve a single interface problem.</p>
        <p><strong>Balancing User Needs with Business Goals</strong> — Design decisions around the Emblem system, community moderation, and creator visibility were all made with a clear understanding of how they would contribute to platform growth and retention.</p>
        <p><strong>My Biggest Takeaway</strong> — Akropolis fundamentally changed the way I think about product design. This project demonstrated that great design doesn't simply design screens — it helps define product direction, connects user needs with business goals, anticipates technical realities, and creates scalable experiences built to grow.</p>
        <div class="shot">
          <img src="https://cdn.dribbble.com/userupload/48493793/file/568a4da5f45cd42e5f3f1ed447f309d5.png?resize=752x&vertical=center" alt="Final Akropolis screens">
        </div>
      </div>
    </section>

    <footer class="footer">
      <h2>Thank You</h2>
      <p>Akropolis is a product design case study exploring how video-first communication, reputation mechanics, and community-driven moderation can create healthier and more meaningful online discussions.</p>
    </footer>

  </main>
</div>`,
    link: '',
  },
  {
    slug: 'kyc-verification-flow',
    title: 'ID / Passport Verification Flow',
    category: 'Project',
    tags: ['UX Design', 'Fintech', 'Mobile Design'],
    image: 'https://cdn.dribbble.com/userupload/48405551/file/face702b53244c049e006ae11dec73d7.png?resize=1600x904&vertical=center',
    summary: 'A modern identity verification experience designed to reduce onboarding friction through guided document capture, live edge detection, intelligent validation, and biometric face matching.',
    year: '2025',
    role: 'UX Designer',
    description: `<style>
  .kyc {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --ink: #2d2d2d;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f3f4f6;
    --blue: #2563eb;
    --cyan: #14b8a6;
    --amber: #f59e0b;
    --navy: #14213d;
    --radius: 8px;
  }
  .kyc * { box-sizing: border-box; }
  .kyc img { display: block; width: 100%; height: auto; border-radius: var(--radius); }
  .kyc a { color: inherit; }
  .kyc .page { overflow: hidden; }
  .kyc .section { padding: 84px 24px; }
  .kyc .section.alt { background: var(--soft); }
  .kyc .wrap { width: min(1120px, 100%); margin: 0 auto; }
  .kyc .narrow { width: min(780px, 100%); margin: 0 auto; }
  .kyc .hero { padding: 64px 24px 48px; }
  .kyc .hero-cover { margin: 0; }
  .kyc .hero-cover img { border-radius: 0; max-height: 72vh; object-fit: cover; }
  .kyc .hero-inner { width: min(1120px, 100%); margin: 0 auto; }
  .kyc .eyebrow { margin: 0 0 18px; color: var(--blue); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .kyc h1, .kyc h2, .kyc h3 { margin: 0; line-height: 1.08; letter-spacing: 0; color: #2d2d2d; }
  .kyc h1 { max-width: 900px; font-size: clamp(48px, 7vw, 88px); font-weight: 800; }
  .kyc h2 { margin-bottom: 24px; font-size: clamp(34px, 4.5vw, 58px); font-weight: 700; }
  .kyc h3 { margin: 0 0 12px; font-size: 23px; }
  .kyc p { margin: 0 0 18px; }
  .kyc .lead { max-width: 760px; margin-top: 22px; color: var(--muted); font-size: clamp(20px, 2.4vw, 28px); line-height: 1.36; }
  .kyc .section-label { margin: 0 0 12px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .kyc .meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .kyc .meta-item { min-height: 150px; padding: 28px; background: var(--panel); }
  .kyc .meta-item span { display: block; margin-bottom: 10px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .kyc .meta-item strong { display: block; font-size: 21px; line-height: 1.35; }
  .kyc .callout { margin: 32px 0; padding: 28px; background: var(--soft); border-radius: var(--radius); font-size: 23px; line-height: 1.42; color: var(--ink); }
  .kyc .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 22px 0 0; list-style: none; }
  .kyc .pill-list li { padding: 8px 12px; background: #e9f8f5; border: 1px solid #c8eee8; border-radius: 999px; color: #0f766e; font-size: 14px; font-weight: 600; }
  .kyc .visual-band { padding: 24px; background: #0b1020; }
  .kyc .visual-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; align-items: start; }
  .kyc .visual-grid figure { aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .kyc .visual-grid figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .kyc figure { margin: 0; }
  .kyc figure + figure, .kyc p + figure, .kyc figure + p { margin-top: 30px; }
  .kyc .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 30px; }
  .kyc .card { padding: 24px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .kyc .card h3 { margin-bottom: 10px; }
  .kyc .step-grid { display: grid; gap: 18px; margin-top: 30px; counter-reset: step; }
  .kyc .step { position: relative; padding: 26px 26px 26px 86px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .kyc .step::before { counter-increment: step; content: counter(step); position: absolute; top: 24px; left: 26px; display: grid; width: 38px; height: 38px; place-items: center; color: white; background: var(--blue); border-radius: 50%; font-weight: 800; }
  .kyc .check-list { display: grid; gap: 10px; padding: 0; margin: 16px 0 0; list-style: none; }
  .kyc .check-list li { position: relative; padding-left: 26px; }
  .kyc .check-list li::before { content: ""; position: absolute; top: 0.72em; left: 0; width: 9px; height: 9px; background: var(--cyan); border-radius: 50%; }
  .kyc .principles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 28px; }
  .kyc .principle { padding: 26px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .kyc .framework { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 30px 0; }
  .kyc .phase { padding: 22px; min-height: 150px; color: white; background: var(--navy); border-radius: var(--radius); }
  .kyc .phase:nth-child(2) { background: var(--blue); }
  .kyc .phase:nth-child(3) { background: var(--cyan); color: #062522; }
  .kyc .phase:nth-child(4) { background: var(--amber); color: #271800; }
  .kyc .gallery { display: grid; gap: 24px; margin-top: 34px; }
  .kyc .gallery.two { grid-template-columns: repeat(2, 1fr); align-items: start; }
  .kyc .gallery.two figure { aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .kyc .gallery.two figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .kyc .footer { padding: 80px 24px; background: var(--panel); border-top: 1px solid var(--line); text-align: center; }
  .kyc .footer h2 { color: var(--ink); }
  .kyc .footer p { width: min(720px, 100%); margin: 18px auto 0; color: var(--muted); }
  .kyc .footer-sources { margin-top: 48px; }
  .kyc .footer-sources-label { margin: 0 0 16px; color: var(--muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .kyc .footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .kyc .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); color: var(--ink); font-size: 14px; font-weight: 600; text-decoration: none; transition: border-color 0.15s; }
  .kyc .footer-links a:hover { border-color: var(--blue); }
  /* Carousel */
  .kyc .carousel { margin-top: 34px; }
  .kyc .carousel input[type="radio"] { display: none; }
  .kyc .carousel-slides { position: relative; border-radius: var(--radius); overflow: hidden; aspect-ratio: 16/9; background: var(--soft); }
  .kyc .carousel-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.3s ease; }
  .kyc .carousel-slide img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .kyc .carousel-thumbs { display: flex; gap: 8px; margin-top: 12px; justify-content: center; flex-wrap: wrap; }
  .kyc .carousel-thumbs label { cursor: pointer; border-radius: 6px; overflow: hidden; border: 2px solid transparent; transition: border-color 0.2s; }
  .kyc .carousel-thumbs label img { display: block; width: 80px; height: 54px; object-fit: cover; border-radius: 0; opacity: 0.5; transition: opacity 0.2s; }
  .kyc .carousel-thumbs label:hover img { opacity: 0.8; }
  /* Carousel 1 — 4 slides */
  #kyc-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1),
  #kyc-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2),
  #kyc-c1-3:checked ~ .carousel-slides .carousel-slide:nth-child(3),
  #kyc-c1-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #kyc-c1-1:checked ~ .carousel-thumbs label:nth-child(1),
  #kyc-c1-2:checked ~ .carousel-thumbs label:nth-child(2),
  #kyc-c1-3:checked ~ .carousel-thumbs label:nth-child(3),
  #kyc-c1-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--blue); }
  #kyc-c1-1:checked ~ .carousel-thumbs label:nth-child(1) img,
  #kyc-c1-2:checked ~ .carousel-thumbs label:nth-child(2) img,
  #kyc-c1-3:checked ~ .carousel-thumbs label:nth-child(3) img,
  #kyc-c1-4:checked ~ .carousel-thumbs label:nth-child(4) img { opacity: 1; }
  /* Carousel 2 — 3 slides */
  #kyc-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1),
  #kyc-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2),
  #kyc-c2-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #kyc-c2-1:checked ~ .carousel-thumbs label:nth-child(1),
  #kyc-c2-2:checked ~ .carousel-thumbs label:nth-child(2),
  #kyc-c2-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--blue); }
  #kyc-c2-1:checked ~ .carousel-thumbs label:nth-child(1) img,
  #kyc-c2-2:checked ~ .carousel-thumbs label:nth-child(2) img,
  #kyc-c2-3:checked ~ .carousel-thumbs label:nth-child(3) img { opacity: 1; }
  @media (max-width: 880px) {
    .kyc .section { padding: 64px 20px; }
    .kyc .hero { padding: 48px 20px 36px; }
    .kyc .meta, .kyc .visual-grid, .kyc .cards, .kyc .principles, .kyc .framework, .kyc .gallery.two { grid-template-columns: 1fr; }
    .kyc .meta-item { min-height: auto; }
    .kyc .step { padding: 76px 24px 24px; }
  }
  .dark .kyc { color: #d1d5db; --ink: #e5e7eb; --panel: #1f2937; --line: #374151; --muted: #9ca3af; --soft: #1f2937; }
  .dark .kyc h1, .dark .kyc h2, .dark .kyc h3 { color: #f3f4f6; }
  .dark .kyc p { color: #9ca3af; }
  .dark .kyc .section.alt { background: #1f2937; }
  .dark .kyc .meta-item { background: #1f2937; }
  .dark .kyc .card { background: #1f2937; border-color: #374151; }
  .dark .kyc .step { background: #1f2937; border-color: #374151; }
  .dark .kyc .principle { background: #1f2937; border-color: #374151; }
  .dark .kyc .pill-list li { background: #374151; border-color: #4b5563; color: #d1d5db; }
</style>

<div class="kyc">
  <main class="page">
    <header class="hero">
      <div class="hero-inner">
        <p class="eyebrow">UX Case Study / KYC Flow</p>
        <h1>ID / Passport Verification Flow</h1>
        <p class="lead">A modern identity verification experience designed to reduce onboarding friction through guided document capture, live edge detection, intelligent validation, and biometric face matching.</p>
      </div>
    </header>

    <figure class="hero-cover">
      <img src="https://cdn.dribbble.com/userupload/48405551/file/face702b53244c049e006ae11dec73d7.png?resize=1600x904&vertical=center" alt="ID / Passport Verification Flow cover">
    </figure>

    <section class="meta" aria-label="Project details">
      <div class="meta-item">
        <span>Tools</span>
        <strong>Figma</strong>
      </div>
      <div class="meta-item">
        <span>Detailing</span>
        <strong>Auto Layout, Components, Variables, Prototyping</strong>
      </div>
      <div class="meta-item">
        <span>Focus</span>
        <strong>Fintech, HR Tech, KYC, Mobile Design, Identity Verification</strong>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Overview</p>
        <h2>Making Verification Feel Simple, Trustworthy, and Effortless</h2>
        <p>Identity verification is often the biggest source of friction during onboarding. Many users abandon registration because scanning IDs feels confusing, slow, or unreliable.</p>
        <p>The goal was to support multiple document types across different regions while helping users complete verification with confidence.</p>
        <ul class="pill-list">
          <li>Fast</li>
          <li>Guided</li>
          <li>Trustworthy</li>
          <li>Human</li>
          <li>Error-resistant</li>
        </ul>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">The Challenge</p>
        <h2>KYC Is Essential, but It Often Feels Intimidating</h2>
        <p>Identity verification is one of the first moments where users decide whether to continue with a product or abandon it altogether. Users are expected to capture a perfect photo of their ID without much guidance.</p>
        <p>They struggle with positioning the document correctly, dealing with glare or poor lighting, and understanding why a scan failed. Even after submitting their document, they are often left staring at a loading screen with no indication of what is happening behind the scenes.</p>
        <div class="callout">The project reframed verification from a technical requirement into a guided journey that gives users confidence at every step.</div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <h2>Goals</h2>
        <p>The experience was designed around five practical goals that prevent failure before it happens.</p>
        <div class="cards">
          <article class="card">
            <h3>Guide Early</h3>
            <p>Educate users before scanning instead of showing errors afterwards.</p>
          </article>
          <article class="card">
            <h3>Reduce Failed Scans</h3>
            <p>Provide overlays, edge detection, and lighting guidance.</p>
          </article>
          <article class="card">
            <h3>Build Trust</h3>
            <p>Show exactly what the system is doing during verification.</p>
          </article>
          <article class="card">
            <h3>Lower Cognitive Load</h3>
            <p>Break verification into small, manageable steps.</p>
          </article>
          <article class="card">
            <h3>Support Global Documents</h3>
            <p>Handle national IDs, passports, and residence permits without redesigning the interface.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <h2>Understanding the UI System Flow</h2>
        <p>The verification journey is broken into clear stages so each screen answers one user question at a time.</p>
        <div class="step-grid">
          <article class="step">
            <h3>Identity Selection</h3>
            <p>Users first choose which document they want to verify. Different document types require different capture rules, so selection makes the rest of the flow easier to understand.</p>
          </article>
          <article class="step">
            <h3>Guided Education</h3>
            <p>Before opening the camera, a quick visual tutorial explains correct placement, proper lighting, full document framing, and glare avoidance.</p>
          </article>
          <article class="step">
            <h3>Live Camera Scanner</h3>
            <p>The scanner uses auto edge detection, dynamic frame alignment, live document recognition, visual confidence indicators, and automatic capture when quality requirements are met.</p>
          </article>
          <article class="step">
            <h3>Intelligent Validation</h3>
            <p>The system validates document borders, text visibility, MRZ detection, portrait quality, security features, and resolution.</p>
          </article>
          <article class="step">
            <h3>Processing State</h3>
            <p>Instead of a static loader, users see plain-language progress states such as reading document, detecting security features, and matching identity.</p>
          </article>
          <article class="step">
            <h3>Selfie Verification</h3>
            <p>The flow continues with face guidance, automatic positioning, lighting detection, and a neutral expression reminder to improve biometric quality.</p>
          </article>
          <article class="step">
            <h3>Face Matching</h3>
            <p>The final stage compares the ID photo with the selfie and shows verification progress before confirming success.</p>
          </article>
        </div>
        <div class="gallery two" style="margin-top:48px">
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48405556/file/d4147a93c3812b6dacec89b995cce8c6.png?resize=1024x576&amp;vertical=center" alt="KYC verification overview screen">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48405553/file/3588fa5bd02bdacf8af29c9174d14464.png?resize=1024x576&amp;vertical=center" alt="Identity verification mobile flow screens">
          </figure>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="narrow">
          <h2>Design Process</h2>
          <p>Key components included verification cards, scanner overlays, progress indicators, detection nodes, success toasts, face scanner patterns, step progress bars, and camera overlays.</p>
        </div>
        <div class="carousel">
          <input type="radio" name="kyc-c1" id="kyc-c1-1" checked>
          <input type="radio" name="kyc-c1" id="kyc-c1-2">
          <input type="radio" name="kyc-c1" id="kyc-c1-3">
          <input type="radio" name="kyc-c1" id="kyc-c1-4">
          <div class="carousel-slides">
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405560/file/e6961040719e91e10fe6b6937fe62d3e.png?resize=1024x576&amp;vertical=center" alt="Document verification component set"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405559/file/c6b7d734fa3d6aaa588a4487d0c62f5a.png?resize=1024x576&amp;vertical=center" alt="Camera scanner interaction screens"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405557/file/bf8e3fa939853ff4db2d278c125c2b2f.png?resize=1024x561&amp;vertical=center" alt="Selfie verification flow screens"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405558/file/223fcdafd186244f26951f6c829fffe1.png?resize=1024x561&amp;vertical=center" alt="KYC success and progress screens"></figure>
          </div>
          <div class="carousel-thumbs">
            <label for="kyc-c1-1"><img src="https://cdn.dribbble.com/userupload/48405560/file/e6961040719e91e10fe6b6937fe62d3e.png?resize=1024x576&amp;vertical=center" alt="Slide 1"></label>
            <label for="kyc-c1-2"><img src="https://cdn.dribbble.com/userupload/48405559/file/c6b7d734fa3d6aaa588a4487d0c62f5a.png?resize=1024x576&amp;vertical=center" alt="Slide 2"></label>
            <label for="kyc-c1-3"><img src="https://cdn.dribbble.com/userupload/48405557/file/bf8e3fa939853ff4db2d278c125c2b2f.png?resize=1024x561&amp;vertical=center" alt="Slide 3"></label>
            <label for="kyc-c1-4"><img src="https://cdn.dribbble.com/userupload/48405558/file/223fcdafd186244f26951f6c829fffe1.png?resize=1024x561&amp;vertical=center" alt="Slide 4"></label>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">UX Principles</p>
        <h2>Designing for Confidence</h2>
        <div class="principles">
          <article class="principle">
            <h3>Progressive Disclosure</h3>
            <p>Information appears only when relevant, reducing cognitive overload and keeping users focused on the next action.</p>
          </article>
          <article class="principle">
            <h3>Real-Time Feedback</h3>
            <p>Live edge detection, green confirmation borders, validation checkpoints, and progress indicators reassure users that the system is working.</p>
          </article>
          <article class="principle">
            <h3>Error Prevention</h3>
            <p>The interface helps users avoid failed scans instead of relying on error messages after something goes wrong.</p>
          </article>
          <article class="principle">
            <h3>Transparency</h3>
            <p>Plain-language processing states explain when a document is being analyzed, when facial matching is in progress, and when verification is complete.</p>
          </article>
        </div>
        <div class="callout">The best verification experience is one where users rarely encounter errors because the interface helps them succeed before mistakes happen.</div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="narrow">
          <h2>Outcome</h2>
          <p>The final experience transforms a traditionally frustrating KYC process into a guided, transparent, and confidence-building journey.</p>
          <p>By combining visual education, real-time feedback, automatic validation, and progressive disclosure, the flow minimizes user effort while improving trust and increasing the likelihood of successful verification on the first attempt.</p>
        </div>
        <div class="carousel">
          <input type="radio" name="kyc-c2" id="kyc-c2-1" checked>
          <input type="radio" name="kyc-c2" id="kyc-c2-2">
          <input type="radio" name="kyc-c2" id="kyc-c2-3">
          <div class="carousel-slides">
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405554/file/e5d4050b9cf1ba6dce1e01c8abd5411e.png?resize=1024x561&amp;vertical=center" alt="Final identity verification flow overview"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405555/file/5f8e1687d141af5e7391127f307164b5.png?resize=1024x561&amp;vertical=center" alt="Final passport verification flow overview"></figure>
            <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405552/file/264c6d7653bae60e8ad3fe629b920f3f.png?resize=1024x576&amp;vertical=center" alt="KYC verification framework illustration"></figure>
          </div>
          <div class="carousel-thumbs">
            <label for="kyc-c2-1"><img src="https://cdn.dribbble.com/userupload/48405554/file/e5d4050b9cf1ba6dce1e01c8abd5411e.png?resize=1024x561&amp;vertical=center" alt="Slide 1"></label>
            <label for="kyc-c2-2"><img src="https://cdn.dribbble.com/userupload/48405555/file/5f8e1687d141af5e7391127f307164b5.png?resize=1024x561&amp;vertical=center" alt="Slide 2"></label>
            <label for="kyc-c2-3"><img src="https://cdn.dribbble.com/userupload/48405552/file/264c6d7653bae60e8ad3fe629b920f3f.png?resize=1024x576&amp;vertical=center" alt="Slide 3"></label>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">Framework</p>
        <h2>KYC Verification Framework</h2>
        <p>The framework illustrates a streamlined end-to-end identity verification process that balances security, compliance, and user experience. Instead of treating verification as a single step, it breaks the journey into four connected phases.</p>
        <div class="framework">
          <article class="phase">
            <h3>Guide</h3>
            <p>Prepare users before document capture.</p>
          </article>
          <article class="phase">
            <h3>Capture</h3>
            <p>Use live feedback to improve scan quality.</p>
          </article>
          <article class="phase">
            <h3>Validate</h3>
            <p>Analyze document data and biometric quality.</p>
          </article>
          <article class="phase">
            <h3>Confirm</h3>
            <p>Communicate completion clearly and confidently.</p>
          </article>
        </div>
        <p>Together, these stages minimize onboarding friction while maintaining high standards of identity assurance.</p>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48411004/file/42cadc74a4bd270060b0db3eef9bda29.png?resize=1024x683&amp;vertical=center" alt="KYC framework detailed screen">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Takeaways</p>
        <h2>Takeaways</h2>
        <div class="cards">
          <article class="card">
            <h3>Strategic Design Happens Before Pixels</h3>
            <p>The strongest contribution was questioning why ID and Passport verification needed separate flows. Unifying the experience made it more useful and trustworthy.</p>
          </article>
          <article class="card">
            <h3>High-Fidelity Can Accelerate Alignment</h3>
            <p>When interactions are novel, realistic UI can help stakeholders understand the concept faster.</p>
          </article>
          <article class="card">
            <h3>Trust Requires Transparency</h3>
            <p>Users should know when their document is analyzed, when facial matching is in progress, and when verification has been completed.</p>
          </article>
        </div>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48411003/file/7506c4f075c9ffa5871a43b2e68abbd1.png?resize=1024x683&amp;vertical=center" alt="Final KYC verification presentation screen">
        </figure>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <h2>Final Reflection</h2>
        <p>The biggest takeaway from this project was that great KYC design is proactive rather than reactive. Instead of relying on error messages after something goes wrong, the experience should prevent mistakes through clear guidance, real-time feedback, and transparent system communication.</p>
        <p>By balancing usability, security, and trust, the verification process becomes more than a mandatory onboarding step. It becomes an opportunity to build confidence from the very first interaction.</p>
        <p>A thoughtful KYC experience not only improves completion rates but also establishes the foundation for a long-lasting relationship between users and the product.</p>
      </div>
    </section>

    <footer class="footer">
      <h2>Thank you</h2>
      <p>ID / Passport Verification Flow is a UX exploration of how guided capture, intelligent validation, and transparent system feedback can make KYC onboarding feel clear and reliable.</p>
      <div class="footer-sources">
        
        <div class="footer-links">
          <a href="https://www.figma.com/community/file/1610377435924665179" target="_blank" rel="noopener noreferrer">Workspace ↗</a>
        </div>
      </div>
    </footer>
  </main>
</div>`,
    link: '',
  },
  {
    slug: 'designing-leveragex',
    title: 'Designing LeverageX',
    category: 'Project',
    tags: ['Product Design', 'AI', 'UX Research'],
    image: 'https://cdn.dribbble.com/userupload/48414616/file/98c08c3b67c8e1b048694ee0f30c95fe.png?resize=752x&vertical=center',
    summary: 'Building an AI-powered accountability platform that helps people actually achieve long-term goals.',
    year: '2025',
    role: 'Product Designer',
    description: `<style>
  .lx {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --ink: #2d2d2d;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --green: #ff7700;
    --orange: #ff7700;
    --mint: #e8f5ee;
    --gold: #ff7700;
    --radius: 8px;
  }
  .lx * { box-sizing: border-box; }
  .lx img { display: block; width: 100%; height: auto; border-radius: var(--radius); }
  .lx a { color: inherit; }
  .lx .page { overflow: hidden; }
  .lx .section { padding: 84px 24px; }
  .lx .section.alt { background: #f3f4f6; }
  .lx .wrap { width: min(1120px, 100%); margin: 0 auto; }
  .lx .narrow { width: min(780px, 100%); margin: 0 auto; }
  .lx .hero {
    padding: 64px 24px 48px;
  }
  .lx .hero-cover { margin: 0; }
  .lx .hero-cover img { border-radius: 0; max-height: 72vh; object-fit: cover; }
  .lx .hero-inner { width: min(1120px, 100%); margin: 0 auto; }
  .lx .eyebrow { margin: 0 0 18px; color: var(--green); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .lx h1, .lx h2, .lx h3 { margin: 0; line-height: 1.08; letter-spacing: 0; color: #2d2d2d; }
  .lx h1 { max-width: 900px; font-size: clamp(48px, 7vw, 92px); font-weight: 800; }
  .lx h2 { margin-bottom: 24px; font-size: clamp(34px, 4.5vw, 58px); font-weight: 700; }
  .lx h3 { margin: 38px 0 14px; font-size: clamp(22px, 3vw, 30px); }
  .lx p { margin: 0 0 18px; }
  .lx .lead { max-width: 720px; margin-top: 22px; color: var(--muted); font-size: clamp(20px, 2.4vw, 28px); line-height: 1.35; }
  .lx .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: -1px; background: var(--line); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .lx .meta-item { min-height: 170px; padding: 28px; background: var(--panel); }
  .lx .meta-item span { display: block; margin-bottom: 12px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .lx .meta-item strong { font-size: 21px; line-height: 1.3; }
  .lx .split { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: start; }
  .lx .sticky-label { position: sticky; top: 28px; color: #6b7280; font-size: 14px; font-weight: 700; text-transform: uppercase; }
  .lx .section-label { margin: 0 0 12px; color: #6b7280; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .lx .callout { margin: 34px 0; padding: 28px; background: var(--mint); border-radius: var(--radius); font-size: 20px; line-height: 1.5; }
  .lx .image-band { padding: 24px; background: #111814; }
  .lx .image-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; align-items: start; }
  .lx .image-grid figure { aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .lx .image-grid figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .lx figure { margin: 0; }
  .lx figure + figure, .lx p + figure, .lx figure + p { margin-top: 28px; }
  .lx figcaption { margin-top: 10px; color: var(--muted); font-size: 14px; line-height: 1.5; }
  .lx .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 28px; }
  .lx .card { padding: 24px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .lx .card h3 { margin-top: 0; font-size: 22px; }
  .lx .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 20px 0 0; list-style: none; }
  .lx .pill-list li { padding: 8px 12px; background: #eef1f4; border-radius: 999px; color: #344054; font-size: 14px; font-weight: 600; }
  .lx .numbered { counter-reset: challenge; display: grid; gap: 28px; margin-top: 36px; }
  .lx .challenge { position: relative; padding: 30px 30px 30px 86px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .lx .challenge::before { counter-increment: challenge; content: counter(challenge); position: absolute; top: 28px; left: 28px; display: grid; width: 38px; height: 38px; place-items: center; color: white; background: var(--green); border-radius: 50%; font-weight: 800; }
  .lx .challenge h3 { margin-top: 0; }
  .lx .check-list { display: grid; gap: 10px; padding: 0; margin: 18px 0 0; list-style: none; }
  .lx .check-list li { position: relative; padding-left: 28px; }
  .lx .check-list li::before { content: ""; position: absolute; top: 0.72em; left: 0; width: 10px; height: 10px; background: var(--green); border-radius: 50%; }
  .lx .quote { margin: 34px 0; padding: 34px; color: white; background: var(--green-dark); border-radius: var(--radius); font-size: 24px; line-height: 1.42; }
  .lx .score-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin: 24px 0; }
  .lx .score { padding: 24px; background: #fff; border-radius: var(--radius); box-shadow: 0 10px 35px rgba(18,20,23,0.06); }
  .lx .score strong { display: block; margin-bottom: 10px; font-size: 24px; }
  .lx .gallery { display: grid; gap: 28px; margin-top: 34px; }
  .lx .gallery.two { grid-template-columns: repeat(2, 1fr); align-items: start; }
  .lx .gallery.two figure { aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .lx .gallery.two figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .lx .metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin: 28px 0; }
  .lx .metric { padding: 24px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .lx .metric span { display: block; margin-bottom: 8px; color: var(--green); font-weight: 800; }
  .lx .reflection-list { display: grid; gap: 18px; margin-top: 28px; }
  .lx .footer { padding: 80px 24px; background: var(--panel); border-top: 1px solid var(--line); text-align: center; }
  .lx .footer h2 { color: var(--ink); }
  .lx .footer p { width: min(760px, 100%); margin: 18px auto 0; color: var(--muted); }
  .lx .footer-sources { margin-top: 48px; }
  .lx .footer-sources-label { margin: 0 0 16px; color: var(--muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .lx .footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .lx .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); color: var(--ink); font-size: 14px; font-weight: 600; text-decoration: none; transition: border-color 0.15s; }
  .lx .footer-links a:hover { border-color: var(--green); }
  @media (max-width: 860px) {
    .lx .section { padding: 64px 20px; }
    .lx .hero { padding: 48px 20px 36px; }
    .lx .meta-grid, .lx .split, .lx .image-grid, .lx .cards, .lx .score-grid, .lx .gallery.two, .lx .metrics { grid-template-columns: 1fr; }
    .lx .meta-item { min-height: auto; }
    .lx .sticky-label { position: static; }
    .lx .challenge { padding: 76px 24px 24px; }
  }
  .dark .lx { color: #d1d5db; --ink: #e5e7eb; --panel: #1f2937; --line: #374151; --muted: #9ca3af; }
  .dark .lx h1, .dark .lx h2, .dark .lx h3 { color: #f3f4f6; }
  .dark .lx p { color: #9ca3af; }
  .dark .lx .section.alt { background: #1f2937; }
  .dark .lx .meta-item { background: #1f2937; }
  .dark .lx .card { background: #1f2937; border-color: #374151; }
  .dark .lx .challenge { background: #1f2937; border-color: #374151; }
  .dark .lx .score { background: #1f2937; }
  .dark .lx .metric { background: #1f2937; border-color: #374151; }
  .dark .lx .callout { background: #1f2937; }
  .dark .lx .pill-list li { background: #374151; color: #d1d5db; }
</style>

<div class="lx">
  <main class="page">
    <header class="hero">
      <div class="hero-inner">
        <p class="eyebrow">Product Design Case Study</p>
        <h1>Designing LeverageX</h1>
        <p class="lead">Building an AI-powered accountability platform that helps people actually achieve long-term goals.</p>
      </div>
    </header>

    <figure class="hero-cover">
      <img src="https://cdn.dribbble.com/userupload/48414616/file/98c08c3b67c8e1b048694ee0f30c95fe.png?resize=752x&vertical=center" alt="Designing LeverageX cover">
    </figure>

    <section class="meta-grid" aria-label="Project summary">
      <div class="meta-item">
        <span>Role</span>
        <strong>Product Designer</strong>
      </div>
      <div class="meta-item">
        <span>Duration</span>
        <strong>3 Months</strong>
      </div>
      <div class="meta-item">
        <span>Tools</span>
        <strong>Figma, Adobe Illustrator</strong>
      </div>
      <div class="meta-item">
        <span>Responsibilities</span>
        <strong>Product Strategy,
Brand Designing,
UX Research & Design,
System & UI Design,
</strong>
      </div>
    </section>

    <section class="image-band">
      <div class="wrap image-grid">
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415210/file/fa8d09b907576ea0c6ca884337911c26.png?resize=1024x768&amp;vertical=center" alt="LeverageX product screen mockup">
        </figure>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415211/file/edeeb0615d488c72cb8c5f3afcb53f44.png?resize=1024x768&amp;vertical=center" alt="LeverageX dashboard concept">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Introduction</p>
        <h2>An Accountability System, Not Just Another Productivity App</h2>
        <p>Every year, millions of people set ambitious goals: starting a business, learning a new skill, improving their health, or advancing their careers.</p>
        <p><strong>LeverageX was designed around a different philosophy.</strong> Instead of focusing solely on task management, the platform creates a structured accountability ecosystem that encourages users to remain committed to long-term goals through measurable progress, external feedback, and intelligent guidance.</p>
        <div class="callout">The product combines structured goal planning, AI-assisted coaching, human accountability partners, progress visualization, and optional public sharing into one connected experience.</div>
        <p>Rather than relying on motivation alone, LeverageX helps users build discipline through continuous feedback and consistent action.</p>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">The Problem</p>
        <h2>Organizing Work Is Not the Same as Getting Work Done</h2>
        <p>Most productivity applications excel at helping users create lists, set reminders, and organize projects. However, many users already know what they need to do. Their biggest challenge is maintaining momentum once the initial excitement fades.</p>
        <p>Long-term goals often fail because they lack accountability, regular feedback, and clear visibility into progress. Without these mechanisms, users gradually disengage, postpone important work, and eventually abandon their objectives.</p>
        <p>LeverageX addresses this gap by shifting the focus from managing tasks to supporting long-term execution.</p>
        <div class="quote">The design vision was to create a system that transforms personal ambition into consistent execution.</div>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415208/file/cdf0442f75703d50158f815a107612f2.gif" alt="Animated LeverageX product flow">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <h2>Product Goals</h2>
        <p>Instead of asking what features the app should contain, the work centered on what the product must accomplish for users.</p>
        <div class="cards">
          <article class="card">
            <h3>Plan Clearly</h3>
            <p>Help users break long-term goals into manageable work.</p>
          </article>
          <article class="card">
            <h3>Execute Daily</h3>
            <p>Encourage consistent action without becoming intrusive.</p>
          </article>
          <article class="card">
            <h3>Build Trust</h3>
            <p>Make progress measurable while protecting user privacy.</p>
          </article>
        </div>
        <ul class="pill-list" aria-label="Core trade-offs">
          <li>Simplicity</li>
          <li>Accountability</li>
          <li>Motivation</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div class="wrap gallery two" style="margin-top:48px">
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415216/file/74f072b157ac9786f4f08a43bdf665ad.png?resize=1024x559&amp;vertical=center" alt="LeverageX product goal diagram">
        </figure>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415209/file/a3870413b6267631b3bebe1369f12949.jpg?resize=1024x603&amp;vertical=center" alt="LeverageX product planning board">
        </figure>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="narrow">
          <h2>Understanding the Core Challenges</h2>
          <p>While defining the product, we identified several behavioral problems that traditional productivity apps rarely solve.</p>
        </div>
        <div class="numbered">
          <article class="challenge">
            <h3>Long-Term Goals Feel Overwhelming</h3>
            <p>Goals such as starting a company, completing a degree, or changing careers can span months or years. LeverageX introduces a hierarchical goal structure so users always know what to focus on today.</p>
            <figure>
              <img src="https://cdn.dribbble.com/userupload/48415213/file/bc66eebe5fd7e04fd267b87c3c32c4ab.png?resize=1024x928&amp;vertical=center" alt="Goal hierarchy diagram">
            </figure>
          </article>
          <article class="challenge">
            <h3>Motivation Is Not Reliable</h3>
            <p>Motivation naturally fluctuates. Most users begin with enthusiasm but struggle to maintain consistency once daily life becomes busy or unexpected challenges appear. LeverageX emphasizes accountability instead of depending on motivation.</p>
          </article>
          <article class="challenge">
            <h3>Accountability Is Usually Missing</h3>
            <p>People are more consistent when someone else is aware of their commitments. LeverageX supports human accountability through trusted partners and AI accountability through structured weekly reviews.</p>
            <figure>
              <img src="https://cdn.dribbble.com/userupload/48415214/file/1d5222a097cffe32ab2c8bb8d0864a03.png?resize=1024x509&amp;vertical=center" alt="Accountability partner interface">
            </figure>
          </article>
          <article class="challenge">
            <h3>Progress Often Feels Invisible</h3>
            <p>To make incremental progress easier to recognize, LeverageX visualizes goal completion, daily streaks, timelines, partner ratings, recent feedback, and upcoming deadlines.</p>
          </article>
          <article class="challenge">
            <h3>Privacy Should Never Be an Afterthought</h3>
            <p>Every goal is private by default. Users explicitly decide whether a goal remains private, is shared only with accountability partners, or becomes visible in the community feed.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Architecture</p>
        <h2>Information Architecture</h2>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415226/file/6f8126edd10b4f128acd362d7ce57223.png?resize=1024x559&amp;vertical=center" alt="LeverageX information architecture">
        </figure>
        <h3>Feature Prioritization</h3>
        <div class="cards">
          <article class="card">
            <h3>Must</h3>
            <ul class="check-list">
              <li>Goal management</li>
              <li>AI accountability</li>
              <li>Reviews</li>
            </ul>
          </article>
          <article class="card">
            <h3>Should</h3>
            <ul class="check-list">
              <li>Public feed</li>
            </ul>
          </article>
          <article class="card">
            <h3>Future</h3>
            <ul class="check-list">
              <li>Archive</li>
              <li>Analytics</li>
              <li>Gamification</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">AI Experience</p>
        <h2>Designing AI as a Coach, Not a Chatbot</h2>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415215/file/468167028e8b7eea3aeeb53e5bcc73b8.jpg?resize=1024x628&amp;vertical=center" alt="AI coaching screen">
        </figure>
        <p>For LeverageX, the AI purpose was narrow and valuable: function as an objective accountability partner that helps users remain committed to their long-term goals.</p>
        <p>Instead of answering random questions, the AI reviews activity, analyzes execution patterns, evaluates submitted evidence, and delivers structured feedback that encourages consistent progress.</p>
        <div class="quote">This design keeps the AI focused on one mission: helping users execute their goals better.</div>
        <h3>Designing Trust Through Objectivity</h3>
        <p>Every review follows the same framework used by human accountability partners. Instead of vague praise, the AI explains why a score was given.</p>
        <div class="score-grid">
          <article class="score">
            <strong>85%</strong>
            <p><b>Consistency</b><br>You completed daily logs on 17 of the last 20 days.</p>
          </article>
          <article class="score">
            <strong>72%</strong>
            <p><b>Impact</b><br>Most completed actions contributed toward your monthly milestone.</p>
          </article>
          <article class="score">
            <strong>90%</strong>
            <p><b>Follow-through</b><br>Nearly every planned task was completed on schedule.</p>
          </article>
        </div>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415212/file/8f9b2f5989826271882c8ca968820105.webp?resize=1024x768&amp;vertical=center" alt="AI review details">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <h2>Balancing Automation with Human Accountability</h2>
        <p>Although AI provides continuous support, it was intentionally designed not to replace human accountability. Human partners contribute empathy, lived experience, and personal encouragement that AI cannot replicate.</p>
        <p>The AI fills the gaps with consistent availability, immediate reviews, objective scoring, and data-driven insights.</p>
        <div class="callout">The hybrid model gives users reliable automated coaching combined with meaningful human support whenever it is available.</div>
        <h3>Key Learning</h3>
        <p>The real challenge was not integrating artificial intelligence. It was defining its role within the product ecosystem. Treating AI as an accountability coach made the experience more focused, transparent, and trustworthy.</p>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <div class="narrow">
          <h2>Design Process</h2>
          <p>The process moved from persona creation and user-flow mapping through wireframing, prototyping, user testing, and high-fidelity interface design.</p>
          <ul class="pill-list">
            <li>Ideation and wireframing</li>
            <li>Prototyping and user testing</li>
            <li>Final UI</li>
            <li>Repeat</li>
          </ul>
        </div>
        <div class="gallery two" style="margin-top:48px">
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415221/file/5c5c67154300235fbf22aadc3de81dc6.png?resize=1024x954&amp;vertical=center" alt="App components screen one">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415222/file/f811daf963de5b49c40e7c4838cbee78.png?resize=1024x954&amp;vertical=center" alt="App components screen two">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415219/file/adea91bc0569262a5d5317430d82a02c.png?resize=1024x768&amp;vertical=center" alt="High fidelity LeverageX screen">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415220/file/f7ea3962326d9a79256fa7ac3097cd1a.png?resize=1024x768&amp;vertical=center" alt="High fidelity dashboard screen">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415225/file/d0815fec6fd837e955afe354f0a0990f.png?resize=1024x718&amp;vertical=center" alt="UI flow board">
          </figure>
          <figure>
            <img src="https://cdn.dribbble.com/userupload/48415227/file/24deb10cda9bda432dfb0f4000102528.png?resize=1024x718&amp;vertical=center" alt="LeverageX user interface overview">
          </figure>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Success</p>
        <h2>Measuring Success</h2>
        <p>Designing LeverageX was not just about creating an intuitive experience. It was about creating a product that helps people consistently achieve meaningful goals.</p>
        <p><strong>Most productivity apps measure created tasks. LeverageX measures completed outcomes.</strong></p>
        <div class="metrics">
          <article class="metric">
            <span>01</span>
            <strong>Goal Completion Rate</strong>
            <p>Percentage of Apex Goals successfully completed.</p>
          </article>
          <article class="metric">
            <span>02</span>
            <strong>Sub-goal Completion Rate</strong>
            <p>Percentage of weekly and monthly goals completed before deadlines.</p>
          </article>
          <article class="metric">
            <span>03</span>
            <strong>Average Time to Goal Completion</strong>
            <p>Measures how efficiently users progress toward long-term objectives.</p>
          </article>
          <article class="metric">
            <span>04</span>
            <strong>Goal Abandonment Rate</strong>
            <p>Percentage of goals moved to on hold or left inactive for extended periods.</p>
          </article>
        </div>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415217/file/e49de8c1922031fbb649ea265929c113.png?resize=1024x1024&amp;vertical=center" alt="LeverageX measurement dashboard">
        </figure>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">Reflection</p>
        <h2>Reflection</h2>
        <div class="reflection-list">
          <article class="card">
            <h3>Product Thinking</h3>
            <p>I learned that designing a feature is easy; designing behavior is much harder. Every interaction needed to encourage long-term consistency rather than short-term engagement.</p>
          </article>
          <article class="card">
            <h3>Designing for AI</h3>
            <p>The biggest challenge was defining when AI should intervene, how it should communicate feedback, and how to make recommendations feel supportive rather than judgmental.</p>
          </article>
          <article class="card">
            <h3>System Design</h3>
            <p>Working on LeverageX taught me to think beyond individual screens. Every decision had downstream effects on onboarding, accountability, notifications, privacy, and progress tracking.</p>
          </article>
          <article class="card">
            <h3>Collaboration with Engineering</h3>
            <p>Creating the PRD required business rules, validation logic, edge cases, user roles, state transitions, and success criteria. This improved how design decisions were communicated to developers.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <h2>What This Project Says About Me</h2>
        <p>Rather than focusing solely on UI, I approached LeverageX as a product designer responsible for defining how the application should work, how users progress through it, and how technical constraints shape the experience.</p>
        <p>The result is a system built around behavioral design, structured accountability, and scalable product architecture, not just polished interfaces.</p>
        <h3>Overall Takeaway</h3>
        <p>This project shifted my perspective on AI design. Instead of treating AI as a conversational assistant, I explored how it could deliver structured, transparent, and actionable feedback while complementing human accountability rather than replacing it.</p>
        <p>Creating the PRD required thinking beyond design deliverables: business rules, user flows, validation logic, edge cases, state transitions, and success criteria.</p>
        <h3>Value I Bring</h3>
        <p>Whether defining product strategy, mapping user journeys, designing interaction patterns, or documenting implementation requirements, my goal is always the same: build products that are intuitive to use, technically feasible to develop, and capable of creating lasting value for the people who rely on them.</p>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415218/file/01e472aa1e26b5a1ed451ddf57f9c751.png?resize=1024x672&amp;vertical=center" alt="Final LeverageX case study mockup">
        </figure>
      </div>
    </section>

    <footer class="footer">
      <h2>Thanks You.</h2>
      <p>LeverageX is a product design exploration into accountability, behavioral systems, AI coaching, and long-term goal execution.</p>
      <div class="footer-sources">
       
        <div class="footer-links">
          <a href="https://www.figma.com/design/yvGNrEH5SBtGyCdD9wFJSi/theHoldApp?node-id=77-4859" target="_blank" rel="noopener noreferrer">Workspace ↗</a>
          <a href="https://www.figma.com/design/yvGNrEH5SBtGyCdD9wFJSi/theHoldApp?node-id=0-1" target="_blank" rel="noopener noreferrer">Logo, Brand Visual &amp; Identity ↗</a>
        </div>
      </div>
    </footer>
  </main>
</div>`,
    link: '',
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
    name: "Samuel Mwangi",
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






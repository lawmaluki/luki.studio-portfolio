
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
    slug: 'milpress-adult-literacy',
    title: 'MilPress: Adult Literacy Platform',
    category: 'Project',
    tags: ['Product Design', 'EdTech', 'Accessibility', 'UX Research'],
    image: 'https://cdn.dribbble.com/userupload/48531860/file/65eec83f6ab4242c727a65c0d52b92f3.png?resize=752x&vertical=center',
    summary: 'Designing a mobile literacy platform that empowers adult learners through simplicity, dignity, and accessibility-first product thinking.',
    year: '2026',
    role: 'Product Designer',
    description: `<style>
  .mil {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #f59e0b;
    --amber-light: #fffbeb;
    --deep: #1c1510;
    --radius: 12px;
  }
  .mil * { box-sizing: border-box; }
  .mil img { display: block; width: 100%; height: auto; }
  .mil a { color: inherit; text-decoration: none; }
  .mil .text-block { width: min(720px, 100%); margin: 48px auto; }
  .mil .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(28,21,16,0.08), 0 24px 64px rgba(28,21,16,0.06); }
  .mil .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .mil .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .mil .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; aspect-ratio: 2/1; }
  .mil .image-grid figure img { width: 100%; height: 100%; object-fit: cover; }
  .mil h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .mil h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .mil h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .mil p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .mil ul, .mil ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .mil li { margin-bottom: 6px; }
  .mil li p { margin: 0; }
  .mil strong { font-weight: 700; color: var(--deep); }
  .mil em, .mil i { font-style: italic; }
  .mil .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .mil .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .mil .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .mil .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .mil .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .mil .video-wrap { margin: 32px 0; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(28,21,16,0.08), 0 24px 64px rgba(28,21,16,0.06); }
  .mil .video-wrap video { width: 100%; display: block; }
  .mil .journey-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 24px 0; padding: 24px; background: var(--amber-light); border-radius: var(--radius); border: 1px solid #fde68a; }
  .mil .journey-step { font-weight: 600; font-size: 13px; color: var(--deep); padding: 7px 14px; background: white; border-radius: 8px; border: 1px solid #fde68a; white-space: nowrap; }
  .mil .journey-arrow { color: var(--accent); font-size: 14px; font-weight: 800; flex-shrink: 0; }
  .mil .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .mil .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .mil .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .mil .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .mil .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .mil .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .mil .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .mil .callout p { margin: 0; font-style: italic; }
  .mil .flow-list, .mil .tk-list { list-style: none; padding: 0; margin: 20px 0 0; counter-reset: tk; }
  .mil .flow-list li, .mil .tk-list li { display: grid; grid-template-columns: 36px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: start; counter-increment: tk; }
  .mil .flow-list li:first-child, .mil .tk-list li:first-child { border-top: 1px solid var(--line); }
  .mil .flow-n, .mil .tk-n::before { font-size: 12px; font-weight: 700; color: var(--accent); letter-spacing: 0.04em; padding-top: 4px; }
  .mil .tk-n::before { content: "0" counter(tk); }
  .mil .flow-list h3, .mil .tk-list h3 { margin: 0 0 6px; }
  .mil .flow-list p, .mil .tk-list p { margin: 0; }
  .mil .carousel { position: relative; width: min(752px, 100%); margin: 48px auto; }
  .mil .carousel input[type="radio"] { display: none; }
  .mil .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(28,21,16,0.08), 0 24px 64px rgba(28,21,16,0.06); }
  .mil .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; }
  .mil .carousel-slide img { width: 100%; height: auto; display: block; }
  .mil .carousel-thumbs { display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
  .mil .carousel-thumbs label { width: clamp(56px, 15vw, 80px); height: clamp(35px, 9.375vw, 50px); border-radius: 6px; overflow: hidden; border: 2px solid transparent; opacity: 0.5; cursor: pointer; transition: opacity 0.2s, border-color 0.2s; display: block; flex-shrink: 0; }
  .mil .carousel-thumbs label img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
  #mil-c0-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #mil-c0-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #mil-c0-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #mil-c0-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #mil-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #mil-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #mil-c1-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #mil-c1-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #mil-c1-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #mil-c1-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #mil-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #mil-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #mil-c2-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #mil-c2-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #mil-c2-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #mil-c2-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #mil-c2-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #mil-c2-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #mil-c2-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--accent); opacity: 1; }
  #mil-c2-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--accent); opacity: 1; }
  #mil-c3-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #mil-c3-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #mil-c3-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #mil-c3-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #mil-c3-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #mil-c3-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #mil-c3-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #mil-c3-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #mil-c3-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--accent); opacity: 1; }
  #mil-c3-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--accent); opacity: 1; }
  .mil .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .mil .footer-meta { display: flex; gap: 40px; flex-wrap: wrap; margin-bottom: 32px; }
  .mil .footer-meta-item .footer-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .mil .footer-meta-item p { margin: 0; font-size: 15px; color: var(--deep); font-weight: 600; }
  .mil .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; }
  .mil .footer-sources-title { margin: 0 0 12px; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; }
  .mil .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .mil .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .mil .footer-links a:hover { border-color: var(--accent); }
  .dark .mil { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; --amber-light: rgba(245,158,11,0.06); }
  .dark .mil p, .dark .mil ul, .dark .mil ol { color: #9ca3af; }
  .dark .mil h1, .dark .mil h2, .dark .mil h3, .dark .mil strong { color: #f3f4f6; }
  .dark .mil .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .mil .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .mil .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .mil .principle-card { background: rgba(255,255,255,0.04); }
  .dark .mil .lead { color: #d1d5db; }
  .dark .mil .callout { color: #f3f4f6; }
  .dark .mil .journey-step { background: rgba(255,255,255,0.06); border-color: rgba(245,158,11,0.3); }
  .dark .mil .journey-flow { border-color: rgba(245,158,11,0.2); }
  .dark .mil .carousel-slides { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .mil .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .mil .principles-grid { grid-template-columns: 1fr; }
    .mil .image-grid { grid-template-columns: 1fr; }
    .mil .meta-row { flex-direction: column; }
    .mil .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
    .mil .footer-meta { flex-direction: column; gap: 16px; }
    .mil .journey-flow { gap: 6px; padding: 16px; }
  }
</style>

<div class="mil">

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48531860/file/65eec83f6ab4242c727a65c0d52b92f3.png?resize=752x&amp;vertical=center" alt="MilPress cover" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Product Design Case Study / EdTech</p>
  <h1>MilPress: Adult Literacy Platform</h1>
  <p class="lead">A mobile learning experience designed to help adult learners build reading and writing confidence — with dignity, simplicity, and accessibility at the center of every decision.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Product</p>
      <p class="meta-value">MilPress</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">Product Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Responsibility</p>
      <p class="meta-value">UX Research &bull; Product Strategy &bull; UI Design &bull; Design System &bull; Prototyping</p>
    </div>
  </div>

  <div class="video-wrap">
    <video src="https://cdn.dribbble.com/userupload/48533589/file/large-5bd0a7ee79827659dde5ebdfaec55a63.mp4" autoplay muted loop playsinline></video>
  </div>

  <h2>Background</h2>
  <p>Millions of adults still struggle with reading and writing because they never had access to quality education, or were forced to leave school early. MilPress was created to close that gap &#8212; a mobile learning experience built specifically for adult learners, not adapted from a product designed for children.</p>
  <p>As Product Designer, my role went beyond interfaces. I had to consider how product decisions influence motivation, accessibility, and long-term engagement &#8212; designing something intuitive enough to reduce friction, and dignified enough to keep adults coming back.</p>
  <div class="callout">
    <p>Research only becomes valuable when it changes a decision. Every feature in MilPress had to earn its place by solving a real problem for a real learner.</p>
  </div>
</section>

<section class="text-block">
  <h2>Understanding the Problem</h2>
  <p>Most literacy apps are built for children, or for users already comfortable with smartphones and gamified UI. Adult learners face a different set of barriers:</p>
  <ul>
    <li>Fear of making mistakes</li>
    <li>Low confidence from past educational experiences</li>
    <li>Limited digital literacy</li>
    <li>Poor internet connectivity</li>
    <li>Visual impairments associated with aging</li>
    <li>Limited time due to work and family responsibilities</li>
  </ul>
  <p>That shifted the core question from &#8220;How do I make learning fun?&#8221; to &#8220;How do I make learning feel <strong>respectful, safe, and achievable?</strong>&#8221; &#8212; the foundation for every decision that followed.</p>
</section>

<section class="text-block">
  <h2>Audience</h2>
  <p>MilPress was designed for <strong>adult learners</strong> &#8212; people who never had the opportunity for formal education, or are returning to it later in life, to become more confident and independent in their communities.</p>
  <p>Unlike children, they bring life experience and responsibilities into the process, but often carry <strong>embarrassment or fear of making mistakes</strong> from past schooling. Designing for that meant leading with dignity, empathy, and simplicity &#8212; not just usability.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48533587/file/1820b7b4ac65944a54a7bcb2c055c5ca.png?resize=752x&amp;vertical=center" alt="Audience overview" loading="lazy">
</figure>

<section class="text-block">
  <h2>The Opportunity</h2>
  <p>This was more than a screens project. It was a chance to answer:</p>
  <ul>
    <li>How can we reduce friction in key user journeys?</li>
    <li>How do we simplify complex workflows without losing functionality?</li>
    <li>How do we design something users understand immediately?</li>
    <li>How do we build a system developers can efficiently maintain?</li>
    <li>How can design contribute to growth beyond aesthetics?</li>
  </ul>
</section>

<section class="text-block">
  <h2>My Design Process</h2>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48533588/file/6fa897dd8dc727d8ccfcee9cf65c5a8c.png?resize=752x&amp;vertical=center" alt="Design process diagram" loading="lazy">
</figure>

<section class="text-block">
  <p>Rather than following a rigid UX framework, I adopted an iterative product design process where every stage informed the next. This allowed me to continuously refine the experience based on research, testing, and technical considerations.</p>
</section>

<section class="text-block">
  <h2>Research &amp; Discovery</h2>
  <h3>Understanding Adult Learners</h3>
  <p>Before designing interfaces, I researched adult literacy challenges, learning psychology, accessibility standards, and existing literacy programs &#8212; to move beyond assumptions and design with empathy.</p>
  <p><strong>Key questions:</strong></p>
  <ul>
    <li>Why do adults stop learning, and what stops them from returning?</li>
    <li>What motivates them to continue?</li>
    <li>How comfortable are they with smartphones?</li>
    <li>What barriers exist beyond literacy itself?</li>
  </ul>

  <h3>Competitor Analysis</h3>
  <p>I evaluated <strong>Duolingo</strong>, <strong>Google Read Along</strong>, <strong>Khan Academy</strong>, and local adult education initiatives &#8212; comparing navigation, motivation systems, accessibility, and content hierarchy.</p>
  <div class="callout">
    <p>Most educational apps were built for children or digitally confident users. Almost none considered older adults with limited literacy and a need for privacy &#8212; that gap became MilPress&#8217;s biggest opportunity.</p>
  </div>
</section>

<section class="text-block">
  <h2>Defining the Product</h2>
  <p>Every feature had to solve a specific, research-backed problem &#8212; not just look impressive. I mapped each recurring pain point from adult learners directly to a design decision, keeping the product practical and aligned with both user needs and long-term goals.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534455/file/8507f5965e314ffea9f4fc8b012813c4.png?resize=752x&amp;vertical=center" alt="Product definition framework" loading="lazy">
</figure>

<section class="text-block">
  <h2>Information Architecture</h2>
  <p>The biggest challenge was organizing content so learners always understood where they were and what came next. I kept the journey linear in early levels to reduce decision fatigue, gradually introducing flexibility as learners progressed.</p>
</section>

<div class="carousel">
  <input type="radio" id="mil-c0-1" name="mil-c0" checked>
  <input type="radio" id="mil-c0-2" name="mil-c0">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534459/file/6fbf4fa41d6cfbc2494cc5c9071c6c7b.png?resize=752x364&amp;vertical=center" alt="IA diagram 1" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534458/file/d8e6f515adfbd4b75ff4548bab72aa35.png?resize=752x364&amp;vertical=center" alt="IA diagram 2" loading="lazy"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="mil-c0-1"><img src="https://cdn.dribbble.com/userupload/48534459/file/6fbf4fa41d6cfbc2494cc5c9071c6c7b.png?resize=752x364&amp;vertical=center" alt=""></label>
    <label for="mil-c0-2"><img src="https://cdn.dribbble.com/userupload/48534458/file/d8e6f515adfbd4b75ff4548bab72aa35.png?resize=752x364&amp;vertical=center" alt=""></label>
  </div>
</div>

<section class="text-block">
  <h3>Designing Clear Learning Journeys</h3>
  <p>Because MilPress serves learners with varying digital confidence, every flow had to be intuitive, predictable, and free of unnecessary complexity.</p>
</section>

<div class="carousel">
  <input type="radio" id="mil-c1-1" name="mil-c1" checked>
  <input type="radio" id="mil-c1-2" name="mil-c1">
  <input type="radio" id="mil-c1-3" name="mil-c1">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534462/file/c5e48ebe17fd8b84cec0ea1fff7bc94b.png?resize=752x409&amp;vertical=center" alt="User flow 1" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534463/file/1e40292ad8e6c9457fa6c5b2dec29a61.png?resize=752x409&amp;vertical=center" alt="User flow 2" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534464/file/abbefc90a4ca8e207ccce55a3d1e1f0a.png?resize=752x409&amp;vertical=center" alt="User flow 3" loading="lazy"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="mil-c1-1"><img src="https://cdn.dribbble.com/userupload/48534462/file/c5e48ebe17fd8b84cec0ea1fff7bc94b.png?resize=752x409&amp;vertical=center" alt=""></label>
    <label for="mil-c1-2"><img src="https://cdn.dribbble.com/userupload/48534463/file/1e40292ad8e6c9457fa6c5b2dec29a61.png?resize=752x409&amp;vertical=center" alt=""></label>
    <label for="mil-c1-3"><img src="https://cdn.dribbble.com/userupload/48534464/file/abbefc90a4ca8e207ccce55a3d1e1f0a.png?resize=752x409&amp;vertical=center" alt=""></label>
  </div>
</div>

<section class="text-block">
  <p>I designed user flows around the learner&#8217;s emotional journey rather than simply their actions. A typical experience became:</p>
  <div class="journey-flow">
    <span class="journey-step">Welcome</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Choose Lesson</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Watch</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Practice</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Receive Feedback</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Celebrate Progress</span>
    <span class="journey-arrow">&#8594;</span>
    <span class="journey-step">Continue Learning</span>
  </div>
  <p>Every interaction was designed to encourage confidence instead of reminding users what they didn&#8217;t know.</p>
</section>

<section class="text-block">
  <h2>MilPress Visual Identity</h2>
  <p>The visual concept centered on a clean mobile screen mockup with brand signature, set against <strong>warm, muted tones</strong> with subtle gradient highlights &#8212; communicating approachability and trust from first glance.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534460/file/3406cd2e82aca37310a09f200d9f8f81.gif" alt="MilPress prototype animation" loading="lazy">
</figure>

<div class="carousel">
  <input type="radio" id="mil-c2-1" name="mil-c2" checked>
  <input type="radio" id="mil-c2-2" name="mil-c2">
  <input type="radio" id="mil-c2-3" name="mil-c2">
  <input type="radio" id="mil-c2-4" name="mil-c2">
  <input type="radio" id="mil-c2-5" name="mil-c2">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534470/file/425473bbfb164fe776347ea73253cadf.png?resize=752x423&amp;vertical=center" alt="Visual identity screen 1" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534469/file/074dad68fbd5c857900aedac57a606a9.png?resize=752x423&amp;vertical=center" alt="Visual identity screen 2" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534468/file/3dd59821efbf45ef63fd64108c3d402c.png?resize=752x423&amp;vertical=center" alt="Visual identity screen 3" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534471/file/4a182c240ddc9271013cad7f47c79850.png?resize=752x423&amp;vertical=center" alt="Visual identity screen 4" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534472/file/b29f0513c90400f056e63c362d3473c6.png?resize=752x423&amp;vertical=center" alt="Visual identity screen 5" loading="lazy"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="mil-c2-1"><img src="https://cdn.dribbble.com/userupload/48534470/file/425473bbfb164fe776347ea73253cadf.png?resize=752x423&amp;vertical=center" alt=""></label>
    <label for="mil-c2-2"><img src="https://cdn.dribbble.com/userupload/48534469/file/074dad68fbd5c857900aedac57a606a9.png?resize=752x423&amp;vertical=center" alt=""></label>
    <label for="mil-c2-3"><img src="https://cdn.dribbble.com/userupload/48534468/file/3dd59821efbf45ef63fd64108c3d402c.png?resize=752x423&amp;vertical=center" alt=""></label>
    <label for="mil-c2-4"><img src="https://cdn.dribbble.com/userupload/48534471/file/4a182c240ddc9271013cad7f47c79850.png?resize=752x423&amp;vertical=center" alt=""></label>
    <label for="mil-c2-5"><img src="https://cdn.dribbble.com/userupload/48534472/file/b29f0513c90400f056e63c362d3473c6.png?resize=752x423&amp;vertical=center" alt=""></label>
  </div>
</div>

<section class="text-block">
  <h2>Wireframing &amp; Iteration</h2>
  <p>I explored multiple layouts before committing to the final interface. Each iteration focused on reducing complexity.</p>
  <p>Questions I continuously asked included:</p>
  <ul>
    <li>Can this screen be simplified?</li>
    <li>Is every button necessary?</li>
    <li>Will an older learner immediately understand this?</li>
    <li>Can the next action be made more obvious?</li>
  </ul>
  <p>Rather than adding more features, I consistently removed unnecessary elements until the interface felt calm and focused.</p>
</section>

<section class="text-block">
  <h2>Design System</h2>
  <p>The visual language stayed warm, friendly, and approachable &#8212; never academic. It focused on clear typography, high contrast, consistent spacing, friendly illustration, and large touch targets, all in service of reducing anxiety and building confidence.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534456/file/34dfa66201512fc9bc44978cb6bd60d2.png?resize=752x&amp;vertical=center" alt="Design system overview" loading="lazy">
</figure>

<section class="text-block">
  <p>The design system was guided by four core principles:</p>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Simplicity</h3>
      <p>Adult learners should be able to understand the interface without feeling overwhelmed.</p>
    </div>
    <div class="principle-card">
      <h3>Consistency</h3>
      <p>Maintaining consistency reduces cognitive load and helps users build confidence as they progress through the application.</p>
    </div>
    <div class="principle-card">
      <h3>Accessibility</h3>
      <p>Every component was designed with older adults in mind, using readable typography, sufficient color contrast, large touch targets, and intuitive interaction patterns.</p>
    </div>
    <div class="principle-card">
      <h3>Scalability</h3>
      <p>Built to support future features without requiring significant redesign, allowing the product to grow while preserving a cohesive user experience.</p>
    </div>
  </div>
</section>

<section class="text-block">
  <h2>Building a Scalable Design</h2>
  <p>A well-structured design system improves collaboration, speeds up development, and creates a more consistent experience for users &#8212; while designing not just for the current release, but for future growth.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534467/file/76db5ed7501abb289a228eb311b52081.png?resize=752x489&amp;vertical=center" alt="Scalable design screens 1" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534465/file/8569fdd8f4837a7c91de7b461f9cc857.png?resize=752x489&amp;vertical=center" alt="Scalable design screens 2" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534466/file/1db9703c5df0c9409b15d015105b7e91.png?resize=752x489&amp;vertical=center" alt="Scalable design screens 3" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534461/file/edc770a6059d1a4923db39090a4fbdd0.png?resize=752x&amp;vertical=center" alt="Component library" loading="lazy">
</figure>

<section class="text-block">
  <p>I treated technical feasibility as part of the design process, not a handoff afterthought &#8212; building <em>reusable components</em>, <em>consistent spacing rules</em>, <em>standardized interaction patterns</em>, and <em>clear documentation</em> to reduce ambiguity during implementation.</p>

  <h3>Accessibility</h3>
  <p>Accessibility wasn&#8217;t a checklist &#8212; it was a core principle from day one, designed around older adults, low digital literacy, limited vision, small devices, and slow connections: <em>large typography</em>, <em>high contrast</em>, <em>clear labels</em>, <em>minimal cognitive load</em>, and <em>offline support</em>.</p>
  <p>The goal was an <strong>experience users could navigate confidently without feeling overwhelmed.</strong></p>
</section>

<div class="carousel">
  <input type="radio" id="mil-c3-1" name="mil-c3" checked>
  <input type="radio" id="mil-c3-2" name="mil-c3">
  <input type="radio" id="mil-c3-3" name="mil-c3">
  <input type="radio" id="mil-c3-4" name="mil-c3">
  <input type="radio" id="mil-c3-5" name="mil-c3">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534473/file/11042c9abcde6734ecff37ab0196e478.png?resize=752x488&amp;vertical=center" alt="Final screen 1" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534474/file/e8ffdf467bc261bc5ba1897d9f0f0b5a.png?resize=752x488&amp;vertical=center" alt="Final screen 2" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534475/file/cae6d665401bf07604ce94316294bbcc.png?resize=752x488&amp;vertical=center" alt="Final screen 3" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534476/file/59f19e99828762741709a6f07149e4ab.png?resize=752x488&amp;vertical=center" alt="Final screen 4" loading="lazy"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48534477/file/44d70529ee717a6dff0faf19adb42f01.png?resize=752x488&amp;vertical=center" alt="Final screen 5" loading="lazy"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="mil-c3-1"><img src="https://cdn.dribbble.com/userupload/48534473/file/11042c9abcde6734ecff37ab0196e478.png?resize=752x488&amp;vertical=center" alt=""></label>
    <label for="mil-c3-2"><img src="https://cdn.dribbble.com/userupload/48534474/file/e8ffdf467bc261bc5ba1897d9f0f0b5a.png?resize=752x488&amp;vertical=center" alt=""></label>
    <label for="mil-c3-3"><img src="https://cdn.dribbble.com/userupload/48534475/file/cae6d665401bf07604ce94316294bbcc.png?resize=752x488&amp;vertical=center" alt=""></label>
    <label for="mil-c3-4"><img src="https://cdn.dribbble.com/userupload/48534476/file/59f19e99828762741709a6f07149e4ab.png?resize=752x488&amp;vertical=center" alt=""></label>
    <label for="mil-c3-5"><img src="https://cdn.dribbble.com/userupload/48534477/file/44d70529ee717a6dff0faf19adb42f01.png?resize=752x488&amp;vertical=center" alt=""></label>
  </div>
</div>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534457/file/1865693639982d0a094e5063bcee3408.png?resize=752x&amp;vertical=center" alt="Accessibility design overview" loading="lazy">
</figure>

<section class="text-block">
  <h2>AI in My Workflow</h2>
  <p>AI is most valuable to me when it sharpens critical thinking rather than replacing it. Used alongside user-centered practices, it let me move faster without losing intentionality.</p>
  <ol class="flow-list">
    <li>
      <span class="flow-n">01</span>
      <div>
        <h3>Research &amp; Competitive Analysis</h3>
        <p>Accelerated the research phase &#8212; synthesizing accessibility best practices, comparing competitor learning experiences, and surfacing patterns across educational platforms.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">02</span>
      <div>
        <h3>UX Writing &amp; Content Design</h3>
        <p>Generated alternative wording for instructions, buttons, and error messages &#8212; keeping microcopy simple, friendly, and encouraging throughout.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">03</span>
      <div>
        <h3>Rapid Design Exploration</h3>
        <p>Explored multiple layouts and interaction patterns before committing to high-fidelity work, widening the range of ideas I could evaluate before investing significant time.</p>
      </div>
    </li>
  </ol>
  <p>The result: faster research, more ideas explored, and more confident iteration &#8212; with the user still at the center of every decision.</p>
</section>

<section class="text-block">
  <h2>Challenges &amp; How I Solved Them</h2>
  <p>This project pushed me beyond aesthetics, into decisions that balanced user needs, business objectives, and technical feasibility.</p>
  <ol class="flow-list">
    <li>
      <span class="flow-n">01</span>
      <div>
        <h3>Balancing Simplicity with Functionality</h3>
        <p>Too many options risked discouraging learners with lower digital confidence; oversimplifying risked limiting the product. I prioritized features by <strong>user value, not quantity</strong> &#8212; keeping the interface focused on learning, not figuring out the app.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">02</span>
      <div>
        <h3>Designing for Two Forms of Literacy</h3>
        <p>Learners needed support for both reading/writing and general digital literacy. I reduced cognitive load with familiar layouts, clear hierarchy, descriptive labels, and predictable patterns &#8212; reinforcing how inclusive design has to account for every kind of confidence gap.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">03</span>
      <div>
        <h3>Maintaining Long-Term Motivation</h3>
        <p>Adults are motivated differently than children &#8212; consistency is harder than initial engagement. Instead of competitive gamification, I built intrinsic motivation through visible progress, milestone celebrations, and feedback that rewards effort over perfection.</p>
      </div>
    </li>
  </ol>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534663/file/602e08b495038e491e5a240ff9d7f9de.png?resize=752x&amp;vertical=center" alt="Challenges and solutions" loading="lazy">
</figure>

<section class="text-block">
  <h2>Product Impact</h2>
  <p>MilPress remains a design project, but my contribution went beyond polished interfaces &#8212; it was about building a <strong>foundation for usability, scalability, and efficient collaboration</strong> across the product development lifecycle.</p>
  <ol class="tk-list">
    <li>
      <span class="tk-n"></span>
      <div>
        <h3>A More Accessible Learning Experience</h3>
        <p>Accessibility-first principles shaped an interface that accommodates older adults, first-time smartphone users, and learners with limited literacy &#8212; minimizing cognitive load through clear navigation and readable typography.</p>
      </div>
    </li>
    <li>
      <span class="tk-n"></span>
      <div>
        <h3>Better Collaboration with Developers</h3>
        <p>Documenting reusable components and consistent standards created a shared language between design and development, reducing ambiguity during implementation.</p>
      </div>
    </li>
    <li>
      <span class="tk-n"></span>
      <div>
        <h3>Product Thinking Over Visual Trends</h3>
        <p>Every major feature was grounded in research, accessibility requirements, and long-term scalability &#8212; not personal preference &#8212; ensuring design decisions served the product, not just its appearance.</p>
      </div>
    </li>
  </ol>
</section>

<section class="text-block">
  <h2>Final Reflection</h2>
  <p>Being a Product Designer here meant more than shipping visually appealing interfaces &#8212; it meant identifying problems, understanding users, simplifying complexity, and building systems that support both people and the teams building the product.</p>
  <p>The most rewarding part wasn&#8217;t the polished screens &#8212; it was contributing to something with the potential to improve lives through education. That reinforced my commitment to building products that solve real problems, respect users&#8217; dignity, and create lasting value for both the people who use them and the teams that build them.</p>
</section>

<div class="footer">
  <div class="footer-meta">
    <div class="footer-meta-item">
      <p class="footer-label">Product</p>
      <p>MilPress</p>
    </div>
    <div class="footer-meta-item">
      <p class="footer-label">Role</p>
      <p>Product Designer</p>
    </div>
    <div class="footer-meta-item">
      <p class="footer-label">Year</p>
      <p>2026</p>
    </div>
  </div>
  <div class="footer-sources">
    <p class="footer-sources-title">Resources</p>
    <div class="footer-links">
      <a href="https://www.figma.com/design/5IHijjCVoWIKTVXbmCME64/Milpress-Brand?node-id=0-1&t=Kr558fRlFCW9LKYp-1" target="_blank" rel="noopener noreferrer">Brand Visual Identity &#8599;</a>
      <a href="https://www.figma.com/board/tnIQuX9HG2afCWdqlEGKYz/Milpress?node-id=0-1&t=dJs6UkJvGbH9knef-1" target="_blank" rel="noopener noreferrer">Flowchart Workspace &#8599;</a>
      <a href="https://www.figma.com/design/9Da1wDpstB0sT5F0G4Jb9X/MilPress?node-id=1-2&p=f&t=HPpXO0ejXxKNrEPP-0" target="_blank" rel="noopener noreferrer">Design Workspace &#8599;</a>
      <a href="https://play.google.com/store/apps/details?id=com.milpress.edu&hl=en" target="_blank" rel="noopener noreferrer">App on Play Store &#8599;</a>
      <a href="https://milpress.org/" target="_blank" rel="noopener noreferrer">milpress.org &#8599;</a>
    </div>
  </div>
</div>

</div>`,
    link: '',
  },
  {
    slug: 'akropolis-product-design',
    title: 'Akropolis: Product Design Case Study',
    category: 'Project',
    tags: ['Product Design', 'Social Platform', 'UX Research'],
    image: 'https://cdn.dribbble.com/userupload/48481724/file/3f5bb96013f0c1ef7876abcd680c8581.png?resize=752x&vertical=center',
    summary: 'A product design case study exploring how video-first conversations can create healthier, more authentic online discussions through behavioral design and reputation mechanics.',
    year: '2026',
    role: 'Product Designer',
    description: `<style>
  .ak {
    color: #4E4E4E;
    font-size: 16px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    --ink: #1a1a2e;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f3f4f6;
    --accent: #3157d5;
    --deep: #141b2f;
    --radius: 12px;
  }
  .ak * { box-sizing: border-box; }
  .ak img { display: block; width: 100%; height: auto; }
  .ak a { color: inherit; text-decoration: none; }
  .ak .text-block { width: min(720px, 100%); margin: 48px auto; }
  .ak .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(13,12,34,0.08), 0 24px 64px rgba(13,12,34,0.06); }
  .ak .shot a { display: block; }
  .ak .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .ak h1 { margin: 0 0 20px; font-size: 48px; font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .ak h2 { margin: 32px 0 14px; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .ak p { margin: 0 0 14px; font-size: 18px; font-weight: 400; line-height: 1.7; color: #4E4E4E; }
  .ak p.spacer { height: 6px; margin: 0; padding: 0; font-size: 0; line-height: 0; }
  .ak ul, .ak ol { margin: 6px 0 18px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .ak li { margin-bottom: 8px; }
  .ak li p { margin: 0; }
  .ak li p.spacer { display: none; }
  .ak strong { font-weight: 700; color: var(--deep); }
  .ak em, .ak i { color: var(--deep); }
  .ak .meta-row { display: flex; flex-wrap: wrap; gap: 0; margin: 28px 0; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
  .ak .meta-item { flex: 1; min-width: 120px; padding: 16px 20px; }
  .ak .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .ak .meta-label { margin: 0 0 4px; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; }
  .ak .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); line-height: 1.4; }
  .ak .callout { margin: 28px 0; padding: 20px 24px; background: rgba(49,87,213,0.06); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; font-size: 18px; font-style: italic; color: var(--deep); line-height: 1.6; }
  .ak .outcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 28px 0; }
  .ak .outcome-card { padding: 22px; background: rgba(49,87,213,0.04); border-radius: var(--radius); }
  .ak .outcome-num { display: block; font-size: 34px; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 8px; letter-spacing: -0.03em; }
  .ak .outcome-label { margin: 0; font-size: 13px; color: #6b7280; line-height: 1.5; }
  .dark .ak .meta-row { border-color: #374151; }
  .dark .ak .meta-item + .meta-item { border-color: #374151; }
  .dark .ak .callout { background: rgba(49,87,213,0.1); color: #e5e7eb; }
  .dark .ak .outcome-card { background: rgba(49,87,213,0.08); }
  @media (max-width: 600px) {
    .ak .meta-row { flex-direction: column; }
    .ak .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
    .ak .outcome-grid { grid-template-columns: 1fr; }
  }
  .ak .carousel { position: relative; width: min(752px, 100%); margin: 48px auto; }
  .ak .carousel input[type="radio"] { display: none; }
  .ak .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(13,12,34,0.08), 0 24px 64px rgba(13,12,34,0.06); }
  .ak .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; }
  .ak .carousel-slide img { width: 100%; height: auto; display: block; }
  .ak .carousel-thumbs { display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
  .ak .carousel-thumbs label { width: clamp(56px, 15vw, 80px); height: clamp(35px, 9.375vw, 50px); border-radius: 6px; overflow: hidden; border: 2px solid transparent; opacity: 0.5; cursor: pointer; transition: opacity 0.2s, border-color 0.2s; display: block; flex-shrink: 0; }
  .ak .carousel-thumbs label img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
  #ak-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #ak-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #ak-c1-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #ak-c1-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #ak-c1-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #ak-c1-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #ak-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #ak-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #ak-c2-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #ak-c2-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #ak-c2-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #ak-c2-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #ak-c2-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #ak-c2-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #ak-c2-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--accent); opacity: 1; }
  #ak-c2-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--accent); opacity: 1; }
  .dark .ak { color: #d1d5db; --deep: #f3f4f6; }
  .dark .ak p, .dark .ak ul, .dark .ak ol { color: #9ca3af; }
  .dark .ak h1, .dark .ak h2, .dark .ak strong { color: #f3f4f6; }
  .dark .ak em, .dark .ak i { color: #e5e7eb; }
  .dark .ak .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .ak .carousel-slides { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
</style>

<div class="ak">

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48481724/file/3f5bb96013f0c1ef7876abcd680c8581.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48481724/file/3f5bb96013f0c1ef7876abcd680c8581.png?resize=752x&amp;vertical=center" alt="Akropolis case study cover"></a></figure>

<section class="text-block">
  <h1>Akropolis: Redesigning Online Discourse</h1>
  <p>Most design challenges are about making things look good. This one was about changing how people behave. The client&#8217;s brief wasn&#8217;t &#8220;design a social app&#8221;, it was &#8220;figure out why online conversations fail, then build something that doesn&#8217;t.&#8221; That pulled me out of the comfort zone of UI decisions and deep into product strategy territory. That&#8217;s where I do my best work.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">Product Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Timeline</p>
      <p class="meta-value">12 Weeks</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Platform</p>
      <p class="meta-value">Android &amp; iOS</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Team</p>
      <p class="meta-value">Flutter Devs, Backend, PM</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Scope</p>
      <p class="meta-value">Strategy, Research, UI, Design System</p>
    </div>
  </div>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48482781/file/9b44a828a51b9f1ff1a92645dfd225bf.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48482781/file/9b44a828a51b9f1ff1a92645dfd225bf.png?resize=752x&amp;vertical=center" alt="Akropolis overview"></a></figure>

<section class="text-block">
  <h2>The Problem</h2>
  <p>Social media made it frictionless to share reactions but nearly impossible to have a real conversation. Text strips tone, intent, and accountability from every message. A carefully worded argument looks identical to an aggressive one-liner. Combined with anonymity and algorithms that reward outrage over insight, platforms don&#8217;t just fail to prevent toxic discourse. They&#8217;re built in ways that produce it.</p>
  <p>No major platform was designed around the premise that <em>the conversation itself</em> should be video. Twitter optimizes for speed. Reddit for threading. TikTok for consumption. YouTube&#8217;s comments are an afterthought. The gap was clear.</p>
  <div class="callout">What if online conversations were designed around human presence, where your voice, your face, and your identity were the medium?</div>
  <p>Akropolis explores this: a platform where video <em>is</em> the discussion. Users watch video discussions, respond with video, build threaded video conversations, and earn reputation through constructive participation, creating a fundamentally different interaction model from anything that exists.</p>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48482780/file/ac037490bc1c521eb896375ddc3be2b1.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48482780/file/ac037490bc1c521eb896375ddc3be2b1.png?resize=752x&amp;vertical=center" alt="The Problem"></a></figure>

<section class="text-block">
  <p><em>User Pain Points</em></p>
</section>

<div class="carousel">
  <input type="radio" id="ak-c1-1" name="ak-c1" checked>
  <input type="radio" id="ak-c1-2" name="ak-c1">
  <input type="radio" id="ak-c1-3" name="ak-c1">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482782/file/502e7d17178bc19085f5a67f7db29d3b.png?resize=752x&amp;vertical=center" alt="User pain points"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482783/file/9539f67d3072cc1c69c6f646d69bfb0a.png" alt="Research insight"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48482784/file/8d0ae8f69138e15634e3834704d53589.png" alt="Research data"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="ak-c1-1"><img src="https://cdn.dribbble.com/userupload/48482782/file/502e7d17178bc19085f5a67f7db29d3b.png?resize=752x&amp;vertical=center" alt=""></label>
    <label for="ak-c1-2"><img src="https://cdn.dribbble.com/userupload/48482783/file/9539f67d3072cc1c69c6f646d69bfb0a.png" alt=""></label>
    <label for="ak-c1-3"><img src="https://cdn.dribbble.com/userupload/48482784/file/8d0ae8f69138e15634e3834704d53589.png" alt=""></label>
  </div>
</div>

<section class="text-block">
  <h2>What Research Revealed</h2>
  <p>User interviews and behavioural analysis across six major platforms surfaced five patterns that became the foundation of every design decision:</p>
  <ol>
    <li><strong>Intent gets lost in text.</strong> Users consistently misread tone in written comments, triggering defensive escalation that rarely happens face-to-face.</li>
    <li><strong>Anonymity erodes accountability.</strong> Users behave measurably differently when their face and identity are attached to their words.</li>
    <li><strong>Most users are lurkers by default.</strong> The barrier to participation isn&#8217;t interest. It&#8217;s fear of hostility. Lower that risk and contribution rates rise.</li>
    <li><strong>Recognition drives consistency.</strong> Users who received visible acknowledgment for thoughtful contributions were significantly more likely to return and keep engaging.</li>
    <li><strong>Discussion fatigue kills communities.</strong> Long, unstructured threads cause abandonment. Threaded, structured conversations keep users oriented and invested.</li>
  </ol>
  <p>X, Reddit, TikTok, YouTube, Facebook, Threads: each solved for one or two of these problems at the expense of the others. That was the gap Akropolis was built to close.</p>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48482779/file/cee1afb4bca4af284f35d7a4a57adb43.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48482779/file/cee1afb4bca4af284f35d7a4a57adb43.png?resize=752x&amp;vertical=center" alt="Akropolis concept"></a></figure>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48482793/file/e4ba5249d17fc7e56b082b06c7b24651.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48482793/file/e4ba5249d17fc7e56b082b06c7b24651.png?resize=752x&amp;vertical=center" alt="Opportunity framing"></a></figure>

<section class="text-block">
  <h2>Three Strategic Bets</h2>
  <p>The research pointed toward three design bets that shaped the entire product:</p>
  <ol>
    <li><strong>Video as the primary communication medium. Not a feature, not an option.</strong> Video reintroduces the cues (tone, expression, accountability) that make people choose their words more carefully. Not as a supplement to text. Instead of it.</li>
    <li><strong>Visibility tied to quality, not volume.</strong> The Emblem system rewards users who engage constructively: Read &#8594; Rate &#8594; Reply &#8594; Earn Points &#8594; Unlock Emblems &#8594; Gain Reach. This creates a growth loop that doesn&#8217;t reward the loudest voice, only the most thoughtful one.</li>
    <li><strong>Community-driven moderation at scale.</strong> Centralized moderation doesn&#8217;t scale. Designing a system where users collectively vote on flagged content creates a distributed accountability model that grows with the platform instead of lagging behind it.</li>
  </ol>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493088/file/ce17984d6ff10074b990d02a8ccfd6cb.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493088/file/ce17984d6ff10074b990d02a8ccfd6cb.png?resize=752x&amp;vertical=center" alt="Understanding users"></a></figure>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493087/file/4bf6343b7dabf6615cffacb628b77167.jpg?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493087/file/4bf6343b7dabf6615cffacb628b77167.jpg?resize=752x&amp;vertical=center" alt="Competitive analysis"></a></figure>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493086/file/76bd3d881ec507758d59b7bae3b8aa80.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493086/file/76bd3d881ec507758d59b7bae3b8aa80.png?resize=752x&amp;vertical=center" alt="Areas of evaluation"></a></figure>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493735/file/e5105c5005734c43bcb18c8ca4100d62.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493735/file/e5105c5005734c43bcb18c8ca4100d62.png?resize=752x&amp;vertical=center" alt="Feature prioritisation"></a></figure>

<section class="text-block">
  <h2>Information Architecture</h2>
  <p>The platform needed to support a completely different interaction model, one where users consume, create, and respond through video rather than text. Every navigation decision was evaluated against one loop the entire IA was designed to serve:</p>
  <p><strong>Discover &#8594; Watch &#8594; Respond &#8594; Earn Recognition &#8594; Return</strong></p>
  <p>Features that didn&#8217;t contribute to this loop were cut from the MVP. That discipline kept the first version focused on doing one thing well: making it easier to participate in a meaningful discussion than to scroll past it.</p>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493764/file/5acab012166e58cfed1d91030ac2b15e.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493764/file/5acab012166e58cfed1d91030ac2b15e.png?resize=752x&amp;vertical=center" alt="Information architecture"></a></figure>

<section class="text-block">
  <h2>Key Design Decisions</h2>
  <p>Exploration tested several approaches before the final design landed. These are the decisions that changed most from first concept to final UI, and why they changed:</p>
  <p><strong>Threaded conversations, not feeds.</strong> An early prototype used a continuous-scroll video feed. Users lost track of who was replying to whom within seconds. Threaded video conversations preserved conversational context and made following a discussion possible without losing your place.</p>
  <p><strong>Inline recording, not a detour.</strong> An early flow required users to leave the discussion screen to record a response. Every exit from the conversation killed momentum and broke the experience. Moving recording inline (directly accessible from the discussion screen) made responding feel like a natural continuation rather than a separate task.</p>
  <p><strong>Participation-first navigation.</strong> Traditional social apps prioritize content consumption in their nav structure. Akropolis puts participation first. The CTA to respond is more prominent than the CTA to scroll, a deliberate choice to signal what this platform values.</p>
  <p><strong>Card-based feed over equal-sized posts.</strong> Users needed to understand what a discussion was <em>about</em> before deciding to open it. Larger video thumbnails with visible context in the card reduced cold-open abandonment and led to more intentional participation.</p>
</section>

<div class="carousel">
  <input type="radio" id="ak-c2-1" name="ak-c2" checked>
  <input type="radio" id="ak-c2-2" name="ak-c2">
  <input type="radio" id="ak-c2-3" name="ak-c2">
  <input type="radio" id="ak-c2-4" name="ak-c2">
  <input type="radio" id="ak-c2-5" name="ak-c2">
  <div class="carousel-slides">
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493772/file/c04f4c07666b7798cc1cc68c09969c80.png?resize=752x&amp;vertical=center" alt="Design exploration screens"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493766/file/fd4f80c190b5ba4f8a723b151b2744f4.png?resize=752x&amp;vertical=center" alt="UI screens"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493765/file/2eaf794aa57df75c1322611f1d51357c.png?resize=752x&amp;vertical=center" alt="Design screens"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493769/file/a7f87ad97c6e6fd206d3abad1b9d8b59.png?resize=752x514&amp;vertical=center" alt="Akropolis screens"></div>
    <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48493763/file/5b30e973fb7ac2e89a95988666de568c.png?resize=752x&amp;vertical=center" alt="Final UI screens"></div>
  </div>
  <div class="carousel-thumbs">
    <label for="ak-c2-1"><img src="https://cdn.dribbble.com/userupload/48493772/file/c04f4c07666b7798cc1cc68c09969c80.png?resize=752x&amp;vertical=center" alt=""></label>
    <label for="ak-c2-2"><img src="https://cdn.dribbble.com/userupload/48493766/file/fd4f80c190b5ba4f8a723b151b2744f4.png?resize=752x&amp;vertical=center" alt=""></label>
    <label for="ak-c2-3"><img src="https://cdn.dribbble.com/userupload/48493765/file/2eaf794aa57df75c1322611f1d51357c.png?resize=752x&amp;vertical=center" alt=""></label>
    <label for="ak-c2-4"><img src="https://cdn.dribbble.com/userupload/48493769/file/a7f87ad97c6e6fd206d3abad1b9d8b59.png?resize=752x514&amp;vertical=center" alt=""></label>
    <label for="ak-c2-5"><img src="https://cdn.dribbble.com/userupload/48493763/file/5b30e973fb7ac2e89a95988666de568c.png?resize=752x&amp;vertical=center" alt=""></label>
  </div>
</div>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493762/file/95aac2d4a06549e477a8118d28b32a66.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493762/file/95aac2d4a06549e477a8118d28b32a66.png?resize=752x&amp;vertical=center" alt="Recording UI"></a></figure>

<section class="text-block">
  <h2>Design System</h2>
  <p>As the interface scaled across dozens of screens, I built a component library in Figma structured for direct Flutter developer handoff: reusable components, spacing tokens, typography scales, and fully documented interaction states. The aim was to reduce implementation ambiguity so developers could build new features confidently without revisiting design foundations each time.</p>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493767/file/1b164885401ad8d9218cef387c9737ba.png?resize=752x567&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493767/file/1b164885401ad8d9218cef387c9737ba.png?resize=752x567&amp;vertical=center" alt="Design system"></a></figure>

<section class="text-block">
  <h2>Outcomes</h2>
  <div class="outcome-grid">
    <div class="outcome-card">
      <span class="outcome-num">12 wks</span>
      <p class="outcome-label">Research to dev-ready handoff, covering Android &amp; iOS simultaneously</p>
    </div>
    <div class="outcome-card">
      <span class="outcome-num">4</span>
      <p class="outcome-label">Core behavioural problems addressed through product mechanics, not content moderation</p>
    </div>
    <div class="outcome-card">
      <span class="outcome-num">1</span>
      <p class="outcome-label">Unified design language across both platforms, built for Flutter component parity</p>
    </div>
  </div>
  <p>The Emblem and engagement loop mechanics were prototyped and walked through with internal stakeholders. The reputation model mapped directly to the platform&#8217;s community health goals: visibility earned through quality of contribution, not volume of posts. The inline recording redesign eliminated the most significant drop-off point identified in usability walkthroughs: users leaving the discussion and not returning to respond.</p>
  <p>The design system gave the Flutter team a complete, annotated component library covering every state, edge case, and spacing rule, reducing the back-and-forth during implementation and creating a shared reference the whole team could build from.</p>
</section>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493792/file/3081220b28cb040834620b85a67e4d5c.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493792/file/3081220b28cb040834620b85a67e4d5c.png?resize=752x&amp;vertical=center" alt="Metrics and success"></a></figure>

<figure class="shot"><a href="https://cdn.dribbble.com/userupload/48493793/file/568a4da5f45cd42e5f3f1ed447f309d5.png?resize=752x&amp;vertical=center" target="_blank" rel="noopener noreferrer"><img src="https://cdn.dribbble.com/userupload/48493793/file/568a4da5f45cd42e5f3f1ed447f309d5.png?resize=752x&amp;vertical=center" alt="Final Akropolis screens"></a></figure>

<section class="text-block">
  <h2>What This Project Taught Me</h2>
  <p>Akropolis is the project where I learned that the hardest product problems aren&#8217;t about what an interface looks like. They&#8217;re about what behaviour it creates. Designing engagement mechanics meant asking <em>what will users do because of this feature</em>, not just <em>will users understand how to use it</em>. Those are different questions, and they lead to very different design decisions.</p>
  <p>That shift from UX thinking to behavioural product thinking is something I now bring to every project. I&#8217;m at my best when a small interaction pattern is the thing standing between a good product and a great one, and when design decisions connect directly to whether the product actually works.</p>
</section>

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
    font-size: 16px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    --ink: #2d2d2d;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f3f4f6;
    --blue: #2563eb;
    --cyan: #14b8a6;
    --amber: #f59e0b;
    --navy: #14213d;
    --radius: 12px;
  }
  .kyc * { box-sizing: border-box; }
  .kyc img { display: block; width: 100%; height: auto; border-radius: var(--radius); }
  .kyc a { color: inherit; }
  .kyc .page { overflow: hidden; }
  .kyc .section { padding: 84px 24px; }
  .kyc .section.alt { background: var(--soft); margin: 0 12px; border-radius: var(--radius); padding: 44px 34px; }
  .kyc .wrap { width: min(1120px, 100%); margin: 0 auto; }
  .kyc .narrow { width: min(780px, 100%); margin: 0 auto; }
  .kyc .hero { padding: 64px 24px 48px; }
  .kyc .hero-cover { margin: 0; }
  .kyc .hero-cover img { border-radius: 0; max-height: 72vh; object-fit: cover; }
  .kyc .hero-inner { width: min(1120px, 100%); margin: 0 auto; }
  .kyc .eyebrow { margin: 0 0 18px; color: var(--blue); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .kyc h1, .kyc h2, .kyc h3 { margin: 0; line-height: 1.08; letter-spacing: 0; color: #2d2d2d; }
  .kyc h1 { max-width: 900px; font-size: 48px; font-weight: 800; }
  .kyc h2 { margin-bottom: 24px; font-size: 28px; font-weight: 700; }
  .kyc h3 { margin: 0 0 10px; font-size: 18px; font-weight: 700; line-height: 1.3; }
  .kyc p { margin: 0 0 18px; font-size: 18px; font-weight: 400; line-height: 1.7; color: var(--ink); }
  .kyc .lead { max-width: 760px; margin-top: 22px; color: #4E4E4E; font-size: 20px; line-height: 1.55; }
  .kyc .section-label { margin: 0 0 12px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .kyc .meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .kyc .meta-item { min-height: 150px; padding: 28px; background: var(--panel); }
  .kyc .meta-item span { display: block; margin-bottom: 10px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .kyc .meta-item strong { display: block; font-size: 21px; line-height: 1.35; }
  .kyc .callout { margin: 36px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 20px; line-height: 1.48; color: var(--ink); font-style: italic; }
  .kyc .callout p:last-child { margin-bottom: 0; }
  .kyc .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 22px 0 0; list-style: none; }
  .kyc .pill-list li { padding: 8px 12px; background: var(--soft); border: 1px solid var(--line); border-radius: 999px; color: var(--muted); font-size: 14px; font-weight: 600; }
  .kyc .visual-band { padding: 24px; background: #0b1020; }
  .kyc .visual-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; align-items: start; }
  .kyc .visual-grid figure { aspect-ratio: 16/9; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .kyc .visual-grid figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .kyc figure { margin: 0; }
  .kyc figure + figure, .kyc p + figure, .kyc figure + p { margin-top: 30px; }
  /* goal-list — table-style rows */
  .kyc .goal-list { list-style: none; padding: 0; margin: 32px 0 0; }
  .kyc .goal-list li { display: grid; grid-template-columns: 180px 1fr; gap: 32px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
  .kyc .goal-list li:first-child { border-top: 1px solid var(--line); }
  .kyc .goal-list strong { font-size: 14px; font-weight: 700; color: var(--ink); }
  .kyc .goal-list p { margin: 0; color: var(--muted); }
  /* flow-list — numbered vertical steps */
  .kyc .flow-list { list-style: none; padding: 0; margin: 32px 0 0; }
  .kyc .flow-list li { display: grid; grid-template-columns: 40px 1fr; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .kyc .flow-list li:first-child { border-top: 1px solid var(--line); }
  .kyc .flow-n { font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.04em; padding-top: 4px; }
  .kyc .flow-list h3 { margin: 0 0 8px; }
  .kyc .flow-list p { margin: 0; color: var(--muted); }
  /* phase-row — clean bordered grid */
  .kyc .phase-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin: 36px 0; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
  .kyc .phase-col { padding: 24px 20px; border-right: 1px solid var(--line); }
  .kyc .phase-col:last-child { border-right: none; }
  .kyc .phase-tag { display: block; margin-bottom: 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--blue); }
  .kyc .phase-col h3 { margin: 0 0 6px; }
  .kyc .phase-col p { margin: 0; color: var(--muted); }
  /* principles-stack — card grid */
  .kyc .principles-stack { list-style: none; padding: 0; margin: 32px 0 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .kyc .principles-stack li { padding: 24px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
  .kyc .principles-stack h3 { margin: 0 0 10px; }
  .kyc .principles-stack p { margin: 0; color: var(--muted); }
  /* tk-list — numbered takeaways */
  .kyc .tk-list { list-style: none; padding: 0; margin: 32px 0 0; counter-reset: tk; }
  .kyc .tk-list li { display: grid; grid-template-columns: 36px 1fr; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: start; counter-increment: tk; }
  .kyc .tk-list li:first-child { border-top: 1px solid var(--line); }
  .kyc .tk-n::before { content: "0" counter(tk); font-size: 12px; font-weight: 700; color: var(--muted); }
  .kyc .tk-list h3 { margin: 0 0 8px; }
  .kyc .tk-list p { margin: 0; color: var(--muted); }
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
  .kyc .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; background: var(--soft); }
  .kyc .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; }
  .kyc .carousel-slide img { width: 100%; height: auto; display: block; border-radius: 0; }
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
    .kyc .meta, .kyc .visual-grid, .kyc .gallery.two, .kyc .principles-stack { grid-template-columns: 1fr; }
    .kyc .meta-item { min-height: auto; }
    .kyc .phase-row { grid-template-columns: repeat(2, 1fr); }
    .kyc .phase-col { border-bottom: 1px solid var(--line); }
    .kyc .goal-list li { grid-template-columns: 1fr; gap: 4px; }
    .kyc .flow-list li { grid-template-columns: 36px 1fr; gap: 16px; }
  }
  @media (max-width: 480px) {
    .kyc .phase-row { grid-template-columns: 1fr; }
    .kyc .phase-col { border-right: none; }
  }
  .dark .kyc { color: #d1d5db; --ink: #e5e7eb; --panel: #1f2937; --line: #374151; --muted: #9ca3af; --soft: #1f2937; }
  .dark .kyc h1, .dark .kyc h2, .dark .kyc h3 { color: #f3f4f6; }
  .dark .kyc p { color: #9ca3af; }
  .dark .kyc .lead { color: #d1d5db; }
  .dark .kyc .section.alt { background: #1f2937; }
  .dark .kyc .meta-item { background: #1f2937; }
  .dark .kyc .phase-col { border-color: #374151; }
  .dark .kyc .phase-row { border-color: #374151; }
  .dark .kyc .principles-stack li { background: #1f2937; border-color: #374151; }
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
        <p class="section-label">Goals</p>
        <h2>What We Were Solving For</h2>
        <ul class="goal-list">
          <li><strong>Guide Early</strong><p>Educate users before scanning instead of showing errors afterwards.</p></li>
          <li><strong>Reduce Failed Scans</strong><p>Provide overlays, edge detection, and lighting guidance in real time.</p></li>
          <li><strong>Build Trust</strong><p>Show exactly what the system is doing during verification.</p></li>
          <li><strong>Lower Cognitive Load</strong><p>Break verification into small, manageable steps.</p></li>
          <li><strong>Support Global Documents</strong><p>Handle national IDs, passports, and residence permits without redesigning the interface.</p></li>
        </ul>
      </div>
    </section>

    <section class="section alt">
      <div class="wrap">
        <p class="section-label">UI System Flow</p>
        <h2>Understanding the UI System Flow</h2>
        <p>The verification journey is broken into clear stages so each screen answers one user question at a time.</p>
        <ol class="flow-list">
          <li>
            <span class="flow-n">01</span>
            <div>
              <h3>Identity Selection</h3>
              <p>Users first choose which document they want to verify. Different document types require different capture rules, so selection makes the rest of the flow easier to understand.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">02</span>
            <div>
              <h3>Guided Education</h3>
              <p>Before opening the camera, a quick visual tutorial explains correct placement, proper lighting, full document framing, and glare avoidance.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">03</span>
            <div>
              <h3>Live Camera Scanner</h3>
              <p>The scanner uses auto edge detection, dynamic frame alignment, live document recognition, visual confidence indicators, and automatic capture when quality requirements are met.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">04</span>
            <div>
              <h3>Intelligent Validation</h3>
              <p>The system validates document borders, text visibility, MRZ detection, portrait quality, security features, and resolution.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">05</span>
            <div>
              <h3>Processing State</h3>
              <p>Instead of a static loader, users see plain-language progress states such as reading document, detecting security features, and matching identity.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">06</span>
            <div>
              <h3>Selfie Verification</h3>
              <p>The flow continues with face guidance, automatic positioning, lighting detection, and a neutral expression reminder to improve biometric quality.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">07</span>
            <div>
              <h3>Face Matching</h3>
              <p>The final stage compares the ID photo with the selfie and shows verification progress before confirming success.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section" style="margin:0 12px;padding-top:0">
      <figure>
        <img src="https://cdn.dribbble.com/userupload/48405556/file/d4147a93c3812b6dacec89b995cce8c6.png?resize=1024x576&amp;vertical=center" alt="KYC verification overview screen">
      </figure>
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
        <ul class="principles-stack">
          <li>
            <h3>Progressive Disclosure</h3>
            <p>Information appears only when relevant, reducing cognitive overload and keeping users focused on the next action.</p>
          </li>
          <li>
            <h3>Real-Time Feedback</h3>
            <p>Live edge detection, green confirmation borders, validation checkpoints, and progress indicators reassure users that the system is working.</p>
          </li>
          <li>
            <h3>Error Prevention</h3>
            <p>The interface helps users avoid failed scans instead of relying on error messages after something goes wrong.</p>
          </li>
          <li>
            <h3>Transparency</h3>
            <p>Plain-language processing states explain when a document is being analyzed, when facial matching is in progress, and when verification is complete.</p>
          </li>
        </ul>
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
        <div class="phase-row">
          <div class="phase-col">
            <span class="phase-tag">Phase 01</span>
            <h3>Guide</h3>
            <p>Prepare users before document capture.</p>
          </div>
          <div class="phase-col">
            <span class="phase-tag">Phase 02</span>
            <h3>Capture</h3>
            <p>Use live feedback to improve scan quality.</p>
          </div>
          <div class="phase-col">
            <span class="phase-tag">Phase 03</span>
            <h3>Validate</h3>
            <p>Analyze document data and biometric quality.</p>
          </div>
          <div class="phase-col">
            <span class="phase-tag">Phase 04</span>
            <h3>Confirm</h3>
            <p>Communicate completion clearly and confidently.</p>
          </div>
        </div>
        <p>Together, these stages minimize onboarding friction while maintaining high standards of identity assurance.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48411004/file/42cadc74a4bd270060b0db3eef9bda29.png?resize=1024x683&amp;vertical=center" alt="KYC framework detailed screen">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Takeaways</p>
        <h2>Takeaways</h2>
        <ul class="tk-list">
          <li>
            <span class="tk-n"></span>
            <div>
              <h3>Strategic Design Happens Before Pixels</h3>
              <p>The strongest contribution was questioning why ID and Passport verification needed separate flows. Unifying the experience made it more useful and trustworthy.</p>
            </div>
          </li>
          <li>
            <span class="tk-n"></span>
            <div>
              <h3>High-Fidelity Can Accelerate Alignment</h3>
              <p>When interactions are novel, realistic UI can help stakeholders understand the concept faster.</p>
            </div>
          </li>
          <li>
            <span class="tk-n"></span>
            <div>
              <h3>Trust Requires Transparency</h3>
              <p>Users should know when their document is analyzed, when facial matching is in progress, and when verification has been completed.</p>
            </div>
          </li>
        </ul>
        <figure style="margin-top:40px">
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
    font-size: 16px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    --ink: #2d2d2d;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --green: #ff7700;
    --orange: #ff7700;
    --mint: #e8f5ee;
    --gold: #ff7700;
    --radius: 12px;
  }
  .lx * { box-sizing: border-box; }
  .lx img { display: block; width: 100%; height: auto; border-radius: var(--radius); }
  .lx a { color: inherit; }
  .lx .page { overflow: hidden; }
  .lx .section { padding: 84px 24px; }
  .lx .section.alt { background: #f3f4f6; margin: 0 12px; border-radius: var(--radius); padding: 44px 34px; }
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
  .lx h1 { max-width: 900px; font-size: 48px; font-weight: 800; }
  .lx h2 { margin-bottom: 24px; font-size: 28px; font-weight: 700; }
  .lx h3 { margin: 0 0 10px; font-size: 18px; font-weight: 700; line-height: 1.3; }
  .lx p { margin: 0 0 18px; font-size: 18px; font-weight: 400; line-height: 1.7; color: var(--ink); }
  .lx .lead { max-width: 720px; margin-top: 22px; color: #4E4E4E; font-size: 20px; line-height: 1.55; }
  .lx .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: -1px; background: var(--line); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .lx .meta-item { min-height: 170px; padding: 28px; background: var(--panel); }
  .lx .meta-item span { display: block; margin-bottom: 12px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; }
  .lx .meta-item strong { font-size: 21px; line-height: 1.3; }
  .lx .split { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: start; }
  .lx .sticky-label { position: sticky; top: 28px; color: #6b7280; font-size: 14px; font-weight: 700; text-transform: uppercase; }
  .lx .section-label { margin: 0 0 12px; color: #6b7280; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .lx .callout { margin: 36px 0; padding: 24px 0; border-top: 2px solid var(--green); font-size: 20px; line-height: 1.48; color: var(--ink); }
  .lx .image-band { padding: 24px; background: #111814; }
  .lx .image-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; align-items: start; }
  .lx .image-grid figure { aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .lx .image-grid figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
  .lx figure { margin: 0; }
  .lx figure + figure, .lx p + figure, .lx figure + p { margin-top: 28px; }
  .lx figcaption { margin-top: 10px; color: var(--muted); font-size: 14px; line-height: 1.5; }
  .lx .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 20px 0 0; list-style: none; }
  .lx .pill-list li { padding: 8px 12px; background: #f3f4f6; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); font-size: 14px; font-weight: 600; }
  /* flow-list — numbered vertical steps */
  .lx .flow-list { list-style: none; padding: 0; margin: 32px 0 0; }
  .lx .flow-list li { display: grid; grid-template-columns: 40px 1fr; gap: 24px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .lx .flow-list li:first-child { border-top: 1px solid var(--line); }
  .lx .flow-n { font-size: 12px; font-weight: 700; color: var(--muted); letter-spacing: 0.04em; padding-top: 4px; }
  .lx .flow-list h3 { margin: 0 0 8px; }
  .lx .flow-list p { margin: 0; color: var(--muted); }
  /* stat-list — AI score rows */
  .lx .stat-list { list-style: none; padding: 0; margin: 32px 0 0; }
  .lx .stat-list li { display: grid; grid-template-columns: 72px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .lx .stat-list li:first-child { border-top: 1px solid var(--line); }
  .lx .stat-n { font-size: 26px; font-weight: 800; color: var(--green); line-height: 1; padding-top: 2px; letter-spacing: -0.02em; }
  .lx .stat-list h3 { margin: 0 0 6px; }
  .lx .stat-list p { margin: 0; color: var(--muted); }
  /* outcome-list — deliverable rows */
  .lx .outcome-list { list-style: none; padding: 0; margin: 32px 0 0; }
  .lx .outcome-list li { display: grid; grid-template-columns: 72px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
  .lx .outcome-list li:first-child { border-top: 1px solid var(--line); }
  .lx .outcome-n { font-size: 26px; font-weight: 800; color: var(--green); line-height: 1; letter-spacing: -0.02em; }
  .lx .outcome-list p { margin: 0; color: var(--muted); }
  .lx .gallery { display: grid; gap: 28px; margin-top: 34px; }
  .lx .gallery.two { grid-template-columns: repeat(2, 1fr); align-items: start; }
  .lx .gallery.two figure { aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); margin: 0; }
  .lx .gallery.two figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0; }
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
    .lx .meta-grid, .lx .split, .lx .image-grid, .lx .gallery.two { grid-template-columns: 1fr; }
    .lx .meta-item { min-height: auto; }
    .lx .sticky-label { position: static; }
    .lx .flow-list li { grid-template-columns: 36px 1fr; gap: 16px; }
  }
  .dark .lx { color: #d1d5db; --ink: #e5e7eb; --panel: #1f2937; --line: #374151; --muted: #9ca3af; }
  .dark .lx h1, .dark .lx h2, .dark .lx h3 { color: #f3f4f6; }
  .dark .lx p { color: #9ca3af; }
  .dark .lx .lead { color: #d1d5db; }
  .dark .lx .section.alt { background: #1f2937; }
  .dark .lx .meta-item { background: #1f2937; }
  .dark .lx .pill-list li { background: #374151; color: #d1d5db; }
  .lx .carousel { position: relative; width: min(752px, 100%); margin-left: auto; margin-right: auto; }
  .lx .carousel input[type="radio"] { display: none; }
  .lx .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(17,24,20,0.1), 0 24px 64px rgba(17,24,20,0.08); }
  .lx .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; }
  .lx .carousel-slide img { width: 100%; height: auto; display: block; }
  .lx .carousel-thumbs { display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
  .lx .carousel-thumbs label { width: clamp(56px, 15vw, 80px); height: clamp(35px, 9.375vw, 50px); border-radius: 6px; overflow: hidden; border: 2px solid transparent; opacity: 0.5; cursor: pointer; transition: opacity 0.2s, border-color 0.2s; display: block; flex-shrink: 0; }
  .lx .carousel-thumbs label img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
  #lx-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c1-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--green); opacity: 1; }
  #lx-c1-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--green); opacity: 1; }
  #lx-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c2-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--green); opacity: 1; }
  #lx-c2-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--green); opacity: 1; }
  #lx-c3-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c3-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c3-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #lx-c3-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #lx-c3-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #lx-c3-6:checked ~ .carousel-slides .carousel-slide:nth-child(6) { opacity: 1; }
  #lx-c3-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--green); opacity: 1; }
  #lx-c3-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--green); opacity: 1; }
  #lx-c3-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--green); opacity: 1; }
  #lx-c3-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--green); opacity: 1; }
  #lx-c3-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--green); opacity: 1; }
  #lx-c3-6:checked ~ .carousel-thumbs label:nth-child(6) { border-color: var(--green); opacity: 1; }
  .dark .lx .carousel-slides { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
</style>

<div class="lx">
  <main class="page">
    <header class="hero">
      <div class="hero-inner">
        <p class="eyebrow">Product Design Case Study</p>
        <h1>Designing LeverageX</h1>
        <p class="lead">Building an AI-powered accountability system that keeps people executing long after motivation runs out.</p>
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
        <span>Scope</span>
        <strong>Strategy, Research, UI, Design System, PRD</strong>
      </div>
    </section>

    <section class="image-band">
      <div class="carousel" style="max-width:752px;margin:0 auto;">
        <input type="radio" id="lx-c1-1" name="lx-c1" checked>
        <input type="radio" id="lx-c1-2" name="lx-c1">
        <div class="carousel-slides">
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415210/file/fa8d09b907576ea0c6ca884337911c26.png?resize=1024x768&amp;vertical=center" alt="LeverageX product screen mockup"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415211/file/edeeb0615d488c72cb8c5f3afcb53f44.png?resize=1024x768&amp;vertical=center" alt="LeverageX dashboard concept"></div>
        </div>
        <div class="carousel-thumbs">
          <label for="lx-c1-1"><img src="https://cdn.dribbble.com/userupload/48415210/file/fa8d09b907576ea0c6ca884337911c26.png?resize=1024x768&amp;vertical=center" alt=""></label>
          <label for="lx-c1-2"><img src="https://cdn.dribbble.com/userupload/48415211/file/edeeb0615d488c72cb8c5f3afcb53f44.png?resize=1024x768&amp;vertical=center" alt=""></label>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p>Goal-setting apps are easy to design. Everyone understands the loop: set a goal, check it off, feel good. The harder problem, the one LeverageX was actually built to solve, is what happens three weeks after the initial excitement fades. That is a behavioral design problem, not a feature problem. It is the kind of challenge I find genuinely interesting.</p>
        <p>The brief was not "build a to-do app with goals." It was: figure out why people fail to execute on long-term ambitions, then design a system that closes those gaps. That pulled me into product strategy territory well before I touched a single screen.</p>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">The Problem</p>
        <h2>Organizing Work Is Not the Same as Getting Work Done</h2>
        <p>Most productivity apps are good at capturing intention. They are terrible at sustaining execution. The gap is not missing features. No existing tool treats accountability as a first-class design concern. Most apps make you responsible to a list. LeverageX needed to make you responsible to a system.</p>
        <p>People do not abandon goals because they stop caring. They abandon them because motivation is unreliable, progress is invisible, and there is no external pressure to keep going when life gets difficult.</p>
        <div class="callout">The design question was not what should the app track. It was what makes people follow through after motivation runs out.</div>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415208/file/cdf0442f75703d50158f815a107612f2.gif" alt="Animated LeverageX product flow">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <p class="section-label">Research</p>
        <h2>What the Research Revealed</h2>
        <p>User research and behavioral analysis across existing productivity and accountability tools surfaced five patterns that shaped every design decision:</p>
        <ol class="flow-list">
          <li>
            <span class="flow-n">01</span>
            <div>
              <h3>Motivation fades predictably</h3>
              <p>Most users disengage within 3 to 4 weeks, not from lack of interest, but from the absence of external pressure after the novelty wears off.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">02</span>
            <div>
              <h3>Accountability partners outperform reminders</h3>
              <p>Users with a person checking in on their commitments were consistently more likely to follow through than users relying on notification-heavy apps.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">03</span>
            <div>
              <h3>Invisible progress kills momentum</h3>
              <p>When users cannot see how far they have come, they default to estimating failure. Progress visualization is not a nice-to-have, it is a retention mechanism.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">04</span>
            <div>
              <h3>AI feedback needs to feel earned</h3>
              <p>Vague encouragement erodes trust. Structured scoring with reasoning builds it.</p>
            </div>
          </li>
          <li>
            <span class="flow-n">05</span>
            <div>
              <h3>Privacy hesitation blocks onboarding</h3>
              <p>Users wanted accountability without exposure. Every goal needed to be private by default, with explicit opt-in to share with partners or the community.</p>
            </div>
          </li>
        </ol>
      </div>
      <div class="carousel" style="margin-top:48px">
        <input type="radio" id="lx-c2-1" name="lx-c2" checked>
        <input type="radio" id="lx-c2-2" name="lx-c2">
        <div class="carousel-slides">
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415216/file/74f072b157ac9786f4f08a43bdf665ad.png?resize=1024x559&amp;vertical=center" alt="LeverageX product goal diagram"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415209/file/a3870413b6267631b3bebe1369f12949.jpg?resize=1024x603&amp;vertical=center" alt="LeverageX product planning board"></div>
        </div>
        <div class="carousel-thumbs">
          <label for="lx-c2-1"><img src="https://cdn.dribbble.com/userupload/48415216/file/74f072b157ac9786f4f08a43bdf665ad.png?resize=1024x559&amp;vertical=center" alt=""></label>
          <label for="lx-c2-2"><img src="https://cdn.dribbble.com/userupload/48415209/file/a3870413b6267631b3bebe1369f12949.jpg?resize=1024x603&amp;vertical=center" alt=""></label>
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
        <p>The AI in LeverageX has one job: review your week and tell you, honestly and specifically, how well you executed. It does not chat, answer questions, or suggest tasks. It analyzes activity patterns, evaluates submitted evidence, and delivers structured scores with reasoning attached.</p>
        <p>Narrow scope was the key design decision. An AI that tries to do everything becomes an AI that does nothing trustworthy. Restricting it to structured accountability reviews made every output feel reliable and worth acting on.</p>
        <ul class="stat-list">
          <li>
            <span class="stat-n">85%</span>
            <div>
              <h3>Consistency</h3>
              <p>You completed daily logs on 17 of the last 20 days.</p>
            </div>
          </li>
          <li>
            <span class="stat-n">72%</span>
            <div>
              <h3>Impact</h3>
              <p>Most completed actions contributed toward your monthly milestone.</p>
            </div>
          </li>
          <li>
            <span class="stat-n">90%</span>
            <div>
              <h3>Follow-through</h3>
              <p>Nearly every planned task was completed on schedule.</p>
            </div>
          </li>
        </ul>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415212/file/8f9b2f5989826271882c8ca968820105.webp?resize=1024x768&amp;vertical=center" alt="AI review details">
        </figure>
        <p>Human partners bring empathy, lived experience, and personal encouragement that AI cannot replicate. The AI fills the gaps with availability, consistency, and data. The hybrid model was not a compromise between two options. It was the design itself.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <p class="section-label">Architecture</p>
        <h2>Information Architecture</h2>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415226/file/6f8126edd10b4f128acd362d7ce57223.png?resize=1024x559&amp;vertical=center" alt="LeverageX information architecture">
        </figure>
        <p>Every feature was evaluated against one question: does this help users execute, or does it add complexity without contributing to the core loop? The Apex Goal hierarchy (Apex to Monthly to Weekly to Daily) gives every session a concrete answer to "what should I do right now?" Features that did not connect to execution were cut from the MVP.</p>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415213/file/bc66eebe5fd7e04fd267b87c3c32c4ab.png?resize=1024x928&amp;vertical=center" alt="Goal hierarchy diagram">
        </figure>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415214/file/1d5222a097cffe32ab2c8bb8d0864a03.png?resize=1024x509&amp;vertical=center" alt="Accountability partner interface">
        </figure>
      </div>
      <div class="carousel" style="margin-top:48px">
        <input type="radio" id="lx-c3-1" name="lx-c3" checked>
        <input type="radio" id="lx-c3-2" name="lx-c3">
        <input type="radio" id="lx-c3-3" name="lx-c3">
        <input type="radio" id="lx-c3-4" name="lx-c3">
        <input type="radio" id="lx-c3-5" name="lx-c3">
        <input type="radio" id="lx-c3-6" name="lx-c3">
        <div class="carousel-slides">
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415221/file/5c5c67154300235fbf22aadc3de81dc6.png?resize=1024x954&amp;vertical=center" alt="App components screen one"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415222/file/f811daf963de5b49c40e7c4838cbee78.png?resize=1024x954&amp;vertical=center" alt="App components screen two"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415219/file/adea91bc0569262a5d5317430d82a02c.png?resize=1024x768&amp;vertical=center" alt="High fidelity LeverageX screen"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415220/file/f7ea3962326d9a79256fa7ac3097cd1a.png?resize=1024x768&amp;vertical=center" alt="High fidelity dashboard screen"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415225/file/d0815fec6fd837e955afe354f0a0990f.png?resize=1024x718&amp;vertical=center" alt="UI flow board"></div>
          <div class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415227/file/24deb10cda9bda432dfb0f4000102528.png?resize=1024x718&amp;vertical=center" alt="LeverageX user interface overview"></div>
        </div>
        <div class="carousel-thumbs">
          <label for="lx-c3-1"><img src="https://cdn.dribbble.com/userupload/48415221/file/5c5c67154300235fbf22aadc3de81dc6.png?resize=1024x954&amp;vertical=center" alt=""></label>
          <label for="lx-c3-2"><img src="https://cdn.dribbble.com/userupload/48415222/file/f811daf963de5b49c40e7c4838cbee78.png?resize=1024x954&amp;vertical=center" alt=""></label>
          <label for="lx-c3-3"><img src="https://cdn.dribbble.com/userupload/48415219/file/adea91bc0569262a5d5317430d82a02c.png?resize=1024x768&amp;vertical=center" alt=""></label>
          <label for="lx-c3-4"><img src="https://cdn.dribbble.com/userupload/48415220/file/f7ea3962326d9a79256fa7ac3097cd1a.png?resize=1024x768&amp;vertical=center" alt=""></label>
          <label for="lx-c3-5"><img src="https://cdn.dribbble.com/userupload/48415225/file/d0815fec6fd837e955afe354f0a0990f.png?resize=1024x718&amp;vertical=center" alt=""></label>
          <label for="lx-c3-6"><img src="https://cdn.dribbble.com/userupload/48415227/file/24deb10cda9bda432dfb0f4000102528.png?resize=1024x718&amp;vertical=center" alt=""></label>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="narrow">
        <p class="section-label">Outcomes</p>
        <h2>What Was Delivered</h2>
        <ul class="outcome-list">
          <li>
            <span class="outcome-n">3 mo</span>
            <p>Research to dev-ready handoff, including a complete PRD with business rules and edge cases.</p>
          </li>
          <li>
            <span class="outcome-n">5</span>
            <p>Behavioral failure modes addressed through system design, not just UI patterns.</p>
          </li>
          <li>
            <span class="outcome-n">2</span>
            <p>Accountability models (AI and human) designed to complement each other within one platform.</p>
          </li>
        </ul>
        <p>The Apex Goal hierarchy, the AI review framework, and the privacy model each came from research about how people actually behave around long-term goals. Not how they intend to. That distinction drove every prioritization decision and kept the MVP focused on the one thing that matters: helping users execute consistently, not just plan comprehensively.</p>
        <p>The PRD produced for the development team covered user roles, state transitions, validation logic, and edge cases across every core flow. That document closed the gap between design intent and implementation reality.</p>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415217/file/e49de8c1922031fbb649ea265929c113.png?resize=1024x1024&amp;vertical=center" alt="LeverageX measurement dashboard">
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <h2>What This Project Shows</h2>
        <p>LeverageX is where I learned that behavioral design is messier than UI design. Designing for human psychology means accepting that users will not always do what you hoped, and then designing the system to route around that reality anyway. The accountability model, the AI scoring framework, the privacy defaults, the goal hierarchy: each of those came from research about how people actually fail at goals, not from assumptions about what a productivity app should include.</p>
        <p>This is the kind of project that shows how I think about product: start with the behavioral problem, work backwards to the design decisions, and build a system where the structure itself does the heavy lifting instead of hoping users find the willpower to make it work.</p>
        <figure>
          <img src="https://cdn.dribbble.com/userupload/48415218/file/01e472aa1e26b5a1ed451ddf57f9c751.png?resize=1024x672&amp;vertical=center" alt="Final LeverageX case study mockup">
        </figure>
      </div>
    </section>

    <footer class="footer">
      <h2>Explore the Work</h2>
      <p>LeverageX is a product design exploration into accountability, behavioral systems, AI coaching, and long-term goal execution.</p>
      <div class="footer-sources">
        <div class="footer-links">
          <a href="https://www.figma.com/design/yvGNrEH5SBtGyCdD9wFJSi/theHoldApp?node-id=77-4859" target="_blank" rel="noopener noreferrer">Workspace &#8599;</a>
          <a href="https://www.figma.com/design/yvGNrEH5SBtGyCdD9wFJSi/theHoldApp?node-id=0-1" target="_blank" rel="noopener noreferrer">Logo, Brand Visual &amp; Identity &#8599;</a>
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






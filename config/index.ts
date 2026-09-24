
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
  <p>Millions of adults still struggle with reading and writing because they never had access to quality education, or were forced to leave school early. MilPress was created to close that gap with a mobile learning experience built specifically for adult learners, not adapted from a product designed for children.</p>
  <p>As Product Designer, my role went beyond interfaces. I had to consider how product decisions influence motivation, accessibility, and long-term engagement, designing something intuitive enough to reduce friction and dignified enough to keep adults coming back.</p>
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
  <p>That shifted the core question from &#8220;How do I make learning fun?&#8221; to &#8220;How do I make learning feel <strong>respectful, safe, and achievable?</strong>&#8221; That question became the foundation for every decision that followed.</p>
</section>

<section class="text-block">
  <h2>Audience</h2>
  <p>MilPress was designed for <strong>adult learners</strong> who never had the opportunity for formal education, or are returning to it later in life, to become more confident and independent in their communities.</p>
  <p>Unlike children, they bring life experience and responsibilities into the process, but often carry <strong>embarrassment or fear of making mistakes</strong> from past schooling. Designing for that meant leading with dignity, empathy, and simplicity, not just usability.</p>
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
  <p>Before designing interfaces, I researched adult literacy challenges, learning psychology, accessibility standards, and existing literacy programs, to move beyond assumptions and design with empathy.</p>
  <p><strong>Key questions:</strong></p>
  <ul>
    <li>Why do adults stop learning, and what stops them from returning?</li>
    <li>What motivates them to continue?</li>
    <li>How comfortable are they with smartphones?</li>
    <li>What barriers exist beyond literacy itself?</li>
  </ul>

  <h3>Competitor Analysis</h3>
  <p>I evaluated <strong>Duolingo</strong>, <strong>Google Read Along</strong>, <strong>Khan Academy</strong>, and local adult education initiatives, comparing navigation, motivation systems, accessibility, and content hierarchy.</p>
  <div class="callout">
    <p>Most educational apps were built for children or digitally confident users. Almost none considered older adults with limited literacy and a need for privacy. That gap became MilPress&#8217;s biggest opportunity.</p>
  </div>
</section>

<section class="text-block">
  <h2>Defining the Product</h2>
  <p>Every feature had to solve a specific, research-backed problem, not just look impressive. I mapped each recurring pain point from adult learners directly to a design decision, keeping the product practical and aligned with both user needs and long-term goals.</p>
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
  <p>The visual concept centered on a clean mobile screen mockup with brand signature, set against <strong>warm, muted tones</strong> with subtle gradient highlights that communicate approachability and trust from first glance.</p>
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
  <p>The visual language stayed warm, friendly, and approachable, never academic. It focused on clear typography, high contrast, consistent spacing, friendly illustration, and large touch targets, all in service of reducing anxiety and building confidence.</p>
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
  <p>A well-structured design system improves collaboration, speeds up development, and creates a more consistent experience for users, while designing not just for the current release but for future growth.</p>
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
  <p>I treated technical feasibility as part of the design process, not a handoff afterthought, building <em>reusable components</em>, <em>consistent spacing rules</em>, <em>standardized interaction patterns</em>, and <em>clear documentation</em> to reduce ambiguity during implementation.</p>

  <h3>Accessibility</h3>
  <p>Accessibility wasn&#8217;t a checklist. It was a core principle from day one, designed around older adults, low digital literacy, limited vision, small devices, and slow connections: <em>large typography</em>, <em>high contrast</em>, <em>clear labels</em>, <em>minimal cognitive load</em>, and <em>offline support</em>.</p>
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
        <p>Accelerated the research phase, synthesizing accessibility best practices, comparing competitor learning experiences, and surfacing patterns across educational platforms.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">02</span>
      <div>
        <h3>UX Writing &amp; Content Design</h3>
        <p>Generated alternative wording for instructions, buttons, and error messages, keeping microcopy simple, friendly, and encouraging throughout.</p>
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
  <p>The result: faster research, more ideas explored, and more confident iteration, with the user still at the center of every decision.</p>
</section>

<section class="text-block">
  <h2>Challenges &amp; How I Solved Them</h2>
  <p>This project pushed me beyond aesthetics, into decisions that balanced user needs, business objectives, and technical feasibility.</p>
  <ol class="flow-list">
    <li>
      <span class="flow-n">01</span>
      <div>
        <h3>Balancing Simplicity with Functionality</h3>
        <p>Too many options risked discouraging learners with lower digital confidence; oversimplifying risked limiting the product. I prioritized features by <strong>user value, not quantity</strong>, keeping the interface focused on learning, not figuring out the app.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">02</span>
      <div>
        <h3>Designing for Two Forms of Literacy</h3>
        <p>Learners needed support for both reading/writing and general digital literacy. I reduced cognitive load with familiar layouts, clear hierarchy, descriptive labels, and predictable patterns, reinforcing how inclusive design has to account for every kind of confidence gap.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">03</span>
      <div>
        <h3>Maintaining Long-Term Motivation</h3>
        <p>Adults are motivated differently than children, and consistency is harder than initial engagement. Instead of competitive gamification, I built intrinsic motivation through visible progress, milestone celebrations, and feedback that rewards effort over perfection.</p>
      </div>
    </li>
  </ol>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48534663/file/602e08b495038e491e5a240ff9d7f9de.png?resize=752x&amp;vertical=center" alt="Challenges and solutions" loading="lazy">
</figure>

<section class="text-block">
  <h2>Product Impact</h2>
  <p>MilPress remains a design project, but my contribution went beyond polished interfaces. It was about building a <strong>foundation for usability, scalability, and efficient collaboration</strong> across the product development lifecycle.</p>
  <ol class="tk-list">
    <li>
      <span class="tk-n"></span>
      <div>
        <h3>A More Accessible Learning Experience</h3>
        <p>Accessibility-first principles shaped an interface that accommodates older adults, first-time smartphone users, and learners with limited literacy, minimizing cognitive load through clear navigation and readable typography.</p>
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
        <p>Every major feature was grounded in research, accessibility requirements, and long-term scalability, not personal preference, ensuring design decisions served the product, not just its appearance.</p>
      </div>
    </li>
  </ol>
</section>

<section class="text-block">
  <h2>Final Reflection</h2>
  <p>Being a Product Designer here meant more than shipping visually appealing interfaces. It meant identifying problems, understanding users, simplifying complexity, and building systems that support both people and the teams building the product.</p>
  <p>The most rewarding part wasn&#8217;t the polished screens. It was contributing to something with the potential to improve lives through education. That reinforced my commitment to building products that solve real problems, respect users&#8217; dignity, and create lasting value for both the people who use them and the teams that build them.</p>
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
    image: '/akropolis.png',
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
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #2563eb;
    --accent-light: #eff6ff;
    --deep: #14213d;
    --radius: 12px;
  }
  .kyc * { box-sizing: border-box; }
  .kyc img { display: block; width: 100%; height: auto; }
  .kyc a { color: inherit; text-decoration: none; }
  .kyc .text-block { width: min(720px, 100%); margin: 48px auto; }
  .kyc .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .kyc .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .kyc h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .kyc h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .kyc h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .kyc p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .kyc ul, .kyc ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .kyc li { margin-bottom: 6px; }
  .kyc li p { margin: 0; }
  .kyc strong { font-weight: 700; color: var(--deep); }
  .kyc em, .kyc i { font-style: italic; }
  .kyc .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .kyc .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .kyc .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .kyc .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .kyc .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .kyc .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .kyc .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .kyc .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .kyc .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .kyc .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .kyc .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .kyc .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .kyc .callout p { margin: 0; font-style: italic; }
  .kyc .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; margin: 22px 0 0; list-style: none; }
  .kyc .pill-list li { margin: 0; padding: 8px 12px; background: var(--soft); border: 1px solid var(--line); border-radius: 999px; color: var(--muted); font-size: 14px; font-weight: 600; }
  .kyc .flow-list, .kyc .tk-list { list-style: none; padding: 0; margin: 20px 0 0; counter-reset: tk; }
  .kyc .flow-list li, .kyc .tk-list li { display: grid; grid-template-columns: 36px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: start; counter-increment: tk; }
  .kyc .flow-list li:first-child, .kyc .tk-list li:first-child { border-top: 1px solid var(--line); }
  .kyc .flow-n, .kyc .tk-n::before { font-size: 12px; font-weight: 700; color: var(--accent); letter-spacing: 0.04em; padding-top: 4px; }
  .kyc .tk-n::before { content: "0" counter(tk); }
  .kyc .flow-list h3, .kyc .tk-list h3 { margin: 0 0 6px; }
  .kyc .flow-list p, .kyc .tk-list p { margin: 0; }
  .kyc .carousel { position: relative; width: min(752px, 100%); margin: 48px auto; }
  .kyc .carousel input[type="radio"] { display: none; }
  .kyc .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .kyc .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; margin: 0; }
  .kyc .carousel-slide img { width: 100%; height: auto; display: block; }
  .kyc .carousel-thumbs { display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
  .kyc .carousel-thumbs label { width: clamp(56px, 15vw, 80px); height: clamp(35px, 9.375vw, 50px); border-radius: 6px; overflow: hidden; border: 2px solid transparent; opacity: 0.5; cursor: pointer; transition: opacity 0.2s, border-color 0.2s; display: block; flex-shrink: 0; }
  .kyc .carousel-thumbs label img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
  #kyc-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #kyc-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #kyc-c1-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #kyc-c1-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #kyc-c1-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #kyc-c1-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #kyc-c1-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #kyc-c1-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--accent); opacity: 1; }
  #kyc-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #kyc-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #kyc-c2-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #kyc-c2-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #kyc-c2-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #kyc-c2-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  .kyc .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .kyc .footer h2 { margin-top: 0; }
  .kyc .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .kyc .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .kyc .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .kyc .footer-links a:hover { border-color: var(--accent); }
  .dark .kyc { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; --accent-light: rgba(37,99,235,0.08); }
  .dark .kyc p, .dark .kyc ul, .dark .kyc ol { color: #9ca3af; }
  .dark .kyc h1, .dark .kyc h2, .dark .kyc h3, .dark .kyc strong { color: #f3f4f6; }
  .dark .kyc .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .kyc .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .kyc .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .kyc .principle-card { background: rgba(255,255,255,0.04); }
  .dark .kyc .pill-list li { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); color: #d1d5db; }
  .dark .kyc .lead { color: #d1d5db; }
  .dark .kyc .callout { color: #f3f4f6; }
  .dark .kyc .carousel-slides { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .kyc .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .kyc .principles-grid { grid-template-columns: 1fr; }
    .kyc .meta-row { flex-direction: column; }
    .kyc .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="kyc">

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48405551/file/face702b53244c049e006ae11dec73d7.png?resize=1600x904&amp;vertical=center" alt="ID / Passport Verification Flow cover" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">UX Case Study / KYC Flow</p>
  <h1>ID / Passport Verification Flow</h1>
  <p class="lead">A modern identity verification experience designed to reduce onboarding friction through guided document capture, live edge detection, intelligent validation, and biometric face matching.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Tools</p>
      <p class="meta-value">Figma</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Detailing</p>
      <p class="meta-value">Auto Layout &bull; Components &bull; Variables &bull; Prototyping</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">Fintech &bull; HR Tech &bull; KYC &bull; Mobile Design &bull; Identity Verification</p>
    </div>
  </div>

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
</section>

<section class="text-block">
  <h2>KYC Is Essential, but It Often Feels Intimidating</h2>
  <p>Identity verification is one of the first moments where users decide whether to continue with a product or abandon it altogether. Users are expected to capture a perfect photo of their ID without much guidance.</p>
  <p>They struggle with positioning the document correctly, dealing with glare or poor lighting, and understanding why a scan failed. Even after submitting their document, they are often left staring at a loading screen with no indication of what is happening behind the scenes.</p>
  <div class="callout">
    <p>The project reframed verification from a technical requirement into a guided journey that gives users confidence at every step.</p>
  </div>
</section>

<section class="text-block">
  <h2>What We Were Solving For</h2>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Guide Early</h3>
      <p>Educate users before scanning instead of showing errors afterwards.</p>
    </div>
    <div class="principle-card">
      <h3>Reduce Failed Scans</h3>
      <p>Provide overlays, edge detection, and lighting guidance in real time.</p>
    </div>
    <div class="principle-card">
      <h3>Build Trust</h3>
      <p>Show exactly what the system is doing during verification.</p>
    </div>
    <div class="principle-card">
      <h3>Lower Cognitive Load</h3>
      <p>Break verification into small, manageable steps.</p>
    </div>
    <div class="principle-card">
      <h3>Support Global Documents</h3>
      <p>Handle national IDs, passports, and residence permits without redesigning the interface.</p>
    </div>
  </div>
</section>

<section class="text-block">
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
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48405556/file/d4147a93c3812b6dacec89b995cce8c6.png?resize=1024x576&amp;vertical=center" alt="KYC verification overview screen" loading="lazy">
</figure>

<section class="text-block">
  <h2>Design Process</h2>
  <p>Key components included verification cards, scanner overlays, progress indicators, detection nodes, success toasts, face scanner patterns, step progress bars, and camera overlays.</p>
</section>

<div class="carousel">
  <input type="radio" name="kyc-c1" id="kyc-c1-1" checked>
  <input type="radio" name="kyc-c1" id="kyc-c1-2">
  <input type="radio" name="kyc-c1" id="kyc-c1-3">
  <input type="radio" name="kyc-c1" id="kyc-c1-4">
  <div class="carousel-slides">
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405560/file/e6961040719e91e10fe6b6937fe62d3e.png?resize=1024x576&amp;vertical=center" alt="Document verification component set" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405559/file/c6b7d734fa3d6aaa588a4487d0c62f5a.png?resize=1024x576&amp;vertical=center" alt="Camera scanner interaction screens" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405557/file/bf8e3fa939853ff4db2d278c125c2b2f.png?resize=1024x561&amp;vertical=center" alt="Selfie verification flow screens" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405558/file/223fcdafd186244f26951f6c829fffe1.png?resize=1024x561&amp;vertical=center" alt="KYC success and progress screens" loading="lazy"></figure>
  </div>
  <div class="carousel-thumbs">
    <label for="kyc-c1-1"><img src="https://cdn.dribbble.com/userupload/48405560/file/e6961040719e91e10fe6b6937fe62d3e.png?resize=1024x576&amp;vertical=center" alt="Slide 1" class="carousel-thumb-img"></label>
    <label for="kyc-c1-2"><img src="https://cdn.dribbble.com/userupload/48405559/file/c6b7d734fa3d6aaa588a4487d0c62f5a.png?resize=1024x576&amp;vertical=center" alt="Slide 2" class="carousel-thumb-img"></label>
    <label for="kyc-c1-3"><img src="https://cdn.dribbble.com/userupload/48405557/file/bf8e3fa939853ff4db2d278c125c2b2f.png?resize=1024x561&amp;vertical=center" alt="Slide 3" class="carousel-thumb-img"></label>
    <label for="kyc-c1-4"><img src="https://cdn.dribbble.com/userupload/48405558/file/223fcdafd186244f26951f6c829fffe1.png?resize=1024x561&amp;vertical=center" alt="Slide 4" class="carousel-thumb-img"></label>
  </div>
</div>

<section class="text-block">
  <h2>Designing for Confidence</h2>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Progressive Disclosure</h3>
      <p>Information appears only when relevant, reducing cognitive overload and keeping users focused on the next action.</p>
    </div>
    <div class="principle-card">
      <h3>Real-Time Feedback</h3>
      <p>Live edge detection, green confirmation borders, validation checkpoints, and progress indicators reassure users that the system is working.</p>
    </div>
    <div class="principle-card">
      <h3>Error Prevention</h3>
      <p>The interface helps users avoid failed scans instead of relying on error messages after something goes wrong.</p>
    </div>
    <div class="principle-card">
      <h3>Transparency</h3>
      <p>Plain-language processing states explain when a document is being analyzed, when facial matching is in progress, and when verification is complete.</p>
    </div>
  </div>
  <div class="callout">
    <p>The best verification experience is one where users rarely encounter errors because the interface helps them succeed before mistakes happen.</p>
  </div>
</section>

<section class="text-block">
  <h2>Outcome</h2>
  <p>The final experience transforms a traditionally frustrating KYC process into a guided, transparent, and confidence-building journey.</p>
  <p>By combining visual education, real-time feedback, automatic validation, and progressive disclosure, the flow minimizes user effort while improving trust and increasing the likelihood of successful verification on the first attempt.</p>
</section>

<div class="carousel">
  <input type="radio" name="kyc-c2" id="kyc-c2-1" checked>
  <input type="radio" name="kyc-c2" id="kyc-c2-2">
  <input type="radio" name="kyc-c2" id="kyc-c2-3">
  <div class="carousel-slides">
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405554/file/e5d4050b9cf1ba6dce1e01c8abd5411e.png?resize=1024x561&amp;vertical=center" alt="Final identity verification flow overview" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405555/file/5f8e1687d141af5e7391127f307164b5.png?resize=1024x561&amp;vertical=center" alt="Final passport verification flow overview" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48405552/file/264c6d7653bae60e8ad3fe629b920f3f.png?resize=1024x576&amp;vertical=center" alt="KYC verification framework illustration" loading="lazy"></figure>
  </div>
  <div class="carousel-thumbs">
    <label for="kyc-c2-1"><img src="https://cdn.dribbble.com/userupload/48405554/file/e5d4050b9cf1ba6dce1e01c8abd5411e.png?resize=1024x561&amp;vertical=center" alt="Slide 1" class="carousel-thumb-img"></label>
    <label for="kyc-c2-2"><img src="https://cdn.dribbble.com/userupload/48405555/file/5f8e1687d141af5e7391127f307164b5.png?resize=1024x561&amp;vertical=center" alt="Slide 2" class="carousel-thumb-img"></label>
    <label for="kyc-c2-3"><img src="https://cdn.dribbble.com/userupload/48405552/file/264c6d7653bae60e8ad3fe629b920f3f.png?resize=1024x576&amp;vertical=center" alt="Slide 3" class="carousel-thumb-img"></label>
  </div>
</div>

<section class="text-block">
  <h2>KYC Verification Framework</h2>
  <p>The framework illustrates a streamlined end-to-end identity verification process that balances security, compliance, and user experience. Instead of treating verification as a single step, it breaks the journey into four connected phases.</p>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Phase 01 &mdash; Guide</h3>
      <p>Prepare users before document capture.</p>
    </div>
    <div class="principle-card">
      <h3>Phase 02 &mdash; Capture</h3>
      <p>Use live feedback to improve scan quality.</p>
    </div>
    <div class="principle-card">
      <h3>Phase 03 &mdash; Validate</h3>
      <p>Analyze document data and biometric quality.</p>
    </div>
    <div class="principle-card">
      <h3>Phase 04 &mdash; Confirm</h3>
      <p>Communicate completion clearly and confidently.</p>
    </div>
  </div>
  <p>Together, these stages minimize onboarding friction while maintaining high standards of identity assurance.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48411004/file/42cadc74a4bd270060b0db3eef9bda29.png?resize=1024x683&amp;vertical=center" alt="KYC framework detailed screen" loading="lazy">
</figure>

<section class="text-block">
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
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48411003/file/7506c4f075c9ffa5871a43b2e68abbd1.png?resize=1024x683&amp;vertical=center" alt="Final KYC verification presentation screen" loading="lazy">
</figure>

<section class="text-block">
  <h2>Final Reflection</h2>
  <p>The biggest takeaway from this project was that great KYC design is proactive rather than reactive. Instead of relying on error messages after something goes wrong, the experience should prevent mistakes through clear guidance, real-time feedback, and transparent system communication.</p>
  <p>By balancing usability, security, and trust, the verification process becomes more than a mandatory onboarding step. It becomes an opportunity to build confidence from the very first interaction.</p>
  <p>A thoughtful KYC experience not only improves completion rates but also establishes the foundation for a long-lasting relationship between users and the product.</p>
</section>

<footer class="footer">
  <h2>Thank you</h2>
  <p>ID / Passport Verification Flow is a UX exploration of how guided capture, intelligent validation, and transparent system feedback can make KYC onboarding feel clear and reliable.</p>
  <div class="footer-sources">
    <div class="footer-links">
      <a href="https://www.figma.com/community/file/1610377435924665179" target="_blank" rel="noopener noreferrer">Workspace &#8599;</a>
    </div>
  </div>
</footer>

</div>`,
    link: '',
  },
  {
    slug: 'designing-leveragex',
    title: 'Designing LeverageX',
    category: 'Project',
    tags: ['Product Design', 'AI', 'UX Research'],
    image: '/leveragex.png',
    summary: 'Building an AI-powered accountability platform that helps people actually achieve long-term goals.',
    year: '2025',
    role: 'Product Designer',
    description: `<style>
  .lx {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #ff7700;
    --deep: #1c1510;
    --radius: 12px;
  }
  .lx * { box-sizing: border-box; }
  .lx img { display: block; width: 100%; height: auto; }
  .lx a { color: inherit; text-decoration: none; }
  .lx .text-block { width: min(720px, 100%); margin: 48px auto; }
  .lx .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(28,21,16,0.08), 0 24px 64px rgba(28,21,16,0.06); }
  .lx .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .lx .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .lx .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .lx .image-grid figure img { width: 100%; height: auto; display: block; }
  .lx h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .lx h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .lx h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .lx p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .lx ul, .lx ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .lx li { margin-bottom: 6px; }
  .lx li p { margin: 0; }
  .lx strong { font-weight: 700; color: var(--deep); }
  .lx em, .lx i { font-style: italic; }
  .lx .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .lx .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .lx .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .lx .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .lx .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .lx .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .lx .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .lx .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .lx .principle-card p { margin: 0 0 8px; font-size: 14px; line-height: 1.65; }
  .lx .principle-card p:last-child { margin-bottom: 0; }
  .lx .principle-card ul, .lx .principle-card ol { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .lx .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .lx .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .lx .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .lx .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .lx .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .lx .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .lx .footer h2 { margin-top: 0; }
  .lx .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .lx .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .lx .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .lx .footer-links a:hover { border-color: var(--accent); }
  .dark .lx { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .lx p, .dark .lx ul, .dark .lx ol { color: #9ca3af; }
  .dark .lx h1, .dark .lx h2, .dark .lx h3, .dark .lx strong { color: #f3f4f6; }
  .dark .lx .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .lx .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .lx .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .lx .principle-card { background: rgba(255,255,255,0.04); }
  .dark .lx .lead { color: #d1d5db; }
  .dark .lx .callout { color: #f3f4f6; }
  .dark .lx .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .lx .principles-grid { grid-template-columns: 1fr; }
    .lx .image-grid { grid-template-columns: 1fr; }
    .lx .meta-row { flex-direction: column; }
    .lx .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style><style>
  .lx .flow-list { list-style: none; padding: 0; margin: 20px 0 0; }
  .lx .flow-list li { display: grid; grid-template-columns: 36px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .lx .flow-list li:first-child { border-top: 1px solid var(--line); }
  .lx .flow-n { font-size: 12px; font-weight: 700; color: var(--accent); letter-spacing: 0.04em; padding-top: 4px; }
  .lx .flow-list h3 { margin: 0 0 6px; }
  .lx .flow-list p:last-child { margin-bottom: 0; }
  .lx .stat-list { list-style: none; padding: 0; margin: 24px 0 0; }
  .lx .stat-list li { display: grid; grid-template-columns: 72px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .lx .stat-list li:first-child { border-top: 1px solid var(--line); }
  .lx .stat-n { font-size: 22px; font-weight: 800; color: var(--accent); letter-spacing: -0.02em; }
  .lx .stat-list h3 { margin: 0 0 4px; }
  .lx .stat-list p { margin: 0; }
  .lx .hierarchy-flow { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin: 24px 0; padding: 20px; background: var(--soft); border: 1px solid var(--line); border-radius: var(--radius); }
  .lx .hierarchy-step { font-size: 13px; font-weight: 700; color: var(--deep); padding: 7px 14px; background: var(--panel); border: 1px solid var(--line); border-radius: 8px; }
  .lx .hierarchy-arrow { color: var(--accent); font-weight: 800; }
  .lx .carousel { position: relative; width: min(752px, 100%); margin: 48px auto; }
  .lx .carousel input[type="radio"] { display: none; }
  .lx .carousel-slides { display: grid; grid-template-columns: 1fr; border-radius: var(--radius); overflow: hidden; box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .lx .carousel-slide { grid-column: 1; grid-row: 1; opacity: 0; transition: opacity 0.3s ease; margin: 0; }
  .lx .carousel-slide img { width: 100%; height: auto; display: block; }
  .lx .carousel-thumbs { display: flex; gap: 8px; justify-content: center; margin-top: 12px; flex-wrap: wrap; }
  .lx .carousel-thumbs label { width: clamp(56px, 15vw, 80px); height: clamp(35px, 9.375vw, 50px); border-radius: 6px; overflow: hidden; border: 2px solid transparent; opacity: 0.5; cursor: pointer; transition: opacity 0.2s, border-color 0.2s; display: block; flex-shrink: 0; }
  .lx .carousel-thumbs label img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
  #lx-c1-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c1-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #lx-c1-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c1-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #lx-c2-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c2-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #lx-c2-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c2-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #lx-c3-1:checked ~ .carousel-slides .carousel-slide:nth-child(1) { opacity: 1; }
  #lx-c3-1:checked ~ .carousel-thumbs label:nth-child(1) { border-color: var(--accent); opacity: 1; }
  #lx-c3-2:checked ~ .carousel-slides .carousel-slide:nth-child(2) { opacity: 1; }
  #lx-c3-2:checked ~ .carousel-thumbs label:nth-child(2) { border-color: var(--accent); opacity: 1; }
  #lx-c3-3:checked ~ .carousel-slides .carousel-slide:nth-child(3) { opacity: 1; }
  #lx-c3-3:checked ~ .carousel-thumbs label:nth-child(3) { border-color: var(--accent); opacity: 1; }
  #lx-c3-4:checked ~ .carousel-slides .carousel-slide:nth-child(4) { opacity: 1; }
  #lx-c3-4:checked ~ .carousel-thumbs label:nth-child(4) { border-color: var(--accent); opacity: 1; }
  #lx-c3-5:checked ~ .carousel-slides .carousel-slide:nth-child(5) { opacity: 1; }
  #lx-c3-5:checked ~ .carousel-thumbs label:nth-child(5) { border-color: var(--accent); opacity: 1; }
  #lx-c3-6:checked ~ .carousel-slides .carousel-slide:nth-child(6) { opacity: 1; }
  #lx-c3-6:checked ~ .carousel-thumbs label:nth-child(6) { border-color: var(--accent); opacity: 1; }
  .dark .lx .hierarchy-step { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); }
  .dark .lx .carousel-slides { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  @media (max-width: 600px) {
    .lx .stat-list li { grid-template-columns: 60px 1fr; gap: 14px; }
  }
</style>

<div class="lx">

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48414616/file/98c08c3b67c8e1b048694ee0f30c95fe.png?resize=752x&amp;vertical=center" alt="Designing LeverageX cover" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Product Design Case Study</p>
  <h1>Designing LeverageX</h1>
  <p class="lead">Building an AI-powered accountability system that keeps people executing long after motivation runs out.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">Product Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Duration</p>
      <p class="meta-value">3 Months</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Tools</p>
      <p class="meta-value">Figma, Adobe Illustrator</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Scope</p>
      <p class="meta-value">Strategy &bull; Research &bull; UI &bull; Design System &bull; PRD</p>
    </div>
  </div>

  <p>Goal-setting apps are easy to design. Everyone understands the loop: set a goal, check it off, feel good. The harder problem, the one LeverageX was actually built to solve, is what happens three weeks after the initial excitement fades. That is a behavioral design problem, not a feature problem. It is the kind of challenge I find genuinely interesting.</p>
  <p>The brief was not &ldquo;build a to-do app with goals.&rdquo; It was: figure out why people fail to execute on long-term ambitions, then design a system that closes those gaps. That pulled me into product strategy territory well before I touched a single screen.</p>
</section>

<div class="carousel">
  <input type="radio" name="lx-c1" id="lx-c1-1" checked>
  <input type="radio" name="lx-c1" id="lx-c1-2">
  <div class="carousel-slides">
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415210/file/fa8d09b907576ea0c6ca884337911c26.png?resize=1024x768&amp;vertical=center" alt="LeverageX product screen mockup" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415211/file/edeeb0615d488c72cb8c5f3afcb53f44.png?resize=1024x768&amp;vertical=center" alt="LeverageX dashboard concept" loading="lazy"></figure>
  </div>
  <div class="carousel-thumbs">
    <label for="lx-c1-1"><img src="https://cdn.dribbble.com/userupload/48415210/file/fa8d09b907576ea0c6ca884337911c26.png?resize=1024x768&amp;vertical=center" alt="LeverageX product screen mockup thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c1-2"><img src="https://cdn.dribbble.com/userupload/48415211/file/edeeb0615d488c72cb8c5f3afcb53f44.png?resize=1024x768&amp;vertical=center" alt="LeverageX dashboard concept thumbnail" class="carousel-thumb-img"></label>
  </div>
</div>

<section class="text-block">
  <h2>Organizing Work Is Not the Same as Getting Work Done</h2>
  <p>Most productivity apps are good at capturing intention. They are terrible at sustaining execution. The gap is not missing features. No existing tool treats accountability as a first-class design concern. Most apps make you responsible to a list. LeverageX needed to make you responsible to a system.</p>
  <p>People do not abandon goals because they stop caring. They abandon them because motivation is unreliable, progress is invisible, and there is no external pressure to keep going when life gets difficult.</p>
  <div class="callout">
    <p>The design question was not what should the app track. It was what makes people follow through after motivation runs out.</p>
  </div>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415208/file/cdf0442f75703d50158f815a107612f2.gif" alt="Animated LeverageX product flow" loading="lazy">
</figure>

<section class="text-block">
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
</section>

<div class="carousel">
  <input type="radio" name="lx-c2" id="lx-c2-1" checked>
  <input type="radio" name="lx-c2" id="lx-c2-2">
  <div class="carousel-slides">
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415216/file/74f072b157ac9786f4f08a43bdf665ad.png?resize=1024x559&amp;vertical=center" alt="LeverageX product goal diagram" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415209/file/a3870413b6267631b3bebe1369f12949.jpg?resize=1024x603&amp;vertical=center" alt="LeverageX product planning board" loading="lazy"></figure>
  </div>
  <div class="carousel-thumbs">
    <label for="lx-c2-1"><img src="https://cdn.dribbble.com/userupload/48415216/file/74f072b157ac9786f4f08a43bdf665ad.png?resize=1024x559&amp;vertical=center" alt="LeverageX product goal diagram thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c2-2"><img src="https://cdn.dribbble.com/userupload/48415209/file/a3870413b6267631b3bebe1369f12949.jpg?resize=1024x603&amp;vertical=center" alt="LeverageX product planning board thumbnail" class="carousel-thumb-img"></label>
  </div>
</div>

<section class="text-block">
  <h2>Designing AI as a Coach, Not a Chatbot</h2>
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
  <p>Human partners bring empathy, lived experience, and personal encouragement that AI cannot replicate. The AI fills the gaps with availability, consistency, and data. The hybrid model was not a compromise between two options. It was the design itself.</p>
</section>

<div class="image-grid">
  <figure><img src="https://cdn.dribbble.com/userupload/48415215/file/468167028e8b7eea3aeeb53e5bcc73b8.jpg?resize=1024x628&amp;vertical=center" alt="AI coaching screen" loading="lazy"></figure>
  <figure><img src="https://cdn.dribbble.com/userupload/48415212/file/8f9b2f5989826271882c8ca968820105.webp?resize=1024x768&amp;vertical=center" alt="AI review details" loading="lazy"></figure>
</div>

<section class="text-block">
  <h2>Information Architecture</h2>
  <p>Every feature was evaluated against one question: does this help users execute, or does it add complexity without contributing to the core loop? The Apex Goal hierarchy gives every session a concrete answer to &ldquo;what should I do right now?&rdquo;</p>
  <div class="hierarchy-flow">
    <span class="hierarchy-step">Apex</span>
    <span class="hierarchy-arrow">&#8594;</span>
    <span class="hierarchy-step">Monthly</span>
    <span class="hierarchy-arrow">&#8594;</span>
    <span class="hierarchy-step">Weekly</span>
    <span class="hierarchy-arrow">&#8594;</span>
    <span class="hierarchy-step">Daily</span>
  </div>
  <p>Features that did not connect to execution were cut from the MVP.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415226/file/6f8126edd10b4f128acd362d7ce57223.png?resize=1024x559&amp;vertical=center" alt="LeverageX information architecture" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415213/file/bc66eebe5fd7e04fd267b87c3c32c4ab.png?resize=1024x928&amp;vertical=center" alt="Goal hierarchy diagram" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415214/file/1d5222a097cffe32ab2c8bb8d0864a03.png?resize=1024x509&amp;vertical=center" alt="Accountability partner interface" loading="lazy">
</figure>

<div class="carousel">
  <input type="radio" name="lx-c3" id="lx-c3-1" checked>
  <input type="radio" name="lx-c3" id="lx-c3-2">
  <input type="radio" name="lx-c3" id="lx-c3-3">
  <input type="radio" name="lx-c3" id="lx-c3-4">
  <input type="radio" name="lx-c3" id="lx-c3-5">
  <input type="radio" name="lx-c3" id="lx-c3-6">
  <div class="carousel-slides">
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415221/file/5c5c67154300235fbf22aadc3de81dc6.png?resize=1024x954&amp;vertical=center" alt="App components screen one" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415222/file/f811daf963de5b49c40e7c4838cbee78.png?resize=1024x954&amp;vertical=center" alt="App components screen two" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415219/file/adea91bc0569262a5d5317430d82a02c.png?resize=1024x768&amp;vertical=center" alt="High fidelity LeverageX screen" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415220/file/f7ea3962326d9a79256fa7ac3097cd1a.png?resize=1024x768&amp;vertical=center" alt="High fidelity dashboard screen" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415225/file/d0815fec6fd837e955afe354f0a0990f.png?resize=1024x718&amp;vertical=center" alt="UI flow board" loading="lazy"></figure>
    <figure class="carousel-slide"><img src="https://cdn.dribbble.com/userupload/48415227/file/24deb10cda9bda432dfb0f4000102528.png?resize=1024x718&amp;vertical=center" alt="LeverageX user interface overview" loading="lazy"></figure>
  </div>
  <div class="carousel-thumbs">
    <label for="lx-c3-1"><img src="https://cdn.dribbble.com/userupload/48415221/file/5c5c67154300235fbf22aadc3de81dc6.png?resize=1024x954&amp;vertical=center" alt="App components screen one thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c3-2"><img src="https://cdn.dribbble.com/userupload/48415222/file/f811daf963de5b49c40e7c4838cbee78.png?resize=1024x954&amp;vertical=center" alt="App components screen two thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c3-3"><img src="https://cdn.dribbble.com/userupload/48415219/file/adea91bc0569262a5d5317430d82a02c.png?resize=1024x768&amp;vertical=center" alt="High fidelity LeverageX screen thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c3-4"><img src="https://cdn.dribbble.com/userupload/48415220/file/f7ea3962326d9a79256fa7ac3097cd1a.png?resize=1024x768&amp;vertical=center" alt="High fidelity dashboard screen thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c3-5"><img src="https://cdn.dribbble.com/userupload/48415225/file/d0815fec6fd837e955afe354f0a0990f.png?resize=1024x718&amp;vertical=center" alt="UI flow board thumbnail" class="carousel-thumb-img"></label>
    <label for="lx-c3-6"><img src="https://cdn.dribbble.com/userupload/48415227/file/24deb10cda9bda432dfb0f4000102528.png?resize=1024x718&amp;vertical=center" alt="LeverageX user interface overview thumbnail" class="carousel-thumb-img"></label>
  </div>
</div>

<section class="text-block">
  <h2>What Was Delivered</h2>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>3 mo</h3>
      <p>Research to dev-ready handoff, including a complete PRD with business rules and edge cases.</p>
    </div>
    <div class="principle-card">
      <h3>5 failure modes</h3>
      <p>Behavioral failure modes addressed through system design, not just UI patterns.</p>
    </div>
    <div class="principle-card">
      <h3>2 models</h3>
      <p>Accountability models (AI and human) designed to complement each other within one platform.</p>
    </div>
  </div>
  <p>The Apex Goal hierarchy, the AI review framework, and the privacy model each came from research about how people actually behave around long-term goals. Not how they intend to. That distinction drove every prioritization decision and kept the MVP focused on the one thing that matters: helping users execute consistently, not just plan comprehensively.</p>
  <p>The PRD produced for the development team covered user roles, state transitions, validation logic, and edge cases across every core flow. That document closed the gap between design intent and implementation reality.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415217/file/e49de8c1922031fbb649ea265929c113.png?resize=1024x1024&amp;vertical=center" alt="LeverageX measurement dashboard" loading="lazy">
</figure>

<section class="text-block">
  <h2>What This Project Shows</h2>
  <p>LeverageX is where I learned that behavioral design is messier than UI design. Designing for human psychology means accepting that users will not always do what you hoped, then designing the system to route around that reality anyway. Every core decision, from the accountability model to the AI scoring framework, the privacy defaults, and the goal hierarchy, came from research about how people actually fail at goals, not assumptions about what a productivity app should include.</p>
  <p>This is the kind of project that shows how I think about product: start with the behavioral problem, work backwards to the design decisions, and build a system where the structure itself does the heavy lifting instead of hoping users find the willpower to make it work.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/48415218/file/01e472aa1e26b5a1ed451ddf57f9c751.png?resize=1024x672&amp;vertical=center" alt="Final LeverageX case study mockup" loading="lazy">
</figure>

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
  .ps {
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #475569;
    --deep: #14213d;
    --radius: 12px;
  }
  .ps * { box-sizing: border-box; }
  .ps img { display: block; width: 100%; height: auto; }
  .ps a { color: inherit; text-decoration: none; }
  .ps .text-block { width: min(720px, 100%); margin: 48px auto; }
  .ps .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .ps .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .ps .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ps .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .ps .image-grid figure img { width: 100%; height: auto; display: block; }
  .ps h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .ps h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .ps h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .ps p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .ps ul, .ps ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .ps li { margin-bottom: 6px; }
  .ps li p { margin: 0; }
  .ps strong { font-weight: 700; color: var(--deep); }
  .ps em, .ps i { font-style: italic; }
  .ps .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .ps .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .ps .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .ps .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .ps .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .ps .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .ps .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .ps .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .ps .principle-card p { margin: 0 0 8px; font-size: 14px; line-height: 1.65; }
  .ps .principle-card p:last-child { margin-bottom: 0; }
  .ps .principle-card ul, .ps .principle-card ol { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .ps .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .ps .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .ps .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .ps .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .ps .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .ps .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .ps .footer h2 { margin-top: 0; }
  .ps .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .ps .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .ps .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .ps .footer-links a:hover { border-color: var(--accent); }
  .dark .ps { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .ps p, .dark .ps ul, .dark .ps ol { color: #9ca3af; }
  .dark .ps h1, .dark .ps h2, .dark .ps h3, .dark .ps strong { color: #f3f4f6; }
  .dark .ps .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .ps .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .ps .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .ps .principle-card { background: rgba(255,255,255,0.04); }
  .dark .ps .lead { color: #d1d5db; }
  .dark .ps .callout { color: #f3f4f6; }
  .dark .ps .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .ps .principles-grid { grid-template-columns: 1fr; }
    .ps .image-grid { grid-template-columns: 1fr; }
    .ps .meta-row { flex-direction: column; }
    .ps .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style><style>
  .ps .flow-list { list-style: none; padding: 0; margin: 20px 0 0; }
  .ps .flow-list li { display: grid; grid-template-columns: 36px 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .ps .flow-list li:first-child { border-top: 1px solid var(--line); }
  .ps .flow-n { font-size: 12px; font-weight: 700; color: var(--accent); letter-spacing: 0.04em; padding-top: 4px; }
  .ps .flow-list h3 { margin: 0 0 6px; }
  .ps .flow-list p:last-child { margin-bottom: 0; }
</style>

<div class="ps">

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/73062f242563769.696fa8e609cd6.png" alt="POSCO Smart Home Control Panel UI overview" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Smart Home Interface Concept</p>
  <h1>POSCO Smart Home Control Panel UI</h1>
  <p class="lead">The Future of Atmospheric Living</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">Product Designer &amp; Frontend Engineer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2025</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UI/UX &bull; Concept &bull; Design System</p>
    </div>
  </div>

  <h2>My Vision</h2>
  <p>Modern smart homes often feel like spreadsheets: cluttered, clinical, and overloaded with controls.</p>
  <p><strong>Aurora Home OS</strong> is my concept for transforming home management into a more sensory, atmospheric experience.</p>
  <p>The interface moves away from traditional control panels and toward living interfaces that adapt to the time of day, the home environment, and the mood of the people inside it.</p>

  <h3>Design Language</h3>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Glassmorphism 2.0</h3>
      <p>Deep blurs and soft outer glows create visual depth without adding unnecessary noise.</p>
    </div>
    <div class="principle-card">
      <h3>OLED-Optimized</h3>
      <p>A true-black foundation helps reduce visual intrusion at night while giving the interface a calm, premium glow.</p>
    </div>
    <div class="principle-card">
      <h3>Tactile Digitalism</h3>
      <p>High-fidelity digital dials are paired with large, physical-inspired touch zones for better accessibility and easier interaction.</p>
    </div>
  </div>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2371db242563769.69f0bd0c6e3b8.png" alt="Smart home control panel interface preview" loading="lazy">
</figure>

<section class="text-block">
  <h2>Functional Breakdown</h2>
  <ol class="flow-list">
    <li>
      <span class="flow-n">01</span>
      <div>
        <h3>The Glance Sidebar</h3>
        <p>The left side of the interface is designed as a permanent status pillar, giving users quick access to high-frequency information such as time, weather, and lighting status.</p>
        <p><strong>Dynamic Lighting:</strong> one-tap scene controls such as Gold, Beige, and White allow instant mood changes without forcing users into deeper menus.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">02</span>
      <div>
        <h3>The Smart Thermal Core</h3>
        <p>Instead of standard plus and minus buttons, the climate controls use a progressive arc dial that feels more fluid and intentional.</p>
        <p><strong>Visual Warmth:</strong> the arc responds with changing color temperature as the user adjusts the climate, giving immediate feedback.</p>
        <p><strong>Centralized Modes:</strong> cooling, power, and ventilation are grouped within a focused touch zone for ergonomic ease.</p>
      </div>
    </li>
    <li>
      <span class="flow-n">03</span>
      <div>
        <h3>The Hybrid Dock</h3>
        <p>Because smart should never mean slow, three mission-critical actions &mdash; temperature, light, and security &mdash; remain available in a high-contrast bottom dock.</p>
        <p><strong>High-Affordance Icons:</strong> large touch targets support low-light interactions when the user is drowsy, distracted, or in a hurry.</p>
      </div>
    </li>
  </ol>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0ed7c3242563769.69f0bd0c6d775.png" alt="Smart home lighting interface screen" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a10942242563769.69f0bd0c6ddab.png" alt="Smart home temperature interface screen" loading="lazy">
</figure>

<section class="text-block">
  <h2>Expected Impact</h2>
  <p class="kicker">Not yet validated through formal user testing &mdash; the outcomes below are the intended product impact.</p>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Efficiency</h3>
      <p>Reduced time-to-task for climate adjustments through clearer hierarchy and fewer interaction steps.</p>
    </div>
    <div class="principle-card">
      <h3>Sentiment</h3>
      <p>Designed to feel calming and premium rather than overly technological.</p>
    </div>
    <div class="principle-card">
      <h3>Accessibility</h3>
      <p>High-contrast readouts make key information easier to see from a distance.</p>
    </div>
  </div>
</section>

<div class="image-grid">
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/350696242563769.696fa8e60a1db.png" alt="POSCO smart home interface layout" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5bfd23242563769.69f0bd0c6d051.png" alt="Smart home control panel close up" loading="lazy"></figure>
</div>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f0e815242563769.69f0bd0c6c9e2.png" alt="Smart home control panel visual detail" loading="lazy">
</figure>

<section class="text-block">
  <h2>Key Takeaway</h2>
  <p>By prioritizing <strong>visual hierarchy</strong> and <strong>negative space</strong>, this concept positions the smart home interface as a piece of digital furniture rather than just another utility screen.</p>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5e1177242563769.696fa8e60aa7a.png" alt="Final POSCO Smart Home Control Panel UI showcase" loading="lazy">
</figure>

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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #126BAB;
    --deep: #14213d;
    --radius: 12px;
  }
  .cbv * { box-sizing: border-box; }
  .cbv img { display: block; width: 100%; height: auto; }
  .cbv a { color: inherit; text-decoration: none; }
  .cbv .text-block { width: min(720px, 100%); margin: 48px auto; }
  .cbv .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .cbv .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .cbv .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cbv .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .cbv .image-grid figure img { width: 100%; height: auto; display: block; }
  .cbv h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .cbv h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .cbv h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .cbv p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .cbv ul, .cbv ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .cbv li { margin-bottom: 6px; }
  .cbv li p { margin: 0; }
  .cbv strong { font-weight: 700; color: var(--deep); }
  .cbv em, .cbv i { font-style: italic; }
  .cbv .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .cbv .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .cbv .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .cbv .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .cbv .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .cbv .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .cbv .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .cbv .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .cbv .principle-card p { margin: 0 0 8px; font-size: 14px; line-height: 1.65; }
  .cbv .principle-card p:last-child { margin-bottom: 0; }
  .cbv .principle-card ul, .cbv .principle-card ol { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .cbv .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .cbv .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .cbv .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .cbv .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .cbv .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .cbv .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .cbv .footer h2 { margin-top: 0; }
  .cbv .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .cbv .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .cbv .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .cbv .footer-links a:hover { border-color: var(--accent); }
  .dark .cbv { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .cbv p, .dark .cbv ul, .dark .cbv ol { color: #9ca3af; }
  .dark .cbv h1, .dark .cbv h2, .dark .cbv h3, .dark .cbv strong { color: #f3f4f6; }
  .dark .cbv .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .cbv .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .cbv .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .cbv .principle-card { background: rgba(255,255,255,0.04); }
  .dark .cbv .lead { color: #d1d5db; }
  .dark .cbv .callout { color: #f3f4f6; }
  .dark .cbv .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .cbv .principles-grid { grid-template-columns: 1fr; }
    .cbv .image-grid { grid-template-columns: 1fr; }
    .cbv .meta-row { flex-direction: column; }
    .cbv .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style><style>
  .cbv .palette { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 10px; margin: 24px 0; }
  .cbv .swatch { padding: 28px 12px 12px; border-radius: 10px; border: 1px solid var(--line); font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-align: center; }
</style>

<div class="cbv">

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/46368263/file/8f35925d543bbd92427568f72196f2c5.png?resize=1600x900&amp;vertical=center" alt="Chat Bubble Variations hero presentation" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Exploring Messaging UI System</p>
  <h1>Chat Bubble Variations</h1>
  <p class="lead">Designing clear, accessible, and scalable conversations through thoughtful chat bubble structure.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UI/UX Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2025</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UI Design &bull; Case Study &bull; Design System</p>
    </div>
  </div>

  <p>Chat bubbles are one of the most common UI patterns, yet small design decisions can make or break conversation flow. This case study explores the anatomy of chat bubbles and how thoughtful structure improves clarity, usability, and accessibility in messaging interfaces.</p>

  <h2>The Problem</h2>
  <p>Inconsistent sizing, poor contrast, and unclear sender distinction often disrupt readability and increase cognitive load, especially in long or fast-moving conversations.</p>

  <h2>Color Palette</h2>
  <div class="palette">
    <div class="swatch" style="background:#010101;color:#fff;">#010101</div>
    <div class="swatch" style="background:#126BAB;color:#fff;">#126BAB</div>
    <div class="swatch" style="background:#FDFDFE;color:#111;">#FDFDFE</div>
    <div class="swatch" style="background:#41475C;color:#fff;">#41475C</div>
    <div class="swatch" style="background:#1689db;color:#fff;">#1689db</div>
    <div class="swatch" style="background:#98A6B2;color:#111;">#98A6B2</div>
    <div class="swatch" style="background:#517092;color:#fff;">#517092</div>
  </div>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/46368363/file/c6cd94fd3e237bc497621a2fd05787da.png?resize=1504x846&amp;vertical=center" alt="Chat bubble structure and layout exploration" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/46368364/file/338052d44e9ba9b5c50b1eb69916eafa.png?resize=1504x846&amp;vertical=center" alt="Chat bubble variants and state examples" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/46368365/file/b78d13a41ea33a111957573a64770f9f.png?resize=1504x846&amp;vertical=center" alt="Chat bubble interaction and styling examples" loading="lazy">
</figure>

<section class="text-block">
  <h2>Key Components</h2>
  <ol>
    <li>Message container that adapts to content.</li>
    <li>Directional tail to reinforce ownership.</li>
    <li>Readable text hierarchy for fast scanning.</li>
    <li>Subtle metadata such as timestamps and status.</li>
    <li>Flexible variants built with Auto Layout.</li>
  </ol>
  <div class="callout">
    <p>Result: smoother conversation flow with less visual noise, letting users focus on what matters: the message.</p>
  </div>
</section>

<div class="image-grid">
  <figure><img src="https://cdn.dribbble.com/userupload/46368367/file/a6105287706de06c20f6cecc683df7b2.png?resize=1905x1072&amp;vertical=center" alt="Additional preview one" loading="lazy"></figure>
  <figure><img src="https://cdn.dribbble.com/userupload/46368366/file/14fadc56d935400974a3c492638123e1.png?resize=1905x1072&amp;vertical=center" alt="Additional preview two" loading="lazy"></figure>
</div>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/46368368/file/73b56f4d3b2eb2548cc71be276f5115e.png?resize=1905x1072&amp;vertical=center" alt="Additional preview three" loading="lazy">
</figure>

<footer class="footer">
  <h2>Link to the Design Workspace</h2>
  <p>Thank you.</p>
  <div class="footer-sources">
    <div class="footer-links">
      <a href="https://www.figma.com/community/file/1592807537519737559/chat-bubble-variations" target="_blank" rel="noopener noreferrer">Open the Figma community file &#8599;</a>
    </div>
  </div>
</footer>

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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #2563eb;
    --deep: #14213d;
    --radius: 12px;
  }
  .cb-study * { box-sizing: border-box; }
  .cb-study img { display: block; width: 100%; height: auto; }
  .cb-study a { color: inherit; text-decoration: none; }
  .cb-study .text-block { width: min(720px, 100%); margin: 48px auto; }
  .cb-study .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .cb-study .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .cb-study .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .cb-study .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .cb-study .image-grid figure img { width: 100%; height: auto; display: block; }
  .cb-study h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .cb-study h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .cb-study h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .cb-study p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .cb-study ul, .cb-study ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .cb-study li { margin-bottom: 6px; }
  .cb-study li p { margin: 0; }
  .cb-study strong { font-weight: 700; color: var(--deep); }
  .cb-study em, .cb-study i { font-style: italic; }
  .cb-study .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .cb-study .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .cb-study .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .cb-study .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .cb-study .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .cb-study .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .cb-study .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .cb-study .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .cb-study .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .cb-study .principle-card ul { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .cb-study .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .cb-study .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .cb-study .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .cb-study .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .cb-study .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .cb-study .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .cb-study .footer h2 { margin-top: 0; }
  .cb-study .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .cb-study .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .cb-study .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .cb-study .footer-links a:hover { border-color: var(--accent); }
  .dark .cb-study { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .cb-study p, .dark .cb-study ul, .dark .cb-study ol { color: #9ca3af; }
  .dark .cb-study h1, .dark .cb-study h2, .dark .cb-study h3, .dark .cb-study strong { color: #f3f4f6; }
  .dark .cb-study .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .cb-study .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .cb-study .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .cb-study .principle-card { background: rgba(255,255,255,0.04); }
  .dark .cb-study .lead { color: #d1d5db; }
  .dark .cb-study .callout { color: #f3f4f6; }
  .dark .cb-study .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .cb-study .principles-grid { grid-template-columns: 1fr; }
    .cb-study .image-grid { grid-template-columns: 1fr; }
    .cb-study .meta-row { flex-direction: column; }
    .cb-study .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="cb-study">

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c88857242175915.69679e60234f3.png" alt="Chat Bubble Anatomy cover image" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">UX Case Study</p>
  <h1>Chat Bubble Anatomy</h1>
  <p class="lead">Designing clear, usable, and accessible messaging interfaces.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UX Designer, Product Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2025</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UX Design &bull; Case Study &bull; Accessibility</p>
    </div>
  </div>

  <h2>Why?</h2>
  <p>Chat interfaces are among the most frequently used UI patterns in modern digital products &mdash; from messaging apps and customer support tools to collaboration platforms and social networks.</p>
  <p>Despite their familiarity, poorly designed chat bubbles can quickly introduce confusion, accessibility barriers, and cognitive overload.</p>

  <h3>Problem Statement</h3>
  <p>Most chat UIs look fine until you actually try to create, scale, and design them across real use cases.</p>
  <ul>
    <li>Message bubbles that stretch, shrink, and freestyle their sizes.</li>
    <li>Contrast so low it feels like a guessing game.</li>
    <li>&ldquo;Wait, who sent this?&rdquo; moments in busy conversations.</li>
    <li>Layouts that panic when a message is longer than two words.</li>
  </ul>
  <p>The result is a conversation experience that feels more like decoding a puzzle than communication &mdash; especially for users with visual, cognitive, or motor impairments.</p>
  <div class="callout">
    <p>Chats should flow. Not fight back.</p>
  </div>
</section>

<section class="text-block">
  <h2>Goals &amp; Design Principles</h2>
  <h3>Primary Goals</h3>
  <ul>
    <li>Improve conversation clarity.</li>
    <li>Support scalable content across short messages, long messages, and system messages.</li>
    <li>Ensure accessibility compliance.</li>
    <li>Maintain visual balance without distracting from the message.</li>
  </ul>
  <h3>Design Principles</h3>
  <ul>
    <li><strong>Content-first layout:</strong> the message dictates the container, not the other way around.</li>
    <li><strong>Consistency through variants:</strong> predictable patterns reduce cognitive load.</li>
    <li><strong>Accessibility by default:</strong> contrast, spacing, and semantics are non-negotiable.</li>
    <li><strong>Minimal but expressive:</strong> form should support function, not compete with it.</li>
  </ul>
</section>

<div class="image-grid">
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8f37d0242175915.69679e6024681.png" alt="Chat bubble anatomy layout example" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8cdc99242175915.69679e6024dd9.png" alt="Chat bubble spacing and sizing example" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6ecaee242175915.69679e60252e7.png" alt="Chat bubble accessibility and contrast example" loading="lazy"></figure>
</div>

<section class="text-block">
  <h2>Outcome &amp; Learnings</h2>
  <div class="principles-grid">
    <div class="principle-card">
      <h3>Key Outcomes</h3>
      <ul>
        <li>Increased clarity in multi-message conversations.</li>
        <li>Better scalability across devices and message lengths.</li>
        <li>A stronger foundation for future features such as reactions, replies, and attachments.</li>
      </ul>
    </div>
    <div class="principle-card">
      <h3>Key Learnings</h3>
      <ul>
        <li>Small UI elements have outsized UX impact.</li>
        <li>Consistency builds trust and reduces mental effort.</li>
        <li>Accessibility improvements benefit all users, not only edge cases.</li>
      </ul>
    </div>
  </div>
</section>

<div class="image-grid">
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/28665f242175915.69679e6023c5f.png" alt="Chat bubble UI presentation mockup" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3b1cb2242175915.69f0b0982f1a3.png" alt="Chat bubble component variants" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d89f30242175915.69f0b0982e8ca.png" alt="Chat bubble system design example" loading="lazy"></figure>
  <figure><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7c841f242175915.69f0b0982ded5.png" alt="Chat bubble design details" loading="lazy"></figure>
</div>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/037c9c242175915.69f0b0982d689.png" alt="Chat bubble final UI system" loading="lazy">
</figure>

<section class="text-block">
  <h2>Conclusion</h2>
  <p>Chat bubbles may appear simple, but their anatomy plays a critical role in how people communicate digitally.</p>
  <p>By focusing on clarity, usability, and accessibility, a basic UI pattern can become a powerful, inclusive conversation tool.</p>
  <div class="callout">
    <p>Result: smoother conversation flow with less visual noise, letting users focus on what matters &mdash; the message.</p>
  </div>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/994f95242175915.69679e602414d.png" alt="Chat Bubble Anatomy closing visual" loading="lazy">
</figure>

<footer class="footer">
  <h2>Design Workspace</h2>
  <p>View the full design file on Figma Community.</p>
  <div class="footer-sources">
    <div class="footer-links">
      <a href="https://www.figma.com/community/file/1590820100189543293/chat-bubble-anatomy" target="_blank" rel="noopener noreferrer">Open the Chat Bubble Anatomy design workspace &#8599;</a>
    </div>
  </div>
</footer>

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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #475569;
    --deep: #14213d;
    --radius: 12px;
  }
  .ak-study * { box-sizing: border-box; }
  .ak-study img { display: block; width: 100%; height: auto; }
  .ak-study a { color: inherit; text-decoration: none; }
  .ak-study .text-block { width: min(720px, 100%); margin: 48px auto; }
  .ak-study .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .ak-study .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .ak-study .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .ak-study .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .ak-study .image-grid figure img { width: 100%; height: auto; display: block; }
  .ak-study h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .ak-study h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .ak-study h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .ak-study p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .ak-study ul, .ak-study ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .ak-study li { margin-bottom: 6px; }
  .ak-study li p { margin: 0; }
  .ak-study strong { font-weight: 700; color: var(--deep); }
  .ak-study em, .ak-study i { font-style: italic; }
  .ak-study .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .ak-study .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .ak-study .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .ak-study .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .ak-study .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .ak-study .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .ak-study .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .ak-study .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .ak-study .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .ak-study .principle-card ul { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .ak-study .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .ak-study .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .ak-study .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .ak-study .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .ak-study .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .ak-study .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .ak-study .footer h2 { margin-top: 0; }
  .ak-study .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .ak-study .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .ak-study .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .ak-study .footer-links a:hover { border-color: var(--accent); }
  .dark .ak-study { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .ak-study p, .dark .ak-study ul, .dark .ak-study ol { color: #9ca3af; }
  .dark .ak-study h1, .dark .ak-study h2, .dark .ak-study h3, .dark .ak-study strong { color: #f3f4f6; }
  .dark .ak-study .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .ak-study .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .ak-study .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .ak-study .principle-card { background: rgba(255,255,255,0.04); }
  .dark .ak-study .lead { color: #d1d5db; }
  .dark .ak-study .callout { color: #f3f4f6; }
  .dark .ak-study .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .ak-study .principles-grid { grid-template-columns: 1fr; }
    .ak-study .image-grid { grid-template-columns: 1fr; }
    .ak-study .meta-row { flex-direction: column; }
    .ak-study .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="ak-study">

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/86e1b8241728615.695e733222074.png" alt="AI Key Concept" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Concept / AI</p>
  <h1>A universal key for instant AI access on the keyboard.</h1>
  <p class="lead">A universal key for instant AI access integrated into keyboards could reshape how we interact with software &mdash; enabling fast, seamless access to intelligence anywhere.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UI/UX Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2024</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UI Design &bull; Concept &bull; AI</p>
    </div>
  </div>

  <p>Instead of switching apps or contexts, AI becomes a native layer &mdash; triggered instantly from your keyboard.</p>

  <h2>Design &amp; Placement</h2>
  <ul>
    <li>Dedicated AI key, similar to &ldquo;Fn&rdquo; or &ldquo;Windows&rdquo;</li>
    <li>Recognizable icon (AI symbol or light cue)</li>
    <li>Customizable mapping (e.g. replacing Caps Lock)</li>
  </ul>

  <h2>Core Features</h2>
  <ul>
    <li>Instant AI access across any app</li>
    <li>Voice activation support for hands-free interaction</li>
    <li>Cross-platform functionality (OS + browser + apps)</li>
  </ul>

  <h2>Challenges</h2>
  <ul>
    <li>Privacy concerns and data handling</li>
    <li>Standardization across hardware manufacturers</li>
    <li>Avoiding accidental triggers</li>
  </ul>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2596da241728615.695e733223dfe.png" alt="Keyboard Exploration" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/13112c241728615.695e7332235bb.png" alt="AI Key Detail" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a56d89241728615.695e733222b11.png" alt="Wide Concept View" loading="lazy">
</figure>

<section class="text-block">
  <div class="callout">
    <p>Would you envision this as a pure software shortcut, or a dedicated hardware key?</p>
  </div>
  <p class="kicker">Designed in Figma</p>
</section>

<footer class="footer">
  <h2>Thank you for exploring this AI concept!</h2>
  <p>A concept exploring what a dedicated AI key on the keyboard could unlock across the operating system, the browser, and every app in between.</p>
  <div class="footer-sources">
    <p class="kicker">Resources</p>
    <div class="footer-links">
      <a href="https://drive.google.com/drive/folders/1JMO2EJ4ll-NW_WmNkmJPu_nTNVgcvuXx?usp=drive_link" target="_blank" rel="noopener noreferrer">View Project Files &#8599;</a>
    </div>
  </div>
</footer>

</div>`,
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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #ff5f00;
    --deep: #1c1510;
    --radius: 12px;
  }
  .sc-study * { box-sizing: border-box; }
  .sc-study img { display: block; width: 100%; height: auto; }
  .sc-study a { color: inherit; text-decoration: none; }
  .sc-study .text-block { width: min(720px, 100%); margin: 48px auto; }
  .sc-study .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(28,21,16,0.08), 0 24px 64px rgba(28,21,16,0.06); }
  .sc-study .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .sc-study .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .sc-study .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .sc-study .image-grid figure img { width: 100%; height: auto; display: block; }
  .sc-study h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .sc-study h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .sc-study h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .sc-study p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .sc-study ul, .sc-study ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .sc-study li { margin-bottom: 6px; }
  .sc-study li p { margin: 0; }
  .sc-study strong { font-weight: 700; color: var(--deep); }
  .sc-study em, .sc-study i { font-style: italic; }
  .sc-study .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .sc-study .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .sc-study .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .sc-study .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .sc-study .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .sc-study .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .sc-study .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .sc-study .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .sc-study .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .sc-study .principle-card ul { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .sc-study .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .sc-study .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .sc-study .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .sc-study .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .sc-study .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .sc-study .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .sc-study .footer h2 { margin-top: 0; }
  .sc-study .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .sc-study .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .sc-study .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .sc-study .footer-links a:hover { border-color: var(--accent); }
  .dark .sc-study { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .sc-study p, .dark .sc-study ul, .dark .sc-study ol { color: #9ca3af; }
  .dark .sc-study h1, .dark .sc-study h2, .dark .sc-study h3, .dark .sc-study strong { color: #f3f4f6; }
  .dark .sc-study .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .sc-study .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .sc-study .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .sc-study .principle-card { background: rgba(255,255,255,0.04); }
  .dark .sc-study .lead { color: #d1d5db; }
  .dark .sc-study .callout { color: #f3f4f6; }
  .dark .sc-study .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .sc-study .principles-grid { grid-template-columns: 1fr; }
    .sc-study .image-grid { grid-template-columns: 1fr; }
    .sc-study .meta-row { flex-direction: column; }
    .sc-study .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="sc-study">

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cfcb72241729233.695e7553bced2.png" alt="Smart Control UI" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Concept / IoT</p>
  <h1>Smart Control Concept [Schneider Electric]</h1>
  <p class="lead">Exploring elegance in everyday control.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UI/UX/Product Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2024</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UI Design &bull; Concept &bull; IoT</p>
    </div>
  </div>

  <p>This concept imagines a minimal wall interface that <strong>merges climate control</strong> and <strong>real-time weather</strong> into one clean surface.</p>
  <p>Built around <strong>Schneider Electric&rsquo;s design language</strong> &mdash; warm textures, subtle light cues, and quiet intelligence &mdash; the interface blends digital clarity with tactile calm.</p>
</section>

<section class="text-block">
  <h2>Iterations</h2>
  <p class="kicker">Exploration</p>
  <ul>
    <li>Ambient, wood-grain interface: physical warmth meets digital precision</li>
    <li>Tap-based control with glowing state feedback</li>
    <li>&ldquo;On/Off&rdquo; behavior visualized through light, not icons</li>
    <li>Quick forecast integrated directly into the device</li>
  </ul>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/da5031241729233.695e7553bdc9d.png" alt="Iteration 1" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/756ff6241729233.695e7553be6ae.png" alt="Iteration 2" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/475094241729233.695e7553bd570.png" alt="Iteration 3" loading="lazy">
</figure>

<section class="text-block">
  <h2>Reflection</h2>
  <p>Sometimes design is about balance between function, emotion, and form. This one leans heavily toward emotion, asking: &ldquo;What if your thermostat looked so good you didn&rsquo;t care if it took two extra taps?&rdquo;</p>
  <div class="callout">
    <p>Anyway, while exploring simplicity, I might&rsquo;ve butchered usability a little. But what if that&rsquo;s where beauty begins?</p>
  </div>
</section>

</div>`,
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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #475569;
    --deep: #14213d;
    --radius: 12px;
  }
  .aw * { box-sizing: border-box; }
  .aw img { display: block; width: 100%; height: auto; }
  .aw a { color: inherit; text-decoration: none; }
  .aw .text-block { width: min(720px, 100%); margin: 48px auto; }
  .aw .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .aw .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .aw .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .aw .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .aw .image-grid figure img { width: 100%; height: auto; display: block; }
  .aw h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .aw h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .aw h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .aw p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .aw ul, .aw ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .aw li { margin-bottom: 6px; }
  .aw li p { margin: 0; }
  .aw strong { font-weight: 700; color: var(--deep); }
  .aw em, .aw i { font-style: italic; }
  .aw .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .aw .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .aw .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .aw .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .aw .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .aw .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .aw .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .aw .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .aw .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .aw .principle-card ul { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .aw .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .aw .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .aw .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .aw .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .aw .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .aw .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .aw .footer h2 { margin-top: 0; }
  .aw .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .aw .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .aw .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .aw .footer-links a:hover { border-color: var(--accent); }
  .dark .aw { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .aw p, .dark .aw ul, .dark .aw ol { color: #9ca3af; }
  .dark .aw h1, .dark .aw h2, .dark .aw h3, .dark .aw strong { color: #f3f4f6; }
  .dark .aw .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .aw .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .aw .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .aw .principle-card { background: rgba(255,255,255,0.04); }
  .dark .aw .lead { color: #d1d5db; }
  .dark .aw .callout { color: #f3f4f6; }
  .dark .aw .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .aw .principles-grid { grid-template-columns: 1fr; }
    .aw .image-grid { grid-template-columns: 1fr; }
    .aw .meta-row { flex-direction: column; }
    .aw .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="aw">

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156033/file/a352e4430a36f81d71d082844f9a67d2.png?resize=1600x900&amp;vertical=center" alt="App workspace hero preview" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">UI Design / Product Design</p>
  <h1>App Workspace</h1>
  <p class="lead">A clean, structured app workspace design built for clarity and scalability.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UI/UX Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2026</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">UI Design &bull; Product Design &bull; Figma</p>
    </div>
  </div>

  <h2>Design Improvements</h2>
  <p>A walkthrough of the redesigned workspace: navigation, section dividers, and the screen flows that hold the product together.</p>
</section>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156030/file/3995ef206c1ba8232810651cbbf474e5.png?resize=1504x423&amp;vertical=center" alt="App workspace section divider one" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156031/file/57564531db8519adb1d8b4a039853f0d.png?resize=1504x472&amp;vertical=center" alt="App workspace section divider two" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156036/file/c23917acfdb0ca0c9ddcc45fd6b7af1b.png?resize=1504x1350&amp;vertical=center" alt="App workspace screen preview one" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156041/file/330001baff36eec2a037de255f51abe1.png?resize=1504x3449&amp;vertical=center" alt="App workspace long screen flow" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156039/file/106f4f76401b561f7705f4f8a3e5ebb0.png?resize=1504x1968&amp;vertical=center" alt="App workspace screen preview two" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156040/file/586d8d9b9b75e19a7607bbb129da2680.png?resize=1504x1623&amp;vertical=center" alt="App workspace screen preview three" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156034/file/0dc9d096d86f84b67ba8ee67c6c1891d.png?resize=1504x1541&amp;vertical=center" alt="App workspace screen preview four" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156037/file/418ae66c56df134738c92d44d65d33ba.png?resize=1504x2630&amp;vertical=center" alt="App workspace tall screen preview" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156038/file/a97d6ebf9918d3c638e300edfb73efdb.png?resize=1504x1629&amp;vertical=center" alt="App workspace screen preview five" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156035/file/b24c2c8f5740d0bf3af2c852505eb781.png?resize=1504x1386&amp;vertical=center" alt="App workspace screen preview six" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://cdn.dribbble.com/userupload/47156032/file/79b89b6f4040b38717cef17d57ac3716.png?resize=1504x505&amp;vertical=center" alt="App workspace closing visual" loading="lazy">
</figure>

<footer class="footer">
  <h2>Design Workspace</h2>
  <p>View the working design file in Figma.</p>
  <div class="footer-sources">
    <div class="footer-links">
      <a href="https://www.figma.com/design/QqGDuArtTu2g4gPVtUsL3R/Test-Assignment?node-id=0-1&amp;t=wjnKHd27lyZb5SlA-1" target="_blank" rel="noopener noreferrer">Open Figma workspace &#8599;</a>
    </div>
  </div>
</footer>

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
    color: #4E4E4E;
    font-size: 17px;
    line-height: 1.7;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --muted: #6b7280;
    --line: #e5e7eb;
    --panel: #ffffff;
    --soft: #f9fafb;
    --accent: #475569;
    --deep: #14213d;
    --radius: 12px;
  }
  .rc * { box-sizing: border-box; }
  .rc img { display: block; width: 100%; height: auto; }
  .rc a { color: inherit; text-decoration: none; }
  .rc .text-block { width: min(720px, 100%); margin: 48px auto; }
  .rc .shot { width: min(752px, 100%); margin: 48px auto; overflow: hidden; border-radius: var(--radius); box-shadow: 0 4px 24px rgba(20,33,61,0.08), 0 24px 64px rgba(20,33,61,0.06); }
  .rc .shot img { border-radius: 0; display: block; width: 100%; height: auto; }
  .rc .image-grid { width: min(752px, 100%); margin: 48px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .rc .image-grid figure { margin: 0; border-radius: var(--radius); overflow: hidden; }
  .rc .image-grid figure img { width: 100%; height: auto; display: block; }
  .rc h1 { margin: 0 0 24px; font-size: clamp(28px, 4vw, 46px); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; color: var(--deep); }
  .rc h2 { margin: 40px 0 14px; font-size: clamp(20px, 2.8vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--deep); }
  .rc h3 { margin: 24px 0 8px; font-size: 17px; font-weight: 700; color: var(--deep); }
  .rc p { margin: 0 0 14px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .rc ul, .rc ol { margin: 6px 0 14px; padding-left: 22px; font-size: 17px; line-height: 1.75; color: #4E4E4E; }
  .rc li { margin-bottom: 6px; }
  .rc li p { margin: 0; }
  .rc strong { font-weight: 700; color: var(--deep); }
  .rc em, .rc i { font-style: italic; }
  .rc .meta-row { display: flex; gap: 0; flex-wrap: wrap; margin: 28px 0; background: var(--soft); border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden; }
  .rc .meta-item { flex: 1; min-width: 130px; padding: 20px 24px; }
  .rc .meta-item + .meta-item { border-left: 1px solid var(--line); }
  .rc .meta-label { margin: 0 0 4px; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .rc .meta-value { margin: 0; font-size: 15px; font-weight: 600; color: var(--deep); }
  .rc .principles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
  .rc .principle-card { padding: 20px 24px; background: var(--soft); border-radius: var(--radius); }
  .rc .principle-card h3 { margin: 0 0 8px; font-size: 14px; font-weight: 700; color: var(--deep); text-transform: uppercase; letter-spacing: 0.04em; }
  .rc .principle-card p { margin: 0; font-size: 14px; line-height: 1.65; }
  .rc .principle-card ul { margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.65; }
  .rc .eyebrow { margin: 0 0 16px; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
  .rc .lead { max-width: 620px; margin: 0 0 8px; color: #4E4E4E; font-size: 19px; line-height: 1.6; }
  .rc .kicker { margin: 0 0 8px; color: var(--muted); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .rc .callout { margin: 32px 0; padding: 24px 0; border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); font-size: 19px; line-height: 1.5; color: var(--deep); font-style: italic; }
  .rc .callout p { margin: 0; font-style: italic; font-size: 19px; }
  .rc .footer { width: min(720px, 100%); margin: 80px auto 0; padding: 40px; background: var(--panel); border-top: 1px solid var(--line); border-radius: var(--radius); }
  .rc .footer h2 { margin-top: 0; }
  .rc .footer-sources { border-top: 1px solid var(--line); padding-top: 24px; margin-top: 24px; }
  .rc .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
  .rc .footer-links a { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 14px; font-weight: 500; color: var(--deep); border: 1px solid var(--line); border-radius: 8px; transition: border-color 0.2s; }
  .rc .footer-links a:hover { border-color: var(--accent); }
  .dark .rc { color: #d1d5db; --deep: #f3f4f6; --panel: #1f2937; --soft: #374151; --line: #374151; }
  .dark .rc p, .dark .rc ul, .dark .rc ol { color: #9ca3af; }
  .dark .rc h1, .dark .rc h2, .dark .rc h3, .dark .rc strong { color: #f3f4f6; }
  .dark .rc .shot { box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 24px 64px rgba(0,0,0,0.2); }
  .dark .rc .meta-row { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
  .dark .rc .meta-item + .meta-item { border-color: rgba(255,255,255,0.08); }
  .dark .rc .principle-card { background: rgba(255,255,255,0.04); }
  .dark .rc .lead { color: #d1d5db; }
  .dark .rc .callout { color: #f3f4f6; }
  .dark .rc .footer { border-color: var(--line); }
  @media (max-width: 600px) {
    .rc .principles-grid { grid-template-columns: 1fr; }
    .rc .image-grid { grid-template-columns: 1fr; }
    .rc .meta-row { flex-direction: column; }
    .rc .meta-item + .meta-item { border-left: none; border-top: 1px solid var(--line); }
  }
</style>

<div class="rc">

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9315aa241631277.695cc3c087dbf.png" alt="Remote control evolution design" loading="lazy">
</figure>

<section class="text-block">
  <p class="eyebrow">Concept / Hardware UI</p>
  <h1>Remote Control Design (Concept)</h1>
  <p class="lead">This project explores the evolution of remote control design, transitioning from traditional button-heavy layouts to modern, intelligent interfaces.</p>
  <div class="meta-row">
    <div class="meta-item">
      <p class="meta-label">Role</p>
      <p class="meta-value">UI/UX Designer</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Year</p>
      <p class="meta-value">2025</p>
    </div>
    <div class="meta-item">
      <p class="meta-label">Focus</p>
      <p class="meta-value">Product Design &bull; Concept &bull; Hardware UI</p>
    </div>
  </div>

  <h2>Smart Remote with a Screen</h2>
  <p>The final concept introduces a touchscreen interface combined with minimal physical controls, creating a more adaptive and user-focused experience.</p>
  <p>Instead of fixed buttons, the interface becomes dynamic&mdash;allowing users to personalize controls based on context and usage.</p>
  <ul>
    <li>Quick-access shortcuts for streaming platforms</li>
    <li>Essential physical controls (volume, playback, voice)</li>
    <li>Integrated clock and contextual information display</li>
  </ul>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7dc8cc241631277.695cc3c08904d.png" alt="Smart remote interface" loading="lazy">
</figure>

<section class="text-block">
  <h2>Impact</h2>
  <p>This evolution represents a shift from tool-driven design to a more intuitive, experience-driven approach. By blending hardware and software, the remote becomes more than a controller&mdash;it becomes an interface for interaction.</p>
</section>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7f2d35241631277.695cc3c0884e0.png" alt="Remote UI concept" loading="lazy">
</figure>

<figure class="shot">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9e8666241631277.695cc3c088a26.png" alt="Remote UI variation" loading="lazy">
</figure>

<footer class="footer">
  <h2>Thank you</h2>
  <p>Remote Control Design is a concept exploring how a screen-led remote can replace button-heavy layouts with context-aware controls.</p>
  <div class="footer-sources">
    <p class="kicker">Download high-resolution screens (4K)</p>
    <div class="footer-links">
      <a href="https://drive.google.com/drive/folders/1-8ligSMkWF_3HINeeVOAzp5IqK3pld86?usp=drive_link" target="_blank" rel="noopener noreferrer">View Files &#8599;</a>
    </div>
  </div>
</footer>

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
  name: "lawmaluki",
  url: "https://lawmaluki.com",
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


export interface Product {
  title: string;
  summary: string;
  /** Where it runs, e.g. "Web Application", "Available on Mac", "Chrome Extension". */
  platform: string;
  image: string;
  /** Omit while a product is unreleased — the card then renders without a link. */
  link?: string;
}

/** Products I'm building and developing. */
export const products: Product[] = [
  {
    title: 'Deckwatch Kenya',
    summary: 'A safety intelligence and reporting platform that helps Kenyans see what’s happening, report incidents safely, and know what to do next.',
    platform: 'Web Application',
    image: '/deckwatch.png',
    link: 'https://deckwatch.vercel.app/',
  },
  {
    title: 'M-Pesa Tracker',
    summary: 'A GitHub-style activity tracker that visualizes your M-Pesa transactions and lets you explore how active you were on any day.',
    platform: 'Android App and Web Application',
    image: '/mpesa.png',
    // Unreleased — card renders without a link until it ships.
  },
];

/** Shipped apps I helped design and build. */
export const liveApps: Product[] = [
  {
    title: 'Grubba — Food, Grocery & Delivery',
    summary: 'A delivery marketplace for discovering and ordering food, groceries, and more from local businesses.',
    platform: 'Google Play & App Store',
    image: '/grubba.png',
    link: 'https://grubba.co.ke',
  },
  {
    title: 'MilPress',
    summary: 'Adult literacy platform designed for older adults, first-time smartphone users, and low digital literacy.',
    platform: 'Google Play',
    image: 'https://cdn.dribbble.com/userupload/48531860/file/65eec83f6ab4242c727a65c0d52b92f3.png?resize=752x&vertical=center',
    link: 'https://play.google.com/store/apps/details?id=com.milpress.edu',
  },
];

export const EMAIL = 'lawmaluki@gmail.com';
export const SCHEDULE_URL = 'https://cal.eu/lawmaluki/quick-chat-duration-15';
export const DRIBBLE_URL = 'https://dribbble.com/Lawmaluki';
export const FIGMA_URL = 'https://www.figma.com/@lawmaluki';






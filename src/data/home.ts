// Content for the Vritti Group home page (src/pages/index.astro).
// Edit text, links and images here; the page layout reads everything from this file.

export const hero = {
  eyebrow: 'Vritti Group',
  title: ['Building Businesses.', 'Enabling Growth.'],
  text: 'Vritti Group is a diversified technology, media and marketing enterprise helping businesses grow through technology, innovation and market access.',
  image: '/images/home/hero-leaders.jpg',
  imageAlt: 'Vritti Group leadership team',
};

export const whoWeAre = {
  eyebrow: 'Who we are',
  title: 'One Group. One Purpose.',
  text: 'Vritti began with technology and has evolved into a diversified group spanning enterprise software, IT services, AI, media and marketing solutions.',
  // Photos from Vritti's early days, shown black and white (the files are already greyscale).
  // To swap one, replace the file in public/images/home/who/ (square, ~480px) or edit this list.
  // While this list is empty the grid shows 14 placeholder tiles.
  tiles: [
    { src: '/images/home/who/01.jpg', alt: 'Early days: a Vritti founder speaking at an event' },
    { src: '/images/home/who/02.jpg', alt: 'Early days: the first Vritti team' },
    { src: '/images/home/who/03.jpg', alt: 'Early days: speech at an early Vritti event' },
    { src: '/images/home/who/04.jpg', alt: 'Early days: the Vritti team at an event' },
    { src: '/images/home/who/05.jpg', alt: "Vritti's early shop" },
    { src: '/images/home/who/06.jpg', alt: 'An early Vritti office' },
    { src: '/images/home/who/07.jpg', alt: "Vritti Solutions' Pune office" },
    { src: '/images/home/who/08.jpg', alt: 'Flame Awards, Delhi 2016' },
    { src: '/images/home/who/09.jpg', alt: 'Jaipur city visit during the quarterly meeting, July 2016' },
    { src: '/images/home/who/10.jpg', alt: 'Annual picnic of the Chandigarh, Delhi and Jaipur offices, 2017' },
    { src: '/images/home/who/11.jpg', alt: 'ACEF award, Mumbai 2018' },
    { src: '/images/home/who/12.jpg', alt: 'Tree plantation drive' },
    { src: '/images/home/who/13.jpg', alt: 'Vritti team at the LSP Awards' },
    { src: '/images/home/who/14.jpg', alt: 'Vritti team outing' },
  ] as { src: string; alt: string }[],
  placeholderCount: 14,
};

export type Business = {
  label: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  /** Text before the bold lead-in is shown in bold. */
  lead?: string;
  text: string;
  href?: string;
};

export const businesses: Business[] = [
  {
    label: 'Technology',
    logo: '/images/vritti-logo.png',
    logoAlt: 'Vritti – Creating Waves',
    logoWidth: 190,
    lead: 'Ekatm ERP',
    text: 'by Vritti Solutions brings an innovative and robust range of Business Management Softwares. Enterprise software, IT services & technology solutions.',
    href: '/technology/ekatm-erp',
  },
  {
    label: 'Media',
    logo: '/images/home/logo-vritti-imedia.png',
    logoAlt: 'Vritti iMedia – The Gateway to Rural',
    logoWidth: 230,
    lead: 'Vritti iMedia',
    text: 'offers a unique & innovative Marketing Mix in Rural Marketing with our state-of-the-art technology and creativity.',
    // href: '/business/vritti-imedia',  ← add when the page exists
  },
  {
    label: 'Marketing',
    logo: '/images/home/logo-mindwave.png',
    logoAlt: 'Mindwave Media – Enabling Brands',
    logoWidth: 210,
    text: '360° marketing, BTL, experiential, outdoor and digital marketing.',
    // href: '/business/mindwave-media',
  },
];

export type Story = { title: string; image: string; alt: string; href?: string; upper?: boolean };

export const legacy = {
  title: 'Legacy & Leadership',
  subtitle: 'Built over time. Growing with purpose.',
  stories: [
    {
      title: 'The Hustle Behind the Empire | CEO India Magazine',
      image: '/images/home/ceo-india.jpg',
      alt: 'Vritti founder featured in CEO India Magazine',
    },
    {
      title: '20+ years with expansion across enterprise tech and rural media-led marketing',
      image: '/images/home/vritti-20-years.jpg',
      alt: 'Vritti leadership at the 20 years celebration',
    },
  ] as Story[],
};

// "Built over time." band: 12 photos from OM's Vritti photo folder (files are already
// greyscale, square ~480px, in public/images/home/built/) + stats.
export const builtOverTime = {
  title: 'Built over time.',
  photos: [
    { src: '/images/home/built/01.jpg', alt: 'Early Vritti team' },
    { src: '/images/home/built/02.jpg', alt: 'Vritti leadership team' },
    { src: '/images/home/built/03.jpg', alt: 'Vritti team at a company event' },
    { src: '/images/home/built/04.jpg', alt: 'Vritti team at the Asian Leadership Forum & Awards' },
    { src: '/images/home/built/05.jpg', alt: 'Vritti office celebration' },
    { src: '/images/home/built/06.jpg', alt: 'Vritti team award ceremony' },
    { src: '/images/home/built/07.jpg', alt: 'Vritti annual meet' },
    { src: '/images/home/built/08.jpg', alt: 'Vritti team conference' },
    { src: '/images/home/built/09.jpg', alt: 'Vritti Award 2023' },
    { src: '/images/home/built/10.jpg', alt: 'Vritti Award 2024' },
    { src: '/images/home/built/11.jpg', alt: 'Vritti annual celebration' },
    { src: '/images/home/built/12.jpg', alt: 'Vritti office team' },
  ] as { src: string; alt: string }[],
  stats: [
    { value: '30', plus: true, label: ['Years in', 'industry'], big: true },
    { value: '12,999', plus: true, label: ['Clients'] },
    { value: '112+', label: ['Awards &', 'recognition'] },
  ],
};

// Repeating strip between the blue bands.
export const vrittiWay = 'The Vritti Way';

export const coreValues = {
  title: 'How we think',
  subtitle: 'Our core values.',
  values: [
    { title: 'We see differently', text: 'We look beyond the obvious.' },
    { title: 'We build boldly', text: 'We turn ideas into action.' },
    { title: 'We own the outcome', text: 'We take responsibility for what we create.' },
    { title: 'We keep moving', text: 'We never stop improving.' },
  ],
};

// 5 x 3 grid: 14 award slots (placeholders) + a final "99+" tile.
export const awards = {
  title: 'Awards & Recognition',
  slotCount: 14,
  more: '99+',
};

export const foundation = {
  title: 'Vritti Foundation',
  subtitle: '15 years of enabling change, enriching life.',
  logo: '/images/home/logo-foundation-white.png',
  heading: 'Beyond Business.',
  tagline: ['Building a better tomorrow,', 'beyond what we do for business.'],
  text: 'Founded in 2011, Vritti Foundation is our commitment to creating meaningful social impact beyond business. Through CSR initiatives, donations and community programs, we work to support people and causes that matter. Because growth means more when it creates impact.',
  // Slideshow photos, e.g. { src: '/images/home/foundation/01.jpg', alt: '…' }.
  slides: [] as { src: string; alt: string }[],
};

// The black band above the footer: OM's team strip video (Slider.mp4), cropped to
// the strip and re-encoded for the web (1920x420, ~0.9 MB, no audio).
// To replace it, drop a new file into public/videos/ and update src/poster.
export const brandVideo = {
  src: '/videos/vritti-group.mp4',
  poster: '/videos/vritti-group-poster.jpg',
  title: 'The people of Vritti',
};

export type NavLink = { label: string; href: string };
/** A dropdown entry; `items` are smaller grey sub-links listed under it (e.g. Technology › Ekatm). */
export type NavChild = NavLink & { items?: NavLink[] };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const groupNav: NavItem[] = [
  {
    label: 'Vritti Group',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Meet our Management', href: '/meet-our-management' },
    ],
  },
  {
    label: 'Business',
    children: [
      {
        label: 'Technology',
        href: '/technology/ekatm-erp',
        items: [
          { label: 'Ekatm', href: '/technology/ekatm-erp' },
          // Placeholders until these product pages exist.
          { label: 'Simplify Practice', href: '/#businesses' },
          { label: 'PetroSoft', href: '/#businesses' },
          { label: 'AdatSoft', href: '/#businesses' },
        ],
      },
      {
        label: 'IT Services',
        href: '/#businesses', // placeholder until the IT Services page exists
        items: [
          { label: 'UI UX Designing', href: '/#businesses' },
          { label: 'Website Designing', href: '/#businesses' },
        ],
      },
      // Placeholders until these business pages exist: they scroll to the home page's Businesses section.
      { label: 'Rural Marketing', href: '/#businesses' },
      { label: 'Media', href: '/#businesses' },
    ],
  },
  { label: 'Vritti Foundation', href: '/#foundation' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const groupFooter = {
  left: [
    {
      title: 'About Us',
      href: '/about-us',
      links: [
        { label: 'Our Journey', href: '/about-us#journey' },
        { label: 'Leadership', href: '/about-us#leadership' },
        { label: 'From The Founder', href: '/about-us#founder' },
      ],
    },
    {
      title: 'Business',
      href: '/#businesses',
      links: [
        { label: 'Vritti Solutions', href: '/technology/ekatm-erp' },
        { label: 'Vritti I Media', href: '/#businesses' },
        { label: 'Mindwave Media', href: '/#businesses' },
      ],
    },
  ],
  leftMain: [
    { label: 'Careers', href: '/careers' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Vritti Foundation', href: '/#foundation' },
  ],
  rightMain: [
    { label: 'Newsroom', href: '/news' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Downloads', href: '/downloads' },
  ],
  quickLinks: [
    [
      { label: 'Ekatm', href: '/technology/ekatm-erp' },
      { label: 'AdatSoft', href: '#' },
      { label: 'PetroSoft India', href: '#' },
      { label: 'Simplify Practices', href: '#' },
    ],
    [
      { label: 'Audiowala Bus Stand', href: '#' },
      { label: 'OOH Advertising', href: '#' },
      { label: '360 Marketing', href: '#' },
    ],
  ],
  legal: [
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Notice', href: '/privacy' },
  ],
};

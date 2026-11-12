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
  // Add logos/photos here, e.g. { src: '/images/home/clients/acme.png', alt: 'Acme' }.
  // While this list is empty the grid shows 14 placeholder tiles.
  tiles: [] as { src: string; alt: string }[],
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

export const innovation = {
  title: '20 Years of Innovation & Impact',
  subtitle: 'Built over time. Growing with purpose.',
  columns: [{ title: 'Innovation' }, { title: 'Impact' }],
};

export const awards = {
  title: 'Awards & Recognition',
  subtitle: 'Excellence earned. Recognition celebrated.',
  stories: [
    {
      title: 'Corporate Excellence Awards 2025 at Rural Conclave 2025 by RMAI',
      image: '/images/home/rural-conclave.jpg',
      alt: 'Vritti receiving the Corporate Excellence Award at Rural Conclave 2025',
      upper: true,
    },
    {
      title: '20+ years with expansion across enterprise tech and rural media-led marketing',
      image: '/images/home/vritti-20-years.jpg',
      alt: 'Vritti leadership at the 20 years celebration',
    },
    {
      title: '20+ years with expansion across enterprise tech and rural media-led marketing',
      image: '/images/home/vritti-20-years.jpg',
      alt: 'Vritti leadership at the 20 years celebration',
    },
    {
      title: 'Corporate Excellence Awards 2025 at Rural Conclave 2025 by RMAI',
      image: '/images/home/rural-conclave.jpg',
      alt: 'Vritti receiving the Corporate Excellence Award at Rural Conclave 2025',
      upper: true,
    },
  ] as Story[],
};

export const presence = {
  title: 'Global Presence',
  subtitle: 'Excellence earned. Recognition celebrated.',
  map: '/images/home/world-map.png',
  // x / y are percentages across the map image. Add one entry per location.
  // side: 'left' puts the label beside the dot instead of above it (for pins close together).
  pins: [
    { label: 'India', x: 66.8, y: 61.5 },
    { label: 'Middle East', x: 62.1, y: 60.2, side: 'left' },
  ] as { label: string; x: number; y: number; side?: 'left' }[],
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

export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

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
      { label: 'Technology', href: '/technology/ekatm-erp' },
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

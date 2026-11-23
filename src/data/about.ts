// Content for the About Us page (src/pages/about-us.astro).
// "Our Journey" comes from OM's journey PDF. Each entry is one year on the
// scroll timeline: add, remove or reorder entries here and the timeline follows.
import { ceo, leaders } from './management';

export const aboutHero = {
  title: 'About Us',
  text: 'From a home office in 1993 to a group working across India and the Middle East.',
};

export type JourneyPerson = { name: string; role: string; photo: string };
export type JourneyMilestone = {
  year: string;
  // Optional end year for an event that spans several years (e.g. year '2000', until '2002').
  until?: string;
  // title, text and points: wrap words in **double asterisks** for bold, or in
  // [[double brackets]] for bold text that types itself in when the year is shown.
  title: string;
  // Optional sentence under the title.
  text?: string;
  points?: string[];
  // Photos from the journey PDF are small (about 300px wide); swap in larger ones when available.
  // width/height: the picture's real pixel size, so the frame keeps its shape and nothing is cropped.
  // plain: no frame or shadow (for a map or logo drawn on white).
  image?: { src: string; width: number; height: number; alt: string; plain?: boolean };
  people?: JourneyPerson[];
  // Several photos shown as an auto-rotating slideshow instead of one photo (all the same shape).
  slides?: { src: string; width: number; height: number; alt: string }[];
  /** Show the slides two at a time, side by side, instead of one by one. */
  pair?: boolean;
  // An animated map instead of a photo (src/components/group/AudiowalaMap.astro).
  map?: 'audiowala';
  // Only these states on the map, in the order the bus visits them (default: all 8).
  mapStates?: string[];
  // The bus drives every leg from the first state instead of state to state.
  mapBranch?: boolean;
  // Optional icon shown beside the title: rocket, team, office, speaker, award, erp, mobile, handshake, globe.
  icon?: string;
  // A year with two separate events: list them here and they are shown one under
  // the other, split by a line, each with its own title, text, people and photo.
  // (The year's own title is then not shown; keep it as a one-line summary.)
  parts?: JourneyPart[];
};
export type JourneyPart = Pick<JourneyMilestone, 'title' | 'text' | 'points' | 'image' | 'people' | 'icon' | 'map' | 'mapStates' | 'mapBranch' | 'slides' | 'pair'>;

// People on the timeline show their current photo and designation from
// Meet our Management (src/data/management.ts), so a title change there shows here too.
const leader = (name: string): JourneyPerson => {
  if (name === ceo.name) return { name, role: `Founder & ${ceo.title}`, photo: ceo.photo };
  const l = leaders.find((x) => x.name === name);
  if (!l) throw new Error(`Journey: no leader named ${name} in management.ts`);
  return { name: l.name, role: l.title, photo: l.photo };
};

export const journeyIntro = {
  title: 'Our Journey',
  sub: 'Every Milestone tells a Story',
};

export const journey: JourneyMilestone[] = [
  {
    year: '1993',
    icon: 'rocket',
    title: 'J&C company was founded by Sangeeta & Veerendra Jamdade',
    points: ['Total employees: 2', 'Office location: Home', 'First project: Adat Software'],
    image: { src: '/images/about/journey/first-computer.jpg', width: 295, height: 182, alt: 'The first office computer' },
    people: [leader('Sangeeta Jamdade'), leader('Veerendra Jamdade')],
  },
  {
    year: '1999',
    icon: 'rocket',
    title: 'Launch of [[PetroSoft]]',
    points: ['First customer: **APM Fuel**, Vashi, Mumbai'],
    image: { src: '/images/about/journey/petrosoft-india-launch.jpg', width: 1200, height: 675, alt: 'PetroSoft India: petrol pump software for pump operations, tank and inventory monitoring, billing and station management' },
  },
  {
    year: '2000',
    until: '2002',
    title: 'Jeevan Pawar & Shivaji Bedre joined as Partners, and AdatSoft and PetroSoft spread across three states',
    parts: [
      {
        icon: 'team',
        title: '**Mr. Jeevan Pawar** & **Mr. Shivaji Bedre** joined as Partners',
        people: [leader('Jeevan Pawar'), leader('Shivaji Bedre')],
      },
      {
        icon: 'globe',
        title: '**AdatSoft** & **PetroSoft** spread out in geography',
        points: ['Maharashtra', 'Karnataka', 'Telangana'],
      },
    ],
  },
  {
    year: '2004',
    until: '2005',
    title: 'Mr. Rajesh Radhakrishnan joined hands, and Vritti Solutions Limited was formed',
    parts: [
      {
        icon: 'team',
        title: '**Mr. Rajesh Radhakrishnan** joined hands',
        people: [leader('Rajesh Radhakrishnan')],
      },
      {
        icon: 'office',
        title: '[[Vritti Solutions Limited]] was formed',
        points: ['Primary focus: services on IBM mid-series server ERPs'],
        image: { src: '/images/about/journey/vritti-solutions-office.jpg', width: 353, height: 158, alt: 'Vritti Solutions Limited office signboard' },
      },
    ],
  },
  {
    year: '2007',
    title: 'Audiowala Bus Stand is born, and Vritti Solutions Limited won the Microsoft Award',
    parts: [
      {
        icon: 'speaker',
        title: '[[Audiowala Bus Stand]] is born',
        points: ['Started by **Vritti iMedia** in Maharashtra with **19** bus stations', 'First bus stand at Swargate, Pune'],
        image: { src: '/images/about/journey/audiowala-bus-stand-born.jpg', width: 1200, height: 675, alt: 'Audiowala Bus Stand is born at Swargate bus stand, Pune' },
      },
      {
        icon: 'award',
        title: '[[Vritti Solutions Limited]] won the **Microsoft Award**',
      },
    ],
  },
  {
    year: '2008',
    icon: 'speaker',
    title: 'Activation business starts at Pandharpur',
    image: { src: '/images/about/journey/pandharpur-activation.jpg', width: 353, height: 195, alt: 'Brand activation event at Pandharpur' },
  },
  {
    year: '2012',
    icon: 'speaker',
    title: 'Audiowala Bus Stand extends to **Karnataka** and **Punjab**',
    map: 'audiowala',
    mapStates: ['Maharashtra', 'Karnataka', 'Punjab'],
    mapBranch: true,
  },
  {
    year: '2013',
    icon: 'rocket',
    title: '[[Mindwave Media]] was established',
    points: ['To provide rural marketing solutions'],
    image: { src: '/images/home/hero/mindwave-media.jpg', width: 1152, height: 864, alt: 'Mindwave Media on stage at a marketing awards night' },
  },
  {
    year: '2014',
    icon: 'erp',
    title: 'A New Era of Business Transformation with [[EKATM ERP]]',
    image: { src: '/images/about/journey/ekatm-erp-launch.jpg', width: 1200, height: 675, alt: 'Ekatm ERP launch: one system for finance, sales, inventory, purchase, production and HR' },
  },
  {
    year: '2016',
    until: '2017',
    title: 'Ekatm ERP web version and Ekatm mobile application launched',
    parts: [
      {
        icon: 'erp',
        title: '**Ekatm ERP** web version was launched',
      },
      {
        icon: 'mobile',
        title: '**Ekatm** mobile application launched',
      },
    ],
  },
  {
    year: '2018',
    title: 'Audiowala Bus Stand in 8 states, and a landmark MOU with ICAI and Simplify Practice',
    parts: [
      {
        icon: 'speaker',
        title: '**Audiowala** Bus Stand in **8** states with **550+** bus stands',
        points: ['Maharashtra, Karnataka, Punjab, Rajasthan, Himachal Pradesh, Haryana, Goa, Gujarat'],
        map: 'audiowala',
      },
      {
        icon: 'handshake',
        title: '**Landmark MOU for Progress**',
        text: 'A strategic MOU with **ICAI** and **Simplify Practice** to drive innovation and transform professional practice.',
        image: { src: '/images/about/journey/icai-simplify-practice-mou.jpg', width: 1200, height: 675, alt: 'MOU with ICAI for Simplify Practice' },
      },
    ],
  },
  {
    year: '2023',
    icon: 'award',
    title: 'Recognised by **FORBES INDIA**',
    points: [
      'Top 200 Companies having Global Growth Potential (Forbes India DGEMS 2023)',
      'Best Rural Marketing of the Year at the 12th ACEF Awards 2023',
    ],
    image: { src: '/images/about/journey/forbes-dgems-2023.jpg', width: 304, height: 197, alt: 'Forbes India DGEMS 2023 Top 200' },
  },
  {
    year: '2024',
    icon: 'globe',
    title: 'Business expands in [[Middle East]]',
    points: [
      'Honored by Brand Equity as Best IT/ITeS/IoT Enterprise',
      'Most Admired BTL Agency of the Year for Customer Engagement by ACEF',
    ],
    // Several photos: two shown side by side, swapping one at a time.
    pair: true,
    slides: [
      { src: '/images/about/journey/middle-east-office-1.jpg', width: 960, height: 1280, alt: 'Vritti leadership at the Middle East office' },
      { src: '/images/about/journey/middle-east-office-2.jpg', width: 960, height: 1280, alt: 'Vritti leadership at the Middle East office' },
      { src: '/images/about/journey/middle-east-office-3.jpg', width: 960, height: 1280, alt: 'Vritti leadership at the Middle East office' },
    ],
  },
];

// "Vritti Stands For": one card per letter of VRITTI, shown below Our Journey.
// Icons: values, relationship, integrity, teamwork, trust, innovation (drawn in VrittiValues.astro).
export const vrittiStandsFor = {
  title: 'We Stand For',
  sub: 'The values behind every letter',
  values: [
    { letter: 'V', word: 'Values', icon: 'values', line: 'Our principles guide every decision, big or small.' },
    { letter: 'R', word: 'Relationship', icon: 'relationship', line: 'We build partnerships that last for decades, not just deals.' },
    { letter: 'I', word: 'Integrity', icon: 'integrity', line: 'We do what we say, honestly and openly.' },
    { letter: 'T', word: 'Team Work', icon: 'teamwork', line: 'We win together, sharing knowledge and credit.' },
    { letter: 'T', word: 'Trust', icon: 'trust', line: 'Clients, partners and colleagues can count on us.' },
    { letter: 'I', word: 'Innovation', icon: 'innovation', line: 'We keep finding better ways to solve real problems.' },
  ],
};

// "Always Leading by Example": leadership cards below "We Stand For".
// The people come from src/data/management.ts (CEO first, then the management team).
export const leadingByExample = {
  title: 'Always Leading by Example',
  sub: 'The people behind Vritti Group',
  moreLabel: 'Know More',
  moreHref: '/meet-our-management',
};

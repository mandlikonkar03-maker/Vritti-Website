// Content for the About Us page (src/pages/about-us.astro).
// "Our Journey" comes from OM's journey PDF. Each entry is one year on the
// scroll timeline: add, remove or reorder entries here and the timeline follows.

export const aboutHero = {
  title: 'About Us',
  text: 'From a home office in 1993 to a group working across India and the Middle East.',
};

export type JourneyPerson = { name: string; role: string; photo: string };
export type JourneyMilestone = {
  year: string;
  title: string;
  points?: string[];
  // Photos from the journey PDF are small (about 300px wide); swap in larger ones when available.
  // width/height: the picture's real pixel size, so the frame keeps its shape and nothing is cropped.
  image?: { src: string; width: number; height: number; alt: string };
  people?: JourneyPerson[];
  // Optional icon shown beside the title: rocket, team, office, speaker, award, erp, handshake, globe.
  icon?: string;
};

export const journeyIntro = {
  title: 'Our Journey',
  sub: 'Every Milestone tells a Story',
};

export const journey: JourneyMilestone[] = [
  {
    year: '1993',
    icon: 'rocket',
    title: 'J&C company was founded by Veerendra & Sangeeta Jamdade',
    points: ['Total employees: 2', 'Office location: Home', 'First project: Adat Software'],
    image: { src: '/images/about/journey/first-computer.jpg', width: 295, height: 182, alt: 'The first office computer' },
    people: [
      { name: 'Veerendra Jamdade', role: 'Founder & CEO', photo: '/images/about/journey/veerendra-jamdade.jpg' },
      { name: 'Sangeeta Jamdade', role: 'Founder', photo: '/images/about/journey/sangeeta-jamdade.jpg' },
    ],
  },
  {
    year: '2002',
    icon: 'team',
    title: 'Partners join the journey',
    people: [
      { name: 'Jeevan Pawar', role: 'Partner', photo: '/images/about/journey/jeevan-pawar.jpg' },
      { name: 'Shivaji Bedre', role: 'Partner', photo: '/images/about/journey/shivaji-bedre.jpg' },
    ],
  },
  {
    year: '2005',
    icon: 'office',
    title: 'Vritti Solutions Limited was founded',
    points: ['IT, Media and Rural Marketing under one roof'],
    image: { src: '/images/about/journey/vritti-solutions-office.jpg', width: 353, height: 158, alt: 'Vritti Solutions Limited office signboard' },
    people: [
      { name: 'Rajesh Radhakrishnan', role: 'Partner', photo: '/images/about/journey/rajesh-radhakrishnan.jpg' },
    ],
  },
  {
    year: '2007',
    icon: 'speaker',
    title: 'Audiowala Bus Stand is born',
    points: ['First bus stand at Swargate, Pune', 'Microsoft Award 2007'],
    image: { src: '/images/about/journey/swargate-bus-stand.jpg', width: 300, height: 135, alt: 'Swargate bus stand, the first Audiowala Bus Stand' },
  },
  {
    year: '2008',
    icon: 'speaker',
    title: 'Activation business starts at Pandharpur',
    image: { src: '/images/about/journey/pandharpur-activation.jpg', width: 353, height: 195, alt: 'Brand activation event at Pandharpur' },
  },
  {
    year: '2014',
    icon: 'erp',
    title: 'Ekatm ERP launched',
    image: { src: '/images/about/journey/ekatm-erp.jpg', width: 295, height: 171, alt: 'Ekatm ERP' },
  },
  {
    year: '2018',
    icon: 'handshake',
    title: 'MOU with ICAI for Simplify Practice',
    points: [
      'Audiowala Bus Stand in 8 states with 550+ bus stands',
      'Maharashtra, Karnataka, Rajasthan, Punjab, Himachal Pradesh, Haryana, Goa, Gujarat',
    ],
    image: { src: '/images/about/journey/icai-mou.jpg', width: 287, height: 145, alt: 'The Institute of Chartered Accountants of India' },
  },
  {
    year: '2023',
    icon: 'award',
    title: 'Recognised by Forbes India',
    points: [
      'Top 200 Companies having Global Growth Potential (Forbes India DGEMS 2023)',
      'Best Rural Marketing of the Year at the 12th ACEF Awards 2023',
    ],
    image: { src: '/images/about/journey/forbes-dgems-2023.jpg', width: 304, height: 197, alt: 'Forbes India DGEMS 2023 Top 200' },
  },
  {
    year: '2024',
    icon: 'globe',
    title: 'Business launch in the Middle East',
    points: [
      'Honored by Brand Equity as Best IT/ITeS/IoT Enterprise',
      'Most Admired BTL Agency of the Year for Customer Engagement by ACEF',
    ],
    image: { src: '/images/about/journey/middle-east.jpg', width: 354, height: 213, alt: 'Dubai skyline' },
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
};

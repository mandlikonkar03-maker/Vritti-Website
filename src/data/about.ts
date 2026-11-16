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
  // fit: 'contain' shows the whole picture (for logos/posters) instead of filling the frame.
  image?: { src: string; alt: string; fit?: 'cover' | 'contain' };
  people?: JourneyPerson[];
  // Optional icon shown beside the title: rocket, team, office, speaker, award, erp, handshake, globe.
  icon?: string;
};

export const journeyIntro = {
  title: 'Our Journey',
  sub: 'Three decades of building, one milestone at a time',
};

export const journey: JourneyMilestone[] = [
  {
    year: '1993',
    icon: 'rocket',
    title: 'J&C company was founded by Veerendra & Sangeeta Jamdade',
    points: ['Total employees: 2', 'Office location: Home', 'First project: Adat Software'],
    image: { src: '/images/about/journey/first-computer.jpg', alt: 'The first office computer' },
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
    image: { src: '/images/about/journey/vritti-solutions-office.jpg', alt: 'Vritti Solutions Limited office signboard' },
    people: [
      { name: 'Rajesh Radhakrishnan', role: 'Partner', photo: '/images/about/journey/rajesh-radhakrishnan.jpg' },
    ],
  },
  {
    year: '2007',
    icon: 'speaker',
    title: 'Audiowala Bus Stand is born',
    points: ['First bus stand at Swargate, Pune', 'Microsoft Award 2007'],
    image: { src: '/images/about/journey/swargate-bus-stand.jpg', alt: 'Swargate bus stand, the first Audiowala Bus Stand' },
  },
  {
    year: '2008',
    icon: 'speaker',
    title: 'Activation business starts at Pandharpur',
    image: { src: '/images/about/journey/pandharpur-activation.jpg', alt: 'Brand activation event at Pandharpur' },
  },
  {
    year: '2014',
    icon: 'erp',
    title: 'Ekatm ERP launched',
    image: { src: '/images/about/journey/ekatm-erp.jpg', alt: 'Ekatm ERP' },
  },
  {
    year: '2018',
    icon: 'handshake',
    title: 'MOU with ICAI for Simplify Practice',
    points: [
      'Audiowala Bus Stand in 8 states with 550+ bus stands',
      'Maharashtra, Karnataka, Rajasthan, Punjab, Himachal Pradesh, Haryana, Goa, Gujarat',
    ],
    image: { src: '/images/about/journey/icai-mou.jpg', alt: 'The Institute of Chartered Accountants of India', fit: 'contain' },
  },
  {
    year: '2023',
    icon: 'award',
    title: 'Recognised by Forbes India',
    points: [
      'Top 200 Companies having Global Growth Potential (Forbes India DGEMS 2023)',
      'Best Rural Marketing of the Year at the 12th ACEF Awards 2023',
    ],
    image: { src: '/images/about/journey/forbes-dgems-2023.jpg', alt: 'Forbes India DGEMS 2023 Top 200', fit: 'contain' },
  },
  {
    year: '2024',
    icon: 'globe',
    title: 'Business launch in the Middle East',
    points: [
      'Honored by Brand Equity as Best IT/ITeS/IoT Enterprise',
      'Most Admired BTL Agency of the Year for Customer Engagement by ACEF',
    ],
    image: { src: '/images/about/journey/middle-east.jpg', alt: 'Dubai skyline' },
  },
];

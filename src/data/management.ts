// Content for the "Meet our Management" page (src/pages/meet-our-management.astro).
// Edit names, titles, photos and the CEO message here.

export const hero = {
  title: 'Meet our Leaders',
  text: 'The people steering Vritti Group and its businesses.',
  // Placeholder banner (a self-made, licence-free graphic). Replace with the real carousel image when ready.
  image: '/images/management/hero.jpg',
};

export const ceo = {
  eyebrow: 'CEO Words',
  // TODO: placeholder text from the design. Replace with the CEO's real message.
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  name: 'Veerendra Jamdade',
  title: 'CEO, Vritti Group',
  photo: '/images/management/veerendra-jamdade.jpg',
  // Where "Read more" goes. Leave empty to hide the button.
  readMoreHref: '/meet-our-management/veerendra-jamdade',
};

// Full profile page: /meet-our-management/veerendra-jamdade
export const ceoProfile = {
  name: 'Veerendra Jamdade',
  title: 'Founder, CEO',
  photo: '/images/management/veerendra-jamdade.jpg',
  bio: [
    'Along with his team, he founded Vritti Solutions in the year 2005. Having an experience of 38 years, he has always focused on introducing breakthrough technology in the semi-rural and rural areas of India. Coming from an agricultural background and being qualified as a Mechanical Engineer, he sowed the seed of helping urban and rural people to grow their businesses through innovative IT solutions like AdatSoft and PetroSoft. Nonetheless, he wanted to cater to the SMEs through Ekatm ERP and Simplify Practice. His idea of creating a unique audio medium, the Audiowala Bus Stand has today emerged as an impactful and cost-effective platform for brands to mass promote their products and services.',
    'In 2007, he spearheaded the ISO process and streamlined the processes with innovation and creativity.',
    'Mr. Jamdade has worked for MNCs like SKF Bearings and EDS. He is a true visionary in the rural marketing and IT space, which has enabled Vritti to win recognized awards at the CII, RMAI, WOW, ACEF and Outdoor Asia.',
  ],
  // TODO: replace '#' with his real profile URLs.
  socials: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
  ],
  headlines: [
    {
      // TODO: link to the real video/article, and add a thumbnail image (leave empty to show the drawn placeholder).
      href: '#',
      thumbnail: '',
      caption:
        'The Indian market is crowded with global ERP and CRM players. Where does Ekatm compete most effectively, and what does Vritti Solutions offer mid-sized Indian businesses that larger international platforms often miss?',
    },
  ],
};

export type Leader = { name: string; title: string; photo: string };

export const leaders: Leader[] = [
  {
    name: 'Rajesh Radhakrishnan',
    title: 'CMO, Vritti Group',
    photo: '/images/management/rajesh-radhakrishnan.jpg',
  },
  {
    name: 'Shivaji Bedre',
    title: 'Chief Sales, Vritti Group',
    photo: '/images/management/shivaji-bedre.jpg',
  },
  {
    name: 'Jeevan Pawar',
    // TODO: confirm title. The design shows "CMO", which looks copied from the first card.
    title: 'CMO, Vritti Group',
    photo: '/images/management/jeevan-pawar.jpg',
  },
  {
    name: 'Sangeeta Jamdade',
    // TODO: real title and photo still to come (placeholder silhouette for now).
    title: 'Vritti Group',
    photo: '/images/management/sangeeta-jamdade.jpg',
  },
];

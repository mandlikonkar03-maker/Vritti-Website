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
  readMoreHref: '',
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

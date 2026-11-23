// Content for the Careers page (/careers). Text marked "placeholder" is the Figma dummy text,
// to be replaced when OM sends the final copy.

// Where "Apply Now" sends people until a careers form or job listings exist (placeholder).
export const applyEmail = 'enquiry@vritti.co.in';

export const careersHero = {
  title: 'Your dreams.',
  highlight: 'Fulfilled at Vritti.',
  text: 'At Vritti, we believe in turning aspirations into achievements. We empower our people with opportunities to learn, grow, innovate, and build a fulfilling career while creating a meaningful impact together.',
  // Hero image (OM's photo, 2026-11-23). Leave empty to show a grey placeholder.
  image: '/images/careers/hero.jpg' as string,
  imageAlt: 'Vritti team working together around a laptop',
};

export type CareerBusiness = { label: string; image: string; alt: string };

// Photos reused from the home hero until OM sends careers-specific ones.
export const careerBusinesses: CareerBusiness[] = [
  { label: 'Technology', image: '/images/home/hero/technology.jpg', alt: 'Vritti Technology team' },
  { label: 'Media', image: '/images/home/hero/vritti-imedia.jpg', alt: 'Vritti iMedia rural campaign' },
  { label: 'Marketing', image: '/images/home/hero/mindwave-media.jpg', alt: 'Mindwave Media event' },
];

export type Benefit = { icon: 'life' | 'health' | 'family'; title: string; text: string };

export const benefits = {
  title: 'Employee Benefits',
  subtitle: 'Our diverse portfolio.',
  // Texts are placeholders: the design repeats the Life Insurance line on every card.
  items: [
    { icon: 'life', title: 'Life Insurance', text: 'All employees are covered under the Group’s Term Life Insurance Plan.' },
    { icon: 'health', title: 'Health Care', text: 'All employees are covered under the Group’s Term Life Insurance Plan.' },
    { icon: 'family', title: 'Paternity Leave Policy', text: 'All employees are covered under the Group’s Term Life Insurance Plan.' },
  ] as Benefit[],
};

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials = {
  title: 'Great Place to Work',
  subtitle: 'What our family says.',
  // Anonymous employee reviews from AmbitionBox (ambitionbox.com/reviews/vritti-solutions-reviews), used for now
  // with job title and city in place of a name. OM will replace them with named quotes from the team.
  items: [
    { quote: 'Great learning opportunity for freshers. They give full support for learning new technologies.', name: 'Software Developer', role: 'Pune', initials: 'SD' },
    { quote: 'Organization provide good support and great incentive structure. Work environment is good.', name: 'Senior Operations Manager', role: 'Mumbai', initials: 'SO' },
    { quote: 'My colleagues are so helpful. Overall environment of company is healthy.', name: 'Software Tester', role: 'Pune', initials: 'ST' },
    { quote: 'Management is very supportive, the owner of the company is too much helpful and supportive.', name: 'Team Lead', role: 'Pune', initials: 'TL' },
  ] as Testimonial[],
};

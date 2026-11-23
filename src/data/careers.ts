// Content for the Careers page (/careers). Text marked "placeholder" is the Figma dummy text,
// to be replaced when OM sends the final copy.

// Where "Apply Now" sends people until a careers form or job listings exist (placeholder).
export const applyEmail = 'enquiry@vritti.co.in';

export const careersHero = {
  title: 'Your dreams.',
  highlight: 'Fulfilled at Vritti.',
  // placeholder
  text: "The all-in-one CA Practising firm Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  // Hero image: add a path here when OM sends the photo; until then a grey placeholder shows.
  image: '' as string,
  imageAlt: 'Life at Vritti',
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
  // All placeholders from the design.
  items: [
    { quote: 'Phasellus faucibus, nisi sed commodo auctor, ante elit sagittis felis.', name: 'John Smith', role: 'Marketing Director · Creative Agency', initials: 'JS' },
    { quote: 'Aliquam erat volutpat. Suspendisse potenti. Etiam non velit lorem.', name: 'Jane Doe', role: 'Project Manager · Tech Innovations', initials: 'JD' },
    { quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum', name: 'Customer name', role: 'Designation · Company name', initials: 'CN' },
    { quote: 'Curabitur ut metus nec nunc lacinia tincidunt a ac magna.', name: 'Emily Johnson', role: 'Lead Developer · Software Solutions', initials: 'EJ' },
  ] as Testimonial[],
};

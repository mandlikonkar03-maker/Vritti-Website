// Content for the Careers page (/careers). Text marked "placeholder" is the Figma dummy text,
// to be replaced when OM sends the final copy.

// Where "Apply Now" sends people until a careers form or job listings exist (placeholder).
export const applyEmail = 'enquiry@vritti.co.in';

export const careersHero = {
  title: 'Your dreams.',
  highlight: 'Fulfilled at Vritti.',
  text: 'At Vritti, we believe in turning aspirations into achievements. We empower our people with opportunities to learn, grow, innovate, and build a fulfilling career while creating a meaningful impact together.',
  // Hero (full-bleed, like the home page): a blurred version of OM's careers photo as the backdrop,
  // the cut-out person on the right, and the graphic's "pop-up" cards rebuilt as floating HTML cards.
  background: '/images/careers/hero-bg.jpg',
  person: '/images/careers/hero-person.webp',
  personAlt: 'Smiling Vritti professional holding a laptop',
  pops: [
    { pos: 'tl', icon: 'team', tone: 'blue', big: '250+', label: 'Team Members', depth: 70 },
    { pos: 'ml', icon: 'bag', tone: 'orange', label: 'Open Roles', href: '#openings', depth: 110 },
    { pos: 'bl', icon: 'sprout', tone: 'green', label: 'Growing Opportunities', depth: 50 },
    { pos: 'tr', icon: 'growth', tone: 'green', label: 'Career Growth', depth: 90 },
    { pos: 'mr', icon: 'book', tone: 'blue', label: 'Learning', depth: 60 },
    { pos: 'br', icon: 'team', tone: 'orange', label: 'Team Culture', depth: 100 },
  ] as { pos: string; icon: string; tone: string; big?: string; label: string; href?: string; depth: number }[],
};

export type CareerBusiness = { slug: string; label: string; image: string; alt: string };

// Photos reused from the home hero until OM sends careers-specific ones.
export const careerBusinesses: CareerBusiness[] = [
  { slug: 'technology', label: 'Technology', image: '/images/home/hero/technology.jpg', alt: 'Vritti Technology team' },
  { slug: 'media', label: 'Media', image: '/images/home/hero/vritti-imedia.jpg', alt: 'Vritti iMedia rural campaign' },
  { slug: 'marketing', label: 'Marketing', image: '/images/home/hero/mindwave-media.jpg', alt: 'Mindwave Media event' },
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

// ---- Job openings pages (/careers/technology, /careers/media, /careers/marketing) ----

export type Job = {
  title: string;
  location: string;
  department: string;
  type: 'Full Time' | 'Internship' | 'Contract';
  rrf: string;
  summary: string;
};

const dummySummary =
  "The all-in-one CA Practising firm Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.";

// PLACEHOLDER JOBS: not real openings. Replace with the real list (title, location, department,
// type, RRF code, short description) per business before going live.
export const jobs: Record<string, Job[]> = {
  technology: [
    { title: 'Software Developer', location: 'Pune, Maharashtra, India', department: 'Software Development', type: 'Full Time', rrf: 'RRF-1561', summary: dummySummary },
    { title: 'Senior Software Engineer', location: 'Pune, Maharashtra, India', department: 'Software Development', type: 'Full Time', rrf: 'RRF-1562', summary: dummySummary },
    { title: 'Software Tester', location: 'Pune, Maharashtra, India', department: 'Quality Assurance', type: 'Full Time', rrf: 'RRF-1563', summary: dummySummary },
    { title: 'ERP Implementation Consultant', location: 'Mumbai, Maharashtra, India', department: 'Implementation', type: 'Full Time', rrf: 'RRF-1564', summary: dummySummary },
    { title: 'Software Support Engineer', location: 'Pune, Maharashtra, India', department: 'IT Support', type: 'Full Time', rrf: 'RRF-1565', summary: dummySummary },
    { title: 'Android Developer', location: 'Pune, Maharashtra, India', department: 'Software Development', type: 'Full Time', rrf: 'RRF-1566', summary: dummySummary },
    { title: 'UI/UX Designer', location: 'Pune, Maharashtra, India', department: 'Design', type: 'Full Time', rrf: 'RRF-1567', summary: dummySummary },
    { title: 'Assistant Area Sales Manager', location: 'Jaipur City, Rajasthan, India', department: 'Sales / Indirect Sales', type: 'Full Time', rrf: 'RRF-1568', summary: dummySummary },
    { title: 'Software Developer Intern', location: 'Pune, Maharashtra, India', department: 'Software Development', type: 'Internship', rrf: 'RRF-1569', summary: dummySummary },
  ],
  media: [
    { title: 'Assistant Area Sales Manager', location: 'Jaipur City, Rajasthan, India', department: 'Sales / Indirect Sales', type: 'Full Time', rrf: 'RRF-2561', summary: dummySummary },
    { title: 'Rural Activation Executive', location: 'Lucknow, Uttar Pradesh, India', department: 'Field Operations', type: 'Full Time', rrf: 'RRF-2562', summary: dummySummary },
    { title: 'Client Servicing Executive', location: 'Mumbai, Maharashtra, India', department: 'Client Servicing', type: 'Full Time', rrf: 'RRF-2563', summary: dummySummary },
    { title: 'Field Coordinator', location: 'Indore, Madhya Pradesh, India', department: 'Field Operations', type: 'Contract', rrf: 'RRF-2564', summary: dummySummary },
    { title: 'Media Planner', location: 'Pune, Maharashtra, India', department: 'Planning', type: 'Full Time', rrf: 'RRF-2565', summary: dummySummary },
    { title: 'Marketing Intern', location: 'Pune, Maharashtra, India', department: 'Marketing', type: 'Internship', rrf: 'RRF-2566', summary: dummySummary },
  ],
  marketing: [
    { title: 'Assistant Area Sales Manager', location: 'Jaipur City, Rajasthan, India', department: 'Sales / Indirect Sales', type: 'Full Time', rrf: 'RRF-3561', summary: dummySummary },
    { title: 'Digital Marketing Executive', location: 'Mumbai, Maharashtra, India', department: 'Digital Marketing', type: 'Full Time', rrf: 'RRF-3562', summary: dummySummary },
    { title: 'Event Manager', location: 'Mumbai, Maharashtra, India', department: 'Events / BTL', type: 'Full Time', rrf: 'RRF-3563', summary: dummySummary },
    { title: 'Graphic Designer', location: 'Pune, Maharashtra, India', department: 'Creative', type: 'Full Time', rrf: 'RRF-3564', summary: dummySummary },
    { title: 'Brand Executive', location: 'Ahmedabad, Gujarat, India', department: 'Brand Marketing', type: 'Contract', rrf: 'RRF-3565', summary: dummySummary },
    { title: 'Social Media Intern', location: 'Pune, Maharashtra, India', department: 'Digital Marketing', type: 'Internship', rrf: 'RRF-3566', summary: dummySummary },
  ],
};

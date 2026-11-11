// Content for the Ekatm ERP product page. Edit text here, not in the page markup.

export const heroSlides = [
  {
    image: '/images/slide-dashboard.png',
    alt: 'Ekatm dashboard showing attendance overview, timesheet log, notices and meetings',
    eyebrow: 'Dashboard',
    title: 'Everything important on one screen',
    text: 'Attendance, timesheets, notices, business information and meetings at a glance.',
  },
  {
    image: '/images/slide-workspace.png',
    alt: 'Ekatm workspace panel listing projects with assigned and overdue counts',
    eyebrow: 'Workspace',
    title: 'Keep every project in view',
    text: 'See assigned and overdue work for each workspace and project in one panel.',
  },
  {
    image: '/images/slide-work-management.png',
    alt: 'Ekatm work management board with timesheet details and work cards',
    eyebrow: 'Work Management',
    title: 'Track and manage work items efficiently',
    text: 'Every work card shows its status, efforts, start date and due date.',
  },
];

export const problems = [
  'Spending time in routine operations',
  'Heavy expense on cost of operations and management',
  'Managing resources',
];

// Add an href when a module gets its own page.
export const features: { label: string; icon: string; href?: string }[] = [
  { label: 'Work', icon: 'work' },
  { label: 'PDM', icon: 'pdm', href: '/technology/ekatm-erp/pdm' },
  { label: 'Manufacturing', icon: 'manufacturing' },
  { label: 'Purchase', icon: 'purchase', href: '/technology/ekatm-erp/purchase' },
  { label: 'Inventory', icon: 'inventory' },
  { label: 'WMS', icon: 'wms' },
  { label: 'CRM', icon: 'crm' },
  { label: 'Sales', icon: 'sales' },
  { label: 'Advertisement', icon: 'advertisement' },
  { label: 'Finance', icon: 'finance' },
  { label: 'Admin', icon: 'admin' },
  { label: 'Service Desk', icon: 'service-desk' },
  { label: 'HR', icon: 'hr' },
  { label: 'SDLC', icon: 'sdlc' },
  { label: 'Release Note', icon: 'release-note' },
  { label: 'Business Plan', icon: 'business-plan' },
];

export const levelUp = [
  {
    title: 'Dashboard',
    text: 'Attendance overview, timesheet logs, notices, business information, and meetings in one view.',
  },
  {
    title: 'Work Management',
    text: 'Create, assign, and track work items with effort estimates, start dates, and due dates.',
  },
  {
    title: 'Meetings & Collaboration',
    text: 'Keep meeting schedules, discussions, and team coordination accessible in one place.',
  },
];

// Placeholder testimonials from the design: replace with real ones.
export const testimonials = [
  { quote: 'Phasellus faucibus, nisi sed commodo auctor, ante elit sagittis felis.', name: 'John Smith', role: 'Marketing Director · Creative Agency', initials: 'C3' },
  { quote: 'Aliquam erat volutpat. Suspendisse potenti. Etiam non velit lorem.', name: 'Jane Doe', role: 'Project Manager · Tech Innovations', initials: 'C2' },
  { quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum', name: 'Customer name', role: 'Designation · Company name', initials: 'C1' },
  { quote: 'Curabitur ut metus nec nunc lacinia tincidunt a ac magna.', name: 'Emily Johnson', role: 'Lead Developer · Software Solutions', initials: 'C4' },
];

// Only the first answer is in the design; the others are drafts to review.
export const faqs = [
  {
    q: 'What is Ekatm ERP?',
    a: 'Ekatm is an integrated enterprise platform connecting core business processes such as Sales, CRM, Purchase, Inventory, Production, MRP, Engineering, Quality, Finance, HR and Service Desk.',
  },
  {
    q: 'Can Ekatm grow with our organization?',
    a: 'Yes. Start with the modules you need today and switch on more as your teams, locations and processes grow, without moving to a new system.',
  },
  {
    q: 'Is Ekatm suitable for manufacturing companies?',
    a: 'Yes. Ekatm covers PDM, MRP, production, purchase, inventory and warehouse management, so the shop floor and the office work from the same data.',
  },
  {
    q: 'Does Ekatm include after-sales service?',
    a: 'Yes. The Service Desk module manages service requests, complaints and support tickets after a sale, linked to the customer and product history.',
  },
  {
    q: 'Is Ekatm a PLM system?',
    a: 'Ekatm includes product data management (PDM) and engineering features alongside full ERP, so product information flows straight into purchase, production and sales.',
  },
];

// Shown as a single banner on desktop and as a logo grid on phones.
export const integrations = [
  { name: 'Amazon', logo: 'amazon' },
  { name: 'Shopify', logo: 'shopify' },
  { name: 'India market', logo: 'indiamart' },
  { name: 'Trade India', logo: 'tradeindia' },
  { name: 'Google ads', logo: 'google-ads' },
  { name: 'Tally', logo: 'tally' },
  { name: 'Excel', logo: 'excel' },
  { name: 'Whatsapp', logo: 'whatsapp' },
  { name: 'Meta', logo: 'meta' },
];

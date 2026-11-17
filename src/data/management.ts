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
  // CEO's message. Wrap a word in **double asterisks** to show it in bold.
  quote:
    'Celebrating 21 years of Vritti — a journey built on Values, Relationships, Innovation, Teamwork, Trust and Integrity. As we step into the next chapter, our theme is **OWN**. It is time for each of us to take ownership, grow together and build Vritti as an enduring institution that thrives across generations.',
  name: 'Veerendra Jamdade',
  title: 'CEO, Vritti Group',
  photo: '/images/management/veerendra-jamdade.jpg',
  // Where "Read more" goes. Leave empty to hide the button.
  readMoreHref: '/meet-our-management/veerendra-jamdade',
};

// Full profile page: /meet-our-management/veerendra-jamdade
export type LeaderProfile = {
  name: string;
  title: string;
  photo: string;
  photoWidth: number;
  photoHeight: number;
  bio: string[];
  socials?: { label: string; href: string; icon: 'linkedin' | 'twitter' }[];
  headlines?: { href: string; thumbnail: string; caption: string }[];
  thumbRole?: string;
};

export const ceoProfile: LeaderProfile = {
  name: 'Veerendra Jamdade',
  title: 'Founder, CEO',
  photo: '/images/management/veerendra-jamdade.jpg',
  photoWidth: 786,
  photoHeight: 817,
  thumbRole: 'Founder & CEO',
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

// href: optional profile page; the card links to it on Meet our Management and About Us.
// know: the text shown on hover (defaults to "Know him").
export type Leader = { name: string; title: string; photo: string; href?: string; know?: string };

export const leaders: Leader[] = [
  {
    name: 'Rajesh Radhakrishnan',
    title: 'CMO, Vritti Group',
    photo: '/images/management/rajesh-radhakrishnan.jpg',
  },
  {
    name: 'Shivaji Bedre',
    title: 'Vice-President Sales & Marketing, Vritti Group',
    photo: '/images/management/shivaji-bedre.jpg',
  },
  {
    name: 'Jeevan Pawar',
    title: 'VP-BD (India & Global Market), Vritti Group',
    photo: '/images/management/jeevan-pawar.jpg',
  },
  {
    name: 'Sangeeta Jamdade',
    title: 'Director: Human Resources, Vritti Group',
    photo: '/images/management/sangeeta-jamdade.jpg',
    href: '/meet-our-management/sangeeta-jamdade',
    know: 'Know her',
  },
];

// Full profile page: /meet-our-management/sangeeta-jamdade (bio text from OM, 2026-11-16).
export const sangeetaProfile: LeaderProfile = {
  name: 'Sangeeta Jamdade',
  title: 'Director – Human Resources',
  photo: '/images/management/sangeeta-jamdade-profile.jpg',
  photoWidth: 733,
  photoHeight: 719,
  // TODO: replace '#' with her real profile URLs (OM to send).
  socials: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'X', href: '#', icon: 'twitter' },
  ],
  bio: [
    "Mrs. Sangeeta Jamdade is the Director – Human Resources at Vritti Solutions, bringing over 33 years of professional experience and playing a pivotal role in the company’s journey from its early years to becoming a diversified technology and media enterprise. Her leadership philosophy is built on empathy, resilience, discipline, and a deep commitment to empowering people.",
    "A graduate in B.Sc. (Zoology) with additional training in Computer Hardware & Assembly, Mrs. Jamdade entered the technology industry at a time when software adoption in India was still in its infancy. She was instrumental in introducing AdatSoft to Agricultural Produce Market Committees (APMCs) and market yards, where the software—developed in the local language—revolutionized the way agricultural markets managed their operations. Her relentless efforts also led to securing the first-ever order for PetroSoft, marking another significant milestone in Vritti’s growth journey.",
    "Her journey is a testament to determination and breaking barriers. Raised in a farming family in a small village, she experienced the values and simplicity of rural India while receiving her education at one of Pune’s reputed Cambridge Board English-medium schools. Travelling nearly 15 kilometres every day for her education, she became the first girl from her village to graduate from such a prestigious English-medium institution. The unwavering support of her parents instilled in her a lifelong belief that education is the greatest catalyst for personal and societal transformation.",
    "Growing up with both rural and urban influences gave Mrs. Jamdade a unique ability to understand people from diverse backgrounds. This perspective has shaped her people-centric leadership style and has been instrumental in fostering an inclusive, collaborative, and values-driven work culture at Vritti.",
    "Following the birth of her daughter, her determination to build a stronger future for both her family and the organization became even more profound. This renewed purpose strengthened her commitment to helping Vritti scale up to greater heights while ensuring that people remained at the heart of the organization’s success.",
    "A defining chapter in her life was her association with Art of Living, which she considers a life-changing experience. It transformed her outlook on leadership, reinforcing the values of compassion, mindfulness, emotional intelligence, and service to society.",
    "Within Art of Living, Mrs. Jamdade emerged as one of the few women leaders entrusted with heading the Youth Leadership Training Program (YLTP) for Pune District, overseeing 13 talukas. Under her leadership, numerous rural development initiatives were successfully implemented with a focus on holistic community transformation. These initiatives included women empowerment, empowering the girl child through physical, mental, and emotional well-being programmes, skill development initiatives that enabled rural youth to become self-reliant, farmer support programmes promoting natural farming through intensive workshops, large-scale river rejuvenation projects involving desilting, river widening, and tree plantation in collaboration with CSR partners, government authorities, and local communities, as well as de-addiction programmes aimed at guiding youth towards healthier and more purposeful lives.",
    "From 2021 to 2025, she served as the State Coordinator for the Children’s and Teachers Desk at Art of Living. In this role, she spearheaded numerous workshops across schools and educational institutions, focusing on the holistic development and well-being of children and educators. Under her leadership, the state emerged as the best-performing state in this segment, reflecting her ability to inspire teams and execute impactful initiatives at scale.",
    "Continuing her commitment to social transformation, Mrs. Jamdade also conducts Prison SMART programmes at Yerwada Central Jail for women inmates and at juvenile correctional facilities for inmates below the age of 18. Through these initiatives, she works towards rehabilitation, emotional healing, stress management, and helping individuals rebuild their confidence and outlook towards life.",
    "Beyond her professional accomplishments, Mrs. Jamdade exemplifies discipline, teamwork, and perseverance. During her college years, she captained her hockey team and won several medals, experiences that continue to influence her collaborative leadership style and commitment to excellence.",
    "As Director – Human Resources, Mrs. Sangeeta Jamdade continues to champion employee development, leadership excellence, organizational culture, and people empowerment. Her unique blend of entrepreneurial experience, grassroots community leadership, and unwavering commitment to human potential has played a defining role in shaping Vritti’s culture. She firmly believes that an organization’s greatest strength lies in its people, and that lasting success is built by nurturing individuals, inspiring leaders, and creating opportunities for everyone to thrive.",
  ],
};

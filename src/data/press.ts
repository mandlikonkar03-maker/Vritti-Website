// Press articles about Vritti and its leaders. Shown on the home "Legacy & Leadership" row
// and under the CEO's profile ("Making Headlines"). Images are saved in public/images/press/.

export type PressArticle = {
  title: string;
  source: string;
  href: string;
  image: string;
  alt: string;
};

export const sugermintInterview: PressArticle = {
  title: 'Tech Innovation & Media Reach: Interview with Veerendra Jamdade, CEO of Vritti Solutions',
  source: 'Sugermint',
  href: 'https://sugermint.com/veerendra-jamdade-vritti-solutions-interview/',
  image: '/images/press/sugermint-veerendra-jamdade.jpg',
  alt: 'Veerendra Jamdade, Founder & CEO of Vritti Solutions, in his office',
};

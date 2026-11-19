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

export const founderMediaArticle: PressArticle = {
  title: 'Vritti Solutions sees data trust as next competitive edge for Indian SMEs',
  source: 'The Founder Media',
  href: 'https://thefoundermedia.com/vritti-solutions-sees-data-trust-as-next-competitive-edge-for-indian-smes/',
  image: '/images/press/founder-media-veerendra-jamdade.jpg',
  alt: 'Veerendra Jamdade, Founder & CEO, Vritti Solutions',
};

export const travelTourismTimesArticle: PressArticle = {
  title: 'From Fragmented Data to Connected Journeys: The Next Step for Travel Businesses',
  source: 'The Travel and Tourism Times',
  href: 'https://thetravelandtourismtimes.com/ttt-special-from-fragmented-data-to-connected-journeys-the-next-step-for-travel-businesses/',
  image: '/images/press/travel-tourism-times-veerendra-jamdade.jpg',
  alt: 'The Travel and Tourism Times article by Veerendra Jamdade',
};

export const marksmenDailyArticle: PressArticle = {
  title: 'Why Digital Trust Will Shape the Next Decade of Business Growth',
  source: 'Marksmen Daily',
  href: 'https://marksmendaily.com/business/why-digital-trust-will-shape-the-next-decade-of-growth/',
  image: '/images/press/marksmen-daily-veerendra-jamdade.jpg',
  alt: 'Marksmen Daily article by Veerendra Jamdade',
};

export const ceoIndiaArticle: PressArticle = {
  title: 'The Hustle Behind the Empire',
  source: 'CEO India Magazine',
  href: 'https://ceoindiamagazine.com/the-hustle-behind-the-empire/',
  image: '/images/press/ceo-india-veerendra-jamdade.jpg',
  alt: 'Veerendra Jamdade featured in CEO India Magazine',
};

export const indianPrinterPublisherArticle: PressArticle = {
  title: 'Why Traditional ERP Systems Fail in India',
  source: 'Indian Printer & Publisher',
  href: 'https://indianprinterpublisher.com/blog/2026/05/traditional-erp-systems-india/',
  image: '/images/press/indian-printer-publisher-erp.jpg',
  alt: 'Indian Printer & Publisher article on ERP systems in India',
};

// Order shown under "Making Headlines" on the CEO profile (newest first).
export const ceoHeadlines: PressArticle[] = [
  founderMediaArticle,
  travelTourismTimesArticle,
  sugermintInterview,
  marksmenDailyArticle,
  ceoIndiaArticle,
  indianPrinterPublisherArticle,
];

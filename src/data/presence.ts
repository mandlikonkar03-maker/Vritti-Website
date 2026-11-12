// Global Presence section on the home page (/).
// OM's list so far (2026-11-12): 6 of the 11 office cities; more to come.
// x / y are % positions on public/images/home/presence/dots-india.svg, which covers
// longitude 62–98°E and latitude 5–37°N: x = (lon - 62) / 36 * 100, y = (37 - lat) / 32 * 100.
// side: which side of the pin the label sits on, for pins that are close together.

export type Office = {
  id: string;
  city: string;
  region: string;
  hq?: boolean;
  x: number;
  y: number;
  side?: 'left' | 'right';
};

export const presence = {
  title: 'Global Presence',
  subtitle: '11 cities. One Vritti.',
  intro: 'From our headquarters in Pune, Vritti Group works with clients across India through offices in 11 cities.',
  map: '/images/home/presence/dots-india.svg',
  offices: [
    { id: 'pune', city: 'Pune', region: 'Maharashtra', hq: true, x: 32.94, y: 57.75, side: 'right' },
    { id: 'mumbai', city: 'Mumbai', region: 'Maharashtra', x: 30.22, y: 56, side: 'left' },
    { id: 'bengaluru', city: 'Bengaluru', region: 'Karnataka', x: 43.31, y: 75.09, side: 'right' },
    { id: 'chandigarh', city: 'Chandigarh', region: 'Punjab & Haryana', x: 41.06, y: 19.59, side: 'right' },
    { id: 'goa', city: 'Goa', region: 'Goa', x: 32.86, y: 67.22, side: 'left' },
    { id: 'jaipur', city: 'Jaipur', region: 'Rajasthan', x: 38.31, y: 31.53, side: 'left' },
  ] as Office[],
};

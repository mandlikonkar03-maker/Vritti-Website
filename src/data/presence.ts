// Global Presence section on the home page (/).
// OM's list so far (2026-11-12): 6 of the 11 office cities; more to come.
// x / y are % positions on public/images/home/presence/dots-india.svg, which covers
// longitude 64–96°E and latitude 6–34°N: x = (lon - 64) / 32 * 100, y = (34 - lat) / 28 * 100.
// The map is plain land dots with no borders drawn, faded at the edges.
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
    { id: 'pune', city: 'Pune', region: 'Maharashtra', hq: true, x: 30.81, y: 55.29, side: 'right' },
    { id: 'mumbai', city: 'Mumbai', region: 'Maharashtra', x: 27.75, y: 53.29, side: 'left' },
    { id: 'bengaluru', city: 'Bengaluru', region: 'Karnataka', x: 42.47, y: 75.11, side: 'right' },
    { id: 'chandigarh', city: 'Chandigarh', region: 'Punjab & Haryana', x: 39.94, y: 11.68, side: 'right' },
    { id: 'goa', city: 'Goa', region: 'Goa', x: 30.72, y: 66.11, side: 'left' },
    { id: 'jaipur', city: 'Jaipur', region: 'Rajasthan', x: 36.84, y: 25.32, side: 'left' },
  ] as Office[],
};

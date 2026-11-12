// Global Presence section on the home page (/).
// OM's list so far (2026-11-12): Pune (HQ), Mumbai, Bengaluru, Chandigarh, Goa, Jaipur, plus Dubai
// (international). More cities to come.
// x / y are % positions on public/images/home/presence/dots-map.svg, which covers
// longitude 50–96°E and latitude 6–34°N: x = (lon - 50) / 46 * 100, y = (34 - lat) / 28 * 100.
// The map is plain land dots with no borders drawn, faded at the edges.
// side: which side of the pin the label sits on, for pins that are close together.
// international: shows an "International" tag on the card and pin, and a route from HQ.

export type Office = {
  id: string;
  city: string;
  region: string;
  hq?: boolean;
  international?: boolean;
  x: number;
  y: number;
  side?: 'left' | 'right';
  /** Shorter pin label than the card title (e.g. 'UAE'). */
  label?: string;
};

export const presence = {
  title: 'Global Presence',
  subtitle: '11 cities. 2 countries. One Vritti.',
  intro: 'From our headquarters in Pune, Vritti Group works with clients through offices in 11 cities across India, and internationally from the UAE.',
  stats: [
    { value: '11', label: 'Cities in India' },
    { value: '2', label: 'Countries' },
  ],
  map: '/images/home/presence/dots-map.svg',
  mapRatio: [760, 463],
  offices: [
    { id: 'pune', city: 'Pune', region: 'Maharashtra', hq: true, x: 51.87, y: 55.29, side: 'right' },
    { id: 'mumbai', city: 'Mumbai', region: 'Maharashtra', x: 49.74, y: 53.29, side: 'left' },
    { id: 'bengaluru', city: 'Bengaluru', region: 'Karnataka', x: 59.98, y: 75.11, side: 'right' },
    { id: 'chandigarh', city: 'Chandigarh', region: 'Punjab & Haryana', x: 58.22, y: 11.68, side: 'right' },
    { id: 'goa', city: 'Goa', region: 'Goa', x: 51.8, y: 66.11, side: 'left' },
    { id: 'jaipur', city: 'Jaipur', region: 'Rajasthan', x: 56.07, y: 25.32, side: 'left' },
    { id: 'uae', city: 'UAE', region: 'Dubai, United Arab Emirates', international: true, x: 11.46, y: 31.43, side: 'right' },
  ] as Office[],
};

// Global Presence redesign options (preview page /presence-options).
// Locations are a first guess from photo captions (Pune, Mumbai, Delhi, Jaipur, Chandigarh)
// plus Dubai for "Middle East": OM to confirm the real list.
// world / region are % positions on the dotted maps in public/images/home/presence/
// (generated from lat/lon, so add lat/lon for any new city and regenerate).

export type Location = {
  id: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
  hq?: boolean;
  /** Which businesses work from here (placeholder). */
  tags: string[];
  world: { x: number; y: number };
  region: { x: number; y: number };
  /** Label side on the zoomed map, for pins that sit close together. */
  side?: 'left' | 'right';
};

export const presenceNew = {
  title: 'Global Presence',
  subtitle: 'Rooted in India. Growing across borders.',
  intro:
    'From our headquarters in Pune, Vritti Group serves clients across India and the Middle East through offices in six cities.',
  locations: [
    { id: 'pune', city: 'Pune', country: 'India', lat: 18.52, lon: 73.86, hq: true, tags: ['Technology', 'Media', 'Marketing'], world: { x: 67.74, y: 44.55 }, region: { x: 61.83, y: 57.29 }, side: 'right' },
    { id: 'mumbai', city: 'Mumbai', country: 'India', lat: 19.08, lon: 72.88, tags: ['Media', 'Marketing'], world: { x: 67.47, y: 44.14 }, region: { x: 60.14, y: 55.65 }, side: 'left' },
    { id: 'delhi', city: 'New Delhi', country: 'India', lat: 28.61, lon: 77.21, tags: ['Technology', 'Marketing'], world: { x: 68.67, y: 37.24 }, region: { x: 67.6, y: 27.62 }, side: 'right' },
    { id: 'jaipur', city: 'Jaipur', country: 'India', lat: 26.91, lon: 75.79, tags: ['Marketing'], world: { x: 68.28, y: 38.47 }, region: { x: 65.16, y: 32.62 }, side: 'left' },
    { id: 'chandigarh', city: 'Chandigarh', country: 'India', lat: 30.73, lon: 76.78, tags: ['Marketing'], world: { x: 68.55, y: 35.7 }, region: { x: 66.86, y: 21.38 }, side: 'left' },
    { id: 'dubai', city: 'Dubai', country: 'UAE', lat: 25.2, lon: 55.27, tags: ['Technology'], world: { x: 62.58, y: 39.71 }, region: { x: 29.78, y: 37.65 }, side: 'right' },
  ] as Location[],
  stats: [
    { value: 2, suffix: '', label: 'Countries' },
    { value: 6, suffix: '', label: 'Cities' },
    { value: 3, suffix: '', label: 'Businesses' },
    { value: 20, suffix: '+', label: 'Years' },
  ],
};

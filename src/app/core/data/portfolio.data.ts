import { Experience, Filter, NavLink, Project, Skill } from '../models/portfolio.models';

// ==========================================================
// SVG thumbnail generator — reliable, no external dependencies
// ==========================================================
function svgThumb(hue1: string, hue2: string, pattern: string): string {
  const patterns: Record<string, string> = {
    lens: `<radialGradient id="g"><stop offset="0%" stop-color="${hue2}" stop-opacity=".9"/><stop offset="60%" stop-color="${hue1}" stop-opacity=".3"/><stop offset="100%" stop-color="#0a0908"/></radialGradient><circle cx="400" cy="300" r="280" fill="url(%23g)"/><circle cx="400" cy="300" r="140" fill="none" stroke="${hue2}" stroke-opacity=".4" stroke-width="1"/><circle cx="400" cy="300" r="220" fill="none" stroke="${hue1}" stroke-opacity=".3" stroke-width="1"/>`,
    grid: `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${hue1}" stop-opacity=".7"/><stop offset="100%" stop-color="${hue2}" stop-opacity=".3"/></linearGradient><rect width="800" height="600" fill="url(%23g)"/><g stroke="%23f5efe6" stroke-opacity=".15"><path d="M0,150 L800,150 M0,300 L800,300 M0,450 L800,450 M200,0 L200,600 M400,0 L400,600 M600,0 L600,600"/></g>`,
    bars: `<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${hue1}"/><stop offset="100%" stop-color="${hue2}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><rect x="100" y="100" width="60" height="400" fill="url(%23g)" opacity=".8"/><rect x="200" y="180" width="60" height="320" fill="url(%23g)" opacity=".6"/><rect x="300" y="80" width="60" height="420" fill="url(%23g)" opacity=".9"/><rect x="400" y="220" width="60" height="280" fill="url(%23g)" opacity=".5"/><rect x="500" y="140" width="60" height="360" fill="url(%23g)" opacity=".7"/><rect x="600" y="260" width="60" height="240" fill="url(%23g)" opacity=".4"/>`,
    wave: `<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${hue1}"/><stop offset="100%" stop-color="${hue2}"/></linearGradient><rect width="800" height="600" fill="%230a0908"/><path d="M0,300 Q200,200 400,300 T800,300" stroke="url(%23g)" stroke-width="3" fill="none" opacity=".8"/><path d="M0,350 Q200,250 400,350 T800,350" stroke="${hue2}" stroke-width="2" fill="none" opacity=".5"/><path d="M0,250 Q200,150 400,250 T800,250" stroke="${hue1}" stroke-width="2" fill="none" opacity=".5"/>`,
    frame: `<rect width="800" height="600" fill="%230a0908"/><rect x="80" y="60" width="640" height="480" fill="none" stroke="${hue1}" stroke-width="2" opacity=".7"/><rect x="120" y="100" width="560" height="400" fill="${hue2}" fill-opacity=".15"/><circle cx="400" cy="300" r="80" fill="${hue1}" fill-opacity=".4"/>`,
    strip: `<rect width="800" height="600" fill="%231a1917"/><g fill="${hue1}" fill-opacity=".6">${[...Array(8)].map((_, i) => `<rect x="${i * 100 + 20}" y="50" width="60" height="30"/><rect x="${i * 100 + 20}" y="520" width="60" height="30"/>`).join('')}</g><rect x="20" y="120" width="760" height="360" fill="${hue2}" fill-opacity=".3"/>`,
    blur: `<radialGradient id="g" cx="30%" cy="40%"><stop offset="0%" stop-color="${hue1}" stop-opacity=".9"/><stop offset="100%" stop-color="%230a0908"/></radialGradient><radialGradient id="g2" cx="70%" cy="70%"><stop offset="0%" stop-color="${hue2}" stop-opacity=".6"/><stop offset="100%" stop-color="%230a0908" stop-opacity="0"/></radialGradient><rect width="800" height="600" fill="url(%23g)"/><rect width="800" height="600" fill="url(%23g2)"/>`,
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">${patterns[pattern] ?? patterns['lens']}</svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
}

// ==========================================================
// Navigation
// ==========================================================
export const NAV_LINKS: readonly NavLink[] = [
  { num: '01', label: 'Skills', href: '#skills' },
  { num: '02', label: 'Experience', href: '#experience' },
  { num: '03', label: 'Work', href: '#work' },
  { num: '04', label: 'Contact', href: '#contact' },
];

// ==========================================================
// Skills
// ==========================================================
export const SKILLS: readonly Skill[] = [
  {
    num: 'C / 01',
    title: 'Cinematography',
    desc: 'Framing the ordinary until it resists being ordinary. Handheld energy or locked-off patience — whichever the story earns.',
    tools: ['Sony FX6', 'RED Komodo', 'Alexa Mini', 'DJI Ronin'],
  },
  {
    num: 'C / 02',
    title: 'Editing',
    desc: 'Finding the cut that breathes. Rhythm before rules, emotion before montage tricks.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Final Cut'],
  },
  {
    num: 'C / 03',
    title: 'VFX & Comp',
    desc: 'Invisible fixes and impossible frames. Keying, rotoscope, motion tracking, clean-plating, beauty work.',
    tools: ['After Effects', 'Nuke', 'Mocha', 'Photoshop'],
  },
  {
    num: 'C / 04',
    title: 'Colour',
    desc: 'Grading is the second script. Look development, LUTs, match-grade across scenes and cameras.',
    tools: ['DaVinci', 'Lumetri', 'Baselight'],
  },
  {
    num: 'C / 05',
    title: 'AI Integrations',
    desc: 'Using generative tools as a brush, not a crutch — extending plates, concepting looks, and accelerating pre-viz.',
    tools: ['Runway', 'Kling', 'Midjourney', 'Sora'],
  },
  {
    num: 'C / 06',
    title: 'Direction',
    desc: 'Translating a brief into a frame. Working with talent, sound, and production design until it all rhymes.',
    tools: ['Storyboarding', 'Shot-listing', 'Pre-viz'],
  },
];

// ==========================================================
// Experience
// ==========================================================
export const EXPERIENCES: readonly Experience[] = [
  {
    year: '2023-24(oct)',
    role: 'Cinematographer / Editor / VFX Artist',
    place: 'EIPI MEDIA',
    placeDetail: 'End-to-end production for digital-first brand experiences.',
    location: 'Mumbai',
    reveal: 'Spearheaded technical production pipelines, bridging the gap between raw cinematography and VFX-heavy final edits for 20+ brands.',
  },
  {
    year: '2024(dec)-2025(july)',
    role: 'Editor and vfx artist',
    place: 'TVA',
    placeDetail: 'Post-production lead for narrative and stylised content.',
    location: 'Mumbai',
    reveal: 'Managed complex multi-camera edits and integrated high-end VFX/compositing to elevate digital and television spots.',
  },
  {
    year: '2025(aug-nov)',
    role: 'Cinematographer and editor',
    place: 'Goldcoast films',
    placeDetail: 'Crafting cinematic visuals and pacing for high-end digital campaigns.',
    location: 'Mumbai / Global',
    reveal: 'Led the visual storytelling on commercial sets and final post-production, ensuring a premium brand aesthetic across all deliverables.',
  },
  {
    year: 'Freelance / Ongoing',
    role: 'Contract Editor',
    place: 'Abstract dxb',
    placeDetail: 'International creative collaborations.',
    location: 'Dubai / Remote',
    reveal: 'Delivering tailored editing solutions for international agencies, focusing on premium lifestyle and brand content with a fast turnaround.',
  },
];

// ==========================================================
// Work / Projects
// ==========================================================
export const PROJECTS: readonly Project[] = [
  // Cinematography (5)
  { title: 'Ocean',          cat: 'cine', brand: 'Virat Kohli × One8', img: svgThumb('%23d4472a', '%23e0a96d', 'lens') },
  { title: 'Tungsten',       cat: 'cine', brand: 'HDFC Bank',          img: svgThumb('%23e0a96d', '%23d4472a', 'frame') },
  { title: 'Monsoon Reel',   cat: 'cine', brand: 'Kotak Mahindra',     img: svgThumb('%23e0a96d', '%238a857c', 'wave') },
  { title: 'Night Shift',    cat: 'cine', brand: 'Tata Motors',        img: svgThumb('%23f5efe6', '%23d4472a', 'strip') },
  { title: 'Saffron',        cat: 'cine', brand: 'Titan',              img: svgThumb('%23e0a96d', '%23d4472a', 'blur') },

  // Editing (5)
  { title: 'Static & Noise', cat: 'edit', brand: 'Livguard',           img: svgThumb('%23d4472a', '%23f5efe6', 'bars') },
  { title: 'Pulse',          cat: 'edit', brand: 'Nykaa',              img: svgThumb('%23d4472a', '%23e0a96d', 'wave') },
  { title: 'Cutaway',        cat: 'edit', brand: 'Marico',             img: svgThumb('%23d4472a', '%23e0a96d', 'bars') },
  { title: 'Crosshatch',     cat: 'edit', brand: 'Dream11',            img: svgThumb('%23e0a96d', '%23f5efe6', 'grid') },
  { title: 'Intermission',   cat: 'edit', brand: 'Myntra',             img: svgThumb('%23d4472a', '%238a857c', 'strip') },

  // VFX (5)
  { title: 'Paper City',     cat: 'vfx',  brand: 'Bajaj Allianz',      img: svgThumb('%23d4472a', '%23e0a96d', 'grid') },
  { title: 'Concrete Light', cat: 'vfx',  brand: 'Godrej',             img: svgThumb('%23e0a96d', '%23d4472a', 'lens') },
  { title: 'Glass House',    cat: 'vfx',  brand: 'Mahindra',           img: svgThumb('%23f5efe6', '%23e0a96d', 'frame') },
  { title: 'Aether',         cat: 'vfx',  brand: 'Royal Enfield',      img: svgThumb('%238a857c', '%23d4472a', 'blur') },
  { title: 'Split Beam',     cat: 'vfx',  brand: 'boAt',               img: svgThumb('%23d4472a', '%23f5efe6', 'wave') },

  // AI Integrations (2)
  { title: 'Afterglow',      cat: 'ai',   brand: 'Raymond',            img: svgThumb('%23e0a96d', '%23d4472a', 'blur') },
  { title: 'Loop the Real',  cat: 'ai',   brand: 'Asian Paints',       img: svgThumb('%23d4472a', '%23f5efe6', 'frame') },
];

export const FILTERS: readonly Filter[] = [
  { value: 'all', label: 'All' },
  { value: 'cine', label: 'Cinematography' },
  { value: 'edit', label: 'Editing' },
  { value: 'vfx', label: 'VFX' },
  { value: 'ai', label: 'AI Integrations' },
];

export const CATEGORY_LABELS: Record<string, string> = {
  cine: 'Cinematography',
  edit: 'Editing',
  vfx: 'VFX',
  ai: 'AI',
};

// ==========================================================
// Brands
// ==========================================================
export const BRANDS: readonly string[] = [
  'HDFC Bank', 'Tata Motors', 'Kotak', 'Livguard', 'Bajaj Allianz', 'Nykaa', 'Raymond',
  'Godrej', 'Marico', 'Titan', 'Asian Paints', 'Ola', 'Swiggy', 'Zomato', 'PhonePe',
  'Dream11', 'Myntra', 'Flipkart', 'Amazon India', 'Britannia', 'Parle', 'Fevicol',
  'Dabur', 'Patanjali', 'Emami', 'ITC', 'Mahindra', 'Bajaj', 'Hero MotoCorp', 'TVS',
  'Royal Enfield', 'Maruti Suzuki', 'Hyundai', 'Toyota Kirloskar', 'OYO', 'MakeMyTrip',
  'BookMyShow', 'Paytm', 'Zerodha', 'Groww', 'Cred', 'PolicyBazaar', 'Dunzo', 'Urban Company',
  'BigBasket', "BYJU'S", 'Unacademy', 'Vedantu', 'upGrad', 'NIIT',
  'JBL India', 'boAt', 'Noise', 'realme', 'Xiaomi', 'OnePlus',
];

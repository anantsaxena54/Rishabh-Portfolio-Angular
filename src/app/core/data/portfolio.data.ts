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
  // Cinematography
  { title: 'Nestasia Kitchen', cat: 'cine', brand: 'Nestasia', img: '/assets/logos/cine/01_nestasia/nestasia-kitchen.jpg', video: '/assets/logos/cine/01_nestasia/NESTASIA X SANYA_SCRIPT 2 (HORIZONTAL)_HR_1.mp4' },
  { title: 'VK Magic Tricks', cat: 'cine', brand: 'Ocean', img: '/assets/logos/cine/02_ocean/virat-magic.jpg', video: '/assets/logos/cine/02_ocean/VK & Rohit_MAGIC TRICKS_11.27.2023.mp4', imgPosition: 'center top' },
  { title: 'Mira Edit', cat: 'cine', brand: 'Orion', img: '/assets/logos/cine/03_orion/orion-mira.jpg', video: '/assets/logos/cine/03_orion/ORION x MIRA EDIT_11.01.2023_40 SEC_HORIZONTAL_HR.mp4' },

  { title: 'Nestasia Room', cat: 'cine', brand: 'Nestasia', img: '/assets/logos/cine/01_nestasia/nestasia-room.jpg', video: '/assets/logos/cine/01_nestasia/NESTASIA X SANYA_SCRIPT 3 (HORIZONTAL)_HR.mp4' },
  { title: 'VK Clone', cat: 'cine', brand: 'Ocean', img: '/assets/logos/cine/02_ocean/virat-clone.jpg', video: '/assets/logos/cine/02_ocean/VK x Clone_30.0_Horizontal.mp4', imgPosition: '80% center' },
  { title: 'Neha x Angad', cat: 'cine', brand: 'Giva', img: '/assets/logos/cine/04_giva/neha-giva.jpg', video: '/assets/logos/cine/04_giva/NEHA X ANGAD_01.15.2024_TRAILER.mp4', imgPosition: '70% center' },

  { title: 'Kapil Sharma', cat: 'cine', brand: 'HDFC Payzapp', img: '/assets/logos/cine/08_hdfc/hdfc-kapil.jpg', video: '/assets/logos/cine/08_hdfc/HDFC-Payzapp-x-Kapil-Sharma---Bill-Payments---11.01.2024_HR.mp4' },
  { title: 'Black Bag', cat: 'cine', brand: 'Zouk', img: '/assets/logos/cine/09_zouk/zouk-black.png', video: '/assets/logos/cine/09_zouk/ZOUK X V5_ BLACK BAG 25.2_HR.mp4' },
  { title: 'KL Purpose', cat: 'cine', brand: 'Hyugalife', img: '/assets/logos/cine/05_hyugalife/hyugalife.jpg', video: '/assets/logos/cine/05_hyugalife/KL x Purpose_11.08.2023.mp4' },

  { title: 'Tiger Shroff', cat: 'cine', brand: 'HDFC Payzapp', img: '/assets/logos/cine/08_hdfc/hdfc-tiger.jpg', video: '/assets/logos/cine/08_hdfc/HDFC Payzapp x Tiger Shroff_12.15.2023.mp4' },
  { title: 'Footwear', cat: 'cine', brand: 'Zouk', img: '/assets/logos/cine/09_zouk/zouk-footwear.jpg', video: '/assets/logos/cine/09_zouk/ZOUK-x-V11_FOOTWEAR-FUNCTIONALITY_24.0_HR.mp4' },
  { title: 'Awez', cat: 'cine', brand: 'Indigo', img: '/assets/logos/cine/06_indigo/indigo-awez.jpg', video: '/assets/logos/cine/06_indigo/INDIGOxAWEZ_2.1.mp4' },

  { title: 'Combine Montage', cat: 'cine', brand: 'Virsa', img: '/assets/logos/cine/07_virsa/virsa-3.jpg', video: '/assets/logos/cine/07_virsa/VIRSA_combine-montage_V1_24.07.2024_HR.mp4' },
  { title: 'Stopmotion', cat: 'cine', brand: 'Zouk', img: '/assets/logos/cine/09_zouk/zouk-stopmotion.png', video: '/assets/logos/cine/09_zouk/Zouk-x-V6_UNISEX-STOPMOTION_24.0_HR.mp4' },

  // Editing
  { title: 'Coffee', cat: 'edit', brand: 'Plum', img: '/assets/logos/edit/01_plum/plum-kalyani.png', video: '/assets/logos/edit/01_plum/Plum coffee_14.04.26.mp4' },
  { title: 'Working Women', cat: 'edit', brand: 'Zouk', img: '/assets/logos/edit/03_zouk/sara-zouk1.jpg', video: '/assets/logos/edit/03_zouk/VIDEO-5-ZOUK-x-WORKING-WOMEN_-07.17.2023.mp4' },
  { title: 'Campus Vedika', cat: 'edit', brand: 'Campus', img: '/assets/logos/edit/09_campus/campus-vedika.jpg', video: '/assets/logos/edit/09_campus/CAMPUS x VEDIKA_12.26.2023_HR.mp4' },

  { title: 'Prateek Liberty', cat: 'edit', brand: 'Liberty', img: '/assets/logos/edit/04_liberty/liberty-prateek.png', video: '/assets/logos/edit/04_liberty/PRATEEK LIBERTY_27.11.25.mp4' },
  { title: 'Timely Reminders', cat: 'edit', brand: 'Mobikwik', img: '/assets/logos/edit/02_mobikwik/manoj-mobikwik.jpg', video: '/assets/logos/edit/02_mobikwik/MB-x-MOBIKWIK-_TIMELY-REMINDERS_09.08.2023_v2.mp4' },
  { title: 'Sara Bags', cat: 'edit', brand: 'Zouk', img: '/assets/logos/edit/03_zouk/zouk-sara.jpg', video: '/assets/logos/edit/03_zouk/VIDEO-14-ZOUK-x-SARA-POSING-WITH-DIFFERENT-BAGS_07.17.2023.mp4', imgPosition: 'center top' },

  { title: 'Campus Vyomesh', cat: 'edit', brand: 'Campus', img: '/assets/logos/edit/09_campus/campus-vyomesh.jpg', video: '/assets/logos/edit/09_campus/vyomesh x campus_01.15.2024_HR.mp4' },
  { title: 'Prateek Snitch', cat: 'edit', brand: 'Snitch', img: '/assets/logos/edit/06_snitch-prateek/snitch-prateek.png', video: '/assets/logos/edit/06_snitch-prateek/PRATEEK X SNITCH_28.1.mp4' },
  { title: 'Scott Siwet', cat: 'edit', brand: 'Scott', img: '/assets/logos/edit/05_scott-siwet/scott-siwet.png', video: '/assets/logos/edit/05_scott-siwet/SCOTT Siwet_02.12.25.mp4' },

  { title: 'Shankara KK', cat: 'edit', brand: 'Shankara', img: '/assets/logos/edit/07_shankara/shankara.jpg', video: '/assets/logos/edit/07_shankara/KK x Shankara_script B_11.16.2023.mp4' },
  { title: 'Luna Beauty', cat: 'edit', brand: 'Luna', img: '/assets/logos/edit/08_luna-beauty/luna-beauty.png', video: '/assets/logos/edit/08_luna-beauty/luna-beauty.mp4' },
  { title: 'Divyenndu', cat: 'edit', brand: 'HK Vitals', img: '/assets/logos/edit/10_hk-vitals/hk-vitals-divyendu.jpg', video: '/assets/logos/edit/10_hk-vitals/HK Vitals x Divyenndu_VERTICAL_23.05.2024.mp4' },

  { title: 'Aishwarya', cat: 'edit', brand: 'Cove & Lane', img: '/assets/logos/edit/11_cove-&-lane/cove-&-lane.png', video: '/assets/logos/edit/11_cove-&-lane/Cove & Lane x Aishwarya_26.0.mp4' },
  { title: 'Aparshakti', cat: 'edit', brand: 'Ludic', img: '/assets/logos/edit/12_ludic/ludic-aparshakti.jpg', video: '/assets/logos/edit/12_ludic/LUDIC x APARSHAKTI_09.02.2024_HR.mp4' },
  { title: 'Maggie', cat: 'edit', brand: 'APD', img: '/assets/logos/edit/13_apd-devang/apd-maggie.png', video: '/assets/logos/edit/13_apd-devang/APD MAGGIE_29.10.25.mp4' },

  // VFX
  { title: 'Giant Fruit', cat: 'vfx', brand: 'Ocean', img: '/assets/logos/vfx/01_ocean/ocean-fruit1.png', video: '/assets/logos/vfx/01_ocean/Virat-X-Giant_fruit.mp4' },
  { title: 'Bread Range', cat: 'vfx', brand: 'Bakers Dozen', img: '/assets/logos/vfx/03_bakers-dozen/bakers-queen.jpg', video: '/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_BREAD-RANGE.mp4', imgPosition: 'center top' },
  { title: 'Realme Riya', cat: 'vfx', brand: 'Realme', img: '/assets/logos/vfx/08_realme/realme-riya.png', video: '/assets/logos/vfx/08_realme/REALME x RIYA.mp4' },

  { title: 'Pantaloons Study', cat: 'vfx', brand: 'Case Study', img: '/assets/logos/vfx/02_case-study/PANTALOONS-casestudy.png', video: '/assets/logos/vfx/02_case-study/Pantaloons casestudy.mp4' },
  { title: 'Flash Gordon', cat: 'vfx', brand: 'Ocean', img: '/assets/logos/vfx/01_ocean/ocean-flash1.png', video: '/assets/logos/vfx/01_ocean/Virat x ED_flash_gordon.mp4', imgPosition: 'center top' },
  { title: 'Cake Range', cat: 'vfx', brand: 'Bakers Dozen', img: '/assets/logos/vfx/03_bakers-dozen/bakers-clone.jpg', video: '/assets/logos/vfx/03_bakers-dozen/BAKERS-DOZEN-x-SOHA_CAKE-RANGE.mp4' },

  { title: 'Realme Varun', cat: 'vfx', brand: 'Realme', img: '/assets/logos/vfx/08_realme/realme-varun.jpg', video: '/assets/logos/vfx/08_realme/REALME x VARUN SHARMA.mp4' },
  { title: 'Styleup AI Study', cat: 'vfx', brand: 'Case Study', img: '/assets/logos/vfx/02_case-study/AI-casestudy-.png', video: '/assets/logos/vfx/02_case-study/Styleup AI Case Study_04.03.25.mp4', imgPosition: 'center top' },
  { title: 'House of Myntra', cat: 'vfx', brand: 'Myntra', img: '/assets/logos/vfx/04_myntra/house-of-myntra.png', video: '/assets/logos/vfx/04_myntra/House of Myntra_1.mp4' },

  { title: 'Neha Dhupia', cat: 'vfx', brand: 'HDFC', img: '/assets/logos/vfx/05_hdfc/hdfc-neha.png', video: '/assets/logos/vfx/05_hdfc/HDFC x Neha Dhupia_11.10.2023.mp4' },
  { title: 'Tamannaah', cat: 'vfx', brand: 'Kamiliant', img: '/assets/logos/vfx/06_kamiliant/kamiliant-tammanah.jpg', video: '/assets/logos/vfx/06_kamiliant/Kamiliant-x-Tamannaah_independence-day_10.1.mp4' },
  { title: 'Ubon Dhruv', cat: 'vfx', brand: 'Ubon', img: '/assets/logos/vfx/07_ubon/ubon-charging.png', video: '/assets/logos/vfx/07_ubon/Ubon-x-Dhruv.mp4' },

  { title: 'Trunativ Peach', cat: 'vfx', brand: 'Trunative', img: '/assets/logos/vfx/09_trunative/trunative-hologram.jpg', video: '/assets/logos/vfx/09_trunative/TRUNATIVxPEACH.mp4', imgPosition: 'center top' },

  // AI Integrations (2)
  { title: 'Afterglow', cat: 'ai', brand: 'Raymond', img: svgThumb('%23e0a96d', '%23d4472a', 'blur') },
  { title: 'Loop the Real', cat: 'ai', brand: 'Asian Paints', img: svgThumb('%23d4472a', '%23f5efe6', 'frame') },
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

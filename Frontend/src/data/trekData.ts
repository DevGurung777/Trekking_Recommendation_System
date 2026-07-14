export type Difficulty = "Easy" | "Moderate" | "Hard" | "Extreme";
export type Season = "Spring" | "Summer" | "Autumn" | "Winter";

export interface Trek {
  id: string;
  name: string;
  location: string;
  country: string;
  altitude: number;
  duration: number;
  difficulty: Difficulty;
  seasons: Season[];
  budget: number;
  heroImage: string;
  thumbnailImage: string;
  summary: string;
  body: string[];
  highlights: string[];
  tags: string[];
}

export const ALL_TREKS: Trek[] = [
  {

    
    id: "everest-base-camp",
    name: "Everest Base Camp",
    location: "Khumbu Region",
    country: "Nepal",
    altitude: 5364,
    duration: 14,
    difficulty: "Hard",
    seasons: ["Spring", "Autumn"],
    budget: 1800,
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop&auto=format",
    summary: "Stand at the foot of the world's highest mountain on a journey through Sherpa culture, yak pastures, and ancient Buddhist monasteries.",
    body: [
      "The Everest Base Camp trek is perhaps the most iconic high-altitude walk on the planet. Beginning at the Tenzing-Hillary Airport in Lukla — one of the world's most dramatic airstrips — the trail climbs steadily through the heart of the Khumbu valley.",
      "The route passes through Namche Bazaar, the gateway town for the Khumbu region, where acclimatisation days offer panoramic views of Ama Dablam, Lhotse, and the upper flanks of Everest itself. Teahouses along the route are remarkably well-equipped, serving dal bhat and imported mountain coffee.",
      "The final approach to Base Camp at 5,364m follows the churning Khumbu Glacier. While summiting Everest requires years of preparation, reaching Base Camp is an achievable goal for well-prepared trekkers. The view of the Khumbu Icefall rising above the tents of expedition teams is an image that stays for life.",
    ],
    highlights: ["Namche Bazaar acclimatisation", "Tengboche Monastery", "Kala Patthar sunrise viewpoint", "Khumbu Glacier walk"],
    tags: ["High Altitude", "Cultural", "Iconic", "Teahouse"],
  },
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit",
    location: "Annapurna Region",
    country: "Nepal",
    altitude: 5416,
    duration: 18,
    difficulty: "Moderate",
    seasons: ["Spring", "Autumn"],
    budget: 1200,
    heroImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=400&fit=crop&auto=format",
    summary: "A complete circumnavigation of the Annapurna massif crossing the Thorong La Pass, one of the world's highest trekking passes at 5,416m.",
    body: [
      "The Annapurna Circuit ranks among the great treks of the world not for a single dramatic endpoint, but for the sheer variety it delivers: subtropical river valleys give way to alpine meadows, then arid Tibetan plateau, all within a single journey.",
      "The crossing of Thorong La Pass at 5,416m is the trek's centrepiece — an early-morning ascent above the snowline, with views across to the Mustang plateau and back to the white pyramid of Thorong Peak. Most trekkers summit around sunrise to beat afternoon winds.",
      "Descending to Muktinath, a sacred Hindu and Buddhist pilgrimage site, feels like entering another country. The wind-sculpted ochre cliffs of the Kali Gandaki gorge — the world's deepest — frame the lower sections of the route.",
    ],
    highlights: ["Thorong La Pass crossing", "Muktinath Temple", "Kali Gandaki Gorge", "Poon Hill sunrise"],
    tags: ["Classic Route", "High Pass", "Cultural", "Scenic"],
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley Trek",
    location: "Langtang Region",
    country: "Nepal",
    altitude: 4984,
    duration: 8,
    difficulty: "Moderate",
    seasons: ["Spring", "Autumn"],
    budget: 700,
    heroImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&auto=format",
    summary: "A compact valley trek north of Kathmandu through dense rhododendron forest to the high-altitude Kyanjin Gompa and its glacial viewpoints.",
    body: [
      "Often called 'the valley of glaciers', the Langtang Valley sits a mere 50km from Kathmandu yet feels utterly remote. The trek begins in the subtropical forests of Syabrubesi and ascends rapidly through birch and rhododendron stands alive with bird life.",
      "The village of Langtang itself was devastated by the 2015 earthquake and has since been substantially rebuilt — visiting directly supports the local Tamang community's recovery. The stone-and-timber teahouses serve excellent yak cheese produced in the valley's own creamery at Kyanjin.",
      "From Kyanjin Gompa, a further half-day ascent reaches Kyanjin Ri at 4,773m, offering a 360-degree panorama of Langtang Lirung (7,227m), Gangchenpo, and the Tibetan plateau beyond.",
    ],
    highlights: ["Kyanjin Gompa monastery", "Kyanjin Ri viewpoint", "Langtang Lirung glacier views", "Tamang cheese factory"],
    tags: ["Short Trek", "Community Tourism", "Wildlife", "Glacier Views"],
  },
  {
    id: "upper-mustang",
    name: "Upper Mustang Trek",
    location: "Mustang District",
    country: "Nepal",
    altitude: 3840,
    duration: 14,
    difficulty: "Moderate",
    seasons: ["Spring", "Summer"],
    budget: 1600,
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format",
    summary: "Trek through the forbidden kingdom of Lo, a high-desert plateau sealed from visitors until 1992, where wind-carved ochre cliffs shelter ancient cave monasteries.",
    body: [
      "Upper Mustang — the former Kingdom of Lo — occupies a rain-shadow plateau north of the Annapurna massif, geographically and culturally closer to Tibet than to the Kathmandu Valley. Access requires a restricted area permit ($500 USD per person), which has kept the landscape and the Loba culture remarkably intact.",
      "The trail enters Mustang through the Kali Gandaki gorge and climbs steadily into a world of wind-sculpted badlands. The ochre cliffs are riddled with ancient cave dwellings and gompa chapels, some dating to the 10th century. Lo Manthang, the walled capital, sits at 3,840m and still feels like a medieval city paused in time.",
      "June and July — monsoon months when most of Nepal is inaccessible — are prime season in Mustang. The high desert walls block the rain, the skies clear in the afternoon, and the trails are blissfully empty. Festival of Tiji in May, marking the victory of good over evil, fills Lo Manthang with monks, masked dancers, and pilgrims.",
    ],
    highlights: ["Lo Manthang walled city", "Chungsi Cave monastery", "Tiji Festival (May)", "Sky caves of Mustang"],
    tags: ["Restricted Area", "Cultural", "High Desert", "Tibetan Heritage"],
  },
  {
    id: "kanchenjunga-base-camp",
    name: "Kanchenjunga Base Camp",
    location: "Taplejung District",
    country: "Nepal",
    altitude: 5143,
    duration: 21,
    difficulty: "Hard",
    seasons: ["Spring", "Autumn"],
    budget: 1400,
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop&auto=format",
    summary: "A remote three-week journey to the base of the world's third-highest peak through pristine rhododendron forests and isolated Limbu and Sherpa villages.",
    body: [
      "Kanchenjunga (8,586m) sits in the far east of Nepal, straddling the Sikkim border, and sees a fraction of the trekkers that flood Everest or Annapurna. The trek to its base camp is among the most rewarding in the Himalaya precisely because of this remoteness — the infrastructure is minimal, the landscapes are wild, and the cultural immersion is genuine.",
      "The approach from Taplejung ascends through some of the finest rhododendron and oak forest in Nepal, blazing red and pink in April. Above the treeline, yak herders occupy high meadows beside glacial lakes. The terrain is demanding — long ridge traverses and multiple high passes — and teahouse infrastructure thins considerably above Ghunsa.",
      "The classic circuit visits both the south base camp (Oktang, 4,730m) and the north base camp (Pangpema, 5,143m), crossing the Sele La Pass between them. The north camp delivers the most dramatic perspective: the entire north face of Kanchenjunga fills the horizon, flanked by Yalung Kang and Kangbachen.",
    ],
    highlights: ["Pangpema north base camp", "Sele La high pass", "Ghunsa village and monastery", "April rhododendron forests"],
    tags: ["Remote", "Restricted Area", "High Altitude", "Wilderness"],
  },
  {
    id: "manaslu-circuit",
    name: "Manaslu Circuit",
    location: "Gorkha District",
    country: "Nepal",
    altitude: 5106,
    duration: 16,
    difficulty: "Hard",
    seasons: ["Spring", "Autumn"],
    budget: 1100,
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format",
    summary: "Circle the world's eighth-highest mountain on a restricted-permit circuit through Gurung and Nubri villages, crossing the wild Larkya La at 5,106m.",
    body: [
      "The Manaslu Circuit has earned a reputation as the Annapurna Circuit of twenty years ago — challenging enough to deter casual visitors, yet with sufficient teahouse infrastructure for self-supported trekkers. Encircling the 8,163m mass of Manaslu takes sixteen days of sustained effort through landscape that shifts from subtropical river canyon to Tibetan plateau.",
      "The Budhi Gandaki river valley forms the first half of the circuit, climbing steadily through terraced farmland and dense forest past Gurung villages. The character changes dramatically above Samagaon, where the air thins and the villages — Nubri Tibetan in culture — cluster around ancient chortens and prayer-flag lines.",
      "The Larkya La (5,106m) is one of the finest trekking passes in Nepal. The crossing begins pre-dawn with a headtorch approach across moraines and frozen streams, reaching the broad col as the first light touches Himlung Himal and Cheo Himal to the north. The descent into the Marsyangdi valley is dramatic.",
    ],
    highlights: ["Larkya La pass crossing", "Birendra Tal glacial lake", "Samagaon Tibetan village", "Manaslu north face views"],
    tags: ["Restricted Area", "High Pass", "Classic Circuit", "Tibetan Culture"],
  },
  {
    id: "dolpo-shey-phoksundo",
    name: "Dolpo & Shey Phoksundo Trek",
    location: "Dolpo District",
    country: "Nepal",
    altitude: 5360,
    duration: 20,
    difficulty: "Extreme",
    seasons: ["Summer"],
    budget: 2800,
    heroImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&h=700&fit=crop&auto=format",
    thumbnailImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=600&h=400&fit=crop&auto=format",
    summary: "Penetrate Nepal's most isolated district to reach the turquoise Shey Phoksundo Lake and the ancient Bon monastery at Shey Gompa — a journey of extraordinary remoteness.",
    body: [
      "Dolpo is the setting of Peter Matthiessen's 'The Snow Leopard' and occupies a special place in Himalayan trekking mythology. The restricted inner Dolpo permit ($500/week) ensures visitor numbers stay in the dozens, not the thousands. The reward is an encounter with a landscape and culture genuinely unmediated by tourism.",
      "Shey Phoksundo Lake — Nepal's deepest lake at 145m — sits at 3,611m and gleams an impossible turquoise-emerald colour, its surface fed by milky glacial streams and framed by red-rock canyon walls. The walk around its perimeter passes a 100m waterfall and several chortens draped in weathered prayer flags.",
      "Inner Dolpo requires either a fully outfitted expedition (camping, cook, porter, guide) or significant logistical planning. The villages of Saldang and Shey cluster around monasteries that predate Buddhism in Nepal — the region is a stronghold of the ancient Bon religion. The crossing of Kang La (5,360m) into inner Dolpo is among the most physically demanding days on any Nepal trek.",
    ],
    highlights: ["Shey Phoksundo Lake", "Shey Gompa Bon monastery", "Kang La (5,360m)", "Crystal Mountain"],
    tags: ["Extreme Remote", "Restricted Area", "Bon Culture", "Camping Trek"],
  },
];

export interface UserTrekHistory {
  id: string;
  trekId: string;
  trekName: string;
  completedDate: string;
  duration: number;
  maxAltitude: number;
  rating: number;
  notes: string;
  photos: string[];
  badges: string[];
}

export const USER_HISTORY: UserTrekHistory[] = [
  {
    id: "hist-1",
    trekId: "langtang-valley",
    trekName: "Langtang Valley Trek",
    completedDate: "2024-10-18",
    duration: 8,
    maxAltitude: 4984,
    rating: 5,
    notes: "Absolutely transformative. The rebuilt village of Langtang and the warmth of the Tamang people made this far more than a walk in the hills.",
    photos: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=300&fit=crop&auto=format",
    ],
    badges: ["High Altitude", "Community Trek", "First 5000m"],
  },
  {
    id: "hist-2",
    trekId: "annapurna-circuit",
    trekName: "Annapurna Circuit",
    completedDate: "2024-04-22",
    duration: 18,
    maxAltitude: 5416,
    rating: 5,
    notes: "Crossing Thorong La at dawn with frozen hands and burning lungs was the hardest and most rewarding hour of my trekking life. The descent to Muktinath felt miraculous.",
    photos: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=300&fit=crop&auto=format",
    ],
    badges: ["Thorong La 5,416m", "Classic Circuit", "High Pass"],
  },
  {
    id: "hist-3",
    trekId: "manaslu-circuit",
    trekName: "Manaslu Circuit",
    completedDate: "2023-10-08",
    duration: 16,
    maxAltitude: 5106,
    rating: 4,
    notes: "Harder than Annapurna, quieter than Everest. Larkya La in early morning light is one of the finest passes in Nepal. The Nubri villages above Samagaon felt genuinely remote.",
    photos: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&auto=format",
    ],
    badges: ["Larkya La 5,106m", "Restricted Permit", "Remote"],
  },
];

export const USER_STATS = {
  totalTreks: 3,
  totalKm: 312,
  maxAltitude: 5416,
  countries: ["Nepal"],
  totalDays: 42,
  favoriteRegion: "Nepal Himalayas",
};

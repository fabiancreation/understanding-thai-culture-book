export type Part = "I" | "II" | "III";

export type Concept = {
  id: string;
  roman: string;
  thai: string;
  translation: string;
  part: Part;
  partTitle: string;
  chapter: string;
  chapterNumber: number;
  tagline: string;
  teaser: string;
  /** Coordinates on a 1000x1000 SVG, plotted on three concentric arcs. */
  x: number;
  y: number;
};

export const parts: Record<Part, { title: string; subtitle: string }> = {
  I: {
    title: "Foundation",
    subtitle: "History, values, and the shape of Thai society.",
  },
  II: {
    title: "How Thailand Works",
    subtitle: "Buddhism, communication, daily rhythms, food, and the unwritten rules.",
  },
  III: {
    title: "Thailand in Motion",
    subtitle: "Tradition and change, the political cycle, connections across distance.",
  },
};

/**
 * Thirteen concepts, placed on three concentric arcs.
 * Inner arc (Part I, foundation): 3 concepts.
 * Middle arc (Part II, operations): 7 concepts.
 * Outer arc (Part III, motion): 3 concepts.
 * Arc centers at (500, 620). Inner r=170, middle r=310, outer r=440.
 */
export const concepts: Concept[] = [
  // Part I, inner arc (foundation)
  {
    id: "kreng-jai",
    roman: "kreng jai",
    thai: "เกรงใจ",
    translation: "consideration for others; reluctance to impose",
    part: "I",
    partTitle: "Foundation",
    chapter: "The Invisible Rules",
    chapterNumber: 2,
    tagline: "The social operating system.",
    teaser:
      "Every Thai employee at that table understood the March deadline was impossible. Several of them knew the specific reasons it would fail. None of them said so. This was not passivity. It was kreng jai.",
    x: 500,
    y: 450,
  },
  {
    id: "face",
    roman: "sia na / raksa na",
    thai: "เสียหน้า / รักษาหน้า",
    translation: "losing face / preserving face",
    part: "I",
    partTitle: "Foundation",
    chapter: "The Invisible Rules",
    chapterNumber: 2,
    tagline: "Mutual protection of social standing.",
    teaser:
      "Face is not individual dignity to be defended. It is a mutual asset maintained by both parties of an interaction. To cause someone to lose face is not rude. It is a structural failure that the system is designed to prevent at almost any cost.",
    x: 352,
    y: 530,
  },
  {
    id: "hierarchy",
    roman: "phi / nong",
    thai: "พี่ / น้อง",
    translation: "elder sibling / younger sibling",
    part: "I",
    partTitle: "Foundation",
    chapter: "The Shape of Society",
    chapterNumber: 3,
    tagline: "The hierarchy that organizes every relationship.",
    teaser:
      "The elder-younger vocabulary extends far beyond family. Every Thai relationship calibrates relative status within the first seconds of contact. The calibration is not optional. Without it, the relationship has no shape.",
    x: 648,
    y: 530,
  },
  // Part II, middle arc (seven concepts)
  {
    id: "tam-bun",
    roman: "tam bun",
    thai: "ทำบุญ",
    translation: "making merit",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Buddhist Frame",
    chapterNumber: 4,
    tagline: "The engine of the Buddhist system.",
    teaser:
      "The woman is not performing charity. She is making merit. The monk, by accepting what is offered, provides the giver with an opportunity to generate spiritual credit that accumulates across lifetimes. Of the two, the monk's gift is the greater one.",
    x: 500,
    y: 310,
  },
  {
    id: "spirit-house",
    roman: "san phra phum",
    thai: "ศาลพระภูมิ",
    translation: "spirit house",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Buddhist Frame",
    chapterNumber: 4,
    tagline: "Animism, beside the office tower.",
    teaser:
      "She lights incense at the spirit house before opening her laptop. The animist-Brahmin-Buddhist structure and the glass tower are separated by four meters. They coexist without irony, without discomfort, and without anyone in the building finding the proximity strange.",
    x: 260,
    y: 410,
  },
  {
    id: "wai",
    roman: "wai",
    thai: "ไหว้",
    translation: "the greeting gesture",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "Talking and Not Talking",
    chapterNumber: 5,
    tagline: "Palms pressed. Status measured in centimeters.",
    teaser:
      "The height of the hands signals relative status: chin level for peers, nose level for elders, forehead for monks and royalty. The wai is not a bow. It is a calibrated instrument for reading and marking every relationship in the room.",
    x: 740,
    y: 410,
  },
  {
    id: "sanuk",
    roman: "sanuk",
    thai: "สนุก",
    translation: "the orientation toward enjoyment in all activities",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Invisible Rules",
    chapterNumber: 2,
    tagline: "Work should be sanuk. So should the meeting.",
    teaser:
      "A life organized entirely around productivity, with no room for enjoyment, is considered a failed life. Sanuk pervades everything, like water in a sponge: not the first thing you notice when you pick it up, but everywhere once you look.",
    x: 190,
    y: 620,
  },
  {
    id: "jai-yen",
    roman: "jai yen",
    thai: "ใจเย็น",
    translation: "cool heart; emotional composure",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Invisible Rules",
    chapterNumber: 2,
    tagline: "Cool heart. Hot heart loses.",
    teaser:
      "A jai yen person is unflappable, slow to anger, composed when others around them are not. A jai rawn (hot heart) person has lost the argument the moment they raised their voice, regardless of what they were right about.",
    x: 810,
    y: 620,
  },
  {
    id: "mai-pen-rai",
    roman: "mai pen rai",
    thai: "ไม่เป็นไร",
    translation: "never mind; it does not matter",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Rhythms of Daily Life",
    chapterNumber: 6,
    tagline: "The release valve.",
    teaser:
      "A waiter brings the wrong dish. Mai pen rai. A pipe bursts during the rainy season and floods the kitchen. Mai pen rai. The phrase produces social warmth in daily life and, applied wrongly, produces toxic silence about problems that demand confrontation.",
    x: 260,
    y: 820,
  },
  {
    id: "thirteen-smiles",
    roman: "yim",
    thai: "ยิ้ม",
    translation: "smile; thirteen documented types",
    part: "II",
    partTitle: "How Thailand Works",
    chapter: "The Invisible Rules",
    chapterNumber: 2,
    tagline: "Thirteen smiles, one label.",
    teaser:
      "The dry smile that acknowledges an unresolvable situation. The disagreement smile that looks like enthusiasm. The smile of endurance that meets devastating news. Holmes and Tangtongtavy catalogued thirteen. Each one is a precise instrument, not a mask.",
    x: 740,
    y: 820,
  },
  // Part III, outer arc (three concepts)
  {
    id: "modernity",
    roman: "song pii, song lok",
    thai: "สองปี สองโลก",
    translation: "two years, two worlds",
    part: "III",
    partTitle: "Thailand in Motion",
    chapter: "Tradition and Change",
    chapterNumber: 9,
    tagline: "The old makes room for the new without vacating.",
    teaser:
      "A rice farmer in Udon Thani checks commodity prices on his phone while sitting in the wooden house his grandparents built. He is not living in two worlds. He is living in one world that contains both things, and he would not think to ask whether they contradict.",
    x: 500,
    y: 180,
  },
  {
    id: "bunkhun",
    roman: "bunkhun",
    thai: "บุญคุณ",
    translation: "gratitude as a lifelong debt",
    part: "III",
    partTitle: "Thailand in Motion",
    chapter: "Connections",
    chapterNumber: 10,
    tagline: "Thai warmth is not Thai friendship.",
    teaser:
      "The foreign woman has not been rejected. She has been placed, with genuine warmth, at the precise distance Thai social architecture assigns to her category: the friendly acquaintance, the welcome outsider, the person warmly included in everything except the inner circle.",
    x: 180,
    y: 390,
  },
  {
    id: "nam-jai",
    roman: "nam jai",
    thai: "น้ำใจ",
    translation: "water of the heart; spontaneous kindness",
    part: "III",
    partTitle: "Thailand in Motion",
    chapter: "Connections",
    chapterNumber: 10,
    tagline: "The impulse to help without being asked.",
    teaser:
      "Nam jai is what happens when a stranger notices you are lost and walks three blocks out of their way to point you in the right direction. It is not duty. It is not hospitality as performance. It is a cultural impulse the culture itself finds worth naming.",
    x: 820,
    y: 390,
  },
];

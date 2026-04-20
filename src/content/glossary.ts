/**
 * GLOSSARY. Every term here traces to a specific line in the manuscript at
 * /Users/fabianarndt/Projekte/Claude/Books/Understanding-Thai-Culture/manuskript/
 *
 * Rule: nothing in this file is invented. Romanizations, Thai scripts, and
 * translations are copied verbatim from the book's first-mention conventions.
 * If a new term appears in the manuscript, add it here with a chapter citation.
 */

export type GlossaryChapter = {
  chapterNumber: number;
  chapterTitle: string;
  blurb: string;
  terms: GlossaryTerm[];
};

export type GlossaryTerm = {
  roman: string;
  thai: string;
  translation: string;
  note?: string;
};

export const glossary: GlossaryChapter[] = [
  {
    chapterNumber: 2,
    chapterTitle: "The Invisible Rules",
    blurb: "The core values that govern Thai behavior without anyone naming them.",
    terms: [
      {
        roman: "kreng jai",
        thai: "เกรงใจ",
        translation: "consideration for others' feelings; reluctance to impose",
        note: "The closest thing Thailand has to a social operating system.",
      },
      {
        roman: "sia na",
        thai: "เสียหน้า",
        translation: "to lose face",
      },
      {
        roman: "raksa na",
        thai: "รักษาหน้า",
        translation: "to preserve face",
      },
      {
        roman: "jai yen",
        thai: "ใจเย็น",
        translation: "cool heart; emotional composure",
      },
      {
        roman: "jai rawn",
        thai: "ใจร้อน",
        translation: "hot heart; public loss of composure",
        note: "The opposite of jai yen, and socially damaging.",
      },
      {
        roman: "sanuk",
        thai: "สนุก",
        translation: "fun; the orientation toward enjoyment in all activities",
      },
      {
        roman: "mai pen rai",
        thai: "ไม่เป็นไร",
        translation: "never mind; it doesn't matter",
        note: "The release valve. Produces social warmth or institutional silence.",
      },
      {
        roman: "bunkhun",
        thai: "บุญคุณ",
        translation: "gratitude debt; the obligation to reciprocate kindness",
      },
      {
        roman: "roo bunkhun",
        thai: "รู้บุญคุณ",
        translation: "to acknowledge the kindness you have received",
      },
      {
        roman: "tob thaen bunkhun",
        thai: "ตอบแทนบุญคุณ",
        translation: "to reciprocate kindness; to repay gratitude",
      },
      {
        roman: "nerkhun",
        thai: "เนรคุณ",
        translation: "ungrateful; a moral failure, not merely a rudeness",
      },
      {
        roman: "nam jai",
        thai: "น้ำใจ",
        translation: "water of the heart; spontaneous generosity",
      },
      {
        roman: "yim haeng",
        thai: "ยิ้มแห้ง",
        translation: "the dry smile, when a situation cannot be fixed",
      },
      {
        roman: "yim thak thaan",
        thai: "ยิ้มทัดทาน",
        translation: "the disagreement smile; the one foreigners read as enthusiasm",
      },
      {
        roman: "yim soo",
        thai: "ยิ้มสู้",
        translation: "the smile of endurance, in the face of devastating news",
      },
      {
        roman: "anicca",
        thai: "อนิจจา",
        translation: "impermanence; the Buddhist teaching that all conditions are temporary",
      },
      {
        roman: "upekkha",
        thai: "อุเบกขา",
        translation: "equanimity; the Buddhist response to impermanence",
      },
    ],
  },
  {
    chapterNumber: 3,
    chapterTitle: "The Shape of Society",
    blurb: "Hierarchy, gender, and the way Thai society organizes itself.",
    terms: [
      {
        roman: "phi",
        thai: "พี่",
        translation: "elder sibling; anyone of higher relative status",
      },
      {
        roman: "nong",
        thai: "น้อง",
        translation: "younger sibling; anyone of lower relative status",
      },
      {
        roman: "kathoey",
        thai: "กะเทย",
        translation:
          "third gender; a term covering transgender women and gender-nonconforming people",
      },
      {
        roman: "ajarn",
        thai: "อาจารย์",
        translation: "teacher; a title of respect carrying bunkhun-system weight",
      },
    ],
  },
  {
    chapterNumber: 4,
    chapterTitle: "The Buddhist Frame",
    blurb: "The Theravada practice, the three-layer syncretism, the daily ritual economy.",
    terms: [
      {
        roman: "tak bat",
        thai: "ตักบาตร",
        translation: "the morning alms round",
      },
      {
        roman: "tam bun",
        thai: "ทำบุญ",
        translation: "to make merit; the engine of the Buddhist system",
      },
      {
        roman: "vinaya",
        thai: "วินัย",
        translation: "the monastic code; 227 precepts governing a monk's life",
      },
      {
        roman: "phra khrueang",
        thai: "พระเครื่อง",
        translation: "sacred equipment; consecrated amulets",
      },
      {
        roman: "san phra phum",
        thai: "ศาลพระภูมิ",
        translation: "spirit house; placed outside buildings to compensate displaced land spirits",
      },
      {
        roman: "wian tian",
        thai: "เวียนเทียน",
        translation: "candlelight circumambulation; a procession circling the main hall three times",
      },
      {
        roman: "makha bucha",
        thai: "มาฆบูชา",
        translation: "Buddhist holy day commemorating 1,250 of the Buddha's first disciples",
      },
      {
        roman: "visakha bucha",
        thai: "วิสาขบูชา",
        translation: "the most sacred day in the Thai Buddhist calendar",
      },
      {
        roman: "nak",
        thai: "นาค",
        translation: "a novice; a candidate preparing for ordination",
      },
      {
        roman: "dip",
        thai: "ดิบ",
        translation: "raw, unripe; a man who has never been ordained",
      },
      {
        roman: "suk",
        thai: "สุก",
        translation: "ripe, cooked; a man who has been ordained",
      },
    ],
  },
  {
    chapterNumber: 5,
    chapterTitle: "Talking and Not Talking",
    blurb: "The tonal language, the politeness particles, the body's hierarchy.",
    terms: [
      {
        roman: "wai",
        thai: "ไหว้",
        translation: "the greeting gesture, palms pressed; height signals relative status",
      },
      {
        roman: "chai",
        thai: "ใช่",
        translation: "yes",
        note: "Looks like agreement. Often means only I heard you.",
      },
      {
        roman: "mai",
        thai: "ไม่",
        translation: "no; not (with a falling tone)",
      },
      {
        roman: "khrap",
        thai: "ครับ",
        translation: "polite particle used by male speakers",
      },
      {
        roman: "kha",
        thai: "ค่ะ",
        translation: "polite particle used by female speakers",
      },
      {
        roman: "na",
        thai: "นะ",
        translation: "softening particle; turns a command into a suggestion",
      },
      {
        roman: "baang thi",
        thai: "บางที",
        translation: "perhaps, maybe; spoken without a date, almost always a refusal",
      },
      {
        roman: "mai roo",
        thai: "ไม่รู้",
        translation: "I don't know; from someone who clearly does, a redirect",
      },
      {
        roman: "laew tae khun",
        thai: "แล้วแต่คุณ",
        translation: "up to you; often discomfort with being asked to decide",
      },
      {
        roman: "khwan",
        thai: "ขวัญ",
        translation: "spiritual essence associated with the head and crown",
      },
      {
        roman: "chue len",
        thai: "ชื่อเล่น",
        translation: "play name; the nickname Thais actually go by in daily life",
      },
      {
        roman: "luang phi",
        thai: "หลวงพี่",
        translation: "venerable elder brother; how monks are addressed",
      },
    ],
  },
  {
    chapterNumber: 7,
    chapterTitle: "The Table",
    blurb: "The communal rice, the central bowl, the hierarchy encoded in the order of plates.",
    terms: [
      {
        roman: "kin khao duay kan",
        thai: "กินข้าวด้วยกัน",
        translation: "to eat rice together; the Thai phrase for a shared meal",
      },
      {
        roman: "chuen",
        thai: "เชิญ",
        translation: "please go ahead; the first invitation to eat",
      },
    ],
  },
  {
    chapterNumber: 8,
    chapterTitle: "The Unwritten Rules",
    blurb: "The behaviors no one announces and everyone absorbs.",
    terms: [
      {
        roman: "rachasap",
        thai: "ราชศัพท์",
        translation: "royal language; a dedicated register for speaking about the royal family",
      },
      {
        roman: "sawoey",
        thai: "เสวย",
        translation: "to eat, royal register; replaces kin when the subject is the king",
      },
      {
        roman: "banthom",
        thai: "บรรทม",
        translation: "to sleep, royal register; replaces non when the subject is the king",
      },
      {
        roman: "sadet",
        thai: "เสด็จ",
        translation: "to proceed, royal register; replaces pai when the subject is the king",
      },
    ],
  },
  {
    chapterNumber: 9,
    chapterTitle: "Tradition and Change",
    blurb: "The spirit house beside the glass tower. The political cycle. The 2020 rupture.",
    terms: [
      {
        roman: "chut thai",
        thai: "ชุดไทย",
        translation: "traditional Thai dress; worn at royal ceremonies and official functions",
      },
      {
        roman: "ratsadon",
        thai: "ราษฎร",
        translation: "the people; the banner of the 2020 to 2021 protest movement",
      },
    ],
  },
  {
    chapterNumber: 10,
    chapterTitle: "Connections",
    blurb: "How Thai relationships are structured and where their ceilings sit.",
    terms: [
      {
        roman: "sin sot",
        thai: "สินสอด",
        translation: "bride price paid by the groom's family to the bride's family at marriage",
      },
    ],
  },
];

export const glossaryStats = {
  terms: glossary.reduce((n, c) => n + c.terms.length, 0),
  chapters: glossary.length,
};

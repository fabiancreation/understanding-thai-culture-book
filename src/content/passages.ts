export type Passage = {
  id: string;
  chapter: string;
  location: string;
  text: string;
  highlight?: string;
};

export const passages: Passage[] = [
  {
    id: "kreng-jai-meeting",
    chapter: "Chapter 2 · The Invisible Rules",
    location: "A Bangkok office tower, early morning",
    text: "Nine people sit around a conference table in a Bangkok office tower. The air conditioning is set too cold, the way it always is. A German project manager has called a meeting to discuss a timeline that is, by any honest measure, impossible. He lays out the problem clearly and asks for input. The room is quiet. He asks again. One senior Thai manager nods. ‘We will try our best.’ Two colleagues murmur agreement. One woman smiles broadly and writes something in her notebook. The German feels the meeting has gone well.",
    highlight:
      "By April, the project has not moved. The meeting worked perfectly for everyone in the room except him.",
  },
  {
    id: "alms-round",
    chapter: "Chapter 4 · The Buddhist Frame",
    location: "Chiang Mai Old City, 5:45 in the morning",
    text: "A line of monks walks south along Ratchadamnoen Road toward Tha Phae Gate. Nine of them, barefoot, saffron-robed, carrying black alms bowls. They walk in single file, eyes down, at a pace that is neither hurried nor slow. They do not speak. On the sidewalk, a woman in her sixties kneels on a woven mat. She rises, takes a handful of sticky rice, and places it directly into the bowl. She does not touch the monk. She does not speak.",
    highlight:
      "The woman is not performing charity. She is making merit. Of the two gifts, the monk's is understood to be the greater one.",
  },
  {
    id: "spirit-house",
    chapter: "Chapter 9 · Tradition and Change",
    location: "Phloenchit, Bangkok, any weekday morning",
    text: "Outside a glass-fronted office tower in Bangkok's Phloenchit district, a woman in her thirties pauses at the spirit house. She is wearing a tailored blouse and a pencil skirt. Her laptop bag hangs from one shoulder. She lights a stick of incense, places it in the small holder beside a garland of jasmine and two bottles of red Fanta, presses her palms together briefly, and turns toward the building's entrance.",
    highlight:
      "The spirit house and the glass tower are separated by about four meters. They coexist without irony, without discomfort, and without anyone in the building finding the proximity strange.",
  },
  {
    id: "the-table",
    chapter: "Chapter 7 · The Table",
    location: "A family dinner, any evening",
    text: "Rice in the center. Four dishes around it: a curry, a stir-fry, a soup, something with vegetables. The plates are communal. Each person has a mound of rice on their own plate and adds to it from the center, a spoonful at a time, moving between dishes the way a reader moves between chapters: sampling, returning, constructing meaning from the accumulation.",
    highlight:
      "The table encodes everything. The eldest is served first. A dish too spicy for a guest is quietly supplemented, and the host does not draw attention to the adjustment, because the adjustment is kreng jai in action.",
  },
  {
    id: "ceiling-of-friendship",
    chapter: "Chapter 10 · Connections",
    location: "A Bangkok apartment, the second year",
    text: "In the second year, something shifts. The abundance continues but a ceiling becomes visible. The lunches with colleagues are warm but never personal. The landlady's fruit arrives without an invitation to sit and eat it together. The cooking class friend responds to messages but does not initiate them.",
    highlight:
      "The foreign woman has not been rejected. She has been placed, with genuine warmth, at the precise distance Thai social architecture assigns to her category.",
  },
];

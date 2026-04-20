export type UnwrittenLaw = {
  number: number;
  title: string;
  thai?: { roman: string; script: string; translation: string };
  body: string;
  chapter: string;
};

/**
 * The ten laws that anchor the "Ten Unwritten Laws of Thailand" lead magnet.
 * Distilled from Chapter 8 of the manuscript, in the book's observational voice.
 * Re-sync this file when the manuscript changes.
 */
export const unwrittenLaws: UnwrittenLaw[] = [
  {
    number: 1,
    title: "The feet are profane. The head is sacred.",
    body:
      "The body operates on a vertical hierarchy. The head is highest, the feet are lowest, and the distance between them is not metaphorical. Feet pointed at a person, an image, or a banknote are not a neutral posture. A foot that rests on a table, or that points at a senior colleague across one, is a statement the owner almost never intends but that is received clearly.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 2,
    title: "Shoes come off before sacred floors.",
    body:
      "Every consecrated building is entered barefoot. The bot, the wihan, the room that holds a Buddha image. The pile of sandals outside the entrance is one of the most universal sights in Thai daily life. The rule applies regardless of whether anyone is watching. A temple attendant will not confront a visitor who forgets. They will gesture toward the pile.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 3,
    title: "Shoulders and knees cover themselves in sacred spaces.",
    body:
      "The rule is about proximity to the sacred, not modesty in general. Wraps and sarongs are available at major temples for visitors who arrive uncovered. Rural temples enforce the same rule more quietly: an attendant gestures toward a folded pile of fabric near the entrance. The message is communicated without words, without embarrassment, and without the visitor necessarily understanding that what just happened was not a suggestion.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 4,
    title: "The wai is returned at the level it was offered, or lower.",
    thai: {
      roman: "wai",
      script: "ไหว้",
      translation: "the greeting gesture, palms pressed",
    },
    body:
      "The height of the hands carries the message. Chin level for peers. Nose level for elders or superiors. Forehead for monks and royalty. The higher-status person in the interaction returns the wai at chest level or with a nod. Returning a wai higher than the one you received is not politer. It is a small miscalibration that marks the returner as unpracticed.",
    chapter: "Communication · Ch 5",
  },
  {
    number: 5,
    title: "Objects are handed over with two hands, or with the right hand supported by the left.",
    body:
      "A 7-Eleven cashier returning change with both hands is not performing. She is following a behavioral pattern absorbed so deeply that it operates without instruction. Handing an object with the left hand alone, or tossing it, registers as dismissive. The protocol applies most strongly when the recipient is older or higher in status, but some version of it is observed in most interactions.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 6,
    title: "Women do not touch monks. Objects pass through a receiving cloth.",
    body:
      "The rule is not about impurity. It is about the monk maintaining the boundaries of his role. On public transport, a Thai woman seated near a monk will shift toward the window, angle her body, tuck her feet toward the aisle. The courtesy is mutual, invisible, and continuous. A woman who accidentally brushes against a monk has not committed an offense. The monk has failed to maintain his distance.",
    chapter: "The Buddhist Frame · Ch 4",
  },
  {
    number: 7,
    title: "Pass in front of a seated person with a dip.",
    body:
      "A slight lowering of the head and shoulders, one hand extended forward, the other near the hip. The dip is a fraction of a second, but its absence is felt. The person walking upright past a seated elder without the dip reads as foreign or poorly raised. It is almost never mentioned in travel guides because it is difficult to describe and easy to miss. Once you notice it, you see it everywhere.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 8,
    title: "Stand for the anthem. Stand for the cinema.",
    body:
      "The national anthem plays at 8 and 18, and the platform at a BTS station full of commuters, mid-stride and mid-conversation, comes to a stop. A separate royal anthem plays before every film screening in Thai cinemas. The entire audience stands. Compliance is social, not enforced. A foreigner who keeps walking during the anthem will not be arrested. They will be noticed.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 9,
    title: "Banknotes are not stepped on. Ever.",
    body:
      "Every denomination carries the king's portrait. Stepping on a banknote, even to stop it from blowing away in the wind, combines two violations: disrespecting the monarchy and directing the lowest part of the body toward the highest figure in the nation. A Thai person who drops a banknote will bend to pick it up. They will not put a foot on it. Ever. Under any circumstances.",
    chapter: "The Unwritten Rules · Ch 8",
  },
  {
    number: 10,
    title: "An indirect answer is a real answer. Translate it before you override it.",
    thai: {
      roman: "kreng jai",
      script: "เกรงใจ",
      translation: "consideration for others; reluctance to impose",
    },
    body:
      "‘We will try our best’ is a polite no. ‘Let me think about it’ is a polite refusal. ‘It may take some time’ is a prediction of failure wrapped in the language of effort. These phrases are not vague because the speaker is uncertain. They are vague because precision would require someone to lose face. Read the answer you were given. Do not push for the answer you wanted.",
    chapter: "The Invisible Rules · Ch 2",
  },
];

export const unwrittenLawsMeta = {
  title: "The Ten Unwritten Laws of Thailand",
  subtitle:
    "A standalone guide to the behaviors that decide whether a relationship in Thailand deepens or quietly stalls.",
  intro:
    "Thailand has no list of rules. It has a system of behaviors that everyone absorbs from childhood and almost no one writes down. These ten are the ones most consistently missed by visitors and new residents, most consistently felt by the Thai people around them, and most consistently fixable with a few days of paying attention.",
  outro:
    "These ten are a starting point. The book continues for eleven chapters into the logic underneath: why the rules exist, what they protect, where their shadow sides fall, and how the system holds together across a meeting room, a dinner table, a temple, and a family.",
};

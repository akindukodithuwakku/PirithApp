export interface JatakaData {
  key: string;
  title: string;
  subtext: string;
  pdfUrl: string;
  icon: string;
  category: "moral" | "wisdom" | "compassion" | "generosity" | "patience";
  source: string;
  description?: string;
}

// Jataka data with PDF URLs from Dahamyathra
export const JATAKA_DATA: Record<string, JatakaData> = {
  jataka1_48: {
    key: "jataka1_48",
    title: "ජාතක කථා 1 - 48",
    subtext: "Pansiya Panas Jathakaya - Part 1",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "wisdom",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "First collection of Jataka stories (1-48) from the Pansiya Panas Jathakaya",
  },
  jataka49_96: {
    key: "jataka49_96",
    title: "ජාතක කථා 49 - 96",
    subtext: "Pansiya Panas Jathakaya - Part 2",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "moral",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Second collection of Jataka stories (49-96) from the Pansiya Panas Jathakaya",
  },
  jataka97_144: {
    key: "jataka97_144",
    title: "ජාතක කථා 97 - 144",
    subtext: "Pansiya Panas Jathakaya - Part 3",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "compassion",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Third collection of Jataka stories (97-144) from the Pansiya Panas Jathakaya",
  },
  jataka145_192: {
    key: "jataka145_192",
    title: "ජාතක කථා 145 - 192",
    subtext: "Pansiya Panas Jathakaya - Part 4",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "generosity",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Fourth collection of Jataka stories (145-192) from the Pansiya Panas Jathakaya",
  },
  jataka193_240: {
    key: "jataka193_240",
    title: "ජාතක කථා 193 - 240",
    subtext: "Pansiya Panas Jathakaya - Part 5",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "patience",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Fifth collection of Jataka stories (193-240) from the Pansiya Panas Jathakaya",
  },
  jataka241_288: {
    key: "jataka241_288",
    title: "ජාතක කථා 241 - 288",
    subtext: "Pansiya Panas Jathakaya - Part 6",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "wisdom",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Sixth collection of Jataka stories (241-288) from the Pansiya Panas Jathakaya",
  },
  jataka289_336: {
    key: "jataka289_336",
    title: "ජාතක කථා 289 - 336",
    subtext: "Pansiya Panas Jathakaya - Part 7",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "moral",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Seventh collection of Jataka stories (289-336) from the Pansiya Panas Jathakaya",
  },
  jataka337_384: {
    key: "jataka337_384",
    title: "ජාතක කථා 337 - 384",
    subtext: "Pansiya Panas Jathakaya - Part 8",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "compassion",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Eighth collection of Jataka stories (337-384) from the Pansiya Panas Jathakaya",
  },
  jataka385_432: {
    key: "jataka385_432",
    title: "ජාතක කථා 385 - 432",
    subtext: "Pansiya Panas Jathakaya - Part 9",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "generosity",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Ninth collection of Jataka stories (385-432) from the Pansiya Panas Jathakaya",
  },
  jataka433_480: {
    key: "jataka433_480",
    title: "ජාතක කථා 433 - 480",
    subtext: "Pansiya Panas Jathakaya - Part 10",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "patience",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Tenth collection of Jataka stories (433-480) from the Pansiya Panas Jathakaya",
  },
  jataka481_521: {
    key: "jataka481_521",
    title: "ජාතක කථා 481 - 521",
    subtext: "Pansiya Panas Jathakaya - Part 11",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "wisdom",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Eleventh collection of Jataka stories (481-521) from the Pansiya Panas Jathakaya",
  },
  jataka523_550: {
    key: "jataka523_550",
    title: "ජාතක කථා 523 - 550",
    subtext: "Pansiya Panas Jathakaya - Part 12",
    pdfUrl: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    icon: "📖",
    category: "moral",
    source: "https://dahamyathra.info/pansiya-panas-jathakaya/",
    description:
      "Final collection of Jataka stories (523-550) from the Pansiya Panas Jathakaya",
  },
};

export const getJatakaByCategory = (category: JatakaData["category"]) => {
  return Object.values(JATAKA_DATA).filter(
    (jataka) => jataka.category === category
  );
};

export const getJatakaByKey = (key: string) => {
  return JATAKA_DATA[key];
};

export const getAllJataka = () => {
  return Object.values(JATAKA_DATA);
};

export const getJatakaCategories = () => {
  return ["moral", "wisdom", "compassion", "generosity", "patience"];
};

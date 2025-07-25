// Import Pali Piritha files
import Angulimala_Piritha_Pali from "../screens/pirith/pali/Angulimala_Piritha_Pali";
import Budhu_Guna_Piritha_Pali from "../screens/pirith/pali/Budhu_Guna_Piritha_Pali";
import Chanda_Piritha_Pali from "../screens/pirith/pali/Chanda_Piritha_Pali";
import Dajagga_Piritha_Pali from "../screens/pirith/pali/Dajagga_Piritha_Pali";
import Jaya_Piritha_Pali from "../screens/pirith/pali/Jaya_Piritha_Pali";
import Kanda_Piritha_Pali from "../screens/pirith/pali/Kanda_Piritha_Pali";
import Maha_Kassapa_Thero_Bojjanga_Piritha_Pali from "../screens/pirith/pali/Maha_Kassapa_Thero_Bojjanga_Piritha_Pali";
import Mora_Piritha_Pali from "../screens/pirith/pali/Mora_Piritha_Pali";
import Suriya_Piritha_Pali from "../screens/pirith/pali/Suriya_Piritha_Pali";

// Import Sinhala Piritha files
import Angulimala_Piritha_Sinhala from "../screens/pirith/sinhala/Angulimala_Piritha_Sinhala";
import Budhu_Guna_Piritha_Sinhala from "../screens/pirith/sinhala/Budhu_Guna_Piritha_Sinhala";
import Chanda_Piritha_Sinhala from "../screens/pirith/sinhala/Chanda_Piritha_Sinhala";
import Dajagga_Piritha_Sinhala from "../screens/pirith/sinhala/Dajagga_Piritha_Sinhala";
import Jaya_Piritha_Sinhala from "../screens/pirith/sinhala/Jaya_Piritha_Sinhala";
import Kanda_Piritha_Sinhala from "../screens/pirith/sinhala/Kanda_Piritha_Sinhala";
import Maha_Kassapa_Thero_Bojjanga_Piritha_Sinhala from "../screens/pirith/sinhala/Maha_Kassapa_Thero_Bojjanga_Piritha_Sinhala";
import Mora_Piritha_Sinhala from "../screens/pirith/sinhala/Mora_Piritha_Sinhala";
import Suriya_Piritha_Sinhala from "../screens/pirith/sinhala/Suriya_Piritha_Sinhala";

export interface PirithData {
  key: string;
  title: string;
  subtext: string;
  pali: string;
  sinhala: string;
  icon: string;
  benefits?: string;
  category: "protection" | "blessing" | "healing" | "general";
}

export const PIRITH_DATA: Record<string, PirithData> = {
  jaya: {
    key: "jaya",
    title: "ජය පිරිත",
    subtext: "ජය ගැනීම සහ ආරක්ෂාව",
    pali: Jaya_Piritha_Pali,
    sinhala: Jaya_Piritha_Sinhala,
    icon: "🙏",
    benefits: "ජයග්‍රහණය, සතුරන්ගෙන් ආරක්ෂාව",
    category: "protection",
  },

  angulimala: {
    key: "angulimala",
    title: "අංගුලිමාල පිරිත",
    subtext: "ගර්භණී කාන්තාවන්ට ආරක්ෂාව",
    pali: Angulimala_Piritha_Pali,
    sinhala: Angulimala_Piritha_Sinhala,
    icon: "🤱",
    benefits: "ගර්භණී අවධියේ ආරක්ෂාව, සුරක්ෂිත දරු උපත",
    category: "protection",
  },

  budhu_guna: {
    key: "budhu_guna",
    title: "බුදු ගුණ පිරිත",
    subtext: "බුදුන්ගේ ගුණ කීර්තනය",
    pali: Budhu_Guna_Piritha_Pali,
    sinhala: Budhu_Guna_Piritha_Sinhala,
    icon: "🙇‍♂️",
    benefits: "මානසික සාමය, ධර්ම චින්තනය",
    category: "blessing",
  },

  chanda: {
    key: "chanda",
    title: "චන්ද පිරිත",
    subtext: "ගිනි බලයෙන් ආරක්ෂාව",
    pali: Chanda_Piritha_Pali,
    sinhala: Chanda_Piritha_Sinhala,
    icon: "🔥",
    benefits: "ගිනි අනතුරෙන් ආරක්ෂාව",
    category: "protection",
  },

  dajagga: {
    key: "dajagga",
    title: "දජග්ග පිරිත",
    subtext: "සර්ප දෂ්ටයෙන් ආරක්ෂාව",
    pali: Dajagga_Piritha_Pali,
    sinhala: Dajagga_Piritha_Sinhala,
    icon: "🐍",
    benefits: "සර්ප දෂ්ටයෙන් සහ විෂයෙන් ආරක්ෂාව",
    category: "healing",
  },

  kanda: {
    key: "kanda",
    title: "කන්ද පිරිත",
    subtext: "සියලු භයෙන් ආරක්ෂාව",
    pali: Kanda_Piritha_Pali,
    sinhala: Kanda_Piritha_Sinhala,
    icon: "⛰️",
    benefits: "සියලු භයෙන් සහ විපතෙන් ආරක්ෂාව",
    category: "protection",
  },

  maha_kassapa_bojjanga: {
    key: "maha_kassapa_bojjanga",
    title: "මහා කස්සප ථේර බෝජ්ජංග පිරිත",
    subtext: "රෝගාබාධ නැසීම",
    pali: Maha_Kassapa_Thero_Bojjanga_Piritha_Pali,
    sinhala: Maha_Kassapa_Thero_Bojjanga_Piritha_Sinhala,
    icon: "⚕️",
    benefits: "රෝගාබාධ සුව කිරීම, ශරීරික සුවය",
    category: "healing",
  },

  mora: {
    key: "mora",
    title: "මෝර පිරිත",
    subtext: "මායා කර්මයෙන් ආරක්ෂාව",
    pali: Mora_Piritha_Pali,
    sinhala: Mora_Piritha_Sinhala,
    icon: "🦚",
    benefits: "මායා කර්ම, මන්තර ගාතාවලින් ආරක්ෂාව",
    category: "protection",
  },

  suriya: {
    key: "suriya",
    title: "සූරිය පිරිත",
    subtext: "අඳුරෙන් ආරක්ෂාව",
    pali: Suriya_Piritha_Pali,
    sinhala: Suriya_Piritha_Sinhala,
    icon: "☀️",
    benefits: "අඳුරේ භීතිකාවෙන් ආරක්ෂාව, ආලෝකය",
    category: "protection",
  },
};

// Helper functions
export const getPirithByCategory = (category: PirithData["category"]) => {
  return Object.values(PIRITH_DATA).filter(
    (pirith) => pirith.category === category
  );
};

export const getPirithByKey = (key: string) => {
  return PIRITH_DATA[key];
};

export const getAllPirith = () => {
  return Object.values(PIRITH_DATA);
};

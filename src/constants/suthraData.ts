import RathanaPali from "../screens/suuthra/thunSuthra/RathanaPali";
import RathanaSinhala from "../screens/suuthra/thunSuthra/RathanaSinhala";
import MangalaPali from "../screens/suuthra/thunSuthra/MangalaPali";
import MangalaSinhala from "../screens/suuthra/thunSuthra/MangalaSinhala";
import KaraniyaPali from "../screens/suuthra/thunSuthra/KaraniyaPali";
import KaraniyaSinhala from "../screens/suuthra/thunSuthra/KaraniyaSinhala";
import ParabawaPali from "../screens/suuthra/pali/ParabawaPali";
import ParabawaSinhala from "../screens/suuthra/sinhala/ParabawaSinhala";
import WasalaPali from "../screens/suuthra/pali/WasalaPali";
import WasalaSinhala from "../screens/suuthra/sinhala/WasalaSinhala";
import RathnamaliPali from "../screens/suuthra/pali/RathnamaliPali";
import RathnamaliSinhala from "../screens/suuthra/sinhala/RathnamaliSinhala";
import GirimanandaPali from "../screens/suuthra/pali/GirimanandaPali";
import GirimanandaSinhala from "../screens/suuthra/sinhala/GirimanandSinhala";  
import ChakkawaththiPali from "../screens/suuthra/pali/ChakkawaththiPali";
import ChakkawaththiSinhala from "../screens/suuthra/sinhala/ChakkawaththiSinhala";

export interface SuthraData {
  key: string;
  title: string;
  subtext: string;
  pali: string;
  sinhala: string;
  icon: string;
}

export const SUTHRA_DATA: Record<string, SuthraData> = {
  rathana: {
    key: "rathana",
    title: "රතන සූත්‍රය",
    subtext: "තුන් බිය දුරු කරගැනීම",
    pali: RathanaPali,
    sinhala: RathanaSinhala,
    icon: "📜",
  },

  mangala: {
    key: "mangala",
    title: "මහා මංගල සූත්‍රය",
    subtext: "මංගල කරුණු",
    pali: MangalaPali,
    sinhala: MangalaSinhala,
    icon: "📜",
  },

  karaniya: {
    key: "karaniya",
    title: "කරණියමෙත්ත  සූත්‍රය",
    subtext: "කරණිය කරුණු",
    pali: KaraniyaPali,
    sinhala: KaraniyaSinhala,
    icon: "📜",
  },

  parabawa: {
    key: "parabawa",
    title: "පරාබව සූත්‍රය",
    subtext: "පිරිහීමේ කරුණු",
    pali: ParabawaPali,
    sinhala: ParabawaSinhala,
    icon: "📜",
  },

  wasala: {
    key: "wasala",
    title: "වසල සූත්‍රය",
    subtext: "වසල කරුණු",
    pali: WasalaPali,
    sinhala: WasalaSinhala,
    icon: "📜",
    },

  rathnamali: {
    key: "rathnamali",
    title: "රත්නමාලි සූත්‍රය",
    subtext: "රත්නමාලි කරුණු",
    pali: RathnamaliPali,
    sinhala: RathnamaliSinhala,
    icon: "📜",
  },

  girimananda: {
    key: "girimananda",
    title: "ගිරිමාන්න සූත්‍රය",
    subtext: "ගිරිමාන්න කරුණු",
    pali: GirimanandaPali,
    sinhala: GirimanandaSinhala,
    icon: "📜",
  },

  chakkawaththi: {

    key: "chakkawaththi",
    title: "චක්කවත්ති සූත්‍රය",
    subtext: "චක්කවත්ති කරුණු",
    pali: ChakkawaththiPali,
    sinhala: ChakkawaththiSinhala,
    icon: "📜",
  },

  // Add more suthras here
};

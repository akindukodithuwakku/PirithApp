import BuddhaAndBodhi from "../screens/bodhiPooja/sinhala/Buddha&Bodhi";
import BuddhaAndBodhiPali from "../screens/bodhiPooja/pali/Buddha&BodhiPali";

export interface BodhiPoojaData {
  key: string;
  title: string;
  subtext: string;
  pali: string;
  sinhala?: string;
  icon: string;
  category: "protection" | "blessing" | "healing" | "general";
}

export const BODHI_POOJA_DATA: Record<string, BodhiPoojaData> = {
  buddhaAndBodhiPali: {
    key: "buddhaAndBodhiPali",
    title: "බුද්ධ වන්දනාව හා බෝධි වන්දනාව",
    subtext: "පාලි භාෂාවෙන් පමණි",
    pali: BuddhaAndBodhiPali,
    icon: "🙏",
    category: "protection",
  },
  buddhaAndBodhiSinhala: {
    key: "buddhaAndBodhiSinhala",
    title: "බුද්ධ වන්දනාව හා බෝධි වන්දනාව",
    subtext: "සිංහල අරුත් පමණි",
    pali: "", // Empty for Sinhala screen
    sinhala: BuddhaAndBodhi,
    icon: "🙏",
    category: "protection",
  },
};

export const getBodhiPoojaByCategory = (
  category: BodhiPoojaData["category"]
) => {
  return Object.values(BODHI_POOJA_DATA).filter(
    (bodhiPooja) => bodhiPooja.category === category
  );
};

export const getBodhiPoojaByKey = (key: string) => {
  return BODHI_POOJA_DATA[key];
};

export const getAllBodhiPooja = () => {
  return Object.values(BODHI_POOJA_DATA);
};

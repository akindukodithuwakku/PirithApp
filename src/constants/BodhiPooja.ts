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
    title: "බෝධි පූජාව පාලියෙන්",
    subtext: "බුද්ධ හා බෝධි පූජාව",
    pali: BuddhaAndBodhiPali,
    icon: "🙏",
    category: "protection",
  },
  buddhaAndBodhiSinhala: {
    key: "buddhaAndBodhiSinhala",
    title: "බෝධි පූජාව සිංහලෙන්",
    subtext: "බුද්ධ හා බෝධි පූජාව",
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

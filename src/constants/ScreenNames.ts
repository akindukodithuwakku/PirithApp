export const ScreenNames = {
  DASHBOARD: "Dashboard",
  SUTHRA: "Suthra",
  PIRITH: "Pirith",
  BODHI_POOJA: "BodhiPooja",
  JATHAKA_KATHA: "JathakaKatha",
  REFERENCE: "Reference",
} as const;

export type ScreenNameType = (typeof ScreenNames)[keyof typeof ScreenNames];

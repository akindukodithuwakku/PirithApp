export const ScreenNames = {
  DASHBOARD: "Dashboard",
  SUTHRA: "Suthra",
  SUTHRA_DETAIL: "SuthraDetail",
  PIRITH: "Pirith",
  PIRITH_DETAIL: "PirithDetail",
  BODHI_POOJA: "BodhiPooja",
  JATHAKA_KATHA: "JathakaKatha",
  REFERENCE: "Reference",
} as const;

export type ScreenNameType = (typeof ScreenNames)[keyof typeof ScreenNames];

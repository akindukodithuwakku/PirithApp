export const ScreenNames = {
  DASHBOARD: "Dashboard",
  SUTHRA: "Suthra",
  SUTHRA_DETAIL: "SuthraDetail",
  PIRITH: "Pirith",
  PIRITH_DETAIL: "PirithDetail",
  BODHI_POOJA: "BodhiPooja",
  BODHI_POOJA_DETAIL: "BodhiPoojaDetail",
  JATHAKA_KATHA: "JathakaKatha",
  JATHAKA_DETAIL: "JathakaDetail",
  REFERENCE: "Reference",
} as const;

export type ScreenNameType = (typeof ScreenNames)[keyof typeof ScreenNames];

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ScreenNames } from "../constants/ScreenNames";
import { SuthraData } from "../constants/suthraData";
import { PirithData } from "../constants/pirithData";
import { BodhiPoojaData } from "../constants/BodhiPooja";
import { JatakaData } from "../constants/jatakaData";

export type RootStackParamList = {
  [ScreenNames.DASHBOARD]: undefined;
  [ScreenNames.SUTHRA]: undefined;
  [ScreenNames.PIRITH]: undefined;
  [ScreenNames.BODHI_POOJA]: undefined;
  [ScreenNames.JATHAKA_KATHA]: undefined;
  [ScreenNames.REFERENCE]: undefined;
  [ScreenNames.SUTHRA_DETAIL]: { suthra: SuthraData };
  [ScreenNames.PIRITH_DETAIL]: { pirith: PirithData };
  [ScreenNames.BODHI_POOJA_DETAIL]: { bodhiPooja: BodhiPoojaData };
  [ScreenNames.JATHAKA_DETAIL]: { jataka: JatakaData };
};

export type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof ScreenNames.DASHBOARD
>;

export type DashboardScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof ScreenNames.DASHBOARD
>;

export interface NavigationProps {
  navigation: DashboardScreenNavigationProp;
  route: DashboardScreenRouteProp;
}

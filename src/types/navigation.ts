import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ScreenNames } from "../constants/ScreenNames";
import { SuthraData } from "../constants/suthraData";
import { PirithData } from "../constants/pirithData";

export type RootStackParamList = {
  [ScreenNames.DASHBOARD]: undefined;
  [ScreenNames.SUTHRA]: undefined;
  [ScreenNames.PIRITH]: undefined;
  [ScreenNames.BODHI_POOJA]: undefined;
  [ScreenNames.JATHAKA_KATHA]: undefined;
  [ScreenNames.REFERENCE]: undefined;
  [ScreenNames.SUTHRA_DETAIL]: { suthra: SuthraData };
  [ScreenNames.PIRITH_DETAIL]: { pirith: PirithData };
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

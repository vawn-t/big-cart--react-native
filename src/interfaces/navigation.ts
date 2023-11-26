import { ScreenNames, TabNames } from '@constants/index';

type RootStackParamList = {
  [ScreenNames.OnboardingStack]: undefined;
  [ScreenNames.FirstTimeLogin]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.SignUp]: undefined;
  [ScreenNames.HomeStack]: undefined;
  [ScreenNames.ProductDetail]: { id: number };
  [ScreenNames.NotFound]: undefined;
  [ScreenNames.Cart]: undefined;
  [ScreenNames.search]: undefined;
  [ScreenNames.ForgotPassword]: undefined;
  [ScreenNames.VerifyNumber]: undefined;
};

type OnboardingStackParamList = {
  [ScreenNames.Onboarding]: undefined;
  [ScreenNames.FirstTimeLogin]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.SignUp]: undefined;
};

type TabParamList = {
  [TabNames.Home]: undefined;
  [TabNames.Personal]: undefined;
  [TabNames.Favorite]: undefined;
  [TabNames.Cart]: undefined;
};

export type { RootStackParamList, OnboardingStackParamList, TabParamList };

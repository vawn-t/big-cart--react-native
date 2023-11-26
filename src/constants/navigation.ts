import { CartIcon, HeartIcon, HomeIcon, PersonalIcon } from '@components/Icon';

enum ScreenNames {
  FirstTimeLogin = 'firstTimeLogin',
  HomeStack = 'home-stack',
  Login = 'login',
  NotFound = 'notFound',
  Onboarding = 'onboarding',
  OnboardingStack = 'onboarding-stack',
  Splash = 'splash',
  search = 'search',
  SignUp = 'signup',
  ProductDetail = 'productDetail',
  ForgotPassword = 'forgotPassword',
  VerifyNumber = 'verifyNumber',
  Cart = 'cart',
}

enum TabNames {
  Home = 'home',
  Favorite = 'favorite',
  Personal = 'personal',
  Cart = 'cart',
}

const TABS = [
  {
    name: 'home',
    Icon: HomeIcon,
    route: TabNames.Home,
  },
  {
    name: 'personal',
    Icon: PersonalIcon,
    route: TabNames.Personal,
  },
  {
    name: 'favorite',
    Icon: HeartIcon,
    route: TabNames.Favorite,
  },
  {
    name: 'cart',
    Icon: CartIcon,
    route: TabNames.Cart,
  },
];

export { ScreenNames, TabNames, TABS };

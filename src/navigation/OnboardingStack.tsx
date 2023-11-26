import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { OnboardingStackParamList } from '@interfaces/index';

// Screens
import { FirstTimeLogin, Login, Onboarding, SignUp } from '@screens/index';

// Constants
import { ScreenNames } from '@constants/index';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={ScreenNames.Onboarding}
  >
    <Stack.Screen name={ScreenNames.Onboarding} component={Onboarding} />
    <Stack.Screen
      name={ScreenNames.FirstTimeLogin}
      component={FirstTimeLogin}
    />
    <Stack.Screen name={ScreenNames.Login} component={Login} />
    <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
  </Stack.Navigator>
);

export default OnboardingStack;

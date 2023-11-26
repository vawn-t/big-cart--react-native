import { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useStore from '@stores/useStore';
import { RootSiblingParent } from 'react-native-root-siblings';

import { StackNavigation } from '@navigation/index';
import { GlobalLoader } from '@components/index';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  const isLoading = useStore.use.isLoading();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <NavigationContainer>
            <StatusBar />
            <StackNavigation />
            {isLoading && <GlobalLoader />}
          </NavigationContainer>
        </SafeAreaProvider>
      </RootSiblingParent>
    </QueryClientProvider>
  );
};

let AppEntryPoint = App;

if (Constants?.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;

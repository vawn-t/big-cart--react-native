import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Decorator from './decorator';

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const StoryBookStack = createNativeStackNavigator();

export const decorators = [
	(Story) => (
		<Decorator>
			<NavigationContainer independent>
				<StoryBookStack.Navigator screenOptions={{ headerShown: false }}>
					<StoryBookStack.Screen name="Stories">{Story}</StoryBookStack.Screen>
				</StoryBookStack.Navigator>
			</NavigationContainer>
		</Decorator>
	),
];

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SCREEN_NAME} from 'app/constants/ScreenName';
import StoryDetail from 'app/screens/StoryDetail';
import {RootStackParamList} from 'app/types/RootStackParamList';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        //@ts-ignore
        // header: NavigationHeaderContainer,
      }}>
      <Stack.Screen
        name={SCREEN_NAME.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.STORY_DETAIL}
        component={StoryDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Navigator;

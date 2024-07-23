import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BestStory from '../screens/BestStory';
import NewStory from '../screens/NewStory';
import TopStory from '../screens/TopStory';
import {Colors} from 'app/assets';
import {Image, StyleSheet} from 'react-native';
import ImageUtil from 'app/utils/ImageUtil';
import color from 'app/assets/styles/color';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: color.white},
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarInactiveTintColor: '#394867',
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Best"
        component={BestStory}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_best',
            tabBarLabel: 'Best',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_best} />
              ) : (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_best_inactive} />
              ),
          };
        }}
      />
      <Tab.Screen
        name="New"
        component={NewStory}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_new',
            tabBarLabel: 'New',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_new} />
              ) : (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_new_inactive} />
              ),
          };
        }}
      />
      <Tab.Screen
        name="Top"
        component={TopStory}
        options={({route}) => {
          return {
            tabBarTestID: 'tab_top',
            tabBarLabel: 'Top',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_top} />
              ) : (
                <Image style={styles.tabIcon} source={ImageUtil.images.ic_top_inactive} />
              ),
          };
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
});

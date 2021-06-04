import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/HomeScreen/Home';
import HomeProfile from '../Screens/HomeScreen/HomeProfile';
import HomeProducts from '../Screens/HomeScreen/HomeProducts';

const HomeNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    HomeProfile: { screen: HomeProfile },
    HomeProducts: { screen: HomeProducts },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;

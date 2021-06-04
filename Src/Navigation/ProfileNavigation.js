import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/ProfileScreen/Profile';


const ProfileNavigation = createStackNavigator(
  {
    Profile: { screen: Profile },

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
export default ProfileNavigation;

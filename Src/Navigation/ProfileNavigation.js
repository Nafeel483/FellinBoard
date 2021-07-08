import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/ProfileScreen/Profile';
import EditProfile from '../Screens/ProfileScreen/EditProfile';

const ProfileNavigation = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditProfile: { screen: EditProfile },

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

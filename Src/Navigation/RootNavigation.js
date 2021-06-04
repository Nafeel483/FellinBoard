import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
import ChatNavigation from './ChatNavigation';
import ProfileNavigation from './ProfileNavigation';
import ChallangesNavigation from './ChallangesNavigation';
import AddNew from '../Screens/AddNew';

const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    AuthNavigation: AuthNavigation,
    HomeNavigation: HomeNavigation,
    ChatNavigation: ChatNavigation,
    ProfileNavigation: ProfileNavigation,
    ChallangesNavigation: ChallangesNavigation,
    AddNew: AddNew
  },
  {
    initialRouteName: 'SplashScreen',
  },
);
export default createAppContainer(AppNavigator);

import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/AuthScreen/Login';
import SignUp from '../Screens/AuthScreen/SignUp';
import ForgotPassword from '../Screens/AuthScreen/ForgotPassword';
import Verification from '../Screens/AuthScreen/Verification';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgotPassword: { screen: ForgotPassword },
    Verification: { screen: Verification },

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
export default AuthNavigation;

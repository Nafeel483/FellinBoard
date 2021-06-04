import { createStackNavigator } from 'react-navigation-stack';
import Challanges from '../Screens/ChallangesScreen/Challanges';
import ItemProfile from '../Screens/ChallangesScreen/ItemProfile'
import ChallangesProduct from '../Screens/ChallangesScreen/ChallangesProduct';

const ChallangesNavigation = createStackNavigator(
  {
    Challanges: { screen: Challanges },
    ItemProfile: { screen: ItemProfile },
    ChallangesProduct: { screen: ChallangesProduct },
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
export default ChallangesNavigation;

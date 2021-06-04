import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    width: '100%',
    height: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  mainLogo: {
    width: 220,
    height: 300
  }
});
export default styles;
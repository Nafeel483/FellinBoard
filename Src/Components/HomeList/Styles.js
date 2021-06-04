import { StyleSheet, Dimensions } from 'react-native';
import Colors from "../../Styles/Colors";
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: widthScreen / 1.2,
    marginTop: 30,
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row'
  },
  profileShow: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textColor
  },
  profileRate: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary,
    marginTop: 5
  },
  moreIcon: {
    width: 30,
    height: 30,
    marginTop: 7
  },
  backgroundImageStyle: {
    width: widthScreen / 1.2,
    height: 250,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  colorShow: {
    width: 70,
    height: 70,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'flex-end'
  }
});
export default styles;
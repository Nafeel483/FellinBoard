import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: '#F7F8FA'
  },
  safeViewStyle1: {
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1
  },
  mainHeaderWrapper: {
    backgroundColor: Colors.White,
    width: widthScreen,
    height: 100,
    alignItems: 'center'
  },
  mainHeaderContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.textColor,
  },
  editStyles: {
    width: widthScreen,
    height: heightScreen / 1.35
  },
  showEditing: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: '10%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  editImage: {
    width: 25,
    height: 25
  },
  editImage1: {
    width: 30,
    height: 25
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBA'
  }
});
export default styles;
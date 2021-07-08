import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White
  },

  backStyle: {
    width: 35,
    height: 35,
  },

  headerImage: {
    width: widthScreen,
    height: 188
  },
  listWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? '10%' : '15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileMainPicture: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 15,
    // borderWidth: 2,
    // borderColor: Colors.White,
    marginTop: '-17%'
  },
  mainWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: widthScreen / 1.12,
    alignSelf: "center"
  },
  emailWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
  },
});
export default styles;
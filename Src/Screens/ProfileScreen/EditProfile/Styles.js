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
  profileArea: {
    marginTop: '-17%',
    width: '50%',
    height: 200,
    alignSelf: 'center',
    alignItems: 'center'
  },
  profileMainPicture: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 15,
    // borderWidth: 2,
    // borderColor: Colors.White,

  },
  profileMainPicture1: {
    alignSelf: 'center',
    width: 115,
    height: 115,
    borderRadius: 15,
  },
  editIcon: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    marginTop: -40,
    marginLeft: '50%'
  },
  editIcon1: {
    alignSelf: 'center',
    width: 30,
    height: 30,
    marginTop: -30,
    marginLeft: '50%',
    tintColor: 'white'
  },
  mainWrapper: {
    marginTop: -40,
    marginBottom: 30,
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
  inputImageLock: {
    width: 22,
    height: 25,
    marginRight: 20,
  },
  buttonCreate: {
    marginTop: 30,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White
  },
});
export default styles;
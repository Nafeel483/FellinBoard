import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7F8FA'
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
    marginTop: '-17%'
  },
  profileHeaderText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700'
  },
  locationWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15
  },
  locationText: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10
  },
  mainBottomWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 15
  },
  imagesWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  descriptionProfile: {
    textAlign: 'center',
    fontSize: 17,
    color: '#807D7E'
  },


  socialContainer: {
    marginTop: 20,
    width: widthScreen / 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  facebookButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.appHeaderColor,
    borderRadius: 12
  },
  googleButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
    backgroundColor: '#f5eadf',
    borderRadius: 12
  },
  socialText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.White,
    marginLeft: 10
  },
  socialText1: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.appHeaderColor,
    marginLeft: 10
  },
  tabWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  textTab: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10
  }
});
export default styles;
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    width: '100%',
    height: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  mainLoginWrapper: {
    marginTop: '30%',
    marginBottom: 20,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center'
  },
  mainLogo: {
    width: 133,
    height: 180
  },
  emailWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.White,
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
  inputImage: {
    width: 18,
    height: 25,
    marginLeft: 20,
    // marginTop: 9
  },
  inputImageLock: {
    width: 22,
    height: 25,
    marginLeft: 20,
  },
  forgotText: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.textColor,
    marginRight: 10
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
  seperatorContainer: {
    marginVertical: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  seperatorWrapper: {
    flex: 0.45,
    height: 2,
    backgroundColor: Colors.textColor,
    opacity: 0.2
  },
  textContainer: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: '600',
  },
  textwrapper: {
    flex: 0.45,
    height: 2,
    backgroundColor: Colors.textColor,
    opacity: 0.2
  },
  alreadyAccountText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.textColor,
    marginTop: '12%'
  },
  loginText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.appHeaderColor,
    marginTop: 7,
    textDecorationLine: 'underline'
  },
  socialContainer: {
    marginTop: 30,
    width: widthScreen / 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.facebook,
    borderRadius: 12
  },
  socialText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
    marginLeft: 10
  },
  socialText1: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textColor,
    marginLeft: 10
  },
  googleButton: {
    width: widthScreen / 2.6,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.White,
    borderRadius: 12
  },
  socialImage: {
    width: 20,
    height: 20
  }
});
export default styles;
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

  emailWrapper: {
    marginTop: 30,
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
});
export default styles;
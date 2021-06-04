import { StyleSheet, Dimensions } from 'react-native';
import Colors from "../../Styles/Colors";
const heightScreen = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  mainWrapper: {
    width: '70%',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    // height: heightScreen / 1.35,

  },
  mainWrapperContainer: {
    marginTop: 10,
    marginBottom: 50,
    width: '90%',
    alignSelf: 'center'
  },
  emailWrapper: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: '#EBEBEB',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 17,
    margin: 10
  },
  inputImage: {
    width: 25,
    height: 25,
    marginLeft: 20,
    // marginTop: 9
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBA',
    marginTop: 12,
    marginBottom: 12
  }
});
export default styles;
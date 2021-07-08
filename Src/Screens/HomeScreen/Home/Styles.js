import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
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
  mainWrapper1: {
    width: widthScreen / 1.13,
    alignSelf: 'center',
    marginTop: 30,
  },
  mainWrapper: {
    marginTop: 15,
    marginBottom: 30,
    width: widthScreen / 1.13,
    alignSelf: 'center'
  },
  menuImage: {
    width: 30,
    height: 30
  },
  headerText: {
    fontSize: 35,
    fontWeight: "700",
    color: Colors.textColor,
    marginTop: 25,

  },
  headerTextDescription: {
    marginTop: 13,
    fontSize: 18,
    fontWeight: "500",
    color: Colors.textColor
  },
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 10
  },
  emailWrapper: {
    // marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.4,
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
  filterWrapper: {
    width: 60,
    height: 60,
    backgroundColor: Colors.buttonColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  filterImage: {
    width: 30,
    height: 30,
  },
  headerWrapperShow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default styles;
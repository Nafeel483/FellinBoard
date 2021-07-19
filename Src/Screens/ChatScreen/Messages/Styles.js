import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: '#F7F8FA'
  },
  safeViewStyle1: {
    backgroundColor: Colors.White
  },
  textWrapper: {
    width: widthScreen,
    height: 110,
    backgroundColor: Colors.White
  },
  mainWrapperMessage: {
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 20
  },
  emailWrapper: {
    // marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 25,
    backgroundColor: "#F7F8F7",
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.3,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 16,
    margin: 10
  },
  inputImage: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 12
  },
  headerContainer: {
    backgroundColor: Colors.White,
  },
  headerContainerWrapper: {
    backgroundColor: Colors.White,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  profileShow: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textColor
  },
  profileRate: {
    fontSize: 16,
    fontWeight: '400',
    color: '#009A22',
    marginTop: 5
  },
  profileRate1: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary,
    marginTop: 5
  },
});
export default styles;
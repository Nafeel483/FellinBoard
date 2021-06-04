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
  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sliderProducts: {
    marginTop: 30
  },
  profileHeaderText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15
  },
  descriptionProfile: {
    // textAlign: 'center',
    fontSize: 15,
    color: '#807D7E',
    marginTop: 15,
    width: widthScreen / 1.2,
    alignSelf: 'center'
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
  showMainItems: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between"
  },
  likeProductText: {
    fontSize: 18,
    fontWeight: '700'
  },
  seeText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 2
  },
  weekWrapper: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    // width: '90%',
    alignSelf: 'center'
  },
  DaysWrapper: {
    marginLeft: 10,
    // marginTop: 50,
    width: 180,
    height: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf2f2',
    marginBottom: 30,

  },
});
export default styles;
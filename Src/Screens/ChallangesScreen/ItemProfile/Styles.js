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
    marginTop: 30,
    marginLeft: -24
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
  imagesWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  tabWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  textTab: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center'
  },

  profileContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  profileShow: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textColor
  },
  profileRate: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary,
    marginTop: 5
  },
  seperator: {
    borderBottomColor: '#001812',
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 10
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuImage: {
    width: 30,
    height: 30
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.textColor,
    marginLeft: -35
    // marginTop: 25,

  },
});
export default styles;
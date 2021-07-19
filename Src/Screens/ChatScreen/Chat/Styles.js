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
  mainWrapper: {
    marginTop: 5,
    marginBottom: 30,
    width: widthScreen / 1.13,
    alignSelf: 'center'
  },
  mainWrapper1: {
    width: widthScreen / 1.13,
    alignSelf: 'center',
    marginTop: 30,
  },
  menuImage: {
    width: 30,
    height: 30
  },
  emailWrapper: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 12,
    backgroundColor: Colors.White,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.12,
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
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.textColor,
    marginLeft: -35
    // marginTop: 25,

  },
  notifTag: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A725',
    marginTop: 5,
    alignSelf: 'flex-end'
  },
  tagTextStyle: {
    fontSize: 13,
    color: Colors.White,
    fontWeight: '600'
  },


  headerWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: widthScreen / 1.12,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row'
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
    fontSize: 14,
    fontWeight: '400',
    color: Colors.primary,
    marginTop: 5
  },
  loadingRate: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.primary,
    textAlign: 'center'
  },
  timeStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#807D7E',
  },
  moreIcon: {
    width: 30,
    height: 30,
    marginTop: 7
  },
  seperator: {
    borderBottomColor: '#001812',
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 10
  },
  mainOnline: {
    width: 13,
    height: 13,
    backgroundColor: 'green',
    borderRadius: 13,
    right: 0,
    top: 0,
    position: 'absolute'
  }
});
export default styles;
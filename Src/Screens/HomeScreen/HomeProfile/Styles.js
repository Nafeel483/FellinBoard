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
  menuImage: {
    width: 30,
    height: 30
  },
  mainWrapper: {
    marginTop: 15,
    marginBottom: 30,
    width: widthScreen / 1.13,
    alignSelf: 'center'
  },

  headerWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: widthScreen / 1.2,
    marginTop: 30,
    justifyContent: 'space-between'
  },
  profileContainer: {
    flexDirection: 'row'
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
  moreIcon: {
    width: 30,
    height: 30,
    marginTop: 7
  },
  backgroundImageStyle: {
    width: widthScreen / 1.2,
    height: 500,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  colorShow: {
    width: 45,
    height: 45,
    borderRadius: 15,
  },
  colorShow1: {
    width: 45,
    height: 45,
    borderRadius: 15,
    marginRight: 5
  },
  colorSetWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
  }
});
export default styles;
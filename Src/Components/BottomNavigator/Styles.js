import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  bottomContainer: {
    // backgroundColor: Colors.White,
    width: widthScreen,
    height: 85,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    // marginBottom: Platform.OS == 'ios' ? 0 : 15
  },
  bottomContainerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    // height: 50,
    // marginTop: 10,
    // marginBottom: 10,
    // backgroundColor: Colors.White,
  },
  imagesStyle: {
    width: 50,
    height: 50,
    marginTop: 10
  },
  bottomText: {
    fontSize: 11,
    marginTop: 5,
    color: '#52575C',
    textAlign: 'center'
  },
  bottomText1: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 10,
    color: '#52575C',
    textAlign: 'center'
  }

});
export default styles;
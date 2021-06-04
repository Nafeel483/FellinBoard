import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
  chatMessageWrapper: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  receivedWrapper: {
    justifyContent: "flex-start",
  },
  chatMessageInner: {
    width: '55%',
    justifyContent: 'center',
    alignItems: "center"
    // padding: 0 10,

  },
  receivedInnerWrapper: {
    width: '60%',
  },
  avatarName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImageChecing: {
    height: 20,
    width: 20,
  },
  textName: {
    margin: 0,
    // marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  textName1: {
    // margin: 0,
    marginLeft: 10,
    fontSize: 13,
    color: Colors.textColor,
    fontWeight: "500"
  },
  chatMessageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,

  },
  DateWrapper: {
    // marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '400',
    color: '#807D7E',
    alignSelf: 'flex-end',
    // marginTop: 10,
    // marginLeft: 10,
    margin: 10
  },
  DateWrapperRecieved: {
    // marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.White,
    alignSelf: 'flex-end',
    // marginTop: 10,
    // marginLeft: 10,
    margin: 10
  },
  chatMessageHeaderText: {
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    borderRadius: 12,
    backgroundColor: Colors.appHeaderColor,
  },
  chatMessageHeaderText1: {
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 12,
    borderBottomEndRadius: 0,
    backgroundColor: Colors.White,
    width: 200

  },
  chatMessageHeaderImage1: {
    width: 100,
    height: 100,
    borderRadius: 12

  },
  chatMessageHeaderImage: {
    width: 100,
    height: 100,
    borderRadius: 12

  },
  ImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 12
  }
});
export default styles;
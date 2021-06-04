import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({

  eventsContainer: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainEventsWrapper: {
    width: '45%',
    borderRadius: 15
  },
  eventsWrapper: {
    width: '100%',
    borderRadius: 15
  },
  event1: {
    margin: 5,
    width: 200,
    alignSelf: 'center',
    height: 270,
    borderRadius: 15
  },
  event2: {
    margin: 5,
    width: 120,
    // alignSelf: 'center',
    // borderColor: '#FF5D5D',
    borderRadius: 15
  },
  title: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 20
  },
  timingDescription: {
    color: Colors.White,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 10
  },
  calendercContainer: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: Colors.White,
    backgroundColor: Colors.White,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  modelContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center'
  },
  modelTextContainerDate: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.appHeaderColor
  },
  modelTextContainer: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.black
  },
  addButton: {
    alignSelf: 'center'
  },
  contactsHeader: {
    marginTop: 30,
    borderColor: Colors.White,
    borderWidth: 0.5,
    borderRadius: 50,
    width: '85%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  contactsHeaderWrapper: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textWrapper: {
    textAlign: 'center',
    color: Colors.appHeaderColor,
    fontSize: 16,
  }
});
export default styles;
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setValue: 0
    };
  }
  updateData = (value) => {
    this.setState({ setValue: value })
  }

  render() {
    return (
      <>


        <View style={styles.eventsContainer}>
          <TouchableOpacity onPress={this.viewCalender} style={styles.mainEventsWrapper}>
            <View style={styles.eventsWrapper}>
              <Image source={Images.Event1} style={styles.event1} />
            </View>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => { alert('HI') }} style={[styles.mainEventsWrapper, { marginLeft: 30 }]}>
              <View style={[styles.eventsWrapper,]}>
                <Image source={Images.Event2} style={[styles.event2, { height: 130 }]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert('HI') }} style={[styles.mainEventsWrapper, { marginLeft: 30 }]}>
              <View style={[styles.eventsWrapper,]}>
                <Image source={Images.Event3} style={[styles.event2, { height: 130 }]} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </>
    );
  }
}
export default EventsView;
import React, { Component } from 'react';
import {
  Image,
  TextInput,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';
import Events from '../../../Components/Events';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabChangeValue: 1
    };
  }
  tabChange = (value) => {
    this.setState({ tabChangeValue: value })
  }
  render() {
    const { tabChangeValue } = this.state
    return (
      <>
        <View style={Styles.mainContainer}>
          <ImageBackground source={Images.profileBackground} style={Styles.headerImage}>

            <View style={Styles.listWrapper}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chat') }}>
                <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3, tintColor: Colors.White }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.More} style={{ width: 30, height: 30, tintColor: Colors.White }} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <TouchableOpacity>
            <Image source={Images.ProfileMain} style={Styles.profileMainPicture} />
          </TouchableOpacity>
          <Text style={Styles.profileHeaderText}>{'Ridhwan Nordin'}</Text>
          <View style={Styles.locationWrapper}>
            <Image source={Images.Location} style={{ width: 17, height: 17 }} />
            <Text style={Styles.locationText}>{'San fransisco, CIO'.toUpperCase()}</Text>
          </View>
          <View style={Styles.mainBottomWrapper}>
            <Text style={Styles.descriptionProfile}>{Constants.PROFILE_DESCRIPTION}</Text>


            <View style={Styles.socialContainer}>
              {/* FaceBook */}
              <TouchableOpacity style={Styles.facebookButton}>

                <Text style={Styles.socialText}>{"Go to Shop"}</Text>
              </TouchableOpacity>
              {/* Google */}
              <TouchableOpacity style={Styles.googleButton}>

                <Text style={Styles.socialText1}>{"Message"}</Text>
              </TouchableOpacity>

            </View>

            <View style={Styles.tabWrapper}>
              <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: tabChangeValue == 1 ? Colors.appHeaderColor : '#F7F8FA' }}
                onPress={() => this.tabChange(1)}
              >
                <Text style={[Styles.textTab, { color: tabChangeValue == 1 ? Colors.appHeaderColor : '#807D7E' }]}>{'453 Design'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: tabChangeValue == 2 ? Colors.appHeaderColor : '#F7F8FA' }}
                onPress={() => this.tabChange(2)}
              >
                <Text style={[Styles.textTab, { color: tabChangeValue == 2 ? Colors.appHeaderColor : '#807D7E' }]}>{'187 Items'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: tabChangeValue == 3 ? Colors.appHeaderColor : '#F7F8FA' }}
                onPress={() => this.tabChange(3)}
              >
                <Text style={[Styles.textTab, { color: tabChangeValue == 3 ? Colors.appHeaderColor : '#807D7E' }]}>{'52 Contest'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.imagesWrapper}>
              <Events />
            </View>
          </ScrollView>
          <BottomWrapper
            navigation={this.props.navigation}
            page={4}
          />
        </View>
      </>
    );
  }
}
export default Profile;
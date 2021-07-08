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
import { connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      fullName: '',
      lastName: '',
      email: ''
    };
  }

  componentDidMount = () => {
    let userData = this.props.getprofile?.userProfile?.data
    this.setState({
      email: userData?.email
    })
  }

  render() {
    const { fullName, lastName, email } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView
            style={Styles.mainContainer}
            forceInset={{ bottom: 'never', top: 'never' }}>
            <ImageBackground source={Images.profileBackground} style={Styles.headerImage}>

              <View style={Styles.listWrapper}>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.navigate('Profile') }}
                >
                  <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3, tintColor: Colors.White }} />
                </TouchableOpacity>


              </View>
            </ImageBackground>
            <TouchableOpacity>
              <Image source={Images.ProfileMain} style={Styles.profileMainPicture} />
            </TouchableOpacity>
            <ScrollView>

              <View style={Styles.mainWrapper}>

                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={fullName}
                    placeholder={'First Name'}
                    placeholderTextColor={Colors.ok}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ fullName: value })
                    }}
                  />
                </View>

                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={lastName}
                    placeholder={'Last Name'}
                    placeholderTextColor={Colors.ok}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ lastName: value })
                    }}
                  />
                </View>


                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={email}
                    editable={false}
                    placeholder={'Email'}
                    placeholderTextColor={Colors.ok}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.setState({ email: value })
                    }}
                  />
                </View>

              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getprofile: state.getprofile
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
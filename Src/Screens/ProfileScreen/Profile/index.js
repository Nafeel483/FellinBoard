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
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';
import Events from '../../../Components/Events';
import { getUser } from '../../../Redux/Actions/profile';
import Loader from '../../../Components/Loader';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabChangeValue: 1,
    };
  }
  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = this.props.navigation.addListener('didFocus', async () => {
      let user_token = await AsyncStorage.getItem('token')
      this.props.getUsers(user_token);
    })
    let user_token = await AsyncStorage.getItem('token')
    this.props.getUsers(user_token);
  }
  componentWillUnmount() {
    this.focusListener.remove()
  }
  tabChange = (value) => {
    this.setState({ tabChangeValue: value })
  }
  render() {
    const { tabChangeValue, name } = this.state
    const { loadingProfile } = this.props.getprofile
    let userData = this.props.getprofile?.userProfile?.data
    return (
      <>
        <MenuProvider>
          <View style={Styles.mainContainer}>
            <ImageBackground source={Images.profileBackground} style={Styles.headerImage}>

              <View style={Styles.listWrapper}>
                <TouchableOpacity
                // onPress={() => { this.props.navigation.navigate('Chat') }}
                >
                  <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3, tintColor: Colors.White }} />
                </TouchableOpacity>
                {/* Menu Options */}
                <Menu>
                  <MenuTrigger>
                    <Image source={Images.More} style={{ width: 30, height: 30, tintColor: Colors.White }} />
                  </MenuTrigger>
                  <MenuOptions
                    customStyles={{
                      optionsContainer: {
                        marginTop: 20,
                        width: 120,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                      },
                      optionWrapper: {
                        margin: 5,
                      },
                    }}>
                    <MenuOption onSelect={() => { this.props.navigation.navigate('EditProfile') }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.Edit} style={{ width: 15, height: 15, tintColor: Colors.black }} />
                        <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Edit Profile'}</Text>
                      </View>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            </ImageBackground>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile') }}>
              {
                userData?.photo ?
                  <Image source={{ uri: userData?.photo }} style={Styles.profileMainPicture1} />
                  :
                  <Image source={Images.ProfileMain} style={Styles.profileMainPicture} />
              }
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.imagesWrapper}>
                <Text style={Styles.profileHeaderText}>{userData?.name}</Text>
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

                <Events />
              </View>
            </ScrollView>

            {loadingProfile ? <Loader /> : null}
            <BottomWrapper
              navigation={this.props.navigation}
              page={4}
            />
          </View>
        </MenuProvider>
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
    getUsers: (user) => dispatch(getUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
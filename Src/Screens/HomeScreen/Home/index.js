import React, { Component } from 'react';
import {
  Image,
  TextInput,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';
import HomeList from '../../../Components/HomeList';
import { getUser } from '../../../Redux/Actions/profile';
import Loader from '../../../Components/Loader';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      homeData: [
        {
          image: Images.imageProfile,
          name: 'Ridhwan Nordin',
          userName: '@ridzjcob',
          thumbnail: Images.homeImage
        },
        {
          image: Images.imageProfile1,
          name: 'Jonathan Parker',
          userName: '@JonParker',
          thumbnail: Images.homeImage1
        },
        {
          image: Images.imageProfile,
          name: 'Ridhwan Nordin',
          userName: '@ridzjcob',
          thumbnail: Images.homeImage
        },

      ]
    };
  }
  componentDidMount = async () => {
    let user_token = await AsyncStorage.getItem('token')
    this.props.getUsers(user_token);
  }


  logoutCall = async () => {
    try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      await AsyncStorage.setItem('token', 'null')
      this.props.navigation.navigate('Login')
    } catch (error) {
    }
  }

  render() {
    const { search, homeData } = this.state

    const { loadingProfile } = this.props.getprofile
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle1} />
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ bottom: 'never' }}>
            <LinearGradient colors={['#FFFFFF', '#FFF9F6', '#FFD0BA', '#FF5000']}
              style={Styles.mainContainer}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 2.5 }}
            >
              <View style={Styles.mainWrapper1}>
                <View style={Styles.headerWrapperShow}>
                  <TouchableOpacity>
                    <Image source={Images.Menu} style={Styles.menuImage} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.logoutCall}>
                    <Image source={Images.logout} style={Styles.menuImage} />
                  </TouchableOpacity>
                </View>

                <Text style={Styles.headerText}>{Constants.DISCOVER}</Text>
                <Text style={Styles.headerTextDescription}>{Constants.DISCOVER_DESCRIPTION}</Text>
                <View style={Styles.searchWrapper}>
                  {/* Search */}
                  <View style={Styles.emailWrapper}>
                    <Image source={Images.Search} style={Styles.inputImage} />
                    <TextInput
                      style={Styles.emailInput}
                      value={search}
                      placeholder={'Search here...'}
                      placeholderTextColor={Colors.ok}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ search: value })
                      }}
                    />
                  </View>
                  <View style={Styles.filterWrapper}>
                    <Image source={Images.Filter} style={Styles.filterImage} />

                  </View>

                </View>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Styles.mainWrapper}>

                  {
                    homeData.length > 0 &&
                    homeData.map((value) => {
                      return (
                        <>
                          < HomeList
                            navigation={this.props.navigation}
                            homeData={value}
                            screen={"HomeProfile"}
                          />
                        </>
                      )
                    })
                  }
                </View>
              </ScrollView>
              <BottomWrapper
                navigation={this.props.navigation}
                page={1}
              />
            </LinearGradient>
            {loadingProfile ? <Loader /> : null}
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
    getUsers: (user) => dispatch(getUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
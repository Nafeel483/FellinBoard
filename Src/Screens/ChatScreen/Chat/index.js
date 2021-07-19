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
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getUserChat } from '../../../Redux/Actions/chat';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';
import Toast from 'react-native-simple-toast';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = this.props.navigation.addListener('didFocus', async () => {
      let user_token = await AsyncStorage.getItem('token')
      this.props.getChat(user_token);
    })
    let user_token = await AsyncStorage.getItem('token')
    this.props.getChat(user_token);
  }
  componentWillUnmount() {
    this.focusListener.remove()
  }

  render() {
    const { search } = this.state
    const { loadingChat } = this.props.allChats
    const chatData = this.props.allChats?.allChats?.data
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
                <View style={Styles.chatHeader}>
                  <TouchableOpacity>
                    <Image source={Images.Menu} style={Styles.menuImage} />
                  </TouchableOpacity>
                  <Text style={Styles.headerText}>{Constants.CHAT}</Text>
                  <View />
                </View>


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

              </View>
              <ScrollView>
                {
                  loadingChat ?
                    <Text style={Styles.loadingRate}>{"Please Wait..."}</Text>
                    :
                    <View style={Styles.mainWrapper}>

                      {
                        chatData?.length > 0 && chatData.map((value) => {
                          return (
                            <>
                              <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Message', {
                                  user: value
                                })
                              }}>
                                <View style={Styles.headerWrapper}>
                                  <View style={Styles.profileContainer}>
                                    <View>
                                      <Image source={Images.userChat} style={Styles.profileShow} />
                                      {
                                        <View style={[Styles.mainOnline,
                                        { backgroundColor: value?.receiver?.isOnline ? 'green' : Colors.primary }]} />
                                      }
                                    </View>
                                    <View style={{ marginLeft: 15 }}>
                                      <Text style={Styles.profileName}>{value?.receiver?.name}</Text>
                                      <Text style={Styles.profileRate}>{value?.lastMessage?.message}</Text>
                                    </View>
                                  </View>
                                  <View>
                                    <Text style={Styles.timeStyle}>{moment(value?.lastMessage?.createdAt).startOf('hour').fromNow()}</Text>

                                    {/* moment().startOf('hour').fromNow();  */}
                                    {/* {
                                      value.read ?
                                        <Image source={Images.Double_tick} style={{
                                          width: 20,
                                          height: 20,
                                          marginTop: 5,
                                          alignSelf: 'flex-end'
                                        }} />
                                        :

                                        < View style={Styles.notifTag}>
                                          <Text style={Styles.tagTextStyle}>
                                            {'2'}
                                          </Text>
                                        </View>
                                    } */}

                                  </View>
                                </View>
                              </TouchableOpacity>
                              <View style={Styles.seperator} />
                            </>
                          )
                        })
                      }
                    </View>
                }
              </ScrollView>
              <BottomWrapper
                navigation={this.props.navigation}
                page={2}
              />
            </LinearGradient>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getprofile: state.getprofile,
    allChats: state.allChats,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getChat: (user) => dispatch(getUserChat(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
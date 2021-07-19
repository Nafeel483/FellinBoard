import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getUserConversation } from '../../../Redux/Actions/chat';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import io from "socket.io-client";
import * as Constants from '../../../Constants';
import { ShowChatMessages } from '../../../Components/ChatMessages';

let SERVER = 'https://shielded-earth-62504.herokuapp.com'

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      chatmessagesss: '',
      senderId: '',
      recieverData: null,
      token: '',
      chatID: ''
    };
  }
  saveData = () => {
    const { token, chatID, chatmessagesss } = this.state
    this.connect(chatmessagesss)

    this.setState({ chatmessagesss: '' })
    // return () => {
    //   socket.disconnect()
    //   socket.close()
    // }
  }

  componentDidMount = async () => {

    let user_token = await AsyncStorage.getItem('token')

    const { params } = this.props.navigation.state;
    const user = params.user;
    let data = {
      token: user_token,
      id: user?._id
    }
    this.setState({
      senderId: user?.sender?._id,
      recieverData: user?.receiver,
      token: user_token,
      chatID: user?._id
    })
    this.props.setUserConversation(data)

  }
  // componentWillUpdate = (nextProps) => {
  //   const { token, chatID } = this.state
  //   let data = {
  //     token: token,
  //     id: chatID
  //   }
  //   nextProps.setUserConversation(data)
  // }
  connect = (chat) => {
    const to = this.state.recieverData?._id
    const { token, chatID } = this.state
    this.socket = io(SERVER, {
      transports: ['websocket'], upgrade: false,
      query: {
        token
      }
    });
    return new Promise((resolve) => {
      resolve(this.socket);
      console.log("YEs Resolved", this.socket)
      if (to) {

        // socket.emit('TYPING_START', { recieverId: to })

        // socket.emit('TYPING_END', { recieverId: to })
        this.socket.emit('SEND_MESSAGE', { recieverId: to, message: chat })

      }
    });
  };



  sendingMessage = (value) => {
    this.setState({ chatmessagesss: value })
  }


  render() {
    const { chatmessagesss, recieverData, Opposite, senderId } = this.state

    const { loadingConversation } = this.props.allChats
    const userCOnversations = this.props.allChats?.userConversation?.data
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle1} />
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ bottom: 'never' }}>
            <View style={Styles.headerContainer}>
              <View style={Styles.headerContainerWrapper}>
                <View style={Styles.listWrapper}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chat') }}>
                    <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={Images.More} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>
                </View>

                {/* Profile */}
                <View style={Styles.profileContainer}>
                  <Image source={Images.imageProfile} style={Styles.profileShow} />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={Styles.profileName}>{recieverData?.name}</Text>
                    <Text style={recieverData?.isOnline ? Styles.profileRate : Styles.profileRate1}>{recieverData?.isOnline ? "Online" : "Ofline"}</Text>
                  </View>
                </View>
                {/* Ends */}
              </View>
            </View>
            <ScrollView
              ref={ref => { this.scrollView = ref }}
              onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
              <View style={{
                backgroundColor: '#F7F8FA',
                marginTop: 20, marginBottom: 20, width: '95%', alignSelf: 'center'
              }}>
                {userCOnversations?.length > 0 && userCOnversations.map((showmessage) => (
                  <ShowChatMessages showmessage={showmessage} key={showmessage._id} userId={senderId == showmessage.sender ? false : true} oppositeUser={Opposite} />
                ))}
              </View>

            </ScrollView>
            <View style={Styles.textWrapper}>

              <View style={Styles.mainWrapperMessage}>
                {/* Email */}
                <View style={Styles.emailWrapper}>
                  <TextInput
                    style={Styles.emailInput}
                    value={chatmessagesss}
                    placeholder={'Write text here...'}
                    placeholderTextColor={Colors.primary}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      this.sendingMessage(value)
                    }}
                  />
                  <TouchableOpacity>
                    <Image source={Images.Emoji} style={Styles.inputImage} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.saveData}>
                  <Image source={Images.Send} style={{ width: 35, height: 35, marginLeft: 10, marginTop: 8 }} />
                </TouchableOpacity>
              </View>

            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allChats: state.allChats,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserConversation: (user) => dispatch(getUserConversation(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

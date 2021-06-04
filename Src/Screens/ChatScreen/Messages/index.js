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
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import { ShowChatMessages } from '../../../Components/ChatMessages';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      chatmessagesss: '',
      chatmessage: [
        {
          id: `1`,
          type: 'text',
          message: 'Hello',
          content: 'hello world',
          targetId: '12345678',

          renderTime: true,
          sendStatus: 0,
          time: '1542006036549'
        },
        {
          id: `2`,
          type: 'text',
          message: 'Where?',
          content: 'hi/{se}',
          targetId: '12345678',

          renderTime: true,
          sendStatus: 0,
          time: '1542106036549'
        },

        {
          id: `4`,
          type: 'text',
          message: 'Nice to meet you',
          content: '你好/{weixiao}',
          targetId: '88886666',

          renderTime: true,
          sendStatus: -2,
          time: '1542177036549'
        },
        {
          id: `5`,
          type: 'voice',
          message: 'Thanks for time',
          content: {
            uri: 'http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3',
            length: 10
          },
          targetId: '12345678',

          renderTime: true,
          sendStatus: 1,
          time: '1542260667161'
        },
        {
          id: `6`,
          type: 'voice',
          message: 'Hello',
          content: {
            uri: 'http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3',
            length: 30
          },
          targetId: '88886666',

          renderTime: true,
          sendStatus: 0,
          time: '1542264667161'
        },
        {
          id: `2`,
          type: 'voice',
          message: "Sorry , I'm stuck in traffic. Please give me a moment.",
          content: {
            uri: 'http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3',
            length: 30
          },
          targetId: '88886666',

          renderTime: true,
          sendStatus: 0,
          time: '1542264667161'
        },
      ],
      Opposite: [
        {
          id: `1`,
          type: 'text',
          message: 'Hello',
          content: 'hello world',
          targetId: '12345678',
          userAvatar: Images.profile,
          fullName: 'Micke',
          nickName: 'Test',
          renderTime: true,
          sendStatus: 0,
          time: '1542006036549'
        }
      ],
    };
  }
  saveData = () => {
    if (this.state.chatmessagesss == '') {
    }
    else {
      this.setState({ chatmessagesss: '' })
    }
  }
  render() {
    const { chatmessagesss, chatmessage, Opposite } = this.state
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
                    <Text style={Styles.profileName}>{'Ridhwan Nordin'}</Text>
                    <Text style={Styles.profileRate}>{"Online"}</Text>
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
                {chatmessage && chatmessage.map((showmessage) => (
                  <ShowChatMessages showmessage={showmessage} key={showmessage.id} userId={showmessage.id} oppositeUser={Opposite} />
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
                      this.setState({ chatmessagesss: value })
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
export default Message;

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
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      chatData: [
        {
          image: Images.chat1,
          name: 'Ridhwan Nordin',
          userName: 'Thank you, That was helpful',
          read: false
        },
        {
          image: Images.Chat2,
          name: 'Jonathan Parker',
          userName: 'Thank you, That was helpful',
          read: false
        },
        {
          image: Images.Chat3,
          name: 'Ridhwan Nordin',
          userName: 'Thank you, That was helpful',
          read: false
        },
        {
          image: Images.Chat2,
          name: 'Jonathan Parker',
          userName: 'Thank you, That was helpful',
          read: true
        },
        {
          image: Images.Chat3,
          name: 'Jonathan Parker',
          userName: 'Thank you, That was helpful',
          read: true
        },
        {
          image: Images.chat1,
          name: 'Jonathan Parker',
          userName: 'Thank you, That was helpful',
          read: true
        },
      ]
    };
  }

  render() {
    const { search, chatData } = this.state
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
                <View style={Styles.mainWrapper}>

                  {
                    chatData.length > 0 && chatData.map((value) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Message') }}>
                            <View style={Styles.headerWrapper}>
                              <View style={Styles.profileContainer}>
                                <Image source={value.image} style={Styles.profileShow} />
                                <View style={{ marginLeft: 15 }}>
                                  <Text style={Styles.profileName}>{value.name}</Text>
                                  <Text style={Styles.profileRate}>{value.userName}</Text>
                                </View>
                              </View>
                              <View>
                                <Text style={Styles.timeStyle}>{"02:11 PM"}</Text>
                                {
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
                                }

                              </View>
                            </View>
                          </TouchableOpacity>
                          <View style={Styles.seperator} />
                        </>
                      )
                    })
                  }
                </View>
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
export default Chat;
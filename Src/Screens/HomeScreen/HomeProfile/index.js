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

class HomeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  render() {
    const { search, homeData } = this.state
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
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                  <Image source={Images.back} style={Styles.menuImage} />
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.mainWrapper}>



                  <View style={Styles.headerWrapper}>
                    <View style={Styles.profileContainer}>
                      <Image source={Images.imageProfile} style={Styles.profileShow} />
                      <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(screen) }}>
                          <Text style={Styles.profileName}>{'Ridhwan Nordin'}</Text>
                        </TouchableOpacity>
                        <Text style={Styles.profileRate}>{'@ridzjcob'}</Text>
                      </View>
                    </View>
                    {/* Share */}
                    <View style={Styles.profileContainer}>
                      <TouchableOpacity>
                        <Image source={Images.Share} style={[Styles.moreIcon, { marginRight: 10 }]} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={Images.More} style={Styles.moreIcon} />
                      </TouchableOpacity>
                    </View>
                    {/* End */}
                  </View>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeProducts') }}>
                    <ImageBackground source={Images.homeImage} style={Styles.backgroundImageStyle}
                      imageStyle={{ borderRadius: 12 }}
                    >
                      <View style={Styles.colorSetWrapper}>
                        {/* 1 */}
                        <TouchableOpacity>
                          <View style={[Styles.colorShow1, {
                            borderWidth: 1,
                            backgroundColor: '#B3A290',
                            borderColor: Colors.White
                          }]} />
                        </TouchableOpacity>
                        {/* 2 */}
                        <TouchableOpacity>
                          <View style={[Styles.colorShow1, {
                            borderWidth: 1,
                            backgroundColor: '#E19E6A',
                            borderColor: Colors.White
                          }]} />
                        </TouchableOpacity>
                        {/* 3 */}
                        <TouchableOpacity>
                          <View style={[Styles.colorShow1, {
                            borderWidth: 1,
                            backgroundColor: '#3D3D3D',
                            borderColor: Colors.White
                          }]} />
                        </TouchableOpacity>
                        {/* End */}
                        {/* Color Scheme */}
                        <TouchableOpacity>
                          <Image source={Images.GroupColor} style={Styles.colorShow} />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>

                </View>
              </ScrollView>
              <BottomWrapper
                navigation={this.props.navigation}
                page={1}
              />
            </LinearGradient>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
export default HomeProfile;
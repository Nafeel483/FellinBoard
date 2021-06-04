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
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants'
import BottomWrapper from '../../Components/BottomNavigator';
import ShowAddList from '../../Components/ShowAddList';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCheck: false

    };
  }
  listShow = () => {
    this.setState({ listCheck: !this.state.listCheck })

  }
  render() {
    const { listCheck } = this.state
    return (
      <>
        <MenuProvider>
          <SafeAreaProvider>
            <SafeAreaView style={Styles.safeViewStyle1} />
            <SafeAreaView style={Styles.safeViewStyle} forceInset={{ bottom: 'never' }}>
              <View style={Styles.mainHeaderWrapper}>
                {
                  listCheck ?
                    <TouchableOpacity onPress={this.listShow}>
                      <Image source={Images.back} style={{ width: 25, height: 25, marginTop: '11%' }} />
                    </TouchableOpacity>
                    :
                    <View style={Styles.mainHeaderContainer}>
                      <TouchableOpacity>
                        <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3 }} />
                      </TouchableOpacity>
                      <Text style={Styles.headerText}>{'Edit'}</Text>
                      <TouchableOpacity onPress={this.listShow}>
                        <Image source={Images.More} style={{ width: 30, height: 30 }} />
                      </TouchableOpacity>
                    </View>
                }
              </View>

              <ImageBackground source={Images.editBackground} style={Styles.editStyles}>
                {
                  listCheck ?
                    < ShowAddList />
                    :
                    <View style={Styles.showEditing}>
                      {/* 1 */}
                      <Menu>
                        <MenuTrigger>
                          <Image source={Images.Plus_menu} style={Styles.editImage} />

                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              marginTop: 40,
                              width: 120,
                              backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            },
                            optionWrapper: {
                              margin: 5,
                            },
                          }}>
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Gallery} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Gallery'}</Text>
                            </View>
                          </MenuOption>
                          <View style={Styles.seperator} />
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Camera} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Camera'}</Text>
                            </View>
                          </MenuOption>
                        </MenuOptions>

                      </Menu>
                      {/* 2 */}
                      <TouchableOpacity>
                        <Image source={Images.SofaMenu} style={Styles.editImage1} />
                      </TouchableOpacity>
                      {/* 3 */}
                      <TouchableOpacity>
                        <Image source={Images.tiles} style={Styles.editImage} />
                      </TouchableOpacity>
                      {/* 4 */}
                      <TouchableOpacity>
                        <Image source={Images.Colour} style={Styles.editImage} />
                      </TouchableOpacity>
                      {/* 5 */}
                      <TouchableOpacity>
                        <Image source={Images.Text_Menu} style={Styles.editImage} />
                      </TouchableOpacity>
                      {/* 6 */}
                      <Menu>
                        <MenuTrigger>
                          <Image source={Images.Share_Download} style={Styles.editImage} />

                        </MenuTrigger>
                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
                              marginTop: 40,
                              width: 160,
                              backgroundColor: 'rgba(255, 255, 255, 0.7)'
                            },
                            optionWrapper: {
                              margin: 5,
                            },
                          }}>
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Post_Save} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Post'}</Text>
                            </View>
                          </MenuOption>
                          <View style={Styles.seperator} />
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.ShareIcon_Save} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Share to'}</Text>
                            </View>
                          </MenuOption>

                          <View style={Styles.seperator} />
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Save_to_Device} style={{ width: 15, height: 20 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Save to Device'}</Text>
                            </View>
                          </MenuOption>

                          <View style={Styles.seperator} />
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Save_as_Draft} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Save as Draft'}</Text>
                            </View>
                          </MenuOption>

                          <View style={Styles.seperator} />
                          <MenuOption onSelect={() => alert(`Save`)}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image source={Images.Add_to_Callange} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 14, marginLeft: 8, fontWeight: '400' }}>{'Add to Callange'}</Text>
                            </View>
                          </MenuOption>
                        </MenuOptions>

                      </Menu>
                      {/* 7 */}
                    </View>
                }
              </ImageBackground>
              <BottomWrapper
                navigation={this.props.navigation}
                page={''}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </MenuProvider>
      </>
    );
  }
}
export default AddNew;
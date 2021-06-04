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
import ChallengesList from '../../../Components/ChallengesList';

class Challanges extends Component {
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

      ],
      tabSelect: 1
    };
  }
  tabUpdate = (value) => {
    this.setState({ tabSelect: value })
  }

  render() {
    const { search, homeData, tabSelect } = this.state
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
                    <Image source={Images.back} style={Styles.menuImage} />
                  </TouchableOpacity>
                  <Text style={Styles.headerText}>{'Challanges'}</Text>
                  <View />
                </View>

                <View style={Styles.tabsContainer}>
                  {/* 1 Tab */}
                  <TouchableOpacity style={[Styles.tabWrapper, { backgroundColor: tabSelect == 1 ? Colors.appHeaderColor : Colors.White }]}
                    onPress={() => { this.tabUpdate(1) }}
                  >
                    <Text style={[Styles.textTab, { color: tabSelect == 1 ? Colors.White : '#C0BEBF' }]}>{'Popular'}</Text>
                  </TouchableOpacity >
                  {/* 2 Tab */}
                  <TouchableOpacity style={[Styles.tabWrapper, { backgroundColor: tabSelect == 2 ? Colors.appHeaderColor : Colors.White }]}
                    onPress={() => { this.tabUpdate(2) }}>
                    <Text style={[Styles.textTab, { color: tabSelect == 2 ? Colors.White : '#C0BEBF' }]}>{'New'}</Text>
                  </TouchableOpacity>
                  {/* 3 Tab */}
                  <TouchableOpacity style={[Styles.tabWrapper, { backgroundColor: tabSelect == 3 ? Colors.appHeaderColor : Colors.White }]}
                    onPress={() => { this.tabUpdate(3) }}>
                    <Text style={[Styles.textTab, { color: tabSelect == 3 ? Colors.White : '#C0BEBF' }]}>{'Nearby'}</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <ScrollView showsVerticalScrollIndicator={false}>

                <View style={Styles.mainWrapper}>

                  {
                    homeData.length > 0 &&
                    homeData.map((value) => {
                      return (
                        <>
                          <ChallengesList
                            navigation={this.props.navigation}
                            homeData={value}
                            screen={"ItemProfile"}
                          />
                        </>
                      )
                    })
                  }
                </View>
              </ScrollView>
              <BottomWrapper
                navigation={this.props.navigation}
                page={3}
              />
            </LinearGradient>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
export default Challanges;
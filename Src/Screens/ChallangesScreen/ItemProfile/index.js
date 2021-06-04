import React, { Component } from 'react';
import {
  Image,
  TextInput,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SliderBox } from "react-native-image-slider-box";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';
import Events from '../../../Components/Events';

const widthScreen = Dimensions.get('window').width;


class ItemProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      allImages: [
        Images.chalangeShow,
        Images.chalangeShow,
        Images.chalangeShow
      ],
      activeSlide: 0,
      tabChangeValue: 1

    };
  }
  _renderItem = ({ item, index }) => {
    return (
      <Image source={item} style={{
        width: widthScreen / 1.1, height: 200,
        borderRadius: 15,
        alignSelf: 'center',
      }} />
    );
  }
  pagination() {
    const { allImages, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={allImages.length}
        activeDotIndex={activeSlide}
        dotColor={Colors.textColor}
        // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 3,
          // backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}

        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  tabChange = (value) => {
    this.setState({ tabChangeValue: value })
  }
  render() {
    const { allImages, tabChangeValue } = this.state
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
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Challanges') }}>
                    <Image source={Images.back} style={Styles.menuImage} />
                  </TouchableOpacity>
                  <Text style={Styles.headerText}>{'Challanges'}</Text>
                  <View />
                </View>

                <View style={Styles.sliderProducts}>
                  <SliderBox
                    style={{ width: '90%', alignSelf: 'center', height: 180, borderRadius: 15 }}
                    images={allImages}
                    sliderBoxHeight={150}
                    inactiveDotColor={'#807D7E'}
                    dotColor={Colors.White}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    autoplay
                    activeOpacity={0.5}
                    dotStyle={{
                      width: 15,
                      height: 15,
                      borderRadius: 15,
                      // marginVertical: -50,

                      marginHorizontal: 0,
                      padding: 0,
                      margin: 20,
                    }}
                  />
                </View>

                <View style={Styles.profileContainer}>
                  <Image source={Images.imageProfile} style={Styles.profileShow} />
                  <View style={{ marginLeft: 15 }}>
                    <TouchableOpacity>
                      <Text style={Styles.profileName}>{'Ridhwan Nordin'}</Text>
                    </TouchableOpacity>
                    <Text style={Styles.profileRate}>{'@ridzjcob'}</Text>
                  </View>
                </View>
                <View style={Styles.seperator} />

                <Text style={Styles.profileHeaderText}>{'Design moodboard for my setting Area'}</Text>
                <Text style={Styles.descriptionProfile}>{Constants.PRODUCT_DESCRIPTION}</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ChallangesProduct') }}>
                  <LinearGradient colors={['#B78D5F', '#C69A6B']}
                    style={Styles.buttonCreate}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={Styles.buttonText}>{'Participate'}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={Styles.tabWrapper}>
                  <TouchableOpacity style={{ width: '45%', borderBottomWidth: 1, borderBottomColor: tabChangeValue == 1 ? Colors.appHeaderColor : '#F7F8FA' }}
                    onPress={() => this.tabChange(1)}
                  >
                    <Text style={[Styles.textTab, { color: tabChangeValue == 1 ? Colors.appHeaderColor : '#807D7E' }]}>{'Top'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '45%', borderBottomWidth: 1, borderBottomColor: tabChangeValue == 2 ? Colors.appHeaderColor : '#F7F8FA' }}
                    onPress={() => this.tabChange(2)}
                  >
                    <Text style={[Styles.textTab, { color: tabChangeValue == 2 ? Colors.appHeaderColor : '#807D7E' }]}>{'Newest'}</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <ScrollView>
                <View style={Styles.imagesWrapper}>
                  <Events />
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
export default ItemProfile;
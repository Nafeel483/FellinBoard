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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import BottomWrapper from '../../../Components/BottomNavigator';

const widthScreen = Dimensions.get('window').width;


class ChallangesProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      allImages: [
        Images.sofa,
        Images.carpet,
        Images.sofa
      ],
      allChairLists: [
        {
          image: Images.listChair
        },
        {
          image: Images.listChair1
        },
        {
          image: Images.listChair
        },
        {
          image: Images.listChair1
        },
      ],
      activeSlide: 0
    };
  }
  _renderItem = ({ item, index }) => {
    return (
      <Image source={item} style={{ width: 230, height: 200, alignSelf: 'center', }} />
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

  render() {
    const { allImages, allChairLists } = this.state
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
              <ScrollView>
                <View style={Styles.mainWrapper1}>
                  <View style={Styles.listWrapper}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeProfile') }}>
                      <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={Images.Star} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.sliderProducts}>
                    <Carousel
                      ref={(c) => { this._carousel = c; }}
                      data={allImages}
                      renderItem={this._renderItem}
                      sliderWidth={widthScreen / 1.3}
                      itemWidth={widthScreen / 1.1}
                      onSnapToItem={(index) => this.setState({ activeSlide: index })}

                    />
                    {this.pagination()}
                  </View>

                  <Text style={Styles.profileHeaderText}>{'Potram llha Bela'}</Text>
                  <Text style={Styles.descriptionProfile}>{Constants.PRODUCT_DESCRIPTION}</Text>

                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('') }}>
                    <LinearGradient colors={['#B78D5F', '#C69A6B']}
                      style={Styles.buttonCreate}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={Styles.buttonText}>{'Go to Shop'}</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <View style={Styles.showMainItems}>
                    <Text style={Styles.likeProductText}>{'You May Like'}</Text>
                    <Text style={Styles.seeText}>{'See all'}</Text>
                  </View>

                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={Styles.weekWrapper}>
                    {
                      allChairLists.length > 0 &&
                      allChairLists.map((value) => {
                        return (
                          <>
                            < View style={Styles.DaysWrapper}>
                              <Image source={value.image} style={{ width: 80, height: 100 }} />
                            </View>
                          </>
                        )
                      })

                    }
                  </View>
                </ScrollView>

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
export default ChallangesProduct;
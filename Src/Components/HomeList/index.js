import React, { Component, createRef } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';

class HomeList extends Component {


  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { image, name, userName, thumbnail } = this.props.homeData
    const { screen } = this.props
    return (
      <>
        <View style={Styles.headerWrapper}>
          <View style={Styles.profileContainer}>
            <Image source={image} style={Styles.profileShow} />
            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate(screen) }}>
                <Text style={Styles.profileName}>{name}</Text>
              </TouchableOpacity>
              <Text style={Styles.profileRate}>{userName}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={Images.More} style={Styles.moreIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate(screen) }}>
          <ImageBackground source={thumbnail} style={Styles.backgroundImageStyle}
            imageStyle={{ borderRadius: 12 }}
          >
            <TouchableOpacity>
              <Image source={Images.GroupColor} style={Styles.colorShow} />
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
      </>
    )
  }
}

export default HomeList; 
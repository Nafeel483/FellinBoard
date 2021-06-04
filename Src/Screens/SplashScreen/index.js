import React, { Component } from 'react';
import {
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount() {
    setTimeout(() => {
      if (!this.moved) {

        this.props.navigation.navigate('Login')
      }
    }, 3000);
  }
  render() {
    return (
      <>
      
        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <Image source={Images.Logo} style={Styles.mainLogo} />
        </ImageBackground>

      </>
    );
  }
}
export default SplashScreen;
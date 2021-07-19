import React, { Component } from 'react';
import {
  Image,
  ImageBackground
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';



class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = () => {
    setTimeout(() => {
      if (!this.moved) {
        this.props.navigation.navigate('Login')
        // this.showData()
      }
    }, 3000);
  }
  showData = async () => {
    let user_token = await AsyncStorage.getItem('token')
    console.log("nafeel Logs::", user_token)
    if (user_token == 'null' || user_token == null) {
      this.props.navigation.navigate('Login')

    }
    else {
      this.props.navigation.navigate('Home')
    }
  }
  render() {
    console.log("Nafeel Splash Screen::", this.props.auth)
    return (
      <>

        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <Image source={Images.Logo} style={Styles.mainLogo} />
        </ImageBackground>

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
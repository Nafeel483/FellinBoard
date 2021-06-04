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
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    const { userName, password } = this.state
    return (
      <>

        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.mainLoginWrapper}>
              <Image source={Images.Logo} style={Styles.mainLogo} />
              {/* UserName */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.Username} style={Styles.inputImage} />
                <TextInput
                  style={Styles.emailInput}
                  value={userName}
                  placeholder={'Username'}
                  placeholderTextColor={Colors.ok}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ userName: value })
                  }}
                />
              </View>
              {/* Password */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.Lock} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={password}
                  placeholder={'Password'}
                  placeholderTextColor={Colors.ok}
                  secureTextEntry={true}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ password: value })
                  }}
                />
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
                  <Text style={Styles.forgotText}>{Constants.FORGOT}</Text>
                </TouchableOpacity>
              </View>
              {/* Login Button */}
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                <LinearGradient colors={['#B78D5F', '#C69A6B']}
                  style={Styles.buttonCreate}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={Styles.buttonText}>{Constants.SIGNIN}</Text>
                </LinearGradient>
              </TouchableOpacity>


              {/* OR */}
              <View style={Styles.seperatorContainer}>
                <View style={Styles.seperatorWrapper} />
                <Text style={Styles.textContainer}>{Constants.OR}</Text>
                <View style={Styles.textwrapper} />
              </View>

              <View style={Styles.socialContainer}>
                {/* FaceBook */}
                <TouchableOpacity style={Styles.facebookButton}>
                  <View style={Styles.innerContainer}>
                    <Image source={Images.Facebook} style={Styles.socialImage} />
                    <Text style={Styles.socialText}>{Constants.FACEBOOK}</Text>
                  </View>
                </TouchableOpacity>
                {/* Google */}
                <TouchableOpacity style={Styles.googleButton}>
                  <View style={Styles.innerContainer}>
                    <Image source={Images.Google} style={Styles.socialImage} />
                    <Text style={Styles.socialText1}>{Constants.GOOGLE}</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={Styles.alreadyAccountText}>{Constants.NO_ACCOUNT}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
                <Text style={Styles.loginText}>{Constants.SIGNUP}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>

      </>
    );
  }
}
export default Login;
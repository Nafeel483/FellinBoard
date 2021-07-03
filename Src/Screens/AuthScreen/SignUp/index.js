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
import { connect } from 'react-redux';
import { registerUser } from '../../../Redux/Actions/auth';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import Loader from '../../../Components/Loader';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      confirm_password: "",
      fullName: "",
      email: ""
    };
  }

  submit = () => {
    const { email, fullName, confirm_password, password, userName } = this.state;
    if (fullName === '') {
      Toast.show('Full Name Is Required');
    }
    else if (userName === '') {
      Toast.show('User Name Is Required');
    }
    else if (email === '') {
      Toast.show('Email Is Required');
    }
    else if (reg.test(email) === false) {
      Toast.show('Email is Invalid');
    }
    else if (password === '') {
      Toast.show('Passowrd Is Required');
    }
    else if (confirm_password === '') {
      Toast.show('Confirm Password Is Required');
    }
    else if (password != confirm_password) {
      Toast.show('Passowrd Not Matched');
    }
    else {
      const user = {
        name: fullName,
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirm_password,
      };
      this.props.registerUsers(user);

    }
  }

  render() {
    const { loadingReducer } = this.props.auth
    const { userName, password, confirm_password, fullName, email } = this.state
    return (
      <>

        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.mainLoginWrapper}>
              <Image source={Images.Logo} style={Styles.mainLogo} />
              {/* Name */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.Username} style={Styles.inputImage} />
                <TextInput
                  style={Styles.emailInput}
                  value={fullName}
                  placeholder={'Full Name'}
                  placeholderTextColor={Colors.ok}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ fullName: value })
                  }}
                />
              </View>
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
              {/* Email */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.Username} style={Styles.inputImage} />
                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Email'}
                  placeholderTextColor={Colors.ok}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
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
              </View>
              {/* Confirm Password */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.Lock} style={Styles.inputImageLock} />
                <TextInput
                  style={Styles.emailInput}
                  value={confirm_password}
                  placeholder={'Confrim Password'}
                  placeholderTextColor={Colors.ok}
                  secureTextEntry={true}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ confirm_password: value })
                  }}
                />
              </View>
              {/* Login Button */}
              <TouchableOpacity onPress={this.submit}>
                <LinearGradient colors={['#B78D5F', '#C69A6B']}
                  style={Styles.buttonCreate}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={Styles.buttonText}>{Constants.SIGNUP}</Text>
                </LinearGradient>
              </TouchableOpacity>


              {/* OR */}
              <View style={Styles.seperatorContainer}>
                <View style={Styles.seperatorWrapper} />
                <Text style={Styles.textContainer}>{Constants.OR_SIGNUP}</Text>
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

              <Text style={Styles.alreadyAccountText}>{Constants.HAVE_ACCOUNT}</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                <Text style={Styles.loginText}>{Constants.SIGNIN}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {loadingReducer ? <Loader /> : null}
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
    registerUsers: (user) => dispatch(registerUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
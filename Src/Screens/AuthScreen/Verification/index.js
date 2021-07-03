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
import { verificationUser } from '../../../Redux/Actions/auth';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants'
import VerificationWrapper from '../../../Components/VerificationWrapper';
import Loader from '../../../Components/Loader';


class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      showPassword: false,
      otpCode: ''
    };
  }

  firstValue = (value) => {
    this.setState({ pin1: value })
  }
  secondValue = (value) => {
    this.setState({ pin2: value })

  }
  thirdValue = (value) => {
    this.setState({ pin3: value })

  }
  fourthValue = (value) => {
    this.setState({ pin4: value })

  }
  fifithValue = (value) => {
    this.setState({ pin5: value })

  }
  sixthValue = (value) => {
    this.setState({ pin6: value })

  }

  handleSubmit = () => {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state

    var value = pin1 + pin2 + pin3 + pin4 + pin5 + pin6

    if (
      value?.length != 6
    ) {
      Toast.show('Please Enter Your Valid OTP.')
    }
    else {
      this.setState({
        otpCode: value,
        showPassword: !this.state.showPassword
      })
    }
  }

  handleSubmitVerification = () => {
    const { confirm_password, password, otpCode } = this.state;

    if (password === '') {
      Toast.show('Passowrd Is Required');
    }
    else if (confirm_password === '') {
      Toast.show('Confirm Password Is Required');
    }
    else {
      const user = {
        otp: otpCode,
        password: password,
      };
      this.props.verifyUsers(user);
    }
  }

  render() {
    const { loadingverify } = this.props.auth
    const { showPassword, password, confirm_password, } = this.state
    return (
      <>

        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={Styles.mainLoginWrapper}>
              <Image source={Images.Logo} style={Styles.mainLogo} />

              {
                showPassword ?
                  <>
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
                  </>

                  :

                  <VerificationWrapper
                    navigation={this.props.navigation}
                    screen={''}
                    value1={this.firstValue}
                    value2={this.secondValue}
                    value3={this.thirdValue}
                    value4={this.fourthValue}
                    value5={this.fifithValue}
                    value6={this.sixthValue}

                  />
              }
              {
                showPassword ?
                  <TouchableOpacity
                    onPress={this.handleSubmitVerification}
                  >
                    <LinearGradient colors={['#B78D5F', '#C69A6B']}
                      style={Styles.buttonCreate}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={Styles.buttonText}>{Constants.CONTINUE}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity
                    onPress={this.handleSubmit}
                  >
                    <LinearGradient colors={['#B78D5F', '#C69A6B']}
                      style={Styles.buttonCreate}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={Styles.buttonText}>{Constants.VERIFY}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
              }
            </View>
          </ScrollView>
          {loadingverify ? <Loader /> : null}
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
    verifyUsers: (user) => dispatch(verificationUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Verification);
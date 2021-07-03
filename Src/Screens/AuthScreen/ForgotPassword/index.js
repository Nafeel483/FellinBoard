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
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { forgotUser } from '../../../Redux/Actions/auth';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Loader from '../../../Components/Loader';

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  submit = () => {
    const { email } = this.state;
    if (email === '') {
      Toast.show('Email Is Required');
    }
    else if (reg.test(email) === false) {
      Toast.show('Email is Invalid');
    }
    else {
      const user = {
        email: email,
      };
      this.props.forgotUsers(user);

    }
  }

  render() {
    const { email } = this.state
    const { loadingforgot } = this.props.auth

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
                  value={email}
                  placeholder={'Email'}
                  placeholderTextColor={Colors.ok}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ email: value })
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
                  <Text style={Styles.buttonText}>{Constants.CONTINUE}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {loadingforgot ? <Loader /> : null}
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
    forgotUsers: (user) => dispatch(forgotUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
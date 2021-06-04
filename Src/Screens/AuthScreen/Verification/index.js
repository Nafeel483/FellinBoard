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
import VerificationWrapper from '../../../Components/VerificationWrapper';

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    const { email } = this.state
    return (
      <>

        <ImageBackground source={Images.background} style={Styles.backgroundWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={Styles.mainLoginWrapper}>
              <Image source={Images.Logo} style={Styles.mainLogo} />

              <VerificationWrapper
                navigation={this.props.navigation}
                screen={''}
              />

              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Verification') }}>
                <LinearGradient colors={['#B78D5F', '#C69A6B']}
                  style={Styles.buttonCreate}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={Styles.buttonText}>{Constants.VERIFY}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>

      </>
    );
  }
}
export default Verification;
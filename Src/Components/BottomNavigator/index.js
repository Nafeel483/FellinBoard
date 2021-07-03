import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import styles from './Styles';
import Colors from "../../Styles/Colors";
import Images from '../../Styles/Images';

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigatinUpdate: 1
    };
  }
  componentDidMount() {
    this.setState({ navigatinUpdate: this.props.page })
  }
  updateValue = (value) => {
    if (value === 1) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Home')
    }
    else if (value === 2) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Chat')
    }
    else if (value === 3) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Challanges')
    }
    else if (value === 4) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Profile')
    }
  }
  render() {
    const { navigatinUpdate } = this.state
    return (
      <>
        <ImageBackground style={styles.bottomContainer} source={Images.bachgroundBottom}>
          <View style={styles.bottomContainerWrapper}>
            <TouchableOpacity onPress={() => this.updateValue(1)}>
              <View style={{}}>

                <Image source={Images.home} style={{
                  width: 25, height: 25,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 1 ? Colors.buttonColor : "#C0BEBF"
                }} />
                <Text style={{
                  fontSize: 10, color: navigatinUpdate == 1 ? Colors.buttonColor : "#C0BEBF",
                  marginTop: 5, textAlign: 'center'
                }}>{'Feed'}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(2)}>
              <View style={{}}>
                <Image source={Images.Chat} style={{
                  width: 25, height: 25,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 2 ? Colors.buttonColor : "#C0BEBF"
                }} />

                <Text style={{
                  fontSize: 10, color: navigatinUpdate == 2 ? Colors.buttonColor : "#C0BEBF",
                  marginTop: 5, textAlign: 'center'
                }}>{'Chat'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddNew') }}>
              <View style={{ marginTop: -60, marginLeft: 30 }}>

                <Image source={Images.Plus} style={{
                  width: 70, height: 70,
                  marginLeft: -10,
                  alignSelf: 'center',

                }} />
                <Text style={{ fontSize: 10, color: "#C0BEBF", marginTop: 10, textAlign: 'center' }}>{'Create'}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(3)}>
              <View style={{}}>
                <Image source={Images.Edit} style={{
                  width: 25, height: 25,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 3 ? Colors.buttonColor : "#C0BEBF"
                }} />
                <Text style={{
                  fontSize: 10, color: navigatinUpdate == 3 ? Colors.buttonColor : "#C0BEBF",
                  marginTop: 5, textAlign: 'center'
                }}>{'challange'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(4)}>
              <View style={{}}>
                <Image source={Images.Profile} style={{
                  width: 25, height: 25,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 4 ? Colors.buttonColor : "#C0BEBF"
                }} />
                <Text style={{
                  fontSize: 10, color: navigatinUpdate == 4 ? Colors.buttonColor : "#C0BEBF",
                  marginTop: 5, textAlign: 'center'
                }}>{'Me'}</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </>
    )
  }
}

export default Bottom; 
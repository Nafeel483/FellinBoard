import React, { Component, createRef } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import Styles from './Styles';

class Verification extends Component {


  constructor(props) {
    super(props);
    this.firstInput = createRef();
    this.pin2ref = createRef();
    this.pin3ref = createRef();
    this.pin4ref = createRef();
    this.pin5ref = createRef();
    this.pin6ref = createRef();

    // this.focus = this.focus.bind(this);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: ''
    };
  }
  componentDidMount() {
    this.firstInput.current?.focus();
  }
  render() {
    const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state
    const { screen } = this.props
    return (
      <>
        <View style={Styles.inputContainer}>
          <TextInput
            ref={this.firstInput}
            value={pin1}
            style={Styles.verificationInput}
            keyboardType={'numeric'}
            secureTextEntry={true}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin1: value })
              this.props.value1(value)
              this.pin2ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin2ref}
            value={pin2}
            style={Styles.verificationInput}
            keyboardType={'numeric'}
            secureTextEntry={true}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin2: value })
              this.props.value2(value)
              this.pin3ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin3ref}
            value={pin3}
            style={Styles.verificationInput}
            keyboardType={'numeric'}
            secureTextEntry={true}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin3: value })
              this.props.value3(value)
              this.pin4ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin4ref}
            value={pin4}
            style={Styles.verificationInput}
            keyboardType={'numeric'}
            secureTextEntry={true}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin4: value })
              this.props.value4(value)
              this.pin5ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin5ref}
            value={pin5}
            style={Styles.verificationInput}
            keyboardType={'numeric'}
            secureTextEntry={true}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin5: value }),
              this.props.value5(value)
                this.pin6ref.current?.focus();
            }}
          />
          <TextInput
            ref={this.pin6ref}
            value={pin6}
            style={Styles.verificationInput}
            secureTextEntry={true}
            keyboardType={'numeric'}
            maxLength={1}
            onChangeText={value => {
              this.setState({ pin6: value })
              this.props.value6(value)
            }}
          />

        </View>
      </>
    )
  }
}

export default Verification; 
import React, { Component } from 'react';
import {
  Image,
  TextInput,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RNS3 } from 'react-native-aws3';
import { connect } from 'react-redux';
import { updateUser } from '../../../Redux/Actions/profile';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../../../Components/Loader';
import Toast from 'react-native-simple-toast';



const option = {
  keyPrefix: "test/",
  bucket: 'feelin-moodboard',
  dirName: 'user',
  ACL: 'public-read',
  region: 'eu-north-1',
  accessKey: "AKIA5A4WEXNDVYDQYORS",
  secretKey: "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",
  successActionStatus: 201
}
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      lastName: '',
      email: '',
      passwordVisible: 1,
      password: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      photo: '',
      userID: '',
      loading: false,
      ImageSource: ''
    };
  }

  componentDidMount = async () => {
    let user_password = await AsyncStorage.getItem('password')
    let userData = this.props.getprofile?.userProfile?.data
    this.setState({
      email: userData?.email,
      fullName: userData?.name,
      password: user_password,
      userID: userData?._id,
      photo: userData?.photo,
      address: userData?.username
    })
  }

  changedValue = (values) => {
    this.setState({ passwordVisible: values })
  }

  async selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    try {
      launchImageLibrary(options, async response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response.uri };
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            ImageSource: source,
          });
          this.setState({ loading: true })
          const file = {
            uri: response.uri,
            name: response.fileName,
            type: response.type,
          }
          // const fileSource = response;
          const image = await RNS3.put(file, option);
          if (image.status === 201) {
            const address = image.body.postResponse.location;
            console.log("The S3 Response: Url is: ", address)
            this.setState({ photo: address })
            this.setState({ loading: false })
          }
        }
      });
    }
    catch (err) {
      Toast.show('Something Wrong KIndly Try Again');
      console.log("The Nafeel: ", err)
      this.setState({ loading: false })
    }
  }

  submit = async () => {
    let user_token = await AsyncStorage.getItem('token')
    const { fullName, lastName, password, address, city, state, zip, phone, photo, userID } = this.state

    const params = {
      userID: userID,
      name: fullName,
      password: password,
      username: address,
      photo: photo,
      token: user_token
    }

    this.props.profileUpdate(params)

  }

  render() {
    const { fullName, lastName, email, password, address, city, state, zip, loading, photo } = this.state
    const { loadingUpdateProfile } = this.props.getprofile
    return (
      <>
        <SafeAreaProvider>

          <SafeAreaView
            style={Styles.mainContainer}
            forceInset={{ bottom: 'never', top: 'never' }}>
            <ScrollView>
              <KeyboardAwareScrollView>
                <ImageBackground source={Images.profileBackground} style={Styles.headerImage}>

                  <View style={Styles.listWrapper}>
                    <TouchableOpacity
                      onPress={() => { this.props.navigation.goBack() }}
                    >
                      <Image source={Images.back} style={{ width: 25, height: 25, marginTop: 3, tintColor: Colors.White }} />
                    </TouchableOpacity>


                  </View>
                </ImageBackground>
                <View style={Styles.profileArea}>
                  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    {
                      photo ?
                        <Image source={{ uri: photo }} style={Styles.profileMainPicture1} />
                        :
                        <Image source={Images.ProfileMain} style={Styles.profileMainPicture} />
                    }
                    {
                      photo ?
                        <Image source={Images.editIcon} style={Styles.editIcon1} />
                        :
                        <Image source={Images.editIcon} style={Styles.editIcon} />

                    }
                  </TouchableOpacity>
                  {/* editIcon */}
                </View>

                <View style={Styles.mainWrapper}>

                  <View style={Styles.emailWrapper}>
                    <TextInput
                      style={Styles.emailInput}
                      value={address}
                      placeholder={'Username'}
                      placeholderTextColor={Colors.ok}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ address: value })
                      }}
                    />
                  </View>

                  <View style={Styles.emailWrapper}>
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

                  <View style={Styles.emailWrapper}>
                    <TextInput
                      style={Styles.emailInput}
                      value={email}
                      editable={false}
                      placeholder={'Email'}
                      placeholderTextColor={Colors.ok}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ email: value })
                      }}
                    />
                  </View>

                  <View style={Styles.emailWrapper}>
                    <TextInput
                      style={Styles.emailInput}
                      value={password}
                      secureTextEntry={this.state.passwordVisible == 1 ? true : false}
                      placeholder={'Password'}
                      placeholderTextColor={Colors.ok}
                      autoCapitalize='none'
                      onChangeText={(value) => {
                        this.setState({ password: value })
                      }}
                    />
                    {
                      this.state.passwordVisible == 1 ?
                        <TouchableOpacity onPress={() => this.changedValue(2)}>
                          <Image source={Images.passwordInvisible} style={Styles.inputImageLock} />
                        </TouchableOpacity> :
                        <TouchableOpacity onPress={() => this.changedValue(1)}>
                          <Image source={Images.password} style={Styles.inputImageLock} />
                        </TouchableOpacity>
                    }
                  </View>




                  <TouchableOpacity onPress={this.submit}>
                    <LinearGradient colors={['#B78D5F', '#C69A6B']}
                      style={Styles.buttonCreate}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text style={Styles.buttonText}>{Constants.SAVE_PROFILE}</Text>
                    </LinearGradient>
                  </TouchableOpacity>


                </View>
              </KeyboardAwareScrollView>
            </ScrollView>
            {
              loading ? <Loader /> : null
            }
            {
              loadingUpdateProfile ? <Loader /> : null
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    getprofile: state.getprofile
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    profileUpdate: (user) => dispatch(updateUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
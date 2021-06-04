import React, { Component, createRef } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from "../../Styles/Colors";

class ShowAddList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    const { search } = this.state
    return (
      <>
        <ScrollView>
          <View style={Styles.mainWrapper}>

            <View style={Styles.mainWrapperContainer}>
              <View style={Styles.emailWrapper}>
                <Image source={Images.Search} style={Styles.inputImage} />
                <TextInput
                  style={Styles.emailInput}
                  value={search}
                  placeholder={'Search here...'}
                  placeholderTextColor={Colors.ok}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    this.setState({ search: value })
                  }}
                />
              </View>

              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.SearchFavourites} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'My Favorites'}</Text>
              </View>
              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.My_Search_Uploads} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'My Uploads'}</Text>
              </View>

              <Text style={{
                fontSize: 23, marginLeft: 8,
                marginTop: 20,
                fontWeight: '600', textDecorationLine: 'underline'
              }}>{'Categories'}</Text>

              <View style={{ flexDirection: 'row', marginTop: 35, marginLeft: 15 }}>
                <Image source={Images.SofaMenu} style={{ width: 25, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Sofas'}</Text>
              </View>
              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Chairs} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Chairs'}</Text>
              </View>

              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Tables} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Tables'}</Text>
              </View>

              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Beds} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Beds'}</Text>
              </View>

              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Storage} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Storage'}</Text>
              </View>

              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Outdoor} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Outdoor'}</Text>
              </View>


              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Lighting} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Lighting'}</Text>
              </View>



              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Art} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Art'}</Text>
              </View>


              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Accessories} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Accessories'}</Text>
              </View>

              <View style={Styles.seperator} />
              <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                <Image source={Images.Search_Electronics} style={{ width: 22, height: 22 }} />
                <Text style={{ fontSize: 20, marginLeft: 8, fontWeight: '400' }}>{'Electronics'}</Text>
              </View>

            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

export default ShowAddList; 
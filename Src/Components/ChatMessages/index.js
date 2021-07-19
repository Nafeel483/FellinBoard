import React, { useEffect, useState } from 'react';
import styles from './Styles';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground
} from 'react-native';
import moment from 'moment';
import Images from '../../Styles/Images';
export const ShowChatMessages = ({ showmessage, userId, oppositeUser }) => {
  const { message, chatInfoavatar } = showmessage;
  var date = new Date()
  const recieved = userId;

  return <View style={recieved ? styles.receivedWrapper : styles.chatMessageWrapper}>
    <View style={recieved ? styles.receivedInnerWrapper : styles.chatMessageInner}>
      <View style={styles.chatMessageHeader}>
        {recieved ?
          <View style={styles.avatarName}>
            {/* <Text style={styles.textName}>{"Rosa Morales Aspillaga"}</Text> */}
            <View style={{
              flexDirection: 'row',
              marginLeft: 5,
            }}>
              <Image source={Images?.check} style={styles.ImageChecing} />
              <Image source={Images?.check} style={styles.ImageChecing} />
            </View>
          </View>
          :
          <View style={{
            flexDirection: 'row',
            marginLeft: '60%'
          }}>
            <Image source={Images?.check} style={styles.ImageChecing} />
            {/* <Text style={styles.textName1}>{"Dr, José"}</Text> */}
          </View>
        }
      </View>

    
        <>
          <View style={recieved ? styles.chatMessageHeaderText : styles.chatMessageHeaderText1}>
            <Text style={{ color: recieved ? 'white' : 'black', margin: 10 }}>{message}</Text>
            <Text style={recieved ? styles.DateWrapperRecieved : styles.DateWrapper}>{moment(date).format("hh:mm a")}</Text>

          </View>
        </>
    </View>
  </View >

}
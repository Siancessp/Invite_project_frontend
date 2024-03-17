import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Notification = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={28} color="#B84747" />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 22,
            fontWeight: '400',
            color: 'black',
          }}>
          Notifications
        </Text>
      </View>
      <View style={{height:Dimensions.get("window").height*0.8, justifyContent:"center", alignSelf:"center", alignItems:"center"}}>
        <Image source={require("../../assets/Artwork.png")}/>
        <Text style={{color:"gray"}}>No notification avilable</Text>
      </View>
    </ScrollView>
  )
}

export default Notification

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      },
})
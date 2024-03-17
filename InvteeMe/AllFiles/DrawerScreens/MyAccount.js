import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const MyAccount = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          My Account
        </Text>
      </View>
      <View
        style={{marginVertical: 20, marginHorizontal: 20, flexDirection: 'row'}}
        activeOpacity={0.7}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{width: 80, aspectRatio: 1, borderRadius: 100}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Ritesh Kumar
          </Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            Ritesh Kumar
          </Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            5489756321
          </Text>
        </View>
      </View>

      <View style={styles.box}>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Octicons name="history" size={24} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Ionicons name="wallet-outline" size={28} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>Wallet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Feather name="download" size={24} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Octicons name="credit-card" size={24} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>Cards</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Octicons name="heart" size={24} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>Wishlists</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.b1}>
           <Ionicons name="settings-outline" size={28} color="#B84747" style={styles.icon1}/>
           <Text style={styles.text1}>Settings</Text>
        </TouchableOpacity>
      </View>
     
      <Text style={{margin:20}}></Text>
    </ScrollView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  box:{
    margin:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  b1:{
    backgroundColor:"white",
    height:Dimensions.get("window").height*0.15,
    width:Dimensions.get("window").width*0.43,
    justifyContent:"center",
    borderRadius:15,
    borderColor:"#B84747",
    borderWidth:0.5,
    elevation:10,
  },
  text1:{
    color:"black",
    fontSize:18,
    marginLeft:20,
    marginTop:10
  },
  icon1:{
    marginLeft:20
  }
});

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,

} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const CustomDrawer = ({navigation}) => {
  // const navigateToScreen = (screenName) => {
  //   navigation.navigate(screenName);
  // };

  return (
    <View style={{flex: 1}}>



      <TouchableOpacity style={{marginVertical:20, marginHorizontal:20}} activeOpacity={0.7}onPress={() => navigation.navigate('Profile')}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{width: 70, aspectRatio: 1, borderRadius: 100}}
      />
      <Text style={{color:"black", fontSize:20, marginTop:10, fontWeight:"600"}}>Ritesh Kumar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('MyAccount')}>
        <Feather name="user" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('PartsOrder')}>
        <Feather name="calendar" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>Calender</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('Terms')}>
        <Feather name="heart" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Feather name="mail" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('Setting')}>
        <Feather name="settings" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('ContactUs')}>
        <Feather
          name="help-circle"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.drawerItems}>Helps & FAQs</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.navigate('ContactUs')}>
        <Feather name="log-out" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerItems}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('WebViewScreen')} style={styles.pro}>
      <MaterialCommunityIcons name="crown-outline" size={24} color="black" />
          <Text
            style={{ fontSize:15, marginLeft:10, fontWeight:"500", color:"black"}}>
            Upgrade to pro
          </Text>
          {/* </Hyperlink> */}
        </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:20,
    marginVertical:15
  },
  drawerItems: {
    fontSize: 15,
    marginLeft: 10,
    color: 'black',
  },
  icon: {
    width: 40,
  },
  pro:{
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal:20,
    alignItems:"center",
    width:Dimensions.get('screen').width * 0.45,
    borderRadius: 8,
    top: Dimensions.get('screen').height * 0.04,
    flexDirection:"row"
  }
});

export default CustomDrawer;

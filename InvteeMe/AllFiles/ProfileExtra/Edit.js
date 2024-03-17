import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Edit = ({navigation}) => {
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
          Edit Profile
        </Text>
      </View>
      <View style={styles.b1}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{width: 100, aspectRatio: 1, borderRadius: 100}}
          />
          <View style={styles.in}>
            <Text style={styles.t1}>Edit Profile Photo{'  '}</Text>
            <Feather name="edit-2" size={14} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{
              width: Dimensions.get('window').width * 0.7,
              height: Dimensions.get('window').height * 0.18,
              borderRadius: 5,
            }}
          />
          <View style={styles.in}>
            <Text style={styles.t1}>Edit Cover Photo{'  '}</Text>
            <Feather name="edit-2" size={14} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.box1}>
        <View style={styles.box2}>
          <Text style={styles.text3}>Name</Text>
          <TextInput placeholder="Ritesh" style={styles.input} />
        </View>
        <View style={styles.box2}>
          <Text style={styles.text3}>Bio</Text>
          <TextInput placeholder="Bio" style={styles.input} />
        </View>
        <View style={styles.box2}>
          <Text style={styles.text3}>Phone Number</Text>
          <View style={styles.line}>
          <TextInput placeholder="1236987450" style={styles.input} />
            <TouchableOpacity>
              <Text style={styles.text4}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text3}>Email</Text>
          <View style={styles.line}>
          <TextInput placeholder="Email Address" style={styles.input} />
            <TouchableOpacity>
              <Text style={styles.text4}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text2}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={{...styles.text4, letterSpacing:2}}>Deactivate Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  b1: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  t1: {
    color: 'black',
    fontSize: 16,
  },
  in: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  text1: {
    fontSize: 25,
    color: 'black',
  },
  text2: {
    fontSize: 20,
    color: '#4C4C4C',
  },
  text3: {
    fontSize: 12,
    color: '#4C4C4C',
    fontWeight:"500"
  },
  text4: {
    fontSize: 13,
    color: '#D70000',
  },
  box1: {marginTop: 10},
  box2: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop:20,
    elevation:10
  },
  box3: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    fontSize: 15,
    width: Dimensions.get('window').width * 0.5,
    color: 'black',
    padding:0
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#FFC582',
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    height: 50 ,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    elevation:10
  },
  btn2: {
    marginTop: 20,
    alignSelf: 'center',
    marginBottom:50,
  },
  line:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

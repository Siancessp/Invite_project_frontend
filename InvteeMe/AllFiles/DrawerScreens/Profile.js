import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Profile = ({navigation}) => {
  const posts = [
    {
      id: 1,
      dp: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Ritesh Kumar',
      place: 'Japan',
      date: '12-01-2024',
      caption: 'Tour to Japan',
      photo: {
        uri:'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      like: 20,
      comment: 11,
    },
    {
      id: 2,
      dp: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Ritesh Kumar',
      place: 'Japan',
      date: '12-01-2024',
      caption: 'Tour to Japan',
      photo: {
        uri:'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      like: 20,
      comment: 11,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.img}>
          <Image
            source={{
              uri:'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={styles.full}>
          <View style={styles.img2}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={styles.img3}
            />
          </View>
          <View style={{bottom: 55}}>
            <View style={{alignSelf: 'center', alignItems: 'center',}}>
              <Text style={styles.t1}>Ritesh Kumar</Text>
              <Text style={styles.t2}>Event Manager</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: '#B84747',
                  marginRight: 10,
                }} onPress={()=> navigation.navigate("ChatFront")} >
                <Text style={styles.t3}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: '#FFEFEF',
                  marginLeft: 10,
                }}
                onPress={() => navigation.navigate('Edit')}>
                <Text style={{...styles.t3, color: 'black'}}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.text1}>Posts</Text>

         
          {posts.map(items => (
          <View key={items.id} style={styles.post1}>
            <View style={styles.postTop}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={items.dp}
                  style={{height: 50, borderRadius: 100, aspectRatio: 1}}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.text3}>{items.name}</Text>
                  <Text style={styles.text4}>{items.place}</Text>
                  <Text style={{color: 'gray', fontSize: 12}}>
                    {items.date}
                  </Text>
                </View>
              </View>
              <Ionicons name="share-social" size={25} color="#B84747" style={{paddingTop:10}}/>
            </View>
            <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 10}}>
              {items.caption}
            </Text>
            <View
              style={{
                height: Dimensions.get('window').height * 0.5,
                width: '100%',
                marginTop: 10,
              }}>
              <Image
                source={items.photo}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View style={styles.count}>
              <View style={styles.like}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="heart"
                    size={30}
                    color="#B84747"
                    style={{marginLeft: 5}}
                  />
                </TouchableOpacity>
                <Text style={styles.likeCount}>216</Text>
                <TouchableOpacity>
                  <Feather
                    name="message-circle"
                    size={28}
                    color="#B84747"
                    style={{marginLeft: 20}}
                  />
                </TouchableOpacity>
                <Text style={styles.likeCount}>216</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={30}
                  color="#B84747"
                  style={{}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text5}>1Hour ago</Text>
          </View>
        ))}
        </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 100,
          padding: 5,
          margin: 20,
        }}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color="#B84747" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  img: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
    backgroundColor: 'red',
  },
  full: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: Dimensions.get('window').width,
    bottom: 50,
  },
  img2: {
    width: Dimensions.get('window').width * 0.32,
    aspectRatio: 1,
    borderRadius: 100,
    alignSelf: 'center',
    bottom: 60,
    padding: 4,
    backgroundColor: 'white',
  },
  img3: {
    height: '100%',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  t1: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    letterSpacing: 1,
    width:Dimensions.get('window').width*0.9,
    textAlign:"center"
  },
  t2: {
    color: 'gray',
    fontWeight: '500',
    letterSpacing: 1,
  },
  t3: {
    color: 'white',
  },
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    elevation: 10,
    borderRadius: 50,
  },
  text1: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
    borderBottomWidth:0.7,
    paddingVertical:10,
    paddingHorizontal:10,
    paddingTop:20,
    borderColor:"#a6a6a6",
    marginHorizontal:10
  },
  text3: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  text4: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  text5: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 10,
    bottom: 10,
  },
 post1: {
    backgroundColor: 'white',
    marginVertical: 5,
  },
  postTop: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  count: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: '#B84747',
  },
});

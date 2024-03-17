import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = ({navigation}) => {
  const posts = [
    {
      id: 1,
      dp: {
        uri:'https://media.licdn.com/dms/image/D4D03AQH-qAjVFB2-4w/profile-displayphoto-shrink_800_800/0/1692945953189?e=1714003200&v=beta&t=sW1spPrRAVzKAsGcA5VW1E0JBwSHfjr-Tdpr5EQsh1w'
      },
      name: 'Madhurima Burman',
      place: 'Pune',
      date: '12-01-2024',
      caption: 'Last Night Concert',
      photo: {
        uri:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
        padding: 10,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
      }}>
      <View style={styles.head}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-unfold" size={26} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 30,
              fontWeight: '800',
              color: 'black',
            }}>
            Invetxx
          </Text>
        </View>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatFront')}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <SimpleLineIcons
              name="bell"
              size={25}
              color="black"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
        <View style={styles.time}>
          <View style={styles.time2}>
            <View style={styles.b1}>
              <Text style={styles.text1}>Days</Text>
              <Text style={styles.text2}>216</Text>
            </View>
            <View style={styles.b1}>
              <Text style={styles.text1}>Hours</Text>
              <Text style={styles.text2}>02</Text>
            </View>
            <View style={styles.b1}>
              <Text style={styles.text1}>Minutes</Text>
              <Text style={styles.text2}>46</Text>
            </View>
            <View style={styles.b1}>
              <Text style={styles.text1}>Seconds</Text>
              <Text style={styles.text2}>11</Text>
            </View>
          </View>
          <View style={styles.b2}>
            <Image
              source={require('../../assets/mar.png')}
              style={styles.img1}
            />
            <Text style={styles.text1}>Wedding</Text>
            <Text style={styles.text2}>11/11/2025</Text>
          </View>
        </View>
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
        <Text style={{margin: 50}}></Text>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  time: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    width: Dimensions.get('window').width * 0.8,
  },
  time2: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  b1: {
    padding: 10,
    alignItems: 'center',
  },
  b2: {
    flexDirection: 'row',
    backgroundColor: '#FFEFEF',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text1: {
    color: '#665858',
    fontSize: 15,
  },
  text2: {
    color: 'black',
  },
  text3: {
    color: 'black',
    fontSize: 16,
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
  img1: {},
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

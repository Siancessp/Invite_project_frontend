import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tour = ({navigation}) => {
  const posts = [
    {
      id: 1,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance Battle',
      day: 11,
      night: 11,
    },
    {
      id: 2,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance',
      day: 11,
      night: 11,
    },
    {
      id: 3,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance',
      day: 11,
      night: 11,
    },
    {
      id: 4,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance',
      day: 11,
      night: 11,
    },
  ];

  const card = [
    {
      id: 1,
      name: 'Bali Tour',
      day: 11,
      night: 11,
      date: '17 March 2024',
      photo: {
        uri: 'https://s3.amazonaws.com/cdn.matadornetwork.com/blogs/1/2019/02/Ulun-Danu-Beratan-Temple-Bali-1200x850.jpg',
      },
    },
    {
      id: 2,
      name: 'Museum',
      day: 11,
      night: 11,
      date: '17 March 2024',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 3,
      name: 'Parties',
      day: 11,
      night: 11,
      date: '17 March 2024',
      photo: {
        uri: 'https://s3.amazonaws.com/cdn.matadornetwork.com/blogs/1/2019/02/Ulun-Danu-Beratan-Temple-Bali-1200x850.jpg',
      },
    },
    {
      id: 4,
      name: 'Museum',
      day: 11,
      night: 11,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 5,
      name: 'Parties',
      day: 11,
      night: 11,
      date: '17 March 2024',
      photo: {
        uri: 'https://s3.amazonaws.com/cdn.matadornetwork.com/blogs/1/2019/02/Ulun-Danu-Beratan-Temple-Bali-1200x850.jpg',
      },
    },
    {
      id: 6,
      name: 'Museum',
      day: 11,
      night: 11,
      date: '17 March 2024',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  ];

  return (
    <View style={{}}>
    <ImageBackground 
      source={require("../../assets/tour.jpg")}
      style={{height: Dimensions.get('window').height,padding:10}}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.t1}>
          Where you wanna enjoy your
          <Text style={{color: '#B84747'}}> Vacation</Text>?
        </Text>
        <View style={styles.box1}>
          <TextInput placeholder="Search here..." style={styles.input} />
          <MaterialIcons name="search" size={25} color="#B84747" />
        </View>
        <View style={styles.l1}>
          <Text style={styles.t2}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.t3}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {posts.map(items => (
            <TouchableOpacity
              style={styles.box2}
              onPress={() => navigation.navigate('TourDetails', {name: items.name})}>
              <ImageBackground source={items.photo} style={styles.img} imageStyle={{borderRadius:10}}>
                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="heart" size={16} color="#B84747" />
                </TouchableOpacity>
              </ImageBackground>
              <View style={{padding: 10}}>
                <Text style={styles.t4}>{items.name}</Text>

                <Text style={styles.t7}>
                  {items.day} days, {items.night} nights
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{...styles.t2, marginTop: 10, marginHorizontal: 20}}>
          Top Destinations
        </Text>
        {card.map(items => (
          <TouchableOpacity
            style={{
              height: Dimensions.get('window').height * 0.22,
              width: Dimensions.get('window').width * 0.9,
              alignSelf: 'center',
              margin: 10,
              borderRadius: 30,
              backgroundColor: 'black',
            }}
            activeOpacity={0.6}>
            <ImageBackground
              source={items.photo}
              style={{height: '100%', width: '100%'}}
              imageStyle={{borderRadius: 30, opacity: 0.6}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    paddingLeft:20,
                    
                  }}>
                  {items.date}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                  }}>
                  <TouchableOpacity style={styles.icon}>
                    <Entypo name="share" size={18} color="#B84747" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.icon}>
                    <AntDesign name="hearto" size={18} color="#B84747" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  color: 'white',
                  paddingLeft: 20,
                  fontSize: 22,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                {items.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 20,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.t9}>
                  {items.day} days, {items.night} nights
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFEFEF',
                    borderRadius: 30,
                    marginRight: 15,
                    paddingHorizontal: 15,
                    paddingVertical: 12,
                  }}>
                  <Text style={{...styles.t9, color:"#B84747"}}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}

        <Text style={{marginVertical: 50}}></Text>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Tour;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1: {
    color: 'black',
    letterSpacing: 2,
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 20,
  },
  t2: {
    color: 'black',
    letterSpacing: 2,
    fontSize: 22,
    fontWeight: '700',
  },
  t3: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
  },
  t4: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  t5: {
    color: '#585858',
    fontSize: 14,
    fontWeight: '500',
  },
  t6: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
  t7: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
  },
  t8: {
    color: '#B84747',
    fontSize: 15,
    fontWeight: '400',
  },
  t9: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  cat: {
    backgroundColor: '#FFEFEF',
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 10,
    marginVertical: 20,
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.85,
    alignSelf: 'center',
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 40,
    justifyContent: 'space-between',
    elevation: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: Dimensions.get('window').width * 0.5,
    color: 'black',
  },
  l1: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    padding: 4,
    borderRadius: 100,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  img: {
    height: Dimensions.get('window').height * 0.18,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  box2: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get('window').width * 0.4,
  },
});

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

const Event = ({navigation}) => {
  const posts = [
    {
      id: 1,
      photo: {
        uri:'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      place: 'Chennai',
      name: 'Dance Battle',
      from: '12',
      to: '18',
      month: 'Feb',
      year: '2023',
      booking: 20,
      posted: 11,
    },
    {
      id: 2,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      place: 'Chennai',
      name: 'Dance',
      from: '12',
      to: '18',
      month: 'Feb',
      year: '2023',
      booking: 60,
      posted: 11,
    },
    {
      id: 3,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      place: 'Chennai',
      name: 'Dance',
      from: '12',
      to: '18',
      month: 'Feb',
      year: '2023',
      booking: 60,
      posted: 11,
    },
    {
      id: 4,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      place: 'Chenddddrfgdgdfjh',
      name: 'Dance',
      from: '12',
      to: '18',
      month: 'Feb',
      year: '2023',
      booking: 60,
      posted: 11,
    },
  ];
  const cat = [
    {
      id: 1,
      catName: 'Parties',
    },
    {
      id: 2,
      catName: 'Museum',
    },
    {
      id: 3,
      catName: 'Parties',
    },
    {
      id: 4,
      catName: 'Museum',
    },
    {
      id: 5,
      catName: 'Parties',
    },
    {
      id: 6,
      catName: 'Museum',
    },
  ];

  const card = [
    {
      id: 1,
      name: 'Ram Mandir Inaguration',
      seats: '50',
      photo: {
        uri: 'https://th.bing.com/th/id/OIF.jHU4RpLiUMFMn92nmn6LHg?rs=1&pid=ImgDetMain',
      },
    },
    {
      id: 2,
      name: 'Museum',
      seats: '50',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 3,
      name: 'Parties',
      seats: '50',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 4,
      name: 'Museum',
      seats: '50',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 5,
      name: 'Parties',
      seats: '50',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
    {
      id: 6,
      name: 'Museum',
      seats: '50',
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  ];

  return (
    <View style={{}}>

      <ImageBackground 
      source={require("../../assets/event.jpg")}
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
          Discover Amazing<Text style={{color: '#B84747'}}> Events</Text>
        </Text>
        <View style={styles.box1}>
          <TextInput placeholder="Search here..." style={styles.input} />
          <MaterialIcons name="search" size={25} color="#B84747" />
        </View>
        <View style={styles.l1}>
          <Text style={styles.t2}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={styles.t3}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {posts.map(items => (
            <TouchableOpacity style={styles.box2} 
            onPress={() => navigation.navigate("Cards", {name:items.name})}
            >
              <ImageBackground source={items.photo} style={styles.img} imageStyle={{borderRadius:10, opacity:0.8, backgroundColor:"black"}}>
                <View style={styles.icon}>
                  <AntDesign name="heart" size={20} color="#B84747" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'gray',
                    borderRadius: 30,
                    padding: 1,
                    width: Dimensions.get('window').width * 0.23,
                    top: Dimensions.get('window').height * 0.07,
                    opacity: 0.9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 5,
                  }}>
                  <Entypo name="location" size={12} color="#fff" />
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'white',
                      width: Dimensions.get('window').width * 0.15,
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {' '}
                    {items.place}
                  </Text>
                </View>
              </ImageBackground>
              <View style={{padding: 10}}>
                <Text style={styles.t4}>{items.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                    marginLeft: 5,
                  }}>
                  <Ionicons name="calendar" size={16} color="#B84747" />
                  <Text style={styles.t5}> {items.from}-</Text>
                  <Text style={styles.t5}>{items.to} </Text>
                  <Text style={styles.t5}>{items.month}, </Text>
                  <Text style={styles.t5}>{items.year}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Image source={require('../../assets/group.png')} />
                  <Text style={styles.t6}> +{items.booking} bookings</Text>
                </View>
                <Text style={styles.t7}> {items.posted} weeks to go</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{...styles.t2, marginTop: 10, marginHorizontal: 20}}>
          Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cat.map(items => (
            <TouchableOpacity style={styles.cat} onPress={() => navigation.navigate("CategoryPage", {catName:items.catName})}>
              <Text style={styles.t8}>{items.catName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{...styles.t2, marginTop: 10, marginHorizontal: 20}}>
          This Month
        </Text>
        {card.map(items => (
          <TouchableOpacity
            style={{
              height: Dimensions.get('window').height * 0.22,
              width: Dimensions.get('window').width * 0.9,
              alignSelf: 'center',
              margin: 10,
              borderRadius: 20,
              backgroundColor: 'black',
            }} activeOpacity={0.6} 
            >
            <ImageBackground
              source={items.photo}
              style={{height: '100%', width: '100%'}}
              imageStyle={{borderRadius: 20, opacity: 0.7}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  padding: 10,
                }}>
                <TouchableOpacity style={styles.icon}>
                  <Entypo name="share" size={20} color="#B84747" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <AntDesign name="hearto" size={20} color="#B84747" />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: 'white',
                  paddingLeft: 20,
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: 10,
                }}>
                {items.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingLeft: 20,
                  justifyContent:"space-between"
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      ...styles.t9,
                      backgroundColor: 'red',
                      padding: 2,
                      marginRight: 5,
                    }}>
                    Limited
                  </Text>
                  <Text style={styles.t9}>{items.seats} seates remaining</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#B84747',
                    borderRadius: 30,
                    marginRight: 15,
                    top:10,
                    paddingHorizontal:18,
                    paddingVertical:15
                  }}>
                  <Text style={styles.t9}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}

        <Text style={{marginVertical:50}}></Text>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Event;

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
    fontSize: 25,
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
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  t6: {
    color: '#666666',
    fontSize: 11,
    fontWeight: '500',
  },
  t7: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
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
    padding: 5,
    borderRadius: 100,
    aspectRatio: 1,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
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
    margin: 5,
    marginTop:10,
    width: Dimensions.get('window').width * 0.4,
  },
});

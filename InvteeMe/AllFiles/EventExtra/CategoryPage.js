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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const CategoryPage = ({navigation, route}) => {
  const {catName} = route.params;

  const list = [
    {
      id: 1,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance Battle',
      date: '12 Feb, 2023',
      time: '02:33 PM',
    },
    {
      id: 2,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dancesejyfsegyfsgfjhseddddurftuy',
      date: '12 Feb, 2023',
      time: '02:33 PM',
    },
    {
      id: 3,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dancdvsnvvvvvvvvvvvvvvvvvvvvjajfkajjjjje',
      date: '12 Feb, 2023',
      time: '02:33 PM',
    },
    {
      id: 4,
      photo: {
        uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      name: 'Dance',
      date: '12 Feb, 2023',
      time: '02:33 PM',
    },
  ];

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
          {catName}
        </Text>
      </View>
      {list.map(items => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 10,
            elevation:10,
          }}>
          <Image
            source={items.photo}
            style={{
              height: Dimensions.get('window').height * 0.13,
              width: Dimensions.get('window').width * 0.2,
              borderRadius:20
            }}
          />
          <View style={{marginLeft:20, marginTop:10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.t1}>{items.date} </Text>
            <Text style={styles.t1}>{items.time} </Text>
          </View>
          <Text style={styles.t2} numberOfLines={2} ellipsizeMode='tail'>{items.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  t1: {
    color: '#B84747',
  },
  t2: {
    color: '#000',
    fontSize:20,
    fontWeight:"500",
    width: Dimensions.get('window').width * 0.58
  },
});

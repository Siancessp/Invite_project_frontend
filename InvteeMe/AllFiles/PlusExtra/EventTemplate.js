import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Background from './Background';

const EventTemplate = ({navigation}) => {
  const cat = [
    {
      id: 1,
      iconName: 'airplane',
    },
    {
      id: 2,
      iconName: 'hospital-building',
    },
    {
      id: 3,
      iconName: 'car-side',
    },
    {
      id: 4,
      iconName: 'food',
    },
    {
      id: 5,
      iconName: 'human-male',
    },
  ];
  const title = [
    {
      id: 1,
      name: 'Birthday',
    },
    {
      id: 2,
      name: 'Parties',
    },
    {
      id: 3,
      name: 'Holi',
    },
    {
      id: 4,
      name: 'Diwali',
    },
    {
      id: 5,
      name: 'Wedding',
    },
  ];

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
      }}>
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
          Pick your template
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:20}}>
        <View style={styles.box1}>
          <TextInput placeholder="Search here..." style={styles.input} />
          <MaterialIcons name="search" size={25} color="#B84747" />
        </View>
        <Text style={styles.t1}>Recommended</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{}}>
          {cat.map(items => (
            <TouchableOpacity style={styles.cat} activeOpacity={0.6}>
              <MaterialCommunityIcons
                name={items.iconName}
                size={24}
                color="#B84747"
                style={{}}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.t1}>Blank</Text>

        <TouchableOpacity
          style={styles.img}
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate('CreateEvent', {
              photo:
                'https://wallpapers.com/images/file/solid-white-background-au1ygbma6jyibvyf.jpg',
            })
          }>
          <ImageBackground
            source={
              (uri =
                'https://wallpapers.com/images/file/solid-white-background-au1ygbma6jyibvyf.jpg')
            }
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{borderRadius: 10}}>
            <AntDesign
              name="plus"
              size={40}
              color={'black'}
              style={styles.heart}
            />
          </ImageBackground>
        </TouchableOpacity>

        {title.map(items => (
          <View>
          <Text style={styles.t1}>{items.name}</Text>
          <Background/>
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

export default EventTemplate;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  cat: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FFEFEF',
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 10,
    paddingVertical: 5,
    marginVertical: 15,
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
  img: {
    width: Dimensions.get('window').width * 0.26,
    aspectRatio: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
    borderWidth:0.5
  },
});

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
import { useNavigation } from '@react-navigation/native';

const Background = () => {
  const navigation =useNavigation()
    const temp = [
    {
      id: 1,
      photo: {
        uri: 'https://img.freepik.com/free-photo/dark-abstract-texture_1017-5788.jpg?w=740&t=st=1708155573~exp=1708156173~hmac=e59d1fb091e189ccd4feb7e85c1aa855d802780d3df142b07299a807783467e1',
      },
    },
    {
      id: 2,
      photo: {
        uri: 'https://img.freepik.com/free-vector/indian-festival-raksha-bandhan-purple-background-with-3d-podium_1017-38972.jpg?w=740&t=st=1708155841~exp=1708156441~hmac=88760db25d7a7d68417e394fa4c987870b555f92a58c0e201e9eb7219f8610b4',
      },
    },
    {
      id: 3,
      photo: {
        uri: 'https://img.freepik.com/free-psd/abstract-background-design_1297-88.jpg?w=1060&t=st=1708155894~exp=1708156494~hmac=623def9de639b7d7d6b607e4f321fd231772295c2d045c60e6770ba63b121305',
      },
    },
    {
      id: 4,
      photo: {
        uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?w=1060&t=st=1708155511~exp=1708156111~hmac=672a94c24709235a8f5003c226cfc4de704b339fb4267f9041d7b9ce485074ad',
      },
    },
    {
      id: 5,
      photo: {
        uri: 'https://img.freepik.com/free-photo/blue-wall-background_53876-88663.jpg?w=360&t=st=1708155462~exp=1708156062~hmac=ca50b5b9c7a705a2370ad32a400d14c836abaf27fc889080e0177c3b0202bf31',
      },
    },
  ];
  return (

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{}}>
          {temp.map(items => (
            <TouchableOpacity style={styles.img} activeOpacity={0.6} onPress={()=> navigation.navigate("CreateEvent", {photo:items.photo})}>
              <ImageBackground
                source={items.photo}
                style={{width: '100%', height: '100%',}}
                imageStyle={{borderRadius:10, }}
              >
              <TouchableOpacity style={styles.icon}>
              <AntDesign name="heart" size={18} color={"gray"} style={styles.heart}/>
              </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>

  )
}

export default Background

const styles = StyleSheet.create({
    t1: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
      },
     img: {
        width: Dimensions.get('window').width * 0.26,
        aspectRatio: 1,
        borderRadius: 10,
        margin: 5,
      },
      heart:{
        
        
      },
      icon:{
        backgroundColor:"white",
        alignSelf:"flex-end",
        padding:3,
        borderRadius:100,
        margin:5,
        alignItems:"center",
        justifyContent:"center"
      }
})
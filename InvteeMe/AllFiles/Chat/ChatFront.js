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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatFront = ({navigation}) => {
  const chats = [
    {
      id: 1,
      name: 'Sweety Mondal',
      message: 'Hi',
      photo: {
        uri: 'https://media.licdn.com/dms/image/D4D03AQFnH5R4-8hoXQ/profile-displayphoto-shrink_800_800/0/1688574612293?e=1713398400&v=beta&t=fB88l_OVjyQqWPEHJ5imY9asdPtnoX5cg4YpBK0Xgt8',
      },
    },
    {
      id: 2,
      name: 'Madhurima Burman',
      message: 'Hi',
      photo: {
        uri: 'https://media.licdn.com/dms/image/D4D03AQH-qAjVFB2-4w/profile-displayphoto-shrink_800_800/0/1692945953189?e=1713398400&v=beta&t=9S7UXnvfZ9utL7mn-05-sqC4ctHZ-e3jRymmXZ-7Ii8',
      },
    },
    {
      id: 3,
      name: 'Masum Ali',
      message: 'Hi',
      photo: {
        uri: 'https://scontent.fccu11-1.fna.fbcdn.net/v/t39.30808-6/280473121_547546340365357_7808212270255232449_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=TqMPjzn5MGIAX_7Yt7s&_nc_ht=scontent.fccu11-1.fna&oh=00_AfArMPwExQjuBcCN9pVIeLITs-mEIvOHOkyT8Z8xf5N7SA&oe=65D36670',
      },
    },
    {
      id: 4,
      name: 'Sk Soriful',
      message: 'Hi',
      photo: {
        uri: 'https://scontent.fccu11-1.fna.fbcdn.net/v/t39.30808-6/295474751_784670802712462_5748947429715762206_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=783fdb&_nc_ohc=hktJWOidyC0AX-i2Rj3&_nc_ht=scontent.fccu11-1.fna&oh=00_AfAwgP-h6eC-MOOPXzSVKkSG5keR-OGYYBxQda_7KoAvjw&oe=65D471C0',
      },
    },
    {
      id: 5,
      name: 'Ashish Kumar',
      message: 'Hi',
      photo: {
        uri: 'https://www.instagram.com/p/C1P3vBjvmbcKJf5QfYcyfOzPLG3U8LZUFuzbfI0/'  },
    },
    {
      id: 6,
      name: 'Amir Arshad',
      message: 'Hi',
      photo: {
        uri: 'https://media.licdn.com/dms/image/D4D35AQE7Pie7q1r2AA/profile-framedphoto-shrink_800_800/0/1694700060620?e=1708693200&v=beta&t=VgYLbD5rO4ZYaDMOPwjPPRX3tU73POkZAlv9Kcq0-Ws',
      },
    },
  ];
  return (
    <View
      style={{
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
          Chat
        </Text>
        <Text></Text>
      </View>
      <ScrollView style={{margin: 10}}>
        <View style={styles.box1}>
          <TextInput placeholder="Search here..." style={styles.input} />
          <MaterialIcons name="search" size={25} color="#B84747" />
        </View>
        <>
          {chats.map(items => (
            <TouchableOpacity style={styles.box2} onPress={()=> navigation.navigate("ChatScreen")}>
              <Image source={items.photo} style={styles.img} />
              <View>
                <Text style={styles.t1}>{items.name}</Text>
                <Text>{items.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </>

        <Text style={{margin: 50}}></Text>
      </ScrollView>
    </View>
  );
};

export default ChatFront;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',padding:10
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
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 0.2,
    borderColor: '#d9d9d9',
    padding: 5,
  },
  img: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 100,
    marginRight: 20,
  },
  t1: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    fontFamily:"Roboto"
  },
});

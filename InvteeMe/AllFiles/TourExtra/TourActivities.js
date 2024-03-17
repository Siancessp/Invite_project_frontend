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
import Feather from 'react-native-vector-icons/Feather';

const TourActivities = ({navigation}) => {
  const act = [
    {
      id: 1,
      day: 1,
      date: '1 January',
      time1: '5:20',
      time2: '5:20',
      time3: '5:20',
      task1: 'wakeup',
      task2: 'swiming',
      task3: 'skydiving',
      photo: {
        uri: 'https://www.goodfreephotos.com/albums/united-states/wisconsin/madison/wisconsin-madison-artistic-sunrise.jpg',
      },
    },
    {
      id: 2,
      day: 2,
      date: '2 January',
      time1: '5:20',
      time2: '5:20',
      time3: '5:20',
      task1: 'wakeup',
      task2: 'swiming',
      task3: 'skydiving',
      photo: {
        uri: 'https://www.goodfreephotos.com/albums/united-states/wisconsin/madison/wisconsin-madison-artistic-sunrise.jpg',
      },
    },
    {
      id: 3,
      day: 3,
      date: '3 January',
      time1: '5:20',
      time2: '5:20',
      time3: '5:20',
      task1: 'wakeup',
      task2: 'swiming',
      task3: 'skydiving',
      photo: {
        uri: 'https://www.goodfreephotos.com/albums/united-states/wisconsin/madison/wisconsin-madison-artistic-sunrise.jpg',
      },
    },
  ];
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
        padding: 10,
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
          Activities
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {act.map(items => (
          <View style={{marginTop: 20,}}>
            <View style={{borderBottomWidth: 1, alignItems: 'center',}}>
              <Text style={styles.t1}>Day {items.day}</Text>
              <Text style={styles.t2}>{items.date}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  width: Dimensions.get('window').width * 0.2,
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="clock" size={18} color="#B84747" />
                <Text style={styles.t3}>{items.time1}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  width: Dimensions.get('window').width * 0.6,
                  justifyContent: 'space-between',
                  padding:10,
                  
                }}>
                <Text style={styles.t4}>{items.task1}</Text>
                <Image
                  source={items.photo}
                  style={{width: 30, aspectRatio: 1, borderRadius: 100}}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  width: Dimensions.get('window').width * 0.2,
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="clock" size={18} color="#B84747" />
                <Text style={styles.t3}>{items.time1}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  width: Dimensions.get('window').width * 0.6,
                  justifyContent: 'space-between',
                  padding:10,
                  
                }}>
                <Text style={styles.t4}>{items.task1}</Text>
                <Image
                  source={items.photo}
                  style={{width: 30, aspectRatio: 1, borderRadius: 100}}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  width: Dimensions.get('window').width * 0.2,
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="clock" size={18} color="#B84747" />
                <Text style={styles.t3}>{items.time1}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: Dimensions.get('window').height * 0.07,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#B84747',
                  borderRadius: 30,
                  width: Dimensions.get('window').width * 0.6,
                  justifyContent: 'space-between',
                  padding:10,
                  
                }}>
                <Text style={styles.t4}>{items.task1}</Text>
                <Image
                  source={items.photo}
                  style={{width: 30, aspectRatio: 1, borderRadius: 100}}
                />
              </View>
            </View>
          </View>
        ))}
        <Text style={{margin: 30}}></Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.box3}
        onPress={() => navigation.navigate('TourBooking')}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TourActivities;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  t2: {
    fontSize: 14,
    color: '#333333',
    marginBottom:6
  },
  t3: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 10,
  },
  t4: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
  },
  box3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B84747',
    width: Dimensions.get('window').width * 0.9,
    // height: Dimensions.get('window').height * 0.8,
    padding: 15,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.9,
    zIndex: 999,
    borderRadius: 50,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

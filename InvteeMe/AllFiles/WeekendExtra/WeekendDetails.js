import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {SliderBox} from 'react-native-image-slider-box';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Feather from 'react-native-vector-icons/Feather';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import Entypo from 'react-native-vector-icons/Entypo';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  
  const WeekendDetails = ({navigation, route}) => {
    const {name} = route.params;
    const [showFullText, setShowFullText] = useState(false);
  
    const toggleShowFullText = () => {
      setShowFullText(!showFullText);
    };
  
    const posts = [
      {
        id: 1,
        iconName: 'airplane',
        name: 'Dance Battle',
      },
      {
        id: 2,
        iconName: 'hospital-building',
        name: 'Dance',
      },
      {
        id: 3,
        iconName: 'car-side',
        name: 'Dance',
      },
      {
        id: 4,
        iconName: 'food',
        name: 'Dance',
      },
      {
        id: 5,
        iconName: 'human-male',
        name: 'Dance',
      },
    ];
    const description =
      ' VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.';
  
    const images = [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree',
    ];
    return (
      <View>
        <ScrollView
          style={{backgroundColor: 'white'}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <SliderBox
              images={images}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              autoplay
              circleLoop
              sliderBoxHeight={350}
              dotStyle={{
                marginBottom: 70,
                width: 10,
                height: 10,
                borderRadius: 15,
              }}
              dotColor="#B84747"
              inactiveDotColor="#90A4AE"
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              borderRadius: 20,
              bottom: 60,
              padding: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 8,
              }}>
              <View>
                <Text style={styles.t1}>{name}</Text>
  
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Ionicons name="location" size={18} color="#B84747" />
                  <Text style={styles.t2}>Chennai</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Feather name="clock" size={18} color="#B84747" />
                  <Text style={styles.t2}>11:00AM -</Text>
                  <Text style={{...styles.t2, marginLeft: 0}}>11:00PM</Text>
                </View>
              </View>
  
              <View style={styles.box1}>
                <Text style={styles.t3}>7 - 14</Text>
                <Text style={styles.t4}>March</Text>
                <Text style={styles.t4}>2024</Text>
              </View>
            </View>
  
            <Text style={{...styles.t6, paddingHorizontal: 8}}>About Event</Text>
  
            <Text style={styles.t5} numberOfLines={showFullText ? undefined : 3}>
              {description}
            </Text>
            {description.length > 100 && (
              <TouchableOpacity onPress={toggleShowFullText}>
                <Text style={{color: 'blue', paddingHorizontal: 8}}>
                  {showFullText ? 'Show Less' : 'Show More'}
                </Text>
              </TouchableOpacity>
            )}
            
  
            <Text style={{...styles.t6, marginTop: 15}}>About Organizer</Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.img1}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1610973374471-e667335f1b39?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                    style={styles.img2}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.t7}>Ritesh Kumar</Text>
                  <Text style={{...styles.t2, marginLeft: 0}}>Ritesh Kumar</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={{marginRight: 20}}>
                  <FontAwesome name="phone" size={25} color="#B84747" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="chatbox-ellipses" size={25} color="#B84747" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{...styles.t6, marginTop: 15}}>Package Facilities</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}>
              {posts.map(items => (
                <View style={{margin: 10, alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name={items.iconName}
                    size={24}
                    color="#B84747"
                    style={{
                      backgroundColor: '#FFEFEF',
                      padding: 12,
                      borderRadius: 5,
                    }}
                  />
                  <Text>{items.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 8,
            position: 'absolute',
            width: Dimensions.get('window').width,
            zIndex: 99999,
          }}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="#B84747" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="hearto" size={20} color="#B84747" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Entypo name="share" size={20} color="#B84747" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={{color: '#B84747', fontSize: 20, fontWeight: '500'}}>
            ₹3000{' '}
            <Text style={{fontSize: 14, color: '#585858', fontWeight: '400'}}>
              /per person{' '}
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('WeekendActivities')}>
            <Text style={{color: 'white', fontSize: 18}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default WeekendDetails;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    t1: {
      color: 'black',
      fontSize: 22,
      fontWeight: '700',
      letterSpacing: 1,
    },
    t2: {
      color: '#585858',
      fontSize: 14,
      marginLeft: 10,
    },
    t3: {
      color: '#B84747',
      fontSize: 28,
      fontWeight: '700',
    },
    t4: {
      color: '#585858',
      fontSize: 15,
      fontWeight: '500',
    },
    t5: {
      color: 'black',
      fontSize: 14,
      paddingHorizontal: 8,
    },
    t6: {
      color: 'black',
      fontSize: 17,
      fontWeight: '500',
    },
    t7: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
    },
    box1: {
      backgroundColor: '#FFEFEF',
      padding: 10,
      paddingHorizontal: 12,
      alignItems: 'center',
      elevation: 10,
      borderRadius: 10,
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
    img1: {
      width: Dimensions.get('window').width * 0.15,
      aspectRatio: 1,
      borderRadius: 100,
      alignSelf: 'center',
    },
    img2: {
      height: '100%',
      width: '100%',
      aspectRatio: 1,
      borderRadius: 100,
    },
    box2: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFEFEF',
      width: Dimensions.get('window').width * 0.9,
      // height: Dimensions.get('window').height * 0.8,
      padding: 10,
      position: 'absolute',
      top: Dimensions.get('window').height * 0.9,
      alignSelf: 'center',
      justifyContent: 'space-between',
      zIndex: 999,
      borderRadius: 50,
      elevation: 10,
      paddingHorizontal: 20,
    },
    btn: {
      backgroundColor: '#B84747',
      padding: 5,
      borderRadius: 25,
      paddingHorizontal: 15,
    },
  });
  
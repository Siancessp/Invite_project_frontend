import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import DropDownPicker from 'react-native-dropdown-picker';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import DateTimePicker from '@react-native-community/datetimepicker';
  
  const CreateTour = ({navigation, route}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate2, setSelectedDate2] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentvalue] = useState();
    const {photo = null} = route.params;
  
    const onChangeDate = (event, selectedDate) => {
        setDatePickerVisibility(false);
        if (selectedDate) {
          setSelectedDate(selectedDate);
          setSelectedDate2(selectedDate);
        }
      };
      const onChangeDate2 = (event, selectedDate2) => {
        setDatePickerVisibility2(false);
        if (selectedDate2) {
          setSelectedDate2(selectedDate2);
        }
      };
    
      const calculateDateDifference = () => {
        const diffTime = Math.abs(selectedDate2 - selectedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      };
    
      const handleBookNow = () => {
        const diffDays = calculateDateDifference();
        navigation.navigate('PaymentDay', {diffDays});
        console.log(diffDays);
      };
  
    if (!photo) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>No photo provided</Text>
        </View>
      );
    }
  
    const items = [
      {label: 'VIP', value: '1'},
      {label: 'Normal', value: '2'},
      {label: 'High Class', value: '3'},
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
            Create Tour
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.img}>
            <Image
              source={photo}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={{margin: 15}}>
            <Text style={styles.t1}>About Event</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="write about the event"
                multiline
                numberOfLines={8}
                style={{alignSelf: 'flex-start', verticalAlign: 'top'}}
              />
            </View>
  
            <Text style={{...styles.t1, marginTop: 30}}>Event Name</Text>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={currentValue}
              setValue={val => setCurrentvalue(val)}
              placeholder="Select Type"
              maxHeight={200}
              style={{
                borderWidth: 1,
                borderColor: '#FFD2D2',
                height: 60,
                elevation: 10,
                borderRadius: 30,
                paddingHorizontal: 15,
              }}
              containerStyle={{height: 50, marginTop: 10, elevation: 10}}
              textStyle={styles.t2}
            />
  
            <View style={styles.line}>
              <View>
                <Text style={styles.t1}>Starting Date</Text>
              <TouchableOpacity
                style={styles.box}
                onPress={() => setDatePickerVisibility(true)}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.t2}>
                    {selectedDate.toLocaleDateString('en-GB')}
                  </Text>
                </View>
              </TouchableOpacity>
              {isDatePickerVisible && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
              </View>
              <View>
              <Text style={styles.t1}>Ending Date</Text>
 
              <TouchableOpacity
                style={styles.box}
                onPress={() => setDatePickerVisibility2(true)}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.t2}>
                    {selectedDate2.toLocaleDateString('en-GB')}
                  </Text>
                </View>
              </TouchableOpacity>
              {isDatePickerVisible2 && (
                <DateTimePicker
                  value={selectedDate2}
                  mode="date"
                  display="default"
                  onChange={onChangeDate2}
                  minimumDate={selectedDate}
                />
              )}
            
           
              </View>
              
            </View>
            <Text style={styles.t1}>Location</Text>
  
            <View style={styles.input1}>
              <TextInput
                placeholder="write about the event"
                multiline
                numberOfLines={8}
              //   style={{alignSelf: 'flex-start', verticalAlign: 'top'}}
              />
            </View>
          </View>
          <Text style={{margin:50}}></Text>
        </ScrollView>
        <TouchableOpacity
            style={styles.box3}
            // onPress={() => navigation.navigate('WeekendBooking')}
            >
            <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
              Share
            </Text>
          </TouchableOpacity>
      </View>
    );
  };
  
  export default CreateTour;
  
  const styles = StyleSheet.create({
    top: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.21,
      borderRadius: 10,
      marginTop: 20,
      alignSelf: 'center',
    },
    t1: {
      fontSize: 17,
      marginTop: 15,
      color: '#585858',
      fontWeight: '600',
      marginLeft:10
    },
    t2: {
      fontSize: 15,
      color: '#333333',
      fontWeight: '500',
    },
    t3: {
      fontSize: 18,
      color: 'white',
      fontWeight: '600',
    },
    input: {
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 10,
      borderRadius: 10,
      paddingHorizontal: 10,
      height: Dimensions.get('window').height * 0.16,
      width: Dimensions.get('window').width * 0.9,
    },
    input1: {
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 10,
      borderRadius: 30,
      paddingHorizontal: 10,
      height: 60,
      width: Dimensions.get('window').width * 0.9,
      borderWidth: 1,
      borderColor: '#FFD2D2',
    },
    line: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    box: {
      backgroundColor: 'white',
      borderRadius: 30,
      paddingHorizontal: 30,
      height: 60,
      elevation: 10,
      borderWidth: 1,
      borderColor: '#FFD2D2',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
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
  
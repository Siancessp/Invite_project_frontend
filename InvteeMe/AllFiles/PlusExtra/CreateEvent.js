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
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = ({ navigation, route }) => {
  const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [isFromTimePickerVisible, setFromTimePickerVisibility] = useState(false);
  const [fromTime, setFromTime] = useState('From Time');
  const [isToTimePickerVisible, setToTimePickerVisibility] = useState(false);
  const [toTime, setToTime] = useState('To Time');
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const { photo = null } = route.params;

  const onChangeFromDate = (event, selectedDate) => {
    setFromDatePickerVisibility(false);
    if (selectedDate && selectedDate >= new Date()) {
      setFromDate(selectedDate);
    }
  };
  
  const onChangeToDate = (event, selectedDate) => {
    setToDatePickerVisibility(false);
    if (selectedDate && selectedDate >= new Date()) {
      setToDate(selectedDate);
    }
  };
  

  const onChangeFromTime = (event, selectedTime) => {
    setFromTimePickerVisibility(false);
    if (selectedTime) {
      setFromTime(selectedTime.toLocaleTimeString('en-US'));
    }
  };

 

  const onChangeToTime = (event, selectedTime) => {
    setToTimePickerVisibility(false);
    if (selectedTime) {
      setToTime(selectedTime.toLocaleTimeString('en-US'));
    }
  };

  if (!photo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No photo provided</Text>
      </View>
    );
  }

  const items = [
    { label: 'VIP', value: '1' },
    { label: 'Normal', value: '2' },
    { label: 'High Class', value: '3' },
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
          Create Event
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.img}>
          <Image
            source={photo}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
          />
        </View>
        <View style={{ margin: 15 }}>
          <Text style={styles.t1}>About Event</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="write about the event"
              multiline
              numberOfLines={8}
              style={{ alignSelf: 'flex-start', verticalAlign: 'top' }}
            />
          </View>

          <Text style={{ ...styles.t1, marginTop: 30 }}>Event Name</Text>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={val => setCurrentValue(val)}
            placeholder="Select Type"
            maxHeight={200}
            style={{
              borderWidth: 1,
              borderColor: '#FFD2D2',
              height: 50,
              elevation: 10,
              borderRadius: 30,
              paddingHorizontal: 15,
            }}
            containerStyle={{ height: 50, marginTop: 10, elevation: 10 }}
            textStyle={styles.t2}
          />

          <View style={styles.line}>
            <View>
              <Text style={styles.t1}>From Date</Text>

              <TouchableOpacity
                style={styles.box}
                onPress={() => setFromDatePickerVisibility(true)}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.t2}>
                    {fromDate.toLocaleDateString('en-GB')}
                  </Text>
                </View>
              </TouchableOpacity>
              {isFromDatePickerVisible && (
                <DateTimePicker
                  value={fromDate}
                  mode="date"
                  display="default"
                  onChange={onChangeFromDate}
                />
              )}
            </View>
            <View>
              <Text style={styles.t1}>To Date</Text>

              <TouchableOpacity
                style={styles.box}
                onPress={() => setToDatePickerVisibility(true)}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.t2}>
                    {toDate.toLocaleDateString('en-GB')}
                  </Text>
                </View>
              </TouchableOpacity>
              {isToDatePickerVisible && (
                <DateTimePicker
                  value={toDate}
                  mode="date"
                  display="default"
                  onChange={onChangeToDate}
                />
              )}
            </View>
          </View>
          <View style={styles.line}>
            <View>
              <Text style={styles.t1}>From Time</Text>

              <TouchableOpacity
                style={styles.box}
                onPress={() => setFromTimePickerVisibility(true)}>
                <Text style={styles.t2}>{fromTime}</Text>
              </TouchableOpacity>
              {isFromTimePickerVisible && (
                <DateTimePicker
                  testID="fromTimePicker"
                  value={fromDate}
                  mode="time"
                  is24Hour={true}
                  display="spinner"
                  onChange={onChangeFromTime}
                />
              )}
            </View>
            <View>
              <Text style={styles.t1}>To Time</Text>

              <TouchableOpacity
                style={styles.box}
                onPress={() => setToTimePickerVisibility(true)}>
                <Text style={styles.t2}>{toTime}</Text>
              </TouchableOpacity>
              {isToTimePickerVisible && (
                <DateTimePicker
                  testID="toTimePicker"
                  value={toDate}
                  mode="time"
                  is24Hour={true}
                  display="spinner"
                  onChange={onChangeToTime}
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
            />
          </View>

          <View style={{marginTop:30, flexDirection:"row", justifyContent:"space-between", marginHorizontal:10, alignItems:"center"}}>
            <Text style={styles.t4}>Price</Text>
            <View style={styles.input2}>
            <Text style={styles.t4}>₹</Text>
            <TextInput
              placeholder="write about the event"
              multiline
              numberOfLines={8}
            />
            </View>
          </View>
        </View>
        <Text style={{ margin: 50 }}></Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.box3}
      //   onPress={() => navigation.navigate('WeekendBooking')}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>
          Share
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateEvent;

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
    marginLeft: 10
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
  
  t4: {
    fontSize: 18,
    color: 'black',
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
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    borderWidth: 1,
    borderColor: '#FFD2D2',
  },
  input2: {
    backgroundColor: 'white',
    flexDirection:"row",
    alignItems:"center",
    elevation: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 50,
    width: Dimensions.get('window').width * 0.5,
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
    height: 50,
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
    width: Dimensions.get('window').width * 0.8,
    padding: 10,
    position: 'absolute',
    top: Dimensions.get('window').height * 0.9,
    zIndex: 999,
    borderRadius: 50,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

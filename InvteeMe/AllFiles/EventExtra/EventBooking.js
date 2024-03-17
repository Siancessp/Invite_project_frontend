import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

const EventBooking = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentvalue] = useState();
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentvalue2] = useState();

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

  const items = [
    {label: 'VIP', value: '1'},
    {label: 'Normal', value: '2'},
    {label: 'High Class', value: '3'},
  ];

  const dropdown1 = () => {
    setIsOpen(!isOpen);
    setIsOpen2(false); // Close the second dropdown when the first one is selected
  };

  const dropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false); // Close the first dropdown when the second one is selected
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
      }}>
      <ScrollView style={{margin: 10}}>
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
            Ticket Booking
          </Text>
        </View>
        <View style={{marginTop: 30, marginHorizontal: 10}}>
          <Text style={styles.t2}>Ticket Type</Text>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={dropdown1}
            value={currentValue}
            setValue={setCurrentvalue}
            placeholder="Select Type"
            maxHeight={160}
            style={{borderWidth: 0, height: 60, elevation: 10}}
            containerStyle={{height: 50, marginTop: 10, elevation: 10}}
            textStyle={styles.t1}
          />
          <Text style={{...styles.t2, marginTop: isOpen ? 160 : 20}}>Date</Text>
          <View style={styles.line}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => setDatePickerVisibility(true)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.t1}>
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

            <TouchableOpacity
              style={styles.box}
              onPress={() => setDatePickerVisibility2(true)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.t1}>
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
          <Text style={styles.t2}>Seat</Text>
          <View style={styles.box2}>
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={28} color="#B84747" />
            </TouchableOpacity>
            <Text style={styles.t1}>2</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={28} color="#B84747" />
            </TouchableOpacity>
          </View>
          <Text style={{...styles.t2, marginTop: 20}}>Ticket Type</Text>
          <DropDownPicker
            items={items}
            open={isOpen2}
            setOpen={dropdown2}
            value={currentValue2}
            setValue={setCurrentvalue2}
            placeholder="Select Type"
            maxHeight={200}
            style={{borderWidth: 0, height: 60, elevation: 10}}
            containerStyle={{height: 50, marginTop: 10, elevation: 10}}
            textStyle={styles.t1}
          />

          <Text style={{marginTop: isOpen ? 160 : 20}}></Text>
        </View>

        <Text style={{margin: 50}}></Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.box3}
        onPress={() => navigation.navigate('EventBooking')}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventBooking;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t2: {
    color: 'black',
    fontSize: 21,
    fontWeight: '500',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 35,
    elevation: 10,
  },
  t1: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    color: 'black',
  },
  box2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 10,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
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

import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const PlusButton = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    // console.log('Toggling modal'); // Add this log to check if toggleModal is being called
    setModalVisible(!modalVisible);
  };

  const handleOptionPress = option => {
    // console.log(`Option ${option} pressed`);
    setModalVisible(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(false); // Reset modalVisible when the screen gains focus
      return () => {
        setModalVisible(false);
      };
    }, []),
  );
  return (
    <View>
      <TouchableOpacity style={styles.icon} onPress={toggleModal}>
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
      <View style={styles.container}>
        {navigation.isFocused() && <PlusButton onPress={toggleModal} />}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log('Modal closed'); // Add this log to check if modal is being closed
            setModalVisible(false);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              
              
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                top:Dimensions.get("window").height*0.2,
                alignItems:"center",
                width:Dimensions.get("window").width*0.7,
                height:Dimensions.get("window").height*0.3,
                justifyContent:"center"
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EventTemplate')}
                style={styles.button}>
                <Text style={{fontSize: 20, color:"black", fontWeight:"700"}}>Event</Text>
              </TouchableOpacity>
              <View style={styles.line}/>
              <TouchableOpacity
                onPress={() => navigation.navigate('WeekendTemplate')}
                style={styles.button}>
                <Text style={{fontSize: 20, color:"black", fontWeight:"700",}}>Weekend</Text>
              </TouchableOpacity>
              <View style={styles.line}/>

              <TouchableOpacity
                onPress={() => navigation.navigate('TourTemplate')}
                style={styles.button}>
                <Text style={{fontSize: 20, color:"black", fontWeight:"700",}}>Tour</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleModal} style={{marginTop: 20, top:Dimensions.get("window").height*0.2}}>
              <AntDesign name="closecircleo" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  icon: {
    width: 60,
    aspectRatio: 1,
    backgroundColor: '#B84747',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  button: {
  },
  line:{
    borderWidth:1,
    width:Dimensions.get("window").height*0.25,
    marginVertical:15
  }
});

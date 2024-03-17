import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{}}>
      <KeyboardAvoidingView>
        <ImageBackground
          source={require('../../assets/up.jpg')}
          style={{height: Dimensions.get('window').height, padding: 30}}>
          <Text style={{...styles.text1}}>Plan your event...</Text>

          <View style={styles.box1}>
            <View style={styles.box2}>
              <MaterialIcons name="mail" size={25} color="#DF8888" />
              <TextInput placeholder="Email Address" style={styles.input} />
            </View>
            <View
              style={{
                ...styles.box2,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View style={styles.box3}>
                <MaterialIcons name="lock" size={25} color="#DF8888" />
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity>
                <MaterialIcons name="remove-red-eye" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.box2,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View style={styles.box3}>
                <MaterialIcons name="lock" size={25} color="#DF8888" />
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity>
                <MaterialIcons name="remove-red-eye" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Drawer')}>
              <Text style={styles.text2}>Sign up</Text>
            </TouchableOpacity>
            <View style={{...styles.box3, marginTop: 10}}>
              <Text style={{color: 'white', alignSelf: 'center'}}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignInPage')}>
                <Text
                  style={{
                    color: '#FFC582',
                    alignSelf: 'center',
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 25,
    color: 'black',
  },
  text2: {
    fontSize: 20,
    color: '#4C4C4C',
  },
  box1: {
    top: Dimensions.get('window').height * 0.4,
  },
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  box3: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: Dimensions.get('window').width * 0.5,
    color: 'black',
  },
  btn: {
    marginTop: 70,
    backgroundColor: '#FFC582',
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default SignUpPage;

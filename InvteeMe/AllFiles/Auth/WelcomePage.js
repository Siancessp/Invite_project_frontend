import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <ImageBackground
        source={require('../../assets/welcome.jpg')}
        style={{height: Dimensions.get('window').height}}
        imageStyle={{opacity:0.9, backgroundColor:"black"}}
        >
        <View style={styles.welcome}>
          <Text style={styles.welcome1}>WELCOME</Text>
          <Text style={styles.exploreYourActivity}>Explore your activity.</Text>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={[styles.signInBox]}
            onPress={() => navigation.navigate('SignInPage')}>
            <Text style={styles.signIn}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpBox}
            onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.signIn}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 1304,
    width: 1282,
    position: 'absolute',
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  signChildLayout: {
    width: 264,
    height: 56,
    position: 'absolute',
  },
  signTypo: {
    color: 'gray',
    fontFamily: 24,
    top: 16,
    fontSize: 20,
    textAlign: 'left',
    left: '50%',
    position: 'absolute',
  },
  frameChild: {
    height: 1304,
    width: 1282,
    position: 'absolute',
  },
  frameItem: {
    top: 234,
    left: 477,
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 800,
  },
  ellipseParent: {
    marginTop: -634,
    top: '50%',
    left: -476,
  },
  welcome1: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  exploreYourActivity: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  welcome: {
    top: Dimensions.get('window').height * 0.4,
    // 8709723562
    // 8092551222
  },

  signInBox: {
    top: Dimensions.get('window').height * 0.6,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFC582',
  },
  signIn: {
    fontSize: 20,
    color: 'black',
  },

  signUpBox: {
    top: Dimensions.get('window').height * 0.6,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffe6c9',
    marginTop: 10,
  },
  welcomePage: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
});

export default WelcomePage;

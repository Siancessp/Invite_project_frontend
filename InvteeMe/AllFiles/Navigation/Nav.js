import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Dimensions} from 'react-native';
import Event from '../BottomScreens/Event';
import Home from '../BottomScreens/Home';
import Weekend from '../BottomScreens/Weekend';
import Tour from '../BottomScreens/Tour';
import CustomDrawer from './CustomDrawer';
import Plus from '../BottomScreens/Plus';
import MyAccount from '../DrawerScreens/MyAccount';
import Profile from '../DrawerScreens/Profile';
import Edit from '../ProfileExtra/Edit';
import SignInPage from '../Auth/SignInPage';
import SignUpPage from '../Auth/SignUpPage';
import WelcomePage from '../Auth/WelcomePage';
import Notification from '../HomeExtra/Notification';
import CategoryPage from '../EventExtra/CategoryPage';
import Cards from '../EventExtra/Cards';
import EventBooking from '../EventExtra/EventBooking';
import TourDetails from '../TourExtra/TourDetails';
import TourActivities from '../TourExtra/TourActivities';
import TourBooking from '../TourExtra/TourBooking';
import WeekendDetails from '../WeekendExtra/WeekendDetails';
import WeekendActivities from '../WeekendExtra/WeekendActivities';
import WeekendBooking from '../WeekendExtra/WeekendBooking';
import ChatFront from '../Chat/ChatFront';
import PlusButton from '../PlusExtra/PlusButton';
import Template from '../PlusExtra/EventTemplate';
import EventTemplate from '../PlusExtra/EventTemplate';
import CreateEvent from '../PlusExtra/CreateEvent';
import CreateTour from '../PlusExtra/CreateTour';
import WeekendTemplate from '../PlusExtra/WeekendTemplate';
import TourTemplate from '../PlusExtra/TourTemplate';
import CreateWeekend from '../PlusExtra/CreateWeekend';
import ChatScreen from '../Chat/ChatScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator({navigation}) {
  // console.log(navigation);
 
  return (
    <Tab.Navigator
    initialRouteName="Home"
    
    screenOptions={{
      tabBarLabelStyle: { fontSize: 10, marginBottom: 5 },
      tabBarInactiveTintColor: "black",
      tabBarActiveTintColor: "#B84747",
      tabBarStyle: {
        height: Dimensions.get("window").height*0.08,
        position: "absolute",
        backgroundColor:"white",
        flex:1,
      },
      headerShown: false,
    }}
  >
  <Tab.Screen 
  name="Home" 
  component={Home} 
  options={{   
    tabBarIcon: ({ color, size }) => (
      <Octicons name="home" size={20} color={color} />
    ), 
  }} 
/>
    <Tab.Screen 
  name="Event" component={Event} 
  options={{ 
    
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="event-note" size={20} color={color} />
    ), 
  }} 
/>
<Tab.Screen 
  name="Plus" 
  component={Plus} 
  options={{ 
    tabBarLabel:"",
    tabBarIcon: ({ color, size }) => (
      <PlusButton/>
    ), 
  }} 
/>
<Tab.Screen 
  name="Weekend" 
  component={Weekend} 
  options={{ 
    
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="party-popper" size={20} color={color} />
    ), 
  }} 
/>
<Tab.Screen 
  name="Tour" 
  component={Tour} 
  options={{ 
    
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="airplane" size={20} color={color} />
    ), 
  }} 
/>

    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="BTabs" component={BottomTabNavigator} options={{ headerShown: false }}/>
     
    </Drawer.Navigator>
  );
}

export default function Nav() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="BTabs" component={BottomTabNavigator} options={{ headerShown: false }}/> */}
      
      <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
      <Stack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }}/>
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
      <Stack.Screen name="CategoryPage" component={CategoryPage} options={{ headerShown: false }}/>
      <Stack.Screen name="Cards" component={Cards} options={{ headerShown: false }}/>
      <Stack.Screen name="EventBooking" component={EventBooking} options={{ headerShown: false }}/>
      <Stack.Screen name="TourDetails" component={TourDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="TourActivities" component={TourActivities} options={{ headerShown: false }}/>
      <Stack.Screen name="TourBooking" component={TourBooking} options={{ headerShown: false }}/>
      <Stack.Screen name="WeekendDetails" component={WeekendDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="WeekendActivities" component={WeekendActivities} options={{ headerShown: false }}/>
      <Stack.Screen name="WeekendBooking" component={WeekendBooking} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatFront" component={ChatFront} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EventTemplate" component={EventTemplate} options={{ headerShown: false }}/>
      <Stack.Screen name="WeekendTemplate" component={WeekendTemplate} options={{ headerShown: false }}/>
      <Stack.Screen name="TourTemplate" component={TourTemplate} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateTour" component={CreateTour} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateWeekend" component={CreateWeekend} options={{ headerShown: false }}/>
      
    </Stack.Navigator>
  );
}

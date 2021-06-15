import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import BookStackScreen from './BookStackScreen'
import UploadStackScreen from './UploadStackScreen'
import VerificationStackScreen from './VerificationStackScreen'
import QRStackScreen from './QRStackScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Booking') {
               iconName = 'book';
            } else if (route.name === 'QR') {
              iconName = 'qrcode';
            } else if (route.name === 'Verification') {
              iconName = 'check';
            } else if (route.name === 'Upload') {
              iconName = 'upload';
            }
            else if (route.name === 'Home') {
              iconName = 'home';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
            return <Octicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>

        
        <Tab.Screen name="Booking" component={BookStackScreen} />
        <Tab.Screen name="Upload" component={UploadStackScreen} />
        <Tab.Screen name="Verification" component={VerificationStackScreen} />
        <Tab.Screen name="QR" component={QRStackScreen} />
                             
      </Tab.Navigator>
    
  );
}

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import BookingScreen from './screens/BookingScreen'
import UploadScreen from './screens/UploadScreen'
import VerificationScreen from './screens/VerificationScreen'
import QRScreen from './screens/QRScreen'

const Tab = createBottomTabNavigator();

export default function pcrTest() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Booking") {
              iconName = "book";
            } else if (route.name === "QR") {
              iconName = "qrcode";
            } else if (route.name === "Verification") {
              iconName = "check";
            } else if (route.name === "Upload") {
              iconName = "upload";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Verification" component={VerificationScreen} />
        <Tab.Screen name="QR" component={QRScreen} />
      </Tab.Navigator>
      );
}

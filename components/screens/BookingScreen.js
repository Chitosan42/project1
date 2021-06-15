import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//BOOKING
function LocationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Location</Text>
    </View>
  );
}
const BookStack = createStackNavigator(); //Booking stack
function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen name="Booking" component={BookingScreen} />
      <BookStack.Screen name="Location" component={LocationScreen} />
    </BookStack.Navigator>
  );
}


export default function BookingScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Book an Appointment</Text>
      <Button
        title="Choose Location"
        onPress={() => navigation.navigate("Location")}
      />
    </View>
  );
}

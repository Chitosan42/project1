import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//BOOKING
function BookingScreen({ navigation }) {
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

//QR
function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scan QR Code</Text>
      <Button title="Show PDF" onPress={() => navigation.navigate("PDF")} />
    </View>
  );
}
function QRcodeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PDF</Text>
    </View>
  );
}
const QRStack = createStackNavigator(); //QR stack
function QRStackScreen() {
  return (
    <QRStack.Navigator>
      <QRStack.Screen name="QR Code" component={QRScreen} />
      <QRStack.Screen name="PDF" component={QRcodeScreen} />
    </QRStack.Navigator>
  );
}

//VERIFICATION
function VerificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Verification Status</Text>
      <Button title="Pending" />
    </View>
  );
}
function VerifyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PDF</Text>
    </View>
  );
}
const VerificationStack = createStackNavigator(); //QR stack
function VerificationStackScreen() {
  return (
    <VerificationStack.Navigator>
      <VerificationStack.Screen
        name="Verification"
        component={VerificationScreen}
      />
      <VerificationStack.Screen name="PDF" component={VerifyScreen} />
    </VerificationStack.Navigator>
  );
}

function UploadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text></Text>
      <Button
        title="Upload Document"
        onPress={() => navigation.navigate("PDF")}
      />
    </View>
  );
}
function UploadedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Document Uploaded</Text>
    </View>
  );
}
const UploadStack = createStackNavigator(); //QR stack
function UploadStackScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="Upload" component={UploadScreen} />
      <UploadStack.Screen name="PDF" component={UploadedScreen} />
    </UploadStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            return <Octicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Booking" component={BookStackScreen} />
        <Tab.Screen name="Upload" component={UploadStackScreen} />
        <Tab.Screen name="Verification" component={VerificationStackScreen} />
        <Tab.Screen name="QR" component={QRStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

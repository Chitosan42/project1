import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import BookingScreen from "./components/BookingScreen";
import UploadScreen from "./components/BookingScreen";
import VerificationScreen from "./components/VerificationScreen";
import QRScreen from "./components/BookingScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
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
            } else if (route.name === "Upload") {
              iconName = "upload";
            } else if (route.name === "Verification") {
              iconName = "check";
            } else if (route.name === "QR") {
              iconName = "qrcode";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
            return <Octicons name={iconName} size={size} color={color} />;
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
    </NavigationContainer>
  );
}

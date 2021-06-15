import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//QR
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

export default function QRScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scan QR Code</Text>
      <Button title="Show PDF" onPress={() => navigation.navigate("PDF")} />
    </View>
  );
}

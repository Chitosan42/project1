import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

//Upload
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


export default function ContactsScreen() {
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

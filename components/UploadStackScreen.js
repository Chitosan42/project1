
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

function UploadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
      <Button
        title="Upload Document"
        onPress={() => navigation.navigate('PDF')}
      />
    </View>
  );
}
function UploadedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Document Uploaded</Text>
    </View>
  );
}
const UploadStack = createStackNavigator();//QR stack

export default function UploadStackScreen() {
  return (
    <UploadStack.Navigator>
      <UploadStack.Screen name="Upload" component={UploadScreen} />
      <UploadStack.Screen name="PDF" component={UploadedScreen} />
    </UploadStack.Navigator>
  );
}
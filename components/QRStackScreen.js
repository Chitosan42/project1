import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

//QR 
function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scan QR Code</Text>
      <Button
        title="Show PDF"
        onPress={() => navigation.navigate('PDF')}
      />
    </View>
  );
}
function QRcodeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PDF</Text>
    </View>
  );
}


const QRStack = createStackNavigator();//QR stack
export default function QRStackScreen() {
  return (
    <QRStack.Navigator>
      <QRStack.Screen name="QR Code" component={QRScreen} />
      <QRStack.Screen name="PDF" component={QRcodeScreen} />
    </QRStack.Navigator>
  );
}

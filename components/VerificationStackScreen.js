import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';


//VERIFICATION
function VerificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Verification Status</Text>
      <Button
        title="Pending"
      />
    </View>
  );
}
function VerifyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PDF</Text>
    </View>
  );
}
const VerificationStack = createStackNavigator();//QR stack
export default function VerificationStackScreen() {
  return (
    <VerificationStack.Navigator>
      <VerificationStack.Screen name="Verification" component={VerificationScreen} />
      <VerificationStack.Screen name="PDF" component={VerifyScreen} />
    </VerificationStack.Navigator>
  );
}

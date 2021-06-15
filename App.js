import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PCRTest from './components/pcrTest';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PCR-PDT Result</Text>
      <TouchableOpacity style={styles.pcrButton} onPress={() => navigation.navigate('PCRTest')}>
        <Text style={styles.pcrButtonText}>pcrTest</Text>
        </TouchableOpacity>
      <Button
        title="Business"
        onPress={() => navigation.navigate('PCRTest')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    pcrButton:{
      backgroundColor: "red",
      padding: 10,
      borderRadius: 10,
    },
    pcrButtonText:{
      color: "white"
    }
    
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PCRTest" component={PCRTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

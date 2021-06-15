import * as React from 'react';
import { StyleSheet,TouchableOpacity ,Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      
      <Text>
        What type of Traveller are you?
      </Text>



      <TouchableOpacity style={styles.pcrButton} onPress={() => navigation.navigate('Details')}>
       
        <Text style={styles.pcrButtonText}>
         Business
        </Text>
        
      </TouchableOpacity>

     <TouchableOpacity style={styles.pcrButton} onPress={() => navigation.navigate('Details')}>
       <Text style={styles.pcrButtonText}>Leisure</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.pcrButton} onPress={() => navigation.navigate('Details')}>
       <Text style={styles.pcrButtonText}>Compassionate</Text>
     </TouchableOpacity>

    </View>
  );
}

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

    pcrButton:{
      backgroundColor: "#00ffff",
      padding: 5,
      borderRadius: 5,
      marginTop: 10
    },
    pcrButtonText:{
      color: "white",
      fontWeight: "bold" ,
      fontSize : 20,
    }
});

export default App;

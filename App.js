import * as React from "react";
import { StyleSheet, TouchableOpacity, Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./components/DetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

import LoginScreen from "./components/LoginScreen";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>What type of Traveller are you?</Text>

      <TouchableOpacity
        style={styles.pcrButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.pcrButtonText}>Business</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pcrButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.pcrButtonText}>Leisure</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pcrButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.pcrButtonText}>Compassionate</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pcrButton: {
    backgroundColor: "#00ffff",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  pcrButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  /*
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    */
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default App;

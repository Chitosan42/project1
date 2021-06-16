import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  Dimensions,
} from "react-native";

import img1 from "./assets/img1.png";
import { NavigationContainer } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function App({ navigation }) {
  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontSize: 24 }}>
        Welcome to Travel App
      </Text>

      <Image source={img1} style={{ width: 217, height: 258 }} />
      <StatusBar style="auto" />

      {/**  We are going to create a Modal with Text Input. */}

      <Button title="Login" onPress={toggleModalVisibility} />

      <Button title="Sign-Up" onPress={null} />
      {/** This is our modal component containing textinput and a button */}
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="username"
              value={inputValue}
              style={styles.textInput}
              onChangeText={(value) => setInputValue(value)}
            />

            <TextInput
              placeholder="password"
              value={inputValue2}
              style={styles.textInput}
              onChangeText={(value) => setInputValue2(value)}
            />

            {/** This button is responsible to close the modal */}
            <Button
              title="Submit"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "Baskerville",
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "powderblue",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "Baskerville",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    fontFamily: "Baskerville",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },

  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    height: 180,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
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

import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function renderEncouragingText() {
    if (count >= 20) {
      return "Almost there!!!!!!!!!!"
    } else if (count >= 10) {
      return "Keep going!!!!!!"
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>{count}</Text>
      <Button title="Increment" onPress={increment}></Button>
      <Button title="Decrement" onPress={ () => setCount(count - 1) }></Button>

      <TouchableOpacity style={styles.resetButton} onPress={ () => setCount(0) }>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>

      <Text>{renderEncouragingText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: "red",
    padding: 10, 
    borderRadius: 10,
  }, 
  resetButtonText: {
    color: "white"
  }
});

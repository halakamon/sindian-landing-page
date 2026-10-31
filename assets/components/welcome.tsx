import { StyleSheet, Text, View } from "react-native";

function Welcome({ name, age }: { name: string; age: number }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome, {name}!</Text>
      <Text>You are {age} years old.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "000",
    fontWeight: "bold",
  },
  

  view: {
    width: 500,
    height: 500,
    padding: 20,
    backgroundColor: "lightblue",
    marginBottom: 10,
  },
});

export default Welcome;

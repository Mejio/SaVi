// screens/MainScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/savi-logo.png")} style={styles.logo} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.signUp]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#0047AB",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 12,
    marginVertical: 10,
  },
  signUp: {
    backgroundColor: "#3AA6B9",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

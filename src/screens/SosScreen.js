// screens/SosScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function SosScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/sos-logo.png")} style={styles.logo} />
      <Text style={styles.text}>Emergency Contact</Text>
      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callText}>Call Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: { width: 140, height: 140, resizeMode: "contain", marginBottom: 30 },
  text: { fontSize: 20, fontWeight: "600", marginBottom: 20 },
  callButton: {
    backgroundColor: "#B80000",
    padding: 16,
    borderRadius: 12,
  },
  callText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

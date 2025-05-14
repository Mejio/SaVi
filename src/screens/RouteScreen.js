// screens/RouteScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";

export default function RouteScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callText}>📞</Text>
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.0731,
          longitude: 125.6131,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />

      <View style={styles.overlay}>
        <TextInput placeholder="Destination Address" style={styles.input} />
        <TextInput placeholder="Expected Arrival Time" style={styles.input} />
        <Text style={styles.profileText}>👤 User Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  callButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#0047AB",
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  callText: { color: "white", fontSize: 16 },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  profileText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
});

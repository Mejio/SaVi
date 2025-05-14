import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { crimeData } from "../data/crimeData";

export default function MapComponent() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="openstreetmap"
        initialRegion={{
          latitude: 8.4797, // Cagayan de Oro
          longitude: 124.6472,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {crimeData.map((crime, index) => (
          <MapView.Circle
            key={index}
            center={{
              latitude: crime.latitude,
              longitude: crime.longitude,
            }}
            radius={crime.severity * 10}
            fillColor="rgba(255, 0, 0, 0.5)"
            strokeColor="rgba(255, 0, 0, 0.8)"
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100",
    marginBottom: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

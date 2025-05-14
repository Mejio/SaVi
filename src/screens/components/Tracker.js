import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import { db } from "../services/firebase";

export default function Tracker({ childUid }) {
  const [childLocation, setChildLocation] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection("locations")
      .doc(childUid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setChildLocation(doc.data());
        }
      });

    return () => unsubscribe();
  }, [childUid]);

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Child's Location:</Text>
      {childLocation ? (
        <MapView
          style={{ height: 150, width: "100%" }}
          provider="openstreetmap"
          initialRegion={{
            latitude: childLocation.latitude,
            longitude: childLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: childLocation.latitude,
              longitude: childLocation.longitude,
            }}
            title="Child's Location"
          />
        </MapView>
      ) : (
        <Text>No location data available.</Text>
      )}
    </View>
  );
}

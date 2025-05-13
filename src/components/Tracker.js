import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { db, auth } from "../services/firebase";
import { collection, addDoc, query, where, onSnapshot } from "@react-native-firebase/firestore";

const Tracker = () => {
  const [childLocation, setChildLocation] = useState(null);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "locations"),
      where("userId", "==", "CHILD_USER_ID") // Replace with child’s user ID
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        setChildLocation(doc.data());
      });
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!auth.currentUser) return;

    const updateLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      await addDoc(collection(db, "locations"), {
        userId: auth.currentUser.uid,
        latitude,
        longitude,
        timestamp: new Date()
      });
    };

    updateLocation();
    const interval = setInterval(updateLocation, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!childLocation) return <Text>Loading child location...</Text>;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: childLocation.latitude,
        longitude: childLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <UrlTile
        urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker
        coordinate={{
          latitude: childLocation.latitude,
          longitude: childLocation.longitude
        }}
        title="Child's Location"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { width: "100%", height: 200 }
});

export default Tracker;
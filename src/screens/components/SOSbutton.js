import React from "react";
import { Alert } from "react-native";
import { Button } from "@rneui/themed";
import * as Location from "expo-location";
import { db } from "../services/firebase";
import { sendPushNotification } from "../services/notifications";

export default function SOSButton() {
  const currentUser = db.auth().currentUser;

  const handleSOS = async () => {
    if (!currentUser) {
      Alert.alert("Error", "You must be logged in to send an SOS.");
      return;
    }

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Error", "Location permission denied.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      await db.collection("sos_alerts").add({
        userId: currentUser.uid,
        latitude,
        longitude,
        timestamp: new Date().toISOString(),
      });

      await sendPushNotification(
        "EXPO_TOKEN", // Replace with your Expo push token
        `SOS Alert: User needs help at ${latitude}, ${longitude}`,
      );

      Alert.alert("Success", "SOS alert sent!");
    } catch (error) {
      Alert.alert("Error", `Failed to send SOS: ${error.message}`);
    }
  };

  return (
    <Button
      title="Send SOS"
      onPress={handleSOS}
      buttonStyle={{
        backgroundColor: "#FF3B30",
        paddingVertical: 10,
        marginBottom: 10,
      }}
    />
  );
}

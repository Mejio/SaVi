import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "react-native-elements";
import * as Location from "expo-location";
import { db, auth } from "../services/firebase";
import { collection, addDoc } from "@react-native-firebase/firestore";
import { sendPushNotification } from "../services/notifications";

const SOSButton = () => {
  const [loading, setLoading] = useState(false);

  const sendSOS = async () => {
    if (!auth.currentUser) {
      Alert.alert("Error", "Please log in to send an SOS.");
      return;
    }

    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Error", "Location permission denied.");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      await addDoc(collection(db, "sos_alerts"), {
        userId: auth.currentUser.uid,
        latitude,
        longitude,
        timestamp: new Date()
      });

      // Replace EXPO_TOKEN with actual token
      await sendPushNotification(
        "EXPO_TOKEN",
        `SOS Alert: User needs help at ${latitude}, ${longitude}`
      );
      Alert.alert("Success", "SOS sent!");
      setLoading(false);
    } catch (error) {
      Alert.alert("Error", error.message);
      setLoading(false);
    }
  };

  return (
    <Button
      title={loading ? "Sending..." : "SOS Alert"}
      buttonStyle={{ backgroundColor: "red", borderRadius: 5, padding: 10 }}
      titleStyle={{ fontSize: 18 }}
      onPress={sendSOS}
      disabled={loading}
    />
  );
};

export default SOSButton;
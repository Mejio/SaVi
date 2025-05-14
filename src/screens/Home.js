import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { Button } from "@rneui/themed";
import MapComponent from "../components/MapTemp";
import SOSButton from "../components/SOSButton";
import Tracker from "../components/Tracker";
import { db } from "../services/firebase";
import { styles } from "../styles";

export default function Home({ navigation }) {
  const [childUid, setChildUid] = useState(null);
  const currentUser = db.auth().currentUser;

  useEffect(() => {
    if (currentUser) {
      // Fetch the linked child's UID from parent_child_links
      const unsubscribe = db
        .collection("parent_child_links")
        .doc(currentUser.uid)
        .onSnapshot(
          (doc) => {
            if (doc.exists) {
              const data = doc.data();
              setChildUid(data.childUid);
            }
          },
          (error) => {
            Alert.alert(
              "Error",
              `Failed to fetch linked child: ${error.message}`,
            );
          },
        );

      return () => unsubscribe();
    }
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await db.auth().signOut();
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", `Sign out failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Welcome, {currentUser?.email || "User"}
      </Text>
      <MapComponent />
      <SOSButton />
      {childUid ? (
        <Tracker childUid={childUid} />
      ) : (
        <Button
          title="Link Child"
          onPress={() => navigation.navigate("LinkChild")}
          buttonStyle={styles.button}
        />
      )}
      <Button
        title="Sign Out"
        onPress={handleSignOut}
        buttonStyle={[
          styles.button,
          { backgroundColor: "#FF3B30", marginTop: 10 },
        ]}
      />
    </View>
  );
}

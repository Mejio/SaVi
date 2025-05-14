import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { db, auth } from "../services/firebase";
import { styles } from "../styles";

export default function LinkChild({ navigation }) {
  const [childUid, setChildUid] = useState("");
  const currentUser = db.auth().currentUser;

  const handleLinkChild = async () => {
    if (!childUid || !currentUser) {
      Alert.alert(
        "Error",
        "Please enter a valid child UID and ensure you are logged in.",
      );
      return;
    }

    try {
      // Store the parent-child link in Firestore
      await db.collection("parent_child_links").doc(currentUser.uid).set(
        {
          childUid: childUid,
          parentUid: currentUser.uid,
          linkedAt: new Date().toISOString(),
        },
        { merge: true },
      );

      Alert.alert("Success", "Child linked successfully!");
      navigation.navigate("Home"); // Return to Home screen
    } catch (error) {
      Alert.alert("Error", `Failed to link child: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Child's UID"
        value={childUid}
        onChangeText={setChildUid}
        style={styles.input}
        autoCapitalize="none"
      />
      <Button
        title="Link Child"
        onPress={handleLinkChild}
        buttonStyle={styles.button}
      />
    </View>
  );
}

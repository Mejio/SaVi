// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LocationScreen from "./screens/LocationScreen";
import RouteScreen from "./screens/RouteScreen";
import SosScreen from "./screens/SosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Route" component={RouteScreen} />
        <Stack.Screen name="SOS" component={SosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

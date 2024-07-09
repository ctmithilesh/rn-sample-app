import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import MainTabNavigation from "./MainTabNavigation";

const Stack = createStackNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="home" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;

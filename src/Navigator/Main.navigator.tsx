import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../Elements/Header";
import HomeView from "../HomeView";
import BottomSheetComponent from "../LiFiZone";
import * as Linking from "expo-linking";
import { Text } from "@rneui/themed";

const linking = {
  prefixes: ["lifi-zone://", "https://andreamolinari.github.io/test-pages/"],
};
const NavStack = createNativeStackNavigator();

export default () => {
  const linking = {
    prefixes: [prefix],
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <NavStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <NavStack.Screen component={HomeView} name="Home" />
        <NavStack.Screen component={BottomSheetComponent} name="BottomSheet" />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

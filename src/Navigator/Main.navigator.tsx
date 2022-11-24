import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "@rneui/themed";
import React from "react";
import Header from "../Elements/Header";
import HomeView from "../HomeView";
import BottomSheetComponent from "../LiFiZone";
import NotFound from "../NotFoundView";

const NavStack = createNativeStackNavigator();

const configs = {
  screens: {
    Home: "Home",
    BottomSheet: "BottomSheet",
    NoMatch: "*",
  },
};

const linking = {
  prefixes: ["lifi-zone://", "https://andreamolinari.github.io/test-pages/"],
  config: configs,
};

export default () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <NavStack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <NavStack.Screen component={HomeView} name="Home" />
        <NavStack.Screen component={BottomSheetComponent} name="BottomSheet" />
        <NavStack.Screen component={NotFound} name="NoMatch" />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

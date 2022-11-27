import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "@rneui/themed";
import React from "react";
import { Linking } from "react-native";
import BottomSheetComponent from "../BottomSheet";
import CosaFaccioView from "../CosaFaccio.view";
import Header from "../Elements/Header";
import HomeView from "../Home.view";
import NotFound from "../NotFound.view";
import { MainStackParamList } from "./Main.screen";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}

const NavStack = createNativeStackNavigator<MainStackParamList>();

const linking: LinkingOptions<MainStackParamList> = {
  prefixes: [
    "lifi-zone://",
    "https://andreamolinari.github.io/test-pages/",
    "http://localhost:19006/test-pages/",
  ],
  config: {
    initialRouteName: "Home",
    screens: {
      Home: {
        path: "/Home",
      },
      BottomSheet: "/BottomSheet",
      CosaFaccio: "/CosaFaccio",
      NoMatch: "*",
    },
  },
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
        <NavStack.Screen component={CosaFaccioView} name="CosaFaccio" />
        <NavStack.Screen component={NotFound} name="NoMatch" />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

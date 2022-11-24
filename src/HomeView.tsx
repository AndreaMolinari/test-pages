import { useNavigation } from "@react-navigation/native";
import { Text, useTheme } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import Background from "./Elements/Background";

const HomeView: React.FC = () => {
  const nav = useNavigation();
  const theme = useTheme();
  return (
    <Background>
      <Text h2 onPress={() => nav.navigate("BottomSheet")}>
        Ciao sono andrea
      </Text>
    </Background>
  );
};

export default HomeView;

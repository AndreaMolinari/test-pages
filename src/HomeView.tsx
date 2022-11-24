import { Link, useLinkTo, useNavigation } from "@react-navigation/native";
import { Button, Text, useTheme } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import Background from "./Elements/Background";

const HomeView: React.FC = () => {
  const nav = useNavigation();
  const theme = useTheme();
  const linkTo = useLinkTo();

  return (
    <Background>
      <Button onPress={() => linkTo({ screen: "BottomSheet" })}>
        <Text h2>Ciao sono andrea</Text>
      </Button>
    </Background>
  );
};

export default HomeView;

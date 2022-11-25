import { useLinkTo } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import Background from "./Elements/Background";
import { MainStackParamList } from "./Navigator/Main.screen";

const HomeView: React.FC = () => {
  const linkTo = useLinkTo<MainStackParamList>();

  return (
    <Background safeMode>
      <Text h1>Io sono la home</Text>
      <Button onPress={() => linkTo({ screen: "BottomSheet" })}>
        <Text>BottomSheet</Text>
      </Button>
    </Background>
  );
};

export default HomeView;

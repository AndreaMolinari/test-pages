import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import Background from "./Elements/Background";

const NotFound: React.FC = () => {
  return (
    <Background>
      <View style={{ marginHorizontal: "auto" }}>
        <Text h1 style={{ color: "red" }}>
          Ops.. questa pagina non esiste
        </Text>
      </View>
    </Background>
  );
};

export default NotFound;

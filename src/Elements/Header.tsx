import { useNavigation } from "@react-navigation/native";
import { Button, Header, Text } from "@rneui/themed";
import React from "react";

export default () => {
  const nav = useNavigation();
  return (
    <Header
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Button onPress={() => nav.navigate("Home")}>
        <Text h3>Ciao sono header</Text>
      </Button>
      <Button color={"secondary"} size={"sm"} raised title="Hey!" />
    </Header>
  );
};

import { useLinkTo } from "@react-navigation/native";
import { Button, Header } from "@rneui/base";
import React from "react";
import { MainStackParamList } from "../Navigator/Main.screen";

export default () => {
  const linkTo = useLinkTo<MainStackParamList>();
  return (
    <Header>
      <Button
        raised
        onPress={() => linkTo({ screen: "Home" })}
        color="secondary"
        title="Go Home"
      />
    </Header>
  );
};

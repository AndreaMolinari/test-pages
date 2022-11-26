import { useLinkTo } from "@react-navigation/native";
import { Header, Button } from "@rneui/base";
import { Icon } from "@rneui/themed";
import React from "react";
import { MainStackParamList } from "../Navigator/Main.screen";

export default () => {
  const linkTo = useLinkTo<MainStackParamList>();

  return (
    <Header>
      <Button
        icon={<Icon name="g-translate" />}
        onPress={() => linkTo({ screen: "Home" })}
        title="Home"
      />
    </Header>
  );
};

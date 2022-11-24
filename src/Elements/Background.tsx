import { useTheme } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

export default (props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        height: 200,
        backgroundColor: theme.theme.colors.background,
      }}
    >
      {props.children}
    </View>
  );
};

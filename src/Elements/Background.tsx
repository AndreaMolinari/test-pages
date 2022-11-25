import { useTheme } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BackgroundProps extends React.PropsWithChildren {
  safeMode?: true;
}

export default (props: BackgroundProps) => {
  const theme = useTheme();

  const style = StyleSheet.create({
    wrapper: {
      flex: 1,
      height: 200,
      backgroundColor: theme.theme.colors.background,
    },
    safe: {
      flex: 1,
    },
  });

  if (props.safeMode) {
    return (
      <View style={style.wrapper}>
        <SafeAreaView style={style.safe}>{props.children}</SafeAreaView>
      </View>
    );
  } else {
    return <View style={style.wrapper}>{props.children}</View>;
  }
};

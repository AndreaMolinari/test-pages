import { useLinkTo } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { Alert, Linking, View } from "react-native";
import { ButtonProps } from "react-native-elements";
import Background from "./Elements/Background";
import { MainStackParamList } from "./Navigator/Main.screen";

interface UrlButton extends ButtonProps {
  scheme: string;
}

const Link: React.FC<UrlButton> = (props) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(props.scheme);

    if (supported) {
      await Linking.openURL(props.scheme);
    } else {
      Alert.alert(`Non so come aprire questo url: ${props.scheme}`);
    }
  }, [props]);

  const type = React.useMemo(() => {
    return props.type || "outline";
  }, [props]);

  return <Button {...props} type={type} onPress={handlePress} />;
};

const HomeView: React.FC = () => {
  return (
    <Background safeMode>
      <View>
        <Text h1>Io sono la home</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          paddingVertical: 10,
          gap: 5,
        }}
      >
        <Link scheme="lifi-zone://Home" title="Apri l'app di test-pages" />
      </View>
    </Background>
  );
};

export default HomeView;

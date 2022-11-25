import { useLinkTo } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import Background from "./Elements/Background";
import { MainStackParamList } from "./Navigator/Main.screen";

interface UrlButton extends React.PropsWithChildren {
  scheme: string;
}

const Link: React.FC<UrlButton> = (props) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(props.scheme);

    if (supported) {
      await Linking.openURL(props.scheme);
    } else {
      Alert.alert(`Don't know how to open this URL: ${props.scheme}`);
    }
  }, [props]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <>{props.children}</>
    </TouchableOpacity>
  );
};

const HomeView: React.FC = () => {
  const linkTo = useLinkTo<MainStackParamList>();

  return (
    <Background safeMode>
      <Text h1>Io sono la home</Text>

      <Link scheme="whatsapp://send?text=Hello%2C%20World!">
        <Text>Saluta Qualcuno su whatsapp</Text>
      </Link>

      <Link scheme="lifiart://Home">
        <Text>Apri lifiapp</Text>
      </Link>

      <Button onPress={() => linkTo({ screen: "BottomSheet" })}>
        <Text>BottomSheet</Text>
      </Button>
    </Background>
  );
};

export default HomeView;

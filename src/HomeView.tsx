import { useLinkTo } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { Alert, Linking, TouchableOpacity, View } from "react-native";
import { ButtonGroup, ButtonProps } from "react-native-elements";
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

interface Btn {
  title: string;
  screen: string;
}

const buttons: Btn[] = [
  {
    title: "Home",
    screen: "/Home",
  },
  {
    title: "BottomSheet",
    screen: "/BottomSheet",
  },
];

interface MainNav {
  buttons: Btn[];
}

const MainNav: React.FC<MainNav> = (props) => {
  const linkTo = useLinkTo<MainStackParamList>();
  return (
    <View style={{ marginHorizontal: "auto", flexDirection: "row" }}>
      {props.buttons.map((b, i) => (
        <Button onPress={() => linkTo(b.screen)} key={i} title={b.title} />
      ))}
    </View>
  );
};

const HomeView: React.FC = () => {
  const linkTo = useLinkTo<MainStackParamList>();
  return (
    <Background safeMode>
      <MainNav buttons={buttons} />
      <View>
        <Text h1>Io sono la home</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <Link
          scheme="whatsapp://send?text=Hello%2C%20World!"
          title="Saluta Qualcuno su whatsapp"
        />
        <Link scheme="lifiart://Home" title="Apri lifiapp" />
      </View>
    </Background>
  );
};

export default HomeView;

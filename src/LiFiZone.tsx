import { BottomSheet, Button, Dialog, ListItem } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SignInDto } from "../generated";
import { authApi } from "./api";
import Background from "./Elements/Background";

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  const login = async () => {
    const data: SignInDto = {
      email: "molinari",
      password: "andrea",
    };

    try {
      return await authApi.authControllerSignIn(data);
    } catch (error) {
      console.warn("errore signIn api !! ! ! !");
    }
  };

  const [visibleCosaSotto, setVisibleCosaSotto] = React.useState(false);

  return (
    <Background>
      <TastoConModal visible={visibleCosaSotto} />

      <Button onPress={login} title="forte" />
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        <ListItem onPress={() => setVisibleCosaSotto((s) => !s)}>
          <ListItem.Title>andasrea</ListItem.Title>
        </ListItem>
      </BottomSheet>
    </Background>
  );
};

const TastoConModal: React.FC<{
  visible: boolean;
}> = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    setIsVisible(props.visible);
  }, [props]);

  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible((s) => !s)}
    >
      <Dialog.Title title="Bella pe me" />
    </Dialog>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;

import { Button } from "@rneui/base";
import { BottomSheet, ListItem } from "@rneui/themed";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import Background from "./Elements/Background";
import Dialog from "./Elements/Dialog";

interface BottomSheetComponentProps extends React.PropsWithChildren {}

type ListItemProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | null;
};
type ListProps = ListItemProps[];

const BottomSheetComponent: React.FC<BottomSheetComponentProps> = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [visibleDialog, setVisibleDialog] = React.useState(false);

  const list: ListProps = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <Background>
      <Dialog
        closeOnBackdropPress
        visible={visibleDialog}
        setVisible={() => setVisibleDialog((s) => !s)}
      />

      {/* <Button onPress={login} title="Login" /> */}
      <Button
        onPress={() => setVisibleDialog((s) => !s)}
        title="Open Dialog"
        buttonStyle={styles.button}
      />
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
      </BottomSheet>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;

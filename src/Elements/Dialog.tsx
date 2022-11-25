import { Dialog } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";

interface TastoConModalProps extends React.PropsWithChildren {
  visible: boolean;
  setVisible: (s: boolean) => void;
  closeOnBackdropPress?: true;
}

export default (props: TastoConModalProps) => {
  const isVisible = React.useMemo(() => {
    return props.visible;
  }, [props]);

  const action = React.useCallback(() => {
    if (props.closeOnBackdropPress) {
      props.setVisible(false);
    } else {
      false;
    }
  }, [props.closeOnBackdropPress]);

  return (
    <Dialog isVisible={isVisible} onBackdropPress={action}>
      <Dialog.Title>
        <Text>Dialog</Text>
      </Dialog.Title>
      <Text>
        {`Se clicchi fuori mi chiudo ${
          props.closeOnBackdropPress ? "✅" : "❌"
        }`}
      </Text>
    </Dialog>
  );
};

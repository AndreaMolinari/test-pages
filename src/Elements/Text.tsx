import { Text, useTheme } from "@rneui/themed";
import { TextProps } from "react-native-elements";

type Props = TextProps;

export default (props: Props) => {
  const { theme } = useTheme();
  return (
    <>
      <Text style={{ color: theme.colors.white }}>{props.children}</Text>
    </>
  );
};

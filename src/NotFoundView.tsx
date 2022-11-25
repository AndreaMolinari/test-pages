import { Text } from "@rneui/themed";
import React from "react";
import Background from "./Elements/Background";

const NotFound: React.FC = () => {
  return <></>;
  return (
    <Background>
      <Text h1 style={{ color: "red" }}>
        Questa pagina non esiste
      </Text>
    </Background>
  );
};

export default NotFound;

import { useLinkTo } from "@react-navigation/native";
import { Button, Header } from "@rneui/base";
import { SearchBar } from "@rneui/themed";
import React from "react";
import { Platform, View } from "react-native";
import { MainStackParamList } from "../Navigator/Main.screen";

const buttons: Btn[] = [
  {
    title: "Home",
    screen: "Home",
  },
  {
    title: "Pagina",
    screen: "BottomSheet",
  },
  {
    title: "Pagina2",
    screen: "CosaFaccio",
  },
];

interface Btn {
  title: string;
  screen: keyof MainStackParamList;
}

interface MainNav {
  buttons: Btn[];
}

const MainNav: React.FC<MainNav> = (props) => {
  const linkTo = useLinkTo<MainStackParamList>();
  return (
    <View style={{ marginHorizontal: "auto", flexDirection: "row" }}>
      {props.buttons.map((b, i) => (
        <Button
          onPress={() => linkTo({ screen: b.screen })}
          key={i}
          title={b.title}
        />
      ))}
    </View>
  );
};

export default () => {
  const linkTo = useLinkTo<MainStackParamList>();
  const [search, setSearch] = React.useState("");

  return (
    <Header>
      {Platform.OS === "web" ? (
        <Button onPress={() => linkTo({ screen: "Home" })} title="Home" />
      ) : (
        <></>
      )}
      <MainNav buttons={buttons} />
      {Platform.OS === "web" ? (
        <SearchBar
          placeholder="Cerca qui..."
          onChangeText={setSearch}
          value={search}
        />
      ) : (
        <></>
      )}
    </Header>
  );
};

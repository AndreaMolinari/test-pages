import { ThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/Navigator/Main.navigator";

const theme = {
  lightColors: {
    primary: "#333",
    background: "#111",
    secondary: "red",
    white: "#000",
    black: "#fff",
  },
  darkColors: {
    primary: "#333",
    secondary: "red",
    background: "#111",
    white: "black",
    black: "white",
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <MainNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

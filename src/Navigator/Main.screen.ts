import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ScreenOption = {
  [key: string]: {
    component: React.FC;
    initialRoute?: boolean;
    title?: string;
    icon?: string;
  };
};

export type MainStackParamList = {
  Home: undefined;
  BottomSheet: undefined;
  CosaFaccio: undefined;
  NoMatch: undefined;
};

type HomeScreenProps = any;

// export type MainStackParams = NavigationProp<MainStackParamList>;

// export type HomeProps = RouteProp<MainStackParamList, "Home">;
// export type BottomSheetProps = RouteProp<MainStackParamList, "BottomSheet">;
// export type NoMatchProps = RouteProp<MainStackParamList, "NoMatch">;

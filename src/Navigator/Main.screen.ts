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
  NoMatch: undefined;
};

// export type MainStackParams = NavigationProp<MainStackParamList>;

// export type HomeProps = RouteProp<MainStackParamList, "Home">;
// export type BottomSheetProps = RouteProp<MainStackParamList, "BottomSheet">;
// export type NoMatchProps = RouteProp<MainStackParamList, "NoMatch">;

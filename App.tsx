import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  Ubuntu_700Bold as UbuntuBold,
  Ubuntu_400Regular as UbuntuRegular,
  useFonts,
} from "@expo-google-fonts/ubuntu";
import { AppLoading } from "expo";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    UbuntuRegular,
    UbuntuBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
}

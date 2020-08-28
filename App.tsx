import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Ubuntu_700Bold as UbuntuBold,
  Ubuntu_400Regular as UbuntuRegular,
  useFonts,
} from "@expo-google-fonts/ubuntu";
import { AppLoading } from "expo";

import InitialBoard from "./src/pages/InitialBoard";

const Stack = createStackNavigator();

function Main() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="InitialBoard" component={InitialBoard} />
    </Stack.Navigator>
  );
}

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
      <Main />
    </NavigationContainer>
  );
}

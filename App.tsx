import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

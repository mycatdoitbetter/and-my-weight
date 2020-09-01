import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InitialBoard from "../pages/InitialBoard";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="InitialBoard" component={InitialBoard} />
    </Stack.Navigator>
  );
}

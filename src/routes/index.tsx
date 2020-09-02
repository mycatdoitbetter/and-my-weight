import "react-native-gesture-handler";
import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import InitialBoard from "../pages/InitialBoard";
import ChooseGenre from "../pages/ChooseGenre";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialBoard"
        component={InitialBoard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseGenre"
        component={ChooseGenre}
        options={{
          headerStyle: {
            backgroundColor: "#355C7D",
            elevation: 0,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          title: "Choose one",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 30,
            fontFamily: "UbuntuRegular",
          },
        }}
      />
    </Stack.Navigator>
  );
}

import "react-native-gesture-handler";
import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
// import { StackNavigationOptions } from "@react-navigation/native";

import InitialBoard from "../pages/InitialBoard";
import ChooseGenre from "../pages/ChooseGenre";
import Values from "../pages/Values";

const Stack = createStackNavigator();

export default function MainStack() {
  const options = ({ title }: StackNavigationOptions) => ({
    headerStyle: {
      backgroundColor: "#355C7D",
      elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    title,
    headerTitleStyle: {
      color: "#fff",
      fontSize: 30,
      fontFamily: "UbuntuRegular",
    },
  });

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
        options={options({ title: "Choose one" })}
      />
      <Stack.Screen
        name="Values"
        component={Values}
        options={options({ title: "Weight & Height" })}
      />
    </Stack.Navigator>
  );
}

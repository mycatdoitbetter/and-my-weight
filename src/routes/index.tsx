/* eslint-disable @typescript-eslint/no-explicit-any */

import "react-native-gesture-handler";
import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import InitialBoard from "../pages/InitialBoard";
import ChooseGenre from "../pages/ChooseGenre";
import Values from "../pages/Values";
import Result from "../pages/Result";

import { MainParamList } from "./MainParamList";

const Stack = createStackNavigator<MainParamList>();

export default function MainStack() {
  // 'Any' type because i can't identify the best prop.
  const options: any = ({ title }: StackNavigationOptions) => ({
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
      <Stack.Screen
        name="Result"
        component={Result}
        options={options({ title: "Result" })}
      />
    </Stack.Navigator>
  );
}

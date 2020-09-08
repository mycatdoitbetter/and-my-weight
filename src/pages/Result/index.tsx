/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { MainParamList } from "../../routes/MainParamList";
import Button from "../../components/Button";
import normalWoman from "../../../assets/results/normal_woman.png";
import overweightWoman from "../../../assets/results/overweight_woman.png";
import normalMan from "../../../assets/results/normal_man.png";
import overweightMan from "../../../assets/results/overweight_man.png";
import thinness from "../../../assets/results/thinness.png";

import Texts from "./texts";

interface IBMI {
  _height: number;
  _weight: number;
  genre: string;
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Result = ({
  route,
  navigation,
}: {
  navigation: StackNavigationProp<MainParamList, "Result">;
  route: RouteProp<MainParamList, "Result">;
}) => {
  const [BMIResult, setBMIResult] = useState(0);
  const [result, setResult] = useState("");

  function calcBMI({ _height, _weight, genre }: IBMI) {
    const BMI = _weight / (_height / 100) ** 2;

    if (genre === "woman") {
      if (BMI < 19.1) {
        setResult("thinness");
      } else if (BMI <= 25.8) {
        setResult("normal");
      } else if (BMI <= 27.3) {
        setResult("overweight");
      }
    } else {
      if (BMI < 20.7) {
        setResult("thinness");
      } else if (BMI <= 26.4) {
        setResult("normal");
      } else if (BMI <= 27.8) {
        setResult("overweight");
      }
    }

    setBMIResult(BMI);
  }

  useEffect(() => {
    const { _height, _weight, genre } = route.params;

    calcBMI({ _height, _weight, genre });
  }, []);

  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={overweightMan}
        style={{
          height: height * 0.5,
          width: width * 0.8,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontFamily: "UbuntuRegular",
          textAlign: "center",
          padding: 25,
        }}
      >
        Your BMI is Normal! Stay <Text style={{ color: "red" }}>Healthy!</Text>
      </Text>
      <Text>You can try do some more exercises! Look for a specialist!</Text>
      <Button onPress={() => navigate("ChooseGenre")} last />
    </View>
  );
};

export default Result;

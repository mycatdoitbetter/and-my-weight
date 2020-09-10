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

interface IResult {
  value: "" | "normal" | "overweight" | "thinness";
}
interface ITexts {
  title: string;
  description?: string;
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "UbuntuBold",
    textAlign: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  secondaryText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "UbuntuRegular",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

const Result = ({
  route,
  navigation,
}: {
  navigation: StackNavigationProp<MainParamList, "Result">;
  route: RouteProp<MainParamList, "Result">;
}) => {
  const [result, setResult] = useState<IResult>({ value: "" });
  const [texts, setTexts] = useState<ITexts>({ title: "", description: "" });

  function calcBMI({ _height, _weight, genre }: IBMI) {
    const BMI = _weight / (_height / 100) ** 2;

    switch (genre) {
      case "woman":
        if (BMI < 19.1) {
          setTexts(Texts.thinness);
          setResult({ value: "thinness" });
        } else if (BMI <= 25.8) {
          setTexts(Texts.normal);
          setResult({ value: "normal" });
        } else if (BMI >= 27.3) {
          setTexts(Texts.overweight);
          setResult({ value: "overweight" });
        }
        break;
      default:
        if (BMI < 20.7) {
          setTexts(Texts.thinness);
          setResult({ value: "thinness" });
        } else if (BMI <= 26.4) {
          setTexts(Texts.normal);
          setResult({ value: "normal" });
        } else if (BMI >= 27.8) {
          setTexts(Texts.overweight);
          setResult({ value: "overweight" });
        }
        break;
    }
  }

  useEffect(() => {
    const { _height, _weight, genre } = route.params;

    calcBMI({ _height, _weight, genre });
  }, []);

  function showImage() {
    const { genre } = route.params;
    if (result.value === "overweight" && genre === "woman") {
      return overweightWoman;
    }
    if (result.value === "overweight" && genre === "man") {
      return overweightMan;
    }
    if (result.value === "normal" && genre === "woman") {
      return normalWoman;
    }
    if (result.value === "normal" && genre === "man") {
      return normalMan;
    }
    if (result.value === "thinness") {
      return thinness;
    }
  }

  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={showImage()}
        style={{
          height: height * 0.5,
          width: width * 0.8,
        }}
        resizeMode="contain"
      />
      <Text style={styles.mainText}>{texts.title}</Text>
      <Text style={styles.secondaryText}>{texts.description}</Text>
      <Button onPress={() => navigate("ChooseGenre")} last />
    </View>
  );
};

export default Result;

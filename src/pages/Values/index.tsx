/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import VerticalSlider from "rn-vertical-slider";
// import {
//   useNavigation,
//   RouteProp,
//   ParamListBase,
// } from "@react-navigation/native";

import man from "../../../assets/man_shape.png";
import woman from "../../../assets/woman_shape.png";
import GoToNext from "../../components/Button";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#355C7D",
  },
  indicatorText: {
    fontFamily: "UbuntuRegular",
    color: "#fff",
    fontSize: 20,
  },
  imageView: {
    width: width * 0.7,
    alignItems: "center",
  },
});

const Values = (route: { params: { genre: string } }) => {
  const [gender, setGender] = useState("woman");
  const [_weight, setWeight] = useState(0);
  const [_height, setHeight] = useState(0);

  useEffect(() => {
    setGender(route.params?.genre);
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <VerticalSlider
          min={40.0}
          max={120.0}
          showBallIndicator
          ballIndicatorHeight={0}
          ballIndicatorPosition={40}
          ballIndicatorWidth={70}
          renderIndicator={(value) => (
            <Text style={styles.indicatorText}>{`${value} kg`}</Text>
          )}
          onChange={(value) => setWeight(value)}
          width={35}
          height={height * 0.55}
          step={1}
          borderRadius={100}
          minimumTrackTintColor={"#FF6584"}
          maximumTrackTintColor={"#65617D"}
          ballIndicatorColor={"#FF6584"}
          ballIndicatorTextColor={"#65617D"}
          value={70}
        />
        <View style={styles.imageView}>
          <Image
            style={{ height: 350 }}
            resizeMode="contain"
            source={gender === "woman" ? woman : man}
          />
        </View>
        <VerticalSlider
          min={150.0}
          max={200.0}
          showBallIndicator
          ballIndicatorHeight={0}
          ballIndicatorPosition={-80}
          ballIndicatorWidth={70}
          renderIndicator={(value) => (
            <Text style={styles.indicatorText}>{`${value} cm`}</Text>
          )}
          onChange={(value) => setHeight(value)}
          width={35}
          height={height * 0.55}
          step={1}
          borderRadius={100}
          minimumTrackTintColor={"#FF6584"}
          maximumTrackTintColor={"#65617D"}
          ballIndicatorColor={"#FF6584"}
          ballIndicatorTextColor={"#65617D"}
          value={170}
        />
      </View>

      <GoToNext
        onPress={() => console.log("_weight:", _weight, "_height:", _height)}
      />
    </View>
  );
};

export default Values;

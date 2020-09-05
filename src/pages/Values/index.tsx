/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import VerticalSlider from "rn-vertical-slider";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
// import Modal from "react-native-modal";

import man from "../../../assets/man_shape.png";
import woman from "../../../assets/woman_shape.png";
import GoToNext from "../../components/Button";
import Modal from "../../components/Modal";
import { MainParamList } from "../../routes/MainParamList";

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

const Values = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MainParamList, "Values">;
  route: RouteProp<MainParamList, "Values">;
}) => {
  const [gender, setGender] = useState("woman");
  const [_weight, setWeight] = useState(0);
  const [_height, setHeight] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const { navigate } = navigation;

  useEffect(() => {
    setGender(route.params?.genre);
  });

  function goToResult() {
    if (_weight === 0 || _height === 0) {
      setShowModal(true);
    } else {
      navigate("Result", { _height, _weight });
    }
  }

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
          value={_weight}
        />
        <View style={styles.imageView}>
          <Image
            style={{ height: 350 }}
            resizeMode="contain"
            source={gender === "woman" ? woman : man}
          />
        </View>
        <VerticalSlider
          min={145.0}
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
          value={_height}
        />
      </View>

      <GoToNext onPress={goToResult} />

      <Modal isVisible={showModal} closeModal={() => setShowModal(false)} />
    </View>
  );
};

export default Values;

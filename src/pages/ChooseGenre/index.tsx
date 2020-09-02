import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import SwitchSelector, {
  ISwitchSelectorOption,
} from "react-native-switch-selector";
import { useNavigation } from "@react-navigation/native";

import GoToNext from "../../components/Button";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    justifyContent: "center",
    alignItems: "center",
  },
  ellipseWoman: {
    width: 80,
    height: 80,
    borderRadius: 40,
    transform: [{ scaleX: 2 }],
    position: "absolute",

    backgroundColor: "rgba(255, 101, 132, 0.3)",

    bottom: -30,
    left: 0,
    right: 0,
    marginLeft: width - 135,
  },
  ellipseMan: {
    width: 80,
    height: 80,
    borderRadius: 40,
    transform: [{ scaleX: 2 }],
    position: "absolute",

    backgroundColor: "rgba(255, 101, 132, 0.3)",

    bottom: -30,
    left: 0,
    right: 0,
    marginLeft: width / 2 - 135,
  },
  image: { height: 320, width: width / 2 },
});

const ChooseGenre = () => {
  const options = [
    { label: "Female", value: "0" },
    { label: "Male", value: "1" },
  ];

  const [genre, setGenre] = useState<string | number | ISwitchSelectorOption>(
    0
  );

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={genre === "1" ? styles.ellipseWoman : styles.ellipseMan} />
        <ImageBackground
          source={require("../../../assets/woman_shape.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <ImageBackground
          source={require("../../../assets/man_shape.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <SwitchSelector
        style={{
          paddingTop: 80,
          width: 330,
          alignSelf: "center",
          marginBottom: 86,
        }}
        backgroundColor="#355C7D"
        textStyle={{ fontFamily: "UbuntuRegular" }}
        selectedColor="#fff"
        textColor="#fff"
        buttonColor="#FF7582"
        options={options}
        height={60}
        initial={0}
        fontSize={30}
        onPress={(value) => setGenre(value)}
      />
      <GoToNext onPress={() => navigate("Values")} />
    </View>
  );
};

export default ChooseGenre;

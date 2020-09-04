import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import GoToNext from "../../components/Button";
import { MainParamList } from "../../routes/MainParamList";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#355C7D",
  },
  title: {
    fontSize: 40,
    fontFamily: "UbuntuBold",
    marginLeft: 41,
    width: 180,
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "UbuntuRegular",
    lineHeight: 28,
    textAlign: "center",
    width: 340,
    marginTop: 32,
    color: "#fff",
  },
  viewLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    width,
    height: height - 400,
    marginVertical: 31,
  },
});

const InitialBoard = ({
  navigation,
}: {
  navigation: StackNavigationProp<MainParamList, "InitialBoard">;
}) => {
  const { navigate } = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={require("../../../assets/logo.png")} />
        <Text style={styles.title}>And ma Weight?</Text>
      </View>
      <Text style={styles.subtitle}>
        Your BMI Calculator, simple and on your hand!
      </Text>
      <ImageBackground
        source={require("../../../assets/initialBoard.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
      />
      <GoToNext onPress={() => navigate("ChooseGenre")} />
    </View>
  );
};

export default InitialBoard;

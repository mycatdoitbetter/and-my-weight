import React from "react";
import { View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#355C7D",
  },
});

const Values: React.FC = () => {
  return <View style={styles.container} />;
};

export default Values;

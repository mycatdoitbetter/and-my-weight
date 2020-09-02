import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  goNextButton: {
    position: "absolute",
    bottom: 21,

    height: 50,
    width: 50,
    borderRadius: 25,

    backgroundColor: "#FF7582",

    alignItems: "center",
    justifyContent: "center",
  },
  arrow: { color: "#355C7D" },
});

interface PropsButton {
  onPress: () => void;
}

const Button = ({ onPress }: PropsButton) => {
  return (
    <RectButton style={styles.goNextButton} onPress={onPress}>
      <Feather name="arrow-right" style={styles.arrow} size={30} />
    </RectButton>
  );
};

export default Button;

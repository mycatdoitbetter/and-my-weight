import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  goNextButton: {
    position: "absolute",
    bottom: 21,
    height: 65,
    width: 65,
    borderRadius: 32.5,
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
      <Feather name="arrow-right" style={styles.arrow} size={50} />
    </RectButton>
  );
};

export default Button;

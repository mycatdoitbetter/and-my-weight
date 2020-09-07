import React from "react";
import { StyleSheet, Text } from "react-native";
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
  text: { fontSize: 25, color: "#fff", fontFamily: "UbuntuRegular" },
});

interface PropsButton {
  onPress: () => void;
  last?: boolean;
}

const Button = ({ onPress, last }: PropsButton) => {
  return (
    <RectButton
      style={
        last
          ? { ...styles.goNextButton, width: 198, height: 45 }
          : styles.goNextButton
      }
      onPress={onPress}
    >
      {!last && (
        <Feather
          name={last ? "arrow-left" : "arrow-right"}
          style={styles.arrow}
          size={30}
        />
      )}
      {last && <Text style={styles.text}>Try again!</Text>}
    </RectButton>
  );
};

export default Button;

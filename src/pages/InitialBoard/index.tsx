import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const InitialBoard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default InitialBoard;

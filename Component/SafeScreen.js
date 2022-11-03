import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import React from "react";

const SafeScreen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

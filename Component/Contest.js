import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Contest = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50, resizeMode: "cover" }}
        source={{ uri: `${item.icon}` }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default Contest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  text: {
    padding: 10,
    fontSize: 15,
  },
});

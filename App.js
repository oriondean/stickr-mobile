import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});

export default () => (
  <View style={styles.container}>
    <Text>Hello World</Text>
  </View>
);

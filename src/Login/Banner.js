import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    color: "darkslateblue",
    textAlign: "center"
  },
  subheader: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
    textAlign: "center"
  }
});

export default () => (
  <View>
    <Text style={styles.header}>Stickr</Text>
    <Text style={styles.subheader}>connecting collectors</Text>
  </View>
);

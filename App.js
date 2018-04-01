import React from "react";
import { StyleSheet, Text, View } from "react-native";

// As a User i'd like to
// [STRETCH] Sets
// View my available sets
// Select a set
// Stickers
// View my groups
// Search my groups
// Filter my groups
// Friends
// View my friends
// Add a friend request
// Accept a friend request
// Delete a friend
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

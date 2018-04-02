import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10
  },
  id: {
    backgroundColor: "#1A237E",
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16
  },
  name: {
    fontSize: 16,
    flexGrow: 1,
    paddingLeft: 10
  },
  count: {
    fontSize: 16,
    backgroundColor: "#1A237E",
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10
  }
});

const SubsetItem = ({ id, name, count }) => (
  <View style={styles.container}>
    <Text style={styles.id}>{id}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.count}>{count}</Text>
  </View>
);

SubsetItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default SubsetItem;

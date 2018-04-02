import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    backgroundColor: "#1A237E",
    color: "#FFFFFF",
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF"
  }
});

const SubsetHeader = ({ name }) => (
  <View>
    <Text style={styles.header}>{name}</Text>
  </View>
);

SubsetHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default SubsetHeader;

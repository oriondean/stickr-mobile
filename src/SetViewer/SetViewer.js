import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  Text
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import SubsetHeader from "./SubsetHeader";
import SubsetItem from "./SubsetItem";
import fetch from "./api";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingMessage: {
    color: "grey",
    marginTop: 20
  },
  accordionContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight
  },
  setHeader: {
    fontSize: 24,
    marginBottom: 20
  }
});

export default class SetViewer extends Component {
  static renderSectionHeader(section) {
    return <SubsetHeader name={section.name} />;
  }

  static renderSectionContent(section) {
    return (
      <FlatList
        data={section.items}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <SubsetItem id={item.id} name={item.name} count={item.count} />
        )}
      />
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: "",
      subsets: []
    };

    fetch().then(sets =>
      this.setState({
        name: sets[0].name,
        subsets: sets[0].subsets,
        isLoading: false
      })
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingMessage}>Fetching your items...</Text>
        </View>
      );
    }

    return (
      <View style={styles.accordionContainer}>
        <Text style={styles.setHeader}>{this.state.name}</Text>
        <Accordion
          sections={this.state.subsets}
          renderHeader={SetViewer.renderSectionHeader}
          renderContent={SetViewer.renderSectionContent}
        />
      </View>
    );
  }
}

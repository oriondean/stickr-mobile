import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "./src/Login";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };

    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleLoginSuccess() {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <View style={styles.container}>
        {!isLoggedIn ? (
          <Login onLoginSuccess={this.handleLoginSuccess} />
        ) : (
          <Text>Hello World</Text>
        )}
      </View>
    );
  }
}

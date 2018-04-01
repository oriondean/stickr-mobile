import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import login from "./api";
import Banner from "./Banner";

const input = {
  height: 50,
  width: 300
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  username: input,
  password: { ...input, marginBottom: 30 },
  loginFailure: {
    color: "red",
    paddingBottom: 10
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggingIn: false,
      loginFailure: null
    };

    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  isSubmittable() {
    return (
      this.state.username && this.state.password && !this.state.isLoggingIn
    );
  }

  handlePasswordSubmit() {
    if (this.isSubmittable()) {
      this.handleLogin();
    }
  }

  handleLogin() {
    this.setState({ isLoggingIn: true, loginFailure: false });

    return login(this.state.username, this.state.password)
      .then(() => this.setState({ isLoggingIn: false }))
      .then(this.props.onLoginSuccess)
      .catch(error =>
        this.setState({ isLoggingIn: false, loginFailure: error.message })
      );
  }

  render() {
    const { isLoggingIn, loginFailure } = this.state;

    return (
      <View style={styles.container}>
        <Banner />
        <TextInput
          style={styles.username}
          placeholder="Username"
          autoCapitalize="none"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={this.handlePasswordSubmit}
          secureTextEntry
        />
        {loginFailure ? (
          <Text style={styles.loginFailure}>{loginFailure}</Text>
        ) : null}
        {isLoggingIn ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button
            color="darkslateblue"
            onPress={this.handleLogin}
            title="Login"
            disabled={!this.isSubmittable()}
          />
        )}
      </View>
    );
  }
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired
};

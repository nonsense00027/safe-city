import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Sign Up");
  };
  return (
    <View>
      <Text>Safe City</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.login__formButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.register__formButton}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login__formButton: {
    backgroundColor: "#8AC926",
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 25,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  register__formButton: {
    backgroundColor: "#8AC926",
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 25,
    marginHorizontal: 30,
  },
});

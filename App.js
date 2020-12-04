import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Register /> */}
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 25,
    // justifyContent: "center",
  },
});

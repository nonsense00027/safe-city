import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ text }) {
  return (
    <View>
      <Text style={styles.header}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    textAlign: "center",
    color: "#8AC926",
    marginBottom: 30,
  },
});

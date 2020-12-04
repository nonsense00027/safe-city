import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigator";
import Qr from "./Qr";

export default function Dashboard() {
  return (
    <View style={styles.dashboard}>
      <Qr />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
  },
  dashboard__content: {
    flex: 1,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Navigator() {
  return (
    <View style={styles.navigator}>
      <TouchableOpacity>
        <FontAwesome name="user" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="qrcode-scan" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="notifications" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8AC926",
    justifyContent: "space-around",
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
  },
  navigator__icon: {
    flex: 1,
  },
});

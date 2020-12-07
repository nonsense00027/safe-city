import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
export default function NotificationItem({ notification }) {
  return (
    <View style={styles.notificationItem}>
      <Entypo name="location-pin" size={28} color="white" />
      <Text style={styles.notificationItem__details}>
        {notification.details}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationItem: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#8AC926",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  notificationItem__details: {
    fontSize: 15,
    color: "#fff",
    paddingHorizontal: 8,
  },
});

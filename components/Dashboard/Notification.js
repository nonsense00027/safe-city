import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NotificationItem from "./NotificationItem";
import Navigator from "./Navigator";

export default function Notification() {
  const [notifications, setNotification] = useState([
    { details: "Your QR was scanned in Abreeza Mall, Bajada", id: 1 },
    { details: "Your QR was scanned in Rizal Park, Magallanes St.", id: 2 },
    { details: "Your QR was scanned in SM, Ecoland", id: 3 },
  ]);

  return (
    <View style={styles.notification}>
      <View style={styles.notification__heading}>
        <Text style={styles.notification__title}>Notifications</Text>
        <Text style={styles.notification__subTitle}>friday 16 may</Text>
      </View>
      <View style={styles.notification__list}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NotificationItem notification={item} />}
        />
      </View>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    flex: 1,
  },
  notification__heading: {
    alignItems: "center",
    paddingTop: 20,
  },
  notification__title: {
    fontSize: 24,
    fontWeight: "700",
  },
  notification__subTitle: {
    textTransform: "uppercase",
    fontSize: 15,
    marginBottom: 20,
    color: "#777",
  },
  notification__list: {
    flex: 1,
  },
});

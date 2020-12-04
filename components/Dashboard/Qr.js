import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { db } from "../../firebase/config";
import { collectIdsAndDocs } from "../../utilities";
import Navigator from "./Navigator";

export default function Qr() {
  const [user, setUser] = useState({});
  useEffect(() => {
    db.collection("users")
      .doc("Y67E6Sp3CfhP9DKMxhui")
      .onSnapshot((snapshot) => {
        setUser(collectIdsAndDocs(snapshot));
      });
  }, []);
  console.log(user);
  return (
    <View style={styles.qr}>
      <View style={styles.qr__information}>
        <Text style={styles.qr__informationName}>
          {user.firstname} {user?.lastname}
        </Text>
      </View>
      <View style={styles.qr__code}>
        <QRCode value={user.id} size={200} />
      </View>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  qr: {
    flex: 1,
  },
  qr__information: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#8AC926",
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  qr__informationName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  qr__code: {
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
});

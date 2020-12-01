import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { db } from "./firebase/config";
import { collectIdsAndDocs } from "./utilities";

export default function App() {
  const [reference, setReference] = useState(null);
  const [user, setUser] = useState([]);
  var svg;

  const svgToCanvas = () => {
    var clone = reference.cloneNode(true);
    console.log(clone);
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUser(snapshot.docs.map((doc) => collectIdsAndDocs(doc)));
    });
  }, []);
  console.log(user);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {user.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
      <QRCode value="Team Async lezzgo" size={300} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

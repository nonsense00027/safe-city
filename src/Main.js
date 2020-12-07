import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { auth, db } from "../firebase/config";
import { HomeRoutes } from "../routes/HomeRoutes";
import { collectIdsAndDocs } from "../utilities";
import { AuthContext } from "./AuthProvider";

export default function Main() {
  const { user, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection("users")
          .doc("09058754655")
          .get()
          .then((user) => {
            if (user.cP) {
              const authUser = collectIdsAndDocs(user);
              login(authUser);
            } else {
              console.log("no user");
            }
            setLoading(false);
          });
      } else {
        logout();
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }
  console.log("current user", user);
  return (
    <View style={styles.main}>
      {user ? <Text>you exist</Text> : <HomeRoutes />}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

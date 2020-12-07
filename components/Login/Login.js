import React, { useContext, useState } from "react";
import styles from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, db } from "../../firebase/config";
import { AuthContext } from "../../src/AuthProvider";
import { collectIdsAndDocs } from "../../utilities";
export default function Login() {
  const { login } = useContext(AuthContext);
  const [number, setNumber] = useState("");
  const handleLogin = () => {
    auth.signInAnonymously();
  };
  return (
    <View style={styles.login}>
      <View style={styles.login__form}>
        <TextInput
          style={styles.login__formTextInput}
          autoFocus
          onChangeText={(val) => setNumber(val)}
          value={number}
          placeholder="Phone number"
        />
      </View>
      <View style={styles.login__submit}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.login__formButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

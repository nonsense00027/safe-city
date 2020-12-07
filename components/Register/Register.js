import React, { useState } from "react";
import styles from "./styles";
import { Text, TextInput, View, Picker, TouchableOpacity } from "react-native";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [baranggay, setBaranggay] = useState("");

  return (
    <View style={styles.register}>
      <View style={styles.register__form}>
        <TextInput
          style={styles.register__formTextInput}
          autoFocus
          autoCapitalize="words"
          onChangeText={(val) => setFirstname(val)}
          value={firstname}
          placeholder="Firstname"
        />
        <TextInput
          style={styles.register__formTextInput}
          autoCapitalize="words"
          onChangeText={(val) => setMiddlename(val)}
          value={middlename}
          placeholder="Middlename"
        />
        <TextInput
          style={styles.register__formTextInput}
          autoCapitalize="words"
          onChangeText={(val) => setLastname(val)}
          value={lastname}
          placeholder="Lastname"
        />
        <Picker
          selectedValue={gender}
          mode="dropdown"
          style={{ marginBottom: 10 }}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Select gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        <TextInput
          style={styles.register__formTextInput}
          onChangeText={(val) => setNumber(val)}
          value={number}
          placeholder="Phone number"
        />
        <TextInput
          style={styles.register__formTextInput}
          autoCapitalize="words"
          onChangeText={(val) => setAddress(val)}
          value={address}
          placeholder="Address"
        />
        <Picker
          selectedValue={baranggay}
          mode="dropdown"
          style={{ marginBottom: 10 }}
          onValueChange={(itemValue, itemIndex) => setBaranggay(itemValue)}
        >
          <Picker.Item label="Select baranggay" value="" />
        </Picker>
      </View>
      <View style={styles.register__submit}>
        <TouchableOpacity>
          <Text style={styles.register__formButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  TouchableOpacity,
} from "react-native";
import Header from "../Header";

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
      <Header text="Sign Up" />
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
          onValueChange={(itemValue, itemIndex) => setBaranggay(itemValue)}
        >
          <Picker.Item label="Select baranggay" value="" />
        </Picker>
        <TouchableOpacity>
          <Text style={styles.register__formButton}>Continue</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.div}>
        <Text style={styles.title}>Sign Up</Text>
      </View> */}
      {/* <View style={styles.container}>
        <Text>Basic information</Text>
        <View style={styles.formgroup}>
          <TextInput
            autoFocus
            autoCapitalize="words"
            onChangeText={(val) => setFirstname(val)}
            value={firstname}
            placeholder="Firstname"
          />
        </View>
        <View style={styles.formgroup}>
          <TextInput
            autoCapitalize="words"
            onChangeText={(val) => setMiddlename(val)}
            value={middlename}
            placeholder="Middlename"
          />
        </View>
        <View style={styles.formgroup}>
          <TextInput
            autoCapitalize="words"
            onChangeText={(val) => setLastname(val)}
            value={lastname}
            placeholder="Lastname"
          />
        </View>
        <View style={styles.formgroup}>
          <Text>Birthdate</Text>
          <TextInput onChangeText={(val) => setDate(val)} value={date} />
          <Text>Gender</Text>
          <TextInput onChangeText={(val) => setGender(val)} value={gender} />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: "center",
  },
  register__form: {},
  register__formTextInput: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#F4F6F9",
    borderRadius: 7,
    marginBottom: 10,
  },
  register__formButton: {
    backgroundColor: "#8AC926",
    fontSize: 18,
    color: "#fff",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 25,
    marginHorizontal: 30,
    marginTop: 30,
  },
});

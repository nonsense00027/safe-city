import { StyleSheet } from "react-native";

export default StyleSheet.create({
  register: {
    flex: 1,
    paddingHorizontal: 20,
  },
  register__form: {
    flex: 1,
    justifyContent: "center",
  },
  register__formTextInput: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    // backgroundColor: "#F4F6F9",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
  },
  register__submit: {
    paddingBottom: 50,
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

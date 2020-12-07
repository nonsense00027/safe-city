import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home";
import Header from "../components/Header";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const Stack = createStackNavigator();

export const HomeRoutes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 32,
            color: "#8AC926",
          },
          headerTitleAlign: "center",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Sign Up" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

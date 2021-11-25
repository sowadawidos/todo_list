import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./components/Home/Home";
import { MainPage } from "./components/MainPage/MainPage";
import { colors } from "./assets/colors/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: colors.HEADER_NAV_COLOR,
            },
            headerShadowVisible: false
          }}
        />
        <Stack.Screen
          name="MainPage"
          options={{
            title: "Today",
            headerStyle: {
              backgroundColor: colors.HEADER_NAV_COLOR,
              borderWidth: 0,
            },
            headerShadowVisible: false,
          }}
          component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './components/Home'
import { MainPage } from "./components/MainPage";
import { DoneTasks } from "./components/DoneTasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen
                  name="Home"
                  component={Home}
              />
              <Stack.Screen name="MainPage" options={{ title: 'Today' }} component={MainPage} />
              <Stack.Screen name="DoneTasks" options={{ title: 'Done' }} component={DoneTasks} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}



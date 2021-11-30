import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Task } from "../Task/Task";
import { TaskInput } from "../TaskInput/TaskInput";

import { colors } from "../../theme";
import { fetchData } from "../../API";

export const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodoList = async () => {
    try {
      const response = await fetchData("get");

      if (!response.data) throw Error;

      setTasks(response.data);
      setIsLoading(false);
    } catch {
      Alert.alert("Something went wrong. Try again.", "", [
        { text: "Reload", onPress: () => fetchTodoList(), style: "cancel" },
        { text: "Cancel" },
      ]);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <View style={styles.mainPageBox}>
        <ScrollView style={styles.taskBox}>
          <ActivityIndicator
            style={styles.loader}
            size="large"
            animating={isLoading}
            color={colors.PLACEHOLDER_COLOR}
          />

          {tasks.length === 0 && !isLoading && <Text>No task today</Text>}

          {/* TODO: The use of FlatList component from React Native is missing */}
          {tasks.map((task, key) => (
            <Task
              key={key}
              index={key}
              task={task}
              fetchTodoList={fetchTodoList}
              setIsLoading={setIsLoading}
            />
          ))}

        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputBox}>
            <TaskInput
              data={tasks}
              fetchTodoList={fetchTodoList}
              setIsLoading={setIsLoading}
            />
          </View>
        </KeyboardAvoidingView>

      </View>
    </>
  );
};

//TODO: Put this in a separate file
const styles = StyleSheet.create({
  mainPageBox: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  taskBox: {
    padding: 15,
    flex: 1,
  },
  inputBox: {
    height: 200,
    padding: 15,
  },
  loader: {
    textAlign: "center",
    marginBottom: 5,
  },
});

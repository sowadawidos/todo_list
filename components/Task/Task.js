import React from "react";

import { View, Text, StyleSheet, Platform, Alert } from "react-native";

import {
  DeleteButton,
  DoneButton,
  DoneButtonText,
  DoneButtonTrue,
  TaskBox,
  TaskBoxDone,
} from "./styled";

import { fetchData } from "../../API";

import Icon from "react-native-vector-icons/FontAwesome5";

export const Task = ({ task, index, fetchTodoList, setIsLoading }) => {
  const handleTaskChange = async () => {
    setIsLoading(true);

    const body = {
      Id: index + 1,
      task: task.task,
      done: "true",
    };

    try {
      const response = await fetchData("put", body, `/${index}`);

      setIsLoading(true);

      if (!response.data) throw Error;

      fetchTodoList();
    } catch {
      Alert.alert("There is error updating your task.");
    }
  };

  const handleDeleteTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetchData("delete", null, `/${index}`);

      setIsLoading(true);

      if (!response.data) throw Error;

      fetchTodoList();
    } catch {
      Alert.alert("There is error deleting your task.");
    }
  };

  //TODO: Refactor this part, a lot of code is duplicated, try to find a better way of implementation
  if (task.done) {
    return (
      <>
        <TaskBoxDone>
          <View style={styles.taskTextBox}>
            <Text style={styles.taskText}>{task.task}</Text>
          </View>
          {task.done === "true" || task.done === "TRUE" ? (
            <DoneButtonTrue disabled>
              <DoneButtonText>
                <Icon name="check" size={15} color="black" />
              </DoneButtonText>
            </DoneButtonTrue>
          ) : (
            <DoneButton onPress={handleTaskChange} />
          )}
          <DeleteButton onPress={handleDeleteTask}>
            <DoneButtonText>
              <Icon name="trash" size={15} color="black" />
            </DoneButtonText>
          </DeleteButton>
        </TaskBoxDone>
      </>
    );
  } else {
    return (
      <>
        <TaskBox>
          <View style={styles.taskTextBox}>
            <Text style={styles.taskText}>{task.task}</Text>
          </View>
          {task.done ? (
            <DoneButton>
              <DoneButtonText>
                <Icon name="check" size={15} color="black" />
              </DoneButtonText>
            </DoneButton>
          ) : (
            <DoneButton onPress={handleTaskChange} />
          )}
          <DeleteButton onPress={handleDeleteTask}>
            <DoneButtonText>
              <Icon name="trash" size={15} color="black" />
            </DoneButtonText>
          </DeleteButton>
        </TaskBox>
      </>
    );
  }
};

const styles = StyleSheet.create({
  taskTextBox: {
    width: 270,
  },
  taskText: {
    fontWeight: Platform.OS === "android" ? "700" : "600",
  },
});

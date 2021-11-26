import React from "react";

import { View, Text, StyleSheet, Platform, Alert } from "react-native";

import axios from "axios";

import {
  DeleteButton,
  DoneButton,
  DoneButtonText,
  DoneButtonTrue,
  TaskBox,
  TaskBoxDone,
} from "./styled";

import { API } from "../../API";

import Icon from "react-native-vector-icons/FontAwesome5";

export const Task = ({ task, index, getTasks, setActivity }) => {
  const handleTaskChange = async () => {
    setActivity(true);
    try {
      const response = await axios.put(`${API}/${index}`, {
        Id: index + 1,
        task: task.task,
        done: "true",
      });

      if (!response.data) throw Error;

      getTasks();
    } catch {
      Alert.alert("There is error updating your task.");
    }
  };

  const handleDeleteTask = async () => {
    setActivity(true);
    try {
      const response = await axios.delete(`${API}/${index}`);

      if (!response.data) throw Error;

      getTasks();
    } catch {
      Alert.alert("There is error deleting your task.");
    }
  };

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

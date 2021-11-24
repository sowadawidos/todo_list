import React from "react";

import { View, Text, StyleSheet, Platform } from "react-native";

import axios from "axios";

import {
  DeleteButton,
  DoneButton,
  DoneButtonText,
  DoneButtonTrue,
  TaskBox,
  TaskBoxDone,
} from "./styled";

import Icon from "react-native-vector-icons/FontAwesome5";

export const Task = ({ task, tasks, index, setTasks }) => {
  const handleTaskChange = () => {
    const clonedTasks = [...tasks];
    clonedTasks[index].done = "true";
    axios
      .put(
        `https://sheet.best/api/sheets/43088ab0-8ed9-40f0-966e-d19ef3100b93/${index}`,
        {
          Id: index + 1,
          task: task.task,
          done: "true",
        }
      )
      .catch((err) => console.log(err));
    // console.log(clonedTasks)
    setTasks(clonedTasks);
  };

  const handleDeleteTask = () => {
    axios
      .delete(
        `https://sheet.best/api/sheets/43088ab0-8ed9-40f0-966e-d19ef3100b93/${index}`
      )
      .catch((err) => console.log(err));
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
    fontWeight: Platform.OS === "android" ? "600" : "normal",
  },
});
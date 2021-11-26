import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Task } from "../Task/Task";
import { TaskInput } from "../TaskInput/TaskInput";

import axios from "axios";

import { colors } from "../../theme";
import { API } from "../../API";

export const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [activity, setActivity] = useState(true);

  const axiosGet = async () => {
    try {
      const response = await axios.get(API);

      if (!response.data) throw Error;

      setTasks(response.data);
      setActivity(false);
    } catch {
      Alert.alert("Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    axiosGet();
  }, []);

  return (
    <>
      <View style={styles.mainPageBox}>
        <ScrollView style={styles.taskBox}>
          <ActivityIndicator
            style={styles.loader}
            size="large"
            animating={activity}
            color={colors.PLACEHOLDER_COLOR}
          />
          {tasks.length === 0 && !activity && <Text>No task today</Text>}

          {tasks.map((task, key) => (
            <Task
              key={key}
              index={key}
              task={task}
              getTasks={axiosGet}
              setActivity={setActivity}
            />
          ))}
        </ScrollView>
        <View style={styles.inputBox}>
          <TaskInput
            data={tasks}
            getTasks={axiosGet}
            setActivity={setActivity}
          />
        </View>
      </View>
    </>
  );
};

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
    height: 150,
    padding: 15,
  },
  loader: {
    textAlign: "center",
    marginBottom: 5,
  },
});

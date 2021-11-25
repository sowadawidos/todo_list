import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Task } from "../Task/Task";
import { TaskInput } from "../TaskInput/TaskInput";
import axios from "axios";
import { colors } from "../../assets/colors/theme";

export const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState(true);

  const axiosGet = async () => {
    await axios
      .get("https://sheet.best/api/sheets/bf2c2186-a6dd-41f2-8a59-1ebaa571015f")
      .then(({ data }) => setData(data))
      .then(() => setActivity(false))
      .catch((err) => console.log(err));
  };

  // const axiosPost = async () => {
  //   await axios
  //       .post('https://sheet.best/api/sheets/43088ab0-8ed9-40f0-966e-d19ef3100b93', tasks)
  // }

  useEffect(() => {
    axiosGet();
  }, [tasks]);

  console.log(tasks);
  return (
    <>
      <View style={styles.mainPageBox}>
        <ScrollView style={styles.taskBox}>
          <ActivityIndicator
            style={styles.loader}
            size="large"
            animating={activity}
            color={colors.BORDER_COLOR}
          />
          {data.length === 0 && !activity && <Text>No task today</Text>}

          {data.map((task, key) => (
            <Task
              key={key}
              index={key}
              task={task}
              tasks={data}
              setTasks={setTasks}
            />
          ))}
        </ScrollView>
        <View style={styles.inputBox}>
          <TaskInput setTasks={setTasks} data={data} />
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
  },
});

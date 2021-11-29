import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

import {
  InputHeader,
  InputBox,
  Input,
  InputButton,
  InputButtonText,
} from "./styled";

import { colors } from "../../theme";
import { fetchData } from "../../API";

export const TaskInput = ({ data, fetchTodoList, setIsLoading }) => {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    setIsLoading(true);

    if (!input.length)
      return fetchTodoList() && Alert.alert("Input cannot be empty");

    Keyboard.dismiss();

    const taskToPost = {
      Id: data.length,
      task: input,
      done: "false",
    };

    try {
      const response = await fetchData("post", taskToPost);

      setIsLoading(true);

      if (!response.data) throw Error;

      fetchTodoList();

      setInput("");
    } catch {
      Alert.alert("Something went wrong with adding your task. Try again.");
    }
  };

  return (
    <>
      <InputHeader>Create New Task</InputHeader>
      <InputBox>
        <Input
          placeholder="Task name"
          placeholderTextColor={colors.PLACEHOLDER_COLOR}
          onChangeText={(text) => setInput(text)}
          defaultValue={input}
        />
        <InputButton onPress={handleClick}>
          <InputButtonText>+</InputButtonText>
        </InputButton>
      </InputBox>
    </>
  );
};

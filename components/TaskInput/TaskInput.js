import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";

import {
  InputHeader,
  InputBox,
  Input,
  InputButton,
  InputButtonText,
} from "./styled";

//TODO: Try to configure the project to don't need to access all the things in this way
// and do instead something like import { colors } from "theme" or import { fetchData } from "API";
import { colors } from "../../theme";
import { fetchData } from "../../API";

export const TaskInput = ({ data, fetchTodoList, setIsLoading }) => {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    setIsLoading(true);

    if (!input.length) {
      Alert.alert("Input cannot be empty");
      return fetchTodoList()
    }

    Keyboard.dismiss();

    const taskToPost = {
      //TODO: Id should be id instead
      Id: data.length,
      task: input,
      //QUESTION: Why false is string and not a boolean value?
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

import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Keyboard, Alert } from "react-native";

import axios from "axios";

import {
  InputHeader,
  InputBox,
  Input,
  InputButton,
  InputButtonText,
} from "./styled";

import { colors } from "../../theme";
import { API } from "../../API";

export const TaskInput = ({ data, getTasks, setActivity }) => {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    setActivity(true);
    if (!input.length) return Alert.alert("Input cannot be empty");
    Keyboard.dismiss();

    try {
      const taskToPost = {
        Id: data.length,
        task: input,
        done: "false",
      };
      const response = await axios.post(API, taskToPost);

      if (!response.data) throw Error;

      getTasks();

      setInput("");
    } catch {
      Alert.alert("Something went wrong with adding your task. Try again.");
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
      </KeyboardAvoidingView>
    </>
  );
};

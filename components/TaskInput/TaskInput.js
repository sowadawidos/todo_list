import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";

import axios from "axios";

import {
  InputHeader,
  InputBox,
  Input,
  InputButton,
  InputButtonText,
} from "./styled";
import { colors } from "../../assets/colors/theme";

export const TaskInput = ({ setTasks, data }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input) {
      Keyboard.dismiss();
      if (data.length > 0) {
        const taskToPost = {
          Id: data.length,
          task: input,
          done: "false",
        };
        axios
          .post(
            "https://sheet.best/api/sheets/bf2c2186-a6dd-41f2-8a59-1ebaa571015f",
            taskToPost
          )
          .catch((err) => console.log(err));
        setInput("");
        // setTasks(prev => [...prev, taskToPost])
        // can I use this as a dependency to reload component is UseEffect instead of checking the state change Data??
      } else if (data.length === 0) {
        const taskToPost = {
          Id: 1,
          task: input,
          done: "false",
        };
        axios
          .post(
            "https://sheet.best/api/sheets/bf2c2186-a6dd-41f2-8a59-1ebaa571015f",
            taskToPost
          )
          .catch((err) => console.log(err));
        setInput("");
      }
    } else {
      alert("Input cannot be empty");
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

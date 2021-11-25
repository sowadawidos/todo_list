import styled from "styled-components/native";

import { colors } from "../../assets/colors/theme";

export const DoneButton = styled.TouchableOpacity({
  width: 30,
  height: 30,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.BORDER_COLOR,
  textAlign: "center",
  borderRadius: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const DoneButtonTrue = styled.TouchableOpacity({
  width: 30,
  height: 30,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.TASK_DONE_COLOR,
  backgroundColor: colors.TASK_DONE_COLOR,
  textAlign: "center",
  borderRadius: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const DoneButtonText = styled.Text({
  fontSize: 15,
});

export const TaskBox = styled.View({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.SECOND_BORDER_COLOR,
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
});

export const TaskBoxDone = styled.View({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.BORDER_COLOR,
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
});

export const DeleteButton = styled.TouchableOpacity({
  width: 30,
  height: 30,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.DELETE_BUTTON,
  backgroundColor: colors.DELETE_BUTTON,
  textAlign: "center",
  borderRadius: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

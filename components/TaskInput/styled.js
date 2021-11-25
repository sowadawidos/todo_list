import styled from "styled-components/native";

import { colors } from "../../assets/colors/theme";
import { Platform } from "react-native";

export const InputHeader = styled.Text({
  fontSize: Platform.OS === "android" ? 18 : 16,
  fontWeight: Platform.OS === "android" ? 700 : 600,
  marginBottom: 5,
});

export const InputBox = styled.View({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Input = styled.TextInput({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.BORDER_COLOR,
  height: 45,
  width: 300,
  borderRadius: 10,
  paddingLeft: 7,
});

export const InputButton = styled.TouchableOpacity({
  width: 40,
  height: 40,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.BORDER_COLOR,
  textAlign: "center",
  borderRadius: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
});

export const InputButtonText = styled.Text({
  fontSize: 25,
});

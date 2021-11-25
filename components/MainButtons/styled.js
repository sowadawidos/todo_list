import styled from "styled-components/native";
import { colors } from "../../assets/colors/theme";
import { Platform } from "react-native";

export const StyledButton = styled.TouchableOpacity({
  width: 250,
  height: 70,
  borderRadius: 10,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: colors.BORDER_COLOR,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  marginBottom: 45,
});

export const StyledTextButton = styled.Text({
  fontSize: 20,
  fontWeight: Platform.OS === "android" ? 700 : 500,
  textAlign: "center",
  textTransform: "uppercase",
});

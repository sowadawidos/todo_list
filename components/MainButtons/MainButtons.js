import React from "react";

import { StyledTextButton, StyledButton } from "./styled";

export const MainButtons = ({ navigation }) => {
  return (
    <>
      <StyledButton onPress={() => navigation.navigate("MainPage")}>
        <StyledTextButton>Today</StyledTextButton>
      </StyledButton>
    </>
  );
};

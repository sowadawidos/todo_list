import React from "react";

import { View, StyleSheet } from "react-native";

import { HeaderText } from "../HeaderText/HeaderText";
import { MainButtons } from "../MainButtons/MainButtons";

import { colors } from "../../assets/colors/theme";

export const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainBox}>
        <View style={styles.headerBox}>
          <HeaderText />
        </View>
        <View style={styles.mainButtonsBox}>
          <MainButtons navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  headerBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainButtonsBox: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

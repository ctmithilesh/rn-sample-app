import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const Navigation = ({ title }) => {
  return (
    <Appbar.Header style={navStyles}>
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

const navStyles = StyleSheet.create({
  backgroundColor: "#34495e",
});

export default Navigation;

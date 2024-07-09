import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const Navigation = ({ title, navigation, path }) => {
  return (
    <Appbar.Header style={navStyles}>
      <Appbar.Content title={title} />

      <Appbar.Action
        icon="plus"
        onPress={() => navigation.navigate({ name: path })}
      />
    </Appbar.Header>
  );
};

const navStyles = StyleSheet.create({
  backgroundColor: "#1abc9c",
});

export default Navigation;

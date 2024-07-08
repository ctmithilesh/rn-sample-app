import React from "react";
import { View, Text } from "react-native";
const Header = ({ firstName, lastName }) => {
  return (
    <View>
      <Text>
        Hello, {firstName}
        &nbsp;
        {lastName}
      </Text>
    </View>
  );
};

export default Header;

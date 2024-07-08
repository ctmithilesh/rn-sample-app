import React, { useState } from "react";
import OutLinedBtn from "../outlined-btn";
import { Divider, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  const _incrementCount = () => {
    setCount(count + 1);
  };

  const _decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <View style={counterStyles}>
      <Text>Count is {count}</Text>
      <OutLinedBtn
        icon="plus"
        mode="contained"
        onPress={() => _incrementCount()}
        style={counterStyles.btn}
      />
      <OutLinedBtn
        icon="minus"
        mode="contained"
        onPress={() => _decrementCount()}
        style={counterStyles.btn}
      />
    </View>
  );
};
export default Counter;

export const counterStyles = StyleSheet.create({
  padding: 16,
  margin: 16,
  btn: {
    margin: 16,
  },
});

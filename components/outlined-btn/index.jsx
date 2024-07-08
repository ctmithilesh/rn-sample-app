import React from "react";
import { Button } from "react-native-paper";

const OutLinedBtn = ({ icon, mode, onPress, style }) => {
  return (
    <Button icon={icon} mode={mode} onPress={onPress} style={style}></Button>
  );
};

export default OutLinedBtn;

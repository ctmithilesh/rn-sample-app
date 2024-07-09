import React from "react";
import Navigation from "../components/navigation";
import Counter from "../components/counter";

const CounterScreen = ({ navigation }) => {
  return (
    <>
      <Navigation title="Counter App" navigation={navigation} path={"home"} />
      <Counter />
    </>
  );
};

export default CounterScreen;

import React from "react";
import Navigation from "../components/navigation";
import Counter from "../components/counter";

const CounterScreen = () => {
  return (
    <>
      <Navigation title="Counter App" />
      <Counter />
    </>
  );
};

export default CounterScreen;

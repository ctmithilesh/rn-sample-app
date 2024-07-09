import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import DemoCard from "../components/demo-card";
import { fetchProductData } from "../utils/apis/fetchProductData";
import Navigation from "../components/navigation";
const ProductScreen = ({ navigation }) => {
  // lifecycle
  // gets triggered whenever component renders

  // reactive data
  const [data, setData] = useState(null);
  const dataCondition = data != null && data.length > 0;

  useEffect(() => {
    _fetchData();
  }, [dataCondition]);

  const _fetchData = async () => {
    const result = await fetchProductData();
    setData(result);
  };

  return (
    <>
      <Navigation title={"Products"} navigation={navigation} path="counter" />
      <ScrollView>
        <DemoCard data={data} />
      </ScrollView>
    </>
  );
};

export default ProductScreen;

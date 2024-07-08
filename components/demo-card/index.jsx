import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import Spinner from "../activity-indicator";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const DemoCard = ({ data }) => {
  console.log("data", data);
  
  const dataCondition = data != null && data.length;
  return (
    <>
      {dataCondition ? (
        data.map((item, index) => (
          <Card style={cardStyles} key={index}>
            <Card.Content>
              <Text variant="titleLarge">{item?.title}</Text>
              <Text variant="bodyMedium">{item?.description} </Text>
            </Card.Content>
            <Card.Cover source={{ uri: item?.image }} />
          </Card>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor: "#ecf0f1",
  padding: 16,
  margin: 16,
});

export default DemoCard;

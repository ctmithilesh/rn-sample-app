import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Welcome to App </Text>
          <Text variant="bodyMedium">Click ok to Continue</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button onPress={() => navigation.navigate("home")}>Ok</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

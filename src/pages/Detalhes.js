import { View, Text } from "react-native";
import React from "react";

export default function Detalhes({ navigation, route }) {
  return (
    <View>
      <Text>Detalhes</Text>
      <Text>{route.params.itemId}</Text>
    </View>
  );
}

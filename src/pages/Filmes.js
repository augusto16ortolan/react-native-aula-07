import { View, Text, Button } from "react-native";
import React from "react";

export default function Filmes({ navigation }) {
  function handle() {
    navigation.navigate("teste", { itemId: 1 });
  }

  return (
    <View>
      <Text>Filmes udhahuygdfgdshfg</Text>
      <Button title="Detalhes" onPress={() => handle()} />
    </View>
  );
}

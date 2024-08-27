import { View, Text, Image, Button } from "react-native";
import React from "react";

export default function Detalhes({ navigation, route }) {
  const { movie } = route.params;
  return (
    <View>
      <Image source={{ uri: movie.poster }} height={160} width={120} />
      <Text>{movie.title}</Text>
      <Text>{movie.year}</Text>
      <Text>{movie.description}</Text>
      <Button title="Voltar" />
    </View>
  );
}

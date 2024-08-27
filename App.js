import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MovieList from "./src/components/MovieList";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filmes from "./src/pages/Filmes";
import Detalhes from "./src/pages/Detalhes";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Filmes} name={"Filmes"} />
        <Stack.Screen component={Detalhes} name={"teste"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

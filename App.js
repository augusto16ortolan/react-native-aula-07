import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import MovieList from "./src/components/MovieList";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filmes from "./src/pages/Filmes";
import Detalhes from "./src/pages/Detalhes";
import Teste from "./src/pages/Teste";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Filmes}
          name={"Filmes"}
          options={{
            headerTitle: "Meus filmes",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen component={Detalhes} name={"Detalhes"} />
        <Stack.Screen component={Teste} name={"Teste"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

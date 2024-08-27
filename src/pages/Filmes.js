import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MovieList from "../components/MovieList";

export default function Filmes({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MovieList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#f5f5f5",
  },
});

import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import MovieItem from "./MovieItem";
import MovieModal from "./MovieModal";
import { movies } from "../../movies";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  const handlePress = (movie) => {
    setSelectedMovie(movie);
    setModalVisivel(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setModalVisivel(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Meus filmes</Text>
          </View>
        }
        data={movies}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieItem
            title={item.title}
            year={item.year}
            poster={item.poster}
            onPress={() => handlePress(item)}
          />
        )}
      />
      {modalVisivel && (
        <MovieModal
          visible={modalVisivel}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  listHeader: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 10,
  },
  listHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default MovieList;

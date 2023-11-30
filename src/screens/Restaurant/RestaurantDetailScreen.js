

// RestaurantDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const RestaurantDetailScreen = ({ route, navigation }) => {
  // Extract the restaurant object from the navigation params
  const { restaurant } = route.params;

  // Dummy ratings for demonstration purposes
  const ratings = [4.5, 4.8, 3.9, 4.2, 4.0];

  // Calculate the average rating
  const averageRating =
    ratings.reduce((total, rating) => total + rating, 0) / ratings.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.location}>Location: {restaurant.location}</Text>
      <Text style={styles.popularity}>Average Rating: {averageRating.toFixed(1)}</Text>

      {/* Additional UI elements such as ratings, reviews, and other details can be displayed here */}

      {/* Button to navigate to the restaurant's menu */}
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('RestaurantMenu', { restaurant })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 8,
  },
  popularity: {
    fontSize: 16,
    color: 'green', // Adjust color based on popularity or use a different indicator
    marginBottom: 16,
  },
});

export default RestaurantDetailScreen;

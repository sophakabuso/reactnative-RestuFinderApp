import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RestaurantDiscoveryScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the restaurant data when the component mounts
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    // Replace with your actual API endpoint
    const response = await fetch('https://api.example.com/restaurants');
    const data = await response.json();

    // Calculate popularity scores based on average ratings, number of reviews, etc.
    const restaurantsWithPopularity = calculatePopularity(data);

    // Update the state with the enhanced restaurant data
    setRestaurants(restaurantsWithPopularity);
  };

  const calculatePopularity = (restaurants) => {
    // Implement your popularity score calculation logic here
    // This could involve factors such as average ratings, number of reviews, etc.
    // Update each restaurant object with a 'popularity' property

    // For illustration purposes, let's assume a simple popularity score based on average ratings
    return restaurants.map((restaurant) => ({
      ...restaurant,
      popularity: calculateAverageRating(restaurant.ratings),
    }));
  };

  const calculateAverageRating = (ratings) => {
    // Implement your logic to calculate average rating
    if (ratings.length === 0) {
      return 0; // Default value if there are no ratings
    }

    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return sum / ratings.length;
  };

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.popularity}>Popularity: {item.popularity}</Text>
      {/* Additional UI elements such as ratings, reviews, and other details can be displayed here */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  popularity: {
    fontSize: 16,
    color: 'green', // Adjust color based on popularity or use a different indicator
  },
});

export default RestaurantDiscoveryScreen;

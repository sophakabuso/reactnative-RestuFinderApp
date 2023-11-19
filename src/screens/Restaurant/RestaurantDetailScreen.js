

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantDetailScreen = ({ route }) => {
    // Assuming that the restaurant object is passed as a route param
    const { restaurant } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: restaurant.image_url }} style={styles.image} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text style={styles.address}>{restaurant.address}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
    address: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default RestaurantDetailScreen;
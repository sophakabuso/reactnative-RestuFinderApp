import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FeaturedRestaurantCard = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.description}>{restaurant.description}</Text>
                <Text style={styles.address}>{restaurant.address}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 4,
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        marginBottom: 4,
    },
    address: {
        fontSize: 12,
        color: '#888',
    },
});

export default FeaturedRestaurantCard;

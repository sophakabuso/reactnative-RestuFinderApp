import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantCard = ({ restaurant }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
                <Text style={styles.address}>{restaurant.address}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cuisine: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    address: {
        fontSize: 12,
        color: '#888',
    },
});

export default RestaurantCard;

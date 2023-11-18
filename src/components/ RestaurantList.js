
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RestaurantList = () => {
    const restaurantData = [
        { id: '1', name: 'Restaurant 1' },
        { id: '2', name: 'Restaurant 2' },
        { id: '3', name: 'Restaurant 3' },
        // Add more restaurants here
    ];

    const renderRestaurant = ({ item }) => {
        return (
            <View style={styles.restaurantItem}>
                <Text style={styles.restaurantName}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurant List</Text>
            <FlatList
                data={restaurantData}
                renderItem={renderRestaurant}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    restaurantItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    restaurantName: {
        fontSize: 16,
    },
});

export default RestaurantList;

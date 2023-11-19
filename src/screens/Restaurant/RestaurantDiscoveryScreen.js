import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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

        setRestaurants(data);
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title} onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}>
                {item.name}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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
        fontSize: 32,
    },
});

export default RestaurantDiscoveryScreen;
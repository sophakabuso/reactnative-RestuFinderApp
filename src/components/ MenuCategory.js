import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MenuCategory = ({ title, items }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = {
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        marginBottom: 5,
    },
};

export default MenuCategory;

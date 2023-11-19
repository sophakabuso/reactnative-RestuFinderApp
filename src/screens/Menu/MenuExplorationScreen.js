// MenuScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuExplorationScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu Exploration Screen</Text>
            {/* Add your menu exploration UI components here */}
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
});

export default MenuExplorationScreen;

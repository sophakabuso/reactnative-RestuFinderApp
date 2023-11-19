import React from 'react';
import { View, Text } from 'react-native';

const ConfirmationScreen = ({ reservation }) => {
    return (
        <View>
            <Text style={styles.title}>Reservation Confirmation</Text>
            <Text style={styles.label}>Restaurant: {reservation.restaurantName}</Text>
            <Text style={styles.label}>Date: {reservation.date}</Text>
            <Text style={styles.label}>Time: {reservation.time}</Text>
            <Text style={styles.label}>Party Size: {reservation.partySize}</Text>
            <Text style={styles.label}>Contact Name: {reservation.contactName}</Text>
            <Text style={styles.label}>Contact Email: {reservation.contactEmail}</Text>
            <Text style={styles.label}>Contact Phone: {reservation.contactPhone}</Text>
        </View>
    );
};

const styles = {
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
};

export default ConfirmationScreen;

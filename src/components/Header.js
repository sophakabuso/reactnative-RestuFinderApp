
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import * as Battery from 'expo-battery';

const Header = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [wifi, setWifi] = useState(null);
    const [network, setNetwork] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        const fetchBatteryLevel = async () => {
            try {
                const batteryLevel = await Battery.getBatteryLevelAsync();
                setBatteryLevel(batteryLevel);
            } catch (error) {
                console.error('Failed to fetch battery level:', error);
            }
        };

        fetchBatteryLevel();

        NetInfo.fetch().then(state => {
            setWifi(state.type === 'wifi');
            setNetwork(state.type);
        });

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
            <Text style={styles.text}>{`Battery: ${Math.floor(batteryLevel * 100)}%`}</Text>
            <Text style={styles.text}>{`Wifi: ${wifi ? 'On' : 'Off'}`}</Text>
            <Text style={styles.text}>{`Network: ${network}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;
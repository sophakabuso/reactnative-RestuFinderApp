
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getBatteryLevelAsync, isAvailableAsync } from 'expo-battery';

const Header = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [wifi, setWifi] = useState(null);
    const [network, setNetwork] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setTime(formattedTime);
        }, 1000);

        const fetchBatteryLevel = async () => {
            try {
                if (await isAvailableAsync()) {
                    const level = await getBatteryLevelAsync();
                    setBatteryLevel(level);
                } else {
                    console.warn('Battery module is not available.');
                }
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
            <Text style={styles.time}>{time}</Text>
            <View style={styles.iconContainer}>
                <View style={styles.iconBattery}>
                    <Icon name="battery" size={12} color="#900" />
                </View>
                <View style={styles.iconWifi}>
                    <Icon name="wifi" size={12} color="#900" />
                </View>
                <View style={styles.iconSignalBars}>
                    <Icon name="signal-bars" size={12} color="#900" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBattery: {
        marginRight: 10,
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
    },
    iconWifi: {
        marginRight: 10,
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
        color: '#FFF',
    },
    iconSignalBars: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
        color: '#FFF',
    },
    time: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '900',
        lineHeight: 18,
        letterSpacing: -0.165,
        marginLeft: 5,
    },
});

export default Header;

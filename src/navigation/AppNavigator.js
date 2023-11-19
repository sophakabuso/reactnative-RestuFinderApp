// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import MenuScreen from '../screens/MenuScreen';
import ReservationScreen from '../screens/ReservationScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Reservation" component={ReservationScreen} />
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
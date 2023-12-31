import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import RestaurantDiscoveryScreen from '../screens/Restaurant/RestaurantDiscoveryScreen';
import RestaurantDetailScreen from '../screens/Restaurant/RestaurantDetailScreen';
import MenuScreen from '../screens/Menu/MenuExplorationScreen';
import ReservationScreen from '../screens/Reservation/ReservationScreen';
import ConfirmationScreen from '../screens/Reservation/ConfirmationScreen';
import UserHistoryScreen from '../screens/User/UserHistoryScreen';
import ProfileScreen from '../screens/User/ProfileSettingsScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import OTPVerification from '../screens/Auth/OTPVerification';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Detail"
      screenOptions={{ headerShown: false }}a
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          // Define your custom header here
          header: ({ navigation }) => {
            // Customize your header component
            return (
              // Your custom header JSX goes here
              // You can include HeaderBackButton, Text, Image, etc.
              // Example:
              <View>
                <Text>Custom Header</Text>
                <HeaderBackButton
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="Discovery" component={RestaurantDiscoveryScreen}/>
      <Stack.Screen name="Detail" component={RestaurantDetailScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="UserHistory" component={UserHistoryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

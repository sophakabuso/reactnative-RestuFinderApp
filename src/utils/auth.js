// Import necessary dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to check if the user is authenticated
export const isAuthenticated = async () => {
    try {
        // Check if the user token exists in AsyncStorage
        const token = await AsyncStorage.getItem('token');
        return !!token; // Return true if token exists, false otherwise
    } catch (error) {
        console.error('Error checking authentication:', error);
        return false; // Return false in case of any error
    }
};

// Function to authenticate the user
export const authenticateUser = async (username, password) => {
    try {
        // Perform authentication logic here (e.g., API call to validate credentials)
        // Assuming successful authentication, store the token in AsyncStorage
        await AsyncStorage.setItem('token', 'your_auth_token_here');
        return true; // Return true to indicate successful authentication
    } catch (error) {
        console.error('Error authenticating user:', error);
        return false; // Return false in case of any error
    }
};

// Function to log out the user
export const logoutUser = async () => {
    try {
        // Clear the user token from AsyncStorage
        await AsyncStorage.removeItem('token');
        return true; // Return true to indicate successful logout
    } catch (error) {
        console.error('Error logging out user:', error);
        return false; // Return false in case of any error
    }
};

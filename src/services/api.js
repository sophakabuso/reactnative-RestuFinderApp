// Import necessary modules
import axios from 'axios';

// Define the base URL for the API
const BASE_URL = 'https://api.example.com';

// Create an instance of axios with the base URL
const api = axios.create({
    baseURL: BASE_URL,
});

// Define API endpoints
const endpoints = {
    // Example endpoint for getting restaurants
    getRestaurants: '/restaurants',
    // Example endpoint for getting reviews
    getReviews: '/reviews',
};

// Define API functions
const apiService = {
    // Function to get restaurants
    getRestaurants: async () => {
        try {
            const response = await api.get(endpoints.getRestaurants);
            return response.data;
        } catch (error) {
            console.error('Error getting restaurants:', error);
            throw error;
        }
    },

    // Function to get reviews
    getReviews: async () => {
        try {
            const response = await api.get(endpoints.getReviews);
            return response.data;
        } catch (error) {
            console.error('Error getting reviews:', error);
            throw error;
        }
    },
};

// Export the API service
export default apiService;

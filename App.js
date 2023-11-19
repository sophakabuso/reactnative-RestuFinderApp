// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store/store';

import AppNavigator from './src/navigation/AppNavigator'; // import AppNavigator

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavigator /> {/* use AppNavigator */}
            </NavigationContainer>
        </Provider>
    );
};

export default App;